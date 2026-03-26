import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
let chromium;
let devices;

try {
  ({ chromium, devices } = require("playwright"));
} catch (firstError) {
  try {
    ({ chromium, devices } = require("./.qa/node_modules/playwright"));
  } catch {
    throw new Error(
      "Playwright dependency not found. Run `npx playwright install chromium` and install package `playwright` before executing cms/verify-release.mjs."
    );
  }
}

const BASE_URL = "http://127.0.0.1:8080";
const DEMO_URL = "https://llmfirewall.louyu.tech/playground";
const ARTIFACT_DIR = path.resolve("cms", "release-artifacts");

function nowIso() {
  return new Date().toISOString();
}

async function checkHomeDesktop(browser) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  await page.goto(`${BASE_URL}/index.html`, { waitUntil: "networkidle" });
  await page.waitForSelector("#products-grid");

  const hasVisualSection = (await page.$("#visuals")) !== null;
  const productCardCount = await page.$$eval("#products-grid .card", (nodes) => nodes.length);
  const previewCount = await page.$$eval("#products-grid .product-preview", (nodes) => nodes.length);
  const interactiveCount = await page.evaluate(() => {
    const nodes = Array.from(document.querySelectorAll("a,button,input,select,textarea"));
    return nodes.filter((el) => {
      if (el.disabled) return false;
      const style = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
    }).length;
  });

  await page.click("body", { position: { x: 16, y: 16 } });
  await page.keyboard.press("Tab");
  await page.waitForTimeout(120);
  const focusAfterTab = await page.evaluate(() => {
    const active = document.activeElement;
    return {
      tag: active?.tagName || "",
      id: active?.id || "",
      className: active?.className || ""
    };
  });

  await page.click('.locale-button[data-locale="en"]');
  await page.waitForTimeout(300);
  const htmlLangEn = await page.getAttribute("html", "lang");
  const navProductsEn = (await page.textContent("#nav-products"))?.trim() || "";

  await page.click('.locale-button[data-locale="zh"]');
  await page.waitForTimeout(300);
  const htmlLangZh = await page.getAttribute("html", "lang");

  await page.fill("#input-company", "Release QA Co");
  await page.click("#submit-button");
  await page.waitForTimeout(200);
  const statusMissing = (await page.textContent("#form-status"))?.trim() || "";
  const missingState = await page.getAttribute("#form-status", "data-state");

  await page.fill("#input-name", "QA User");
  await page.fill("#input-email", "bad-email");
  await page.selectOption("#select-interest", "llm-firewall");
  await page.fill("#input-message", "Release validation");
  await page.check('input[name="consent"]');
  await page.click("#submit-button");
  await page.waitForTimeout(200);
  const statusInvalid = (await page.textContent("#form-status"))?.trim() || "";
  const invalidState = await page.getAttribute("#form-status", "data-state");

  await page.screenshot({
    path: path.join(ARTIFACT_DIR, "home-desktop.png"),
    fullPage: true
  });

  await context.close();

  return {
    hasVisualSection,
    productCardCount,
    previewCount,
    interactiveCount,
    focusAfterTab,
    htmlLangEn,
    navProductsEn,
    htmlLangZh,
    statusMissing,
    missingState,
    statusInvalid,
    invalidState
  };
}

async function checkHomeMobile(browser) {
  const iphone = devices["iPhone 12"];
  const context = await browser.newContext({
    ...iphone
  });
  const page = await context.newPage();
  await page.goto(`${BASE_URL}/index.html`, { waitUntil: "networkidle" });
  await page.waitForSelector("#products-grid");

  const viewportWidth = page.viewportSize()?.width || 390;
  const horizontalOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth - window.innerWidth;
  });
  const navDisplay = await page.$eval(".site-nav", (node) => window.getComputedStyle(node).display);
  const hasHeaderActions = (await page.$(".header-actions")) !== null;
  const hasProductPreview = (await page.$(".product-preview")) !== null;

  await page.screenshot({
    path: path.join(ARTIFACT_DIR, "home-mobile.png"),
    fullPage: true
  });

  await context.close();

  return {
    viewportWidth,
    horizontalOverflow,
    navDisplay,
    hasHeaderActions,
    hasProductPreview
  };
}

async function checkProductPage(browser) {
  const context = await browser.newContext({
    viewport: { width: 1366, height: 900 }
  });
  const page = await context.newPage();
  await page.goto(`${BASE_URL}/product.html?product=llm-firewall&lang=zh`, {
    waitUntil: "networkidle"
  });
  await page.waitForSelector("#product-hero");

  const liveDemoHref = await page.getAttribute('a.button.button-outline[href*="llmfirewall.louyu.tech"]', "href");
  const hasDemoSourceLink = await page.$$eval("#source-list a", (nodes, demoUrl) => {
    return nodes.some((node) => node.getAttribute("href") === demoUrl);
  }, DEMO_URL);

  await page.screenshot({
    path: path.join(ARTIFACT_DIR, "product-firewall.png"),
    fullPage: true
  });

  await context.close();

  return {
    liveDemoHref,
    hasDemoSourceLink
  };
}

async function run() {
  await fs.mkdir(ARTIFACT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const report = {
    generated_at: nowIso(),
    base_url: BASE_URL,
    demo_url: DEMO_URL,
    checks: {}
  };

  try {
    report.checks.home_desktop = await checkHomeDesktop(browser);
    report.checks.home_mobile = await checkHomeMobile(browser);
    report.checks.product_firewall = await checkProductPage(browser);
  } finally {
    await browser.close();
  }

  const summary = {
    pass: true,
    reasons: []
  };

  if (report.checks.home_desktop.hasVisualSection) {
    summary.pass = false;
    summary.reasons.push("Duplicate visuals section still exists (#visuals).");
  }
  if (report.checks.home_desktop.productCardCount !== 3) {
    summary.pass = false;
    summary.reasons.push("Expected 3 product cards on homepage.");
  }
  if (report.checks.home_desktop.previewCount !== 3) {
    summary.pass = false;
    summary.reasons.push("Expected 3 product preview cards on homepage.");
  }
  if (typeof report.checks.home_desktop.interactiveCount !== "number" || report.checks.home_desktop.interactiveCount < 8) {
    summary.pass = false;
    summary.reasons.push("Interactive elements on homepage are unexpectedly low.");
  }
  if (!["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA"].includes(report.checks.home_desktop.focusAfterTab.tag)) {
    summary.pass = false;
    summary.reasons.push("Tab key did not move focus to an interactive element.");
  }
  if (report.checks.home_desktop.htmlLangEn !== "en") {
    summary.pass = false;
    summary.reasons.push("Language switch to EN did not update html lang.");
  }
  if (report.checks.home_desktop.htmlLangZh !== "zh-CN") {
    summary.pass = false;
    summary.reasons.push("Language switch back to ZH did not update html lang.");
  }
  if (report.checks.home_desktop.missingState !== "error" || !report.checks.home_desktop.statusMissing) {
    summary.pass = false;
    summary.reasons.push("Missing-field form validation did not trigger.");
  }
  if (report.checks.home_desktop.invalidState !== "error" || !report.checks.home_desktop.statusInvalid) {
    summary.pass = false;
    summary.reasons.push("Invalid-email form validation did not trigger.");
  }
  if (report.checks.home_mobile.horizontalOverflow > 2) {
    summary.pass = false;
    summary.reasons.push("Mobile layout has horizontal overflow.");
  }
  if (report.checks.home_mobile.navDisplay !== "none") {
    summary.pass = false;
    summary.reasons.push("Mobile navigation should be collapsed.");
  }
  if (report.checks.product_firewall.liveDemoHref !== DEMO_URL) {
    summary.pass = false;
    summary.reasons.push("Firewall live demo button link mismatch.");
  }
  if (!report.checks.product_firewall.hasDemoSourceLink) {
    summary.pass = false;
    summary.reasons.push("Firewall source list missing demo link.");
  }

  report.summary = summary;

  const outputPath = path.join(ARTIFACT_DIR, "verification.json");
  await fs.writeFile(outputPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  console.log(JSON.stringify(report, null, 2));
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
