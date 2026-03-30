(function () {
  const site = window.SITE_CONTENT;
  const { supportedLocales, defaultLocale, localeStorageKey } = site.settings;
  let locale = getInitialLocale();

  function getInitialLocale() {
    const url = new URL(window.location.href);
    const fromQuery = url.searchParams.get("lang");
    if (supportedLocales.includes(fromQuery)) {
      return fromQuery;
    }
    const saved = window.localStorage.getItem(localeStorageKey);
    if (supportedLocales.includes(saved)) {
      return saved;
    }
    return defaultLocale;
  }

  function getCopy() {
    return site.locales[locale];
  }

  function setText(id, value) {
    const node = document.getElementById(id);
    if (node) {
      node.textContent = value;
    }
  }

  function setPlaceholder(id, value) {
    const node = document.getElementById(id);
    if (node) {
      node.placeholder = value;
    }
  }

  function clearAndRender(id, items, renderItem) {
    const target = document.getElementById(id);
    if (!target) {
      return;
    }
    target.innerHTML = "";
    items.forEach((item, index) => target.appendChild(renderItem(item, index)));
  }

  function card(className, html) {
    const article = document.createElement("article");
    article.className = className;
    article.innerHTML = html;
    return article;
  }

  function setLocale(nextLocale) {
    if (!supportedLocales.includes(nextLocale)) {
      return;
    }
    locale = nextLocale;
    window.localStorage.setItem(localeStorageKey, locale);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", locale);
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);

    renderPage();
    updateLocaleButtons();
  }

  function updateLocaleButtons() {
    document.querySelectorAll(".locale-button").forEach((button) => {
      const active = button.dataset.locale === locale;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function bindLocaleSwitch() {
    document.querySelectorAll(".locale-button").forEach((button) => {
      button.addEventListener("click", () => setLocale(button.dataset.locale));
    });
  }

  function productHref(productId) {
    return `./product.html?product=${encodeURIComponent(productId)}&lang=${encodeURIComponent(locale)}`;
  }

  function renderMeta(copy) {
    document.title = copy.meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", copy.meta.description);
    }
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }

  function renderHeader(copy) {
    setText("brand-subtitle", copy.brand.subtitle);
    setText("nav-products", copy.nav.products);
    setText("nav-workflow", copy.nav.workflow);
    setText("nav-proof", copy.nav.proof);
    setText("nav-contact", copy.nav.contact);
    setText("header-cta", copy.nav.demo);
  }

  function renderHero(copy) {
    setText("hero-eyebrow", copy.hero.eyebrow);
    setText("hero-title", copy.hero.title);
    setText("hero-subtitle", copy.hero.subtitle);
    setText("hero-primary", copy.hero.primaryCta);
    setText("hero-secondary", copy.hero.secondaryCta);
    setText("signal-board-eyebrow", copy.signalBoard.eyebrow);
    setText("signal-board-title", copy.signalBoard.title);

    clearAndRender("hero-tags", copy.hero.tags, (tag) => {
      const item = document.createElement("li");
      item.textContent = tag;
      return item;
    });

    renderHeroDiagram(copy);

    clearAndRender("hero-signals", copy.signalBoard.cards, (signal) =>
      card("signal-card", `<strong>${signal.title}</strong><p>${signal.detail}</p>`)
    );
  }

  function renderHeroDiagram(copy) {
    if (!copy.heroDiagram) {
      return;
    }

    setText("diagram-core-label", copy.heroDiagram.coreLabel);
    setText("diagram-core-title", copy.heroDiagram.coreTitle);
    setText("diagram-core-detail", copy.heroDiagram.coreDetail);
    setText("diagram-flow", copy.heroDiagram.flow);

    clearAndRender("diagram-modules", copy.heroDiagram.modules, (item) =>
      card(
        "diagram-module",
        `<strong>${item.title}</strong>
         <p>${item.detail}</p>
         <span>${item.metric}</span>`
      )
    );
  }

  function renderSectionHeadings(copy) {
    setText("products-eyebrow", copy.sections.products.eyebrow);
    setText("products-title", copy.sections.products.title);
    setText("products-description", copy.sections.products.description);

    setText("quickstart-eyebrow", copy.sections.quickstart.eyebrow);
    setText("quickstart-title", copy.sections.quickstart.title);
    setText("quickstart-description", copy.sections.quickstart.description);

    setText("workflow-eyebrow", copy.sections.workflow.eyebrow);
    setText("workflow-title", copy.sections.workflow.title);
    setText("workflow-description", copy.sections.workflow.description);

    setText("scenarios-eyebrow", copy.sections.scenarios.eyebrow);
    setText("scenarios-title", copy.sections.scenarios.title);
    setText("scenarios-description", copy.sections.scenarios.description);

    setText("proof-eyebrow", copy.sections.proof.eyebrow);
    setText("proof-title", copy.sections.proof.title);

    setText("cta-eyebrow", copy.sections.cta.eyebrow);
    setText("cta-title", copy.sections.cta.title);
    setText("cta-description", copy.sections.cta.description);
    setText("cta-button", copy.sections.cta.button);

    setText("contact-eyebrow", copy.sections.contact.eyebrow);
    setText("contact-title", copy.sections.contact.title);
    setText("contact-description", copy.sections.contact.description);
  }

  function renderMetrics(copy) {
    clearAndRender("metrics-strip", copy.metrics, (metric) =>
      card(
        "metric-card",
        `<span class="metric-value">${metric.value}</span>
         <p class="metric-label">${metric.label}</p>
         <p>${metric.detail}</p>
         <span class="metric-source">${metric.source}</span>`
      )
    );
  }

  function previewThemeClass(productId) {
    if (productId === "llm-firewall") {
      return "is-firewall";
    }
    if (productId === "gendetector") {
      return "is-gendetector";
    }
    if (productId === "evaluation-gate") {
      return "is-gate";
    }
    return "";
  }

  function buildProductVisualMarkup(product) {
    const preview = product.cardPreview;
    if (!preview || !Array.isArray(preview.rows) || preview.rows.length === 0) {
      return "";
    }

    const rows = preview.rows
      .map(
        (row) =>
          `<div class="preview-row">
             <span>${row.key}</span>
             <strong>${row.value}</strong>
           </div>`
      )
      .join("");

    return `<div class="product-preview ${previewThemeClass(product.id)}">
      <div class="product-preview-head">
        <span class="preview-label">${preview.label}</span>
        <strong>${preview.title}</strong>
      </div>
      <div class="preview-rows">${rows}</div>
      <p class="preview-foot">${preview.outcome}</p>
    </div>`;
  }

  function renderProducts(copy) {
    clearAndRender("products-grid", copy.products, (product) => {
      const bullets = product.bullets.map((bullet) => `<li>${bullet}</li>`).join("");
      const liveDemoAction = product.liveDemoUrl
        ? `<a class="button button-outline product-link" href="${product.liveDemoUrl}" target="_blank" rel="noopener noreferrer">${product.liveDemoLabel || "Live Demo"}</a>`
        : "";
      return card(
        "card",
        `${buildProductVisualMarkup(product)}
         <span class="product-tag">${product.tag}</span>
         <h3>${product.title}</h3>
         <p>${product.description}</p>
         <ul>${bullets}</ul>
         <div class="card-actions">
           <a class="button button-ghost product-link" href="${productHref(product.id)}">${product.cta}</a>
           ${liveDemoAction}
         </div>`
      );
    });
  }

  function renderQuickstart(copy) {
    if (!copy.quickStart) {
      return;
    }

    setText("quickstart-steps-title", copy.quickStart.stepsTitle);
    setText("quickstart-demo-title", copy.quickStart.demoTitle);
    setText("quickstart-demo-description", copy.quickStart.demoDescription);
    setText("quickstart-demo-button", copy.quickStart.demoButton);
    setText("quickstart-demo-secondary", copy.quickStart.demoSecondaryButton || "");
    setText("quickstart-contact-button", copy.quickStart.contactButton);
    setText("quickstart-outcome-title", copy.quickStart.outcomeTitle);

    const demoButton = document.getElementById("quickstart-demo-button");
    if (demoButton && copy.quickStart.demoUrl) {
      demoButton.href = copy.quickStart.demoUrl;
    }
    const demoSecondaryButton = document.getElementById("quickstart-demo-secondary");
    if (demoSecondaryButton) {
      if (copy.quickStart.demoSecondaryUrl) {
        demoSecondaryButton.href = copy.quickStart.demoSecondaryUrl;
        demoSecondaryButton.style.display = "";
      } else {
        demoSecondaryButton.style.display = "none";
      }
    }

    clearAndRender("quickstart-steps", copy.quickStart.steps, (item, index) =>
      card(
        "quickstart-step",
        `<span class="workflow-index">${index + 1}</span>
         <h4>${item.title}</h4>
         <p>${item.detail}</p>`
      )
    );

    clearAndRender("quickstart-outcomes", copy.quickStart.outcomes, (item) =>
      card("quickstart-outcome", `<strong>${item.label}</strong><p>${item.value}</p>`)
    );
  }

  function renderWorkflow(copy) {
    clearAndRender("workflow-grid", copy.workflow, (item, index) =>
      card(
        "workflow-card",
        `<span class="workflow-index">${index + 1}</span>
         <h3>${item.title}</h3>
         <p>${item.description}</p>`
      )
    );
  }

  function renderScenarios(copy) {
    clearAndRender("scenarios-grid", copy.scenarios, (item) =>
      card("card", `<h3>${item.title}</h3><p>${item.body}</p>`)
    );
  }

  function renderProof(copy) {
    setText("proof-summary", copy.proof.summary);
    clearAndRender("proof-badges", copy.proof.badges, (item) => {
      const badge = document.createElement("span");
      badge.className = "evidence-badge";
      badge.textContent = item;
      return badge;
    });
  }

  function renderEngagements(copy) {
    clearAndRender("engagement-grid", copy.sections.contact.engagements, (item) =>
      card("engagement-card", `<strong>${item.title}</strong><p>${item.body}</p>`)
    );
  }

  function renderForm(copy) {
    const form = copy.form;
    setText("label-company", form.companyLabel);
    setPlaceholder("input-company", form.companyPlaceholder);
    setText("label-name", form.nameLabel);
    setPlaceholder("input-name", form.namePlaceholder);
    setText("label-email", form.emailLabel);
    setPlaceholder("input-email", form.emailPlaceholder);
    setText("label-interest", form.interestLabel);
    setText("option-interest-placeholder", form.interestOptions.placeholder);
    setText("option-llm-firewall", form.interestOptions.llmFirewall);
    setText("option-gendetector", form.interestOptions.gendetector);
    setText("option-evaluation-gate", form.interestOptions.evaluationGate);
    setText("option-full-stack", form.interestOptions.fullStack);
    setText("label-message", form.messageLabel);
    setPlaceholder("input-message", form.messagePlaceholder);
    setText("label-consent", form.consentLabel);
    setText("submit-button", form.submitLabel);
    setText("form-hint", form.hint);
  }

  function renderFooter(copy) {
    setText("footer-note", copy.footer.note);
    setText("footer-tagline", `${new Date().getFullYear()} ${copy.footer.tagline}`);
  }

  function bindReveal() {
    const nodes = Array.from(document.querySelectorAll(".reveal"));

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        node.classList.add("no-motion");
        node.classList.add("is-visible");
      } else {
        observer.observe(node);
      }
    });
  }

  function bindHeaderScrollState() {
    const header = document.querySelector(".site-header");
    if (!header) {
      return;
    }

    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 18);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function setStatus(message, state) {
    const status = document.getElementById("form-status");
    if (!status) {
      return;
    }
    status.textContent = message;
    status.dataset.state = state || "";
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function exportLead(payload) {
    const fileName = `${site.lead.exportFilePrefix}-${Date.now()}.json`;
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(link.href);
    link.remove();
  }

  function storeLead(payload) {
    const existing = JSON.parse(window.localStorage.getItem(site.lead.storageKey) || "[]");
    existing.push(payload);
    window.localStorage.setItem(site.lead.storageKey, JSON.stringify(existing));
  }

  function bindLeadForm() {
    const form = document.getElementById("lead-form");
    if (!form) {
      return;
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const copy = getCopy();
      const messages = copy.form.messages;
      setStatus("", "");

      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      payload.createdAt = new Date().toISOString();
      payload.page = window.location.href;
      payload.locale = locale;

      if (!payload.company || !payload.name || !payload.email || !payload.interest || !payload.message) {
        setStatus(messages.missing, "error");
        return;
      }

      if (!isValidEmail(payload.email)) {
        setStatus(messages.invalidEmail, "error");
        return;
      }

      if (!formData.get("consent")) {
        setStatus(messages.consent, "error");
        return;
      }

      const endpoint = site.lead.endpoint && site.lead.endpoint.trim();

      if (endpoint) {
        try {
          const response = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
          });

          if (!response.ok) {
            throw new Error(`Lead submit failed: ${response.status}`);
          }

          form.reset();
          setStatus(messages.submitted, "success");
          return;
        } catch (error) {
          console.error(error);
          storeLead(payload);
          exportLead(payload);
          form.reset();
          setStatus(messages.fallback, "error");
          return;
        }
      }

      storeLead(payload);
      exportLead(payload);
      form.reset();
      setStatus(messages.localSaved, "success");
    });
  }

  function renderPage() {
    const copy = getCopy();
    renderMeta(copy);
    renderHeader(copy);
    renderHero(copy);
    renderSectionHeadings(copy);
    renderMetrics(copy);
    renderProducts(copy);
    renderQuickstart(copy);
    renderWorkflow(copy);
    renderScenarios(copy);
    renderProof(copy);
    renderEngagements(copy);
    renderForm(copy);
    renderFooter(copy);
  }

  bindLocaleSwitch();
  bindLeadForm();
  renderPage();
  updateLocaleButtons();
  bindReveal();
  bindHeaderScrollState();
})();
