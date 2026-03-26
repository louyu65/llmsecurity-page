(function () {
  const site = window.SITE_CONTENT;
  const { supportedLocales, defaultLocale, localeStorageKey } = site.settings;
  const pageUrl = new URL(window.location.href);
  const productId = pageUrl.searchParams.get("product");
  let locale = getInitialLocale();

  function getInitialLocale() {
    const fromQuery = pageUrl.searchParams.get("lang");
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

  function getProduct(copy) {
    return copy.products.find((item) => item.id === productId);
  }

  function setText(id, value) {
    const node = document.getElementById(id);
    if (node) {
      node.textContent = value;
    }
  }

  function card(className, html) {
    const article = document.createElement("article");
    article.className = className;
    article.innerHTML = html;
    return article;
  }

  function clearAndRender(id, items, renderItem) {
    const target = document.getElementById(id);
    if (!target) {
      return;
    }
    target.innerHTML = "";
    items.forEach((item, index) => target.appendChild(renderItem(item, index)));
  }

  function updateLocaleButtons() {
    document.querySelectorAll(".locale-button").forEach((button) => {
      const active = button.dataset.locale === locale;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function updateLinks(copy) {
    const home = `./index.html?lang=${encodeURIComponent(locale)}`;
    document.getElementById("nav-home").href = home;
    document.getElementById("nav-products").href = `${home}#products`;
    document.getElementById("nav-contact").href = `${home}#contact`;
    document.getElementById("header-cta").href = `${home}#contact`;
    setText("nav-home", copy.productPage.nav.home);
    setText("nav-products", copy.productPage.nav.products);
    setText("nav-contact", copy.productPage.nav.contact);
    setText("header-cta", copy.nav.demo);
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

  function bindLocaleSwitch() {
    document.querySelectorAll(".locale-button").forEach((button) => {
      button.addEventListener("click", () => setLocale(button.dataset.locale));
    });
  }

  function renderMeta(copy, product) {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    document.title = `${product.title} | LLM Security`;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", product.description);
    }
  }

  function renderHero(copy, product) {
    const home = `./index.html?lang=${encodeURIComponent(locale)}`;
    const hero = document.getElementById("product-hero");
    const snapshot = product.detail.snapshot.map((item) => `<li>${item}</li>`).join("");
    const highlights = product.detail.highlights.map((item) => `<li>${item}</li>`).join("");
    const liveDemoButton = product.liveDemoUrl
      ? `<a class="button button-outline" href="${product.liveDemoUrl}" target="_blank" rel="noopener noreferrer">${product.detail.liveDemoCta || product.liveDemoLabel || "Live Demo"}</a>`
      : "";

    hero.innerHTML = `
      <a class="back-link" href="${home}">${copy.productPage.backToHome}</a>
      <div class="product-hero-layout">
        <div class="product-summary">
          <p class="eyebrow">${product.detail.eyebrow}</p>
          <span class="product-tag">${product.tag}</span>
          <h1>${product.detail.title}</h1>
          <p class="hero-subtitle">${product.detail.subtitle}</p>
          <div class="hero-actions">
            <a class="button button-solid" href="${home}#contact">${product.detail.primaryCta}</a>
            ${liveDemoButton}
            <a class="button button-ghost" href="${home}">${product.detail.secondaryCta}</a>
          </div>
          <ul class="hero-tags">${highlights}</ul>
        </div>
        <aside class="proof-panel product-snapshot">
          <h3>${product.detail.snapshotTitle}</h3>
          <ul class="proof-list">${snapshot}</ul>
        </aside>
      </div>
    `;
  }

  function renderStats(product) {
    clearAndRender("product-stats", product.detail.stats, (stat) =>
      card(
        "metric-card",
        `<span class="metric-value">${stat.value}</span>
         <p class="metric-label">${stat.label}</p>
         <p>${stat.detail}</p>`
      )
    );
  }

  function renderDetails(copy, product) {
    setText("details-eyebrow", copy.productPage.details.eyebrow);
    setText("details-title", copy.productPage.details.title);
    setText("details-description", copy.productPage.details.description);

    clearAndRender("detail-sections", product.detail.sections, (section) => {
      const points = section.points.map((point) => `<li>${point}</li>`).join("");
      return card("card", `<h3>${section.title}</h3><ul>${points}</ul>`);
    });
  }

  function renderUseCases(copy, product) {
    setText("usecases-eyebrow", copy.productPage.useCases.eyebrow);
    setText("usecases-title", copy.productPage.useCases.title);
    setText("usecases-description", copy.productPage.useCases.description);

    clearAndRender("usecases-grid", product.detail.useCases, (item) =>
      card("card", `<h3>${item}</h3><p>${product.tag}</p>`)
    );
  }

  function renderSources(copy, product) {
    setText("sources-title", copy.productPage.sourcesTitle);
    clearAndRender("source-list", product.detail.sources, (item) => {
      const li = document.createElement("li");
      if (typeof item === "string" && /^https?:\/\//.test(item)) {
        const link = document.createElement("a");
        link.href = item;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = item;
        li.appendChild(link);
      } else {
        li.textContent = item;
      }
      return li;
    });
  }

  function renderRelated(copy, product) {
    setText("related-title", copy.productPage.relatedTitle);
    clearAndRender(
      "related-grid",
      copy.products.filter((item) => item.id !== product.id),
      (item) =>
        card(
          "card card-compact",
          `<span class="product-tag">${item.tag}</span>
           <h3>${item.title}</h3>
           <p>${item.description}</p>
           <div class="card-actions">
             <a class="button button-ghost product-link" href="./product.html?product=${encodeURIComponent(item.id)}&lang=${encodeURIComponent(locale)}">${item.cta}</a>
           </div>`
        )
    );
  }

  function renderFooter(copy) {
    setText("brand-subtitle", copy.brand.subtitle);
    setText("footer-note", copy.footer.note);
    setText("footer-tagline", `${new Date().getFullYear()} ${copy.footer.tagline}`);
  }

  function renderNotFound(copy) {
    const home = `./index.html?lang=${encodeURIComponent(locale)}`;
    document.getElementById("product-hero").innerHTML = `
      <div class="not-found-panel">
        <p class="eyebrow">404</p>
        <h1>${copy.productPage.notFound.title}</h1>
        <p class="hero-subtitle">${copy.productPage.notFound.description}</p>
        <a class="button button-solid" href="${home}">${copy.productPage.notFound.backLabel}</a>
      </div>
    `;
    document.getElementById("product-stats-section").style.display = "none";
    document.getElementById("product-details-section").style.display = "none";
    document.getElementById("product-usecases-section").style.display = "none";
    document.getElementById("product-proof-section").style.display = "none";
  }

  function bindReveal() {
    const nodes = Array.from(document.querySelectorAll(".reveal"));
    nodes.forEach((node) => {
      node.classList.add("no-motion");
      node.classList.add("is-visible");
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

  function renderPage() {
    const copy = getCopy();
    const product = getProduct(copy);
    document.getElementById("product-stats-section").style.display = "";
    document.getElementById("product-details-section").style.display = "";
    document.getElementById("product-usecases-section").style.display = "";
    document.getElementById("product-proof-section").style.display = "";
    updateLinks(copy);
    renderFooter(copy);

    if (!product) {
      renderMeta(copy, { title: copy.productPage.notFound.title, description: copy.productPage.notFound.description });
      renderNotFound(copy);
      return;
    }

    renderMeta(copy, product);
    renderHero(copy, product);
    renderStats(product);
    renderDetails(copy, product);
    renderUseCases(copy, product);
    renderSources(copy, product);
    renderRelated(copy, product);
  }

  bindLocaleSwitch();
  renderPage();
  updateLocaleButtons();
  bindReveal();
  bindHeaderScrollState();
})();
