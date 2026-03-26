# CMS Website

## Overview

This directory contains a lightweight official website for the `LLM Security` project.

Goals:

- present the existing product modules in the repository
- communicate benchmark-backed value instead of generic AI marketing copy
- collect potential customer leads with a frontend-ready submission flow

## Files

- `index.html`: landing page structure
- `product.html`: product detail page template
- `styles.css`: visual system and responsive layout
- `content-zh.js`: Chinese content source
- `content-en.js`: English content source
- `site-content.js`: content registry and lead form config
- `script.js`: homepage rendering, locale switching, reveal animation, and lead submission handling
- `product.js`: product detail rendering and locale switching

## Local Preview

You can open `index.html` directly in a browser, or serve the folder locally:

```powershell
cd D:\安恒工作\代码库\LLM Security\cms
python -m http.server 8080
```

Then open:

- `http://127.0.0.1:8080/`
- `http://127.0.0.1:8080/?lang=en`
- `http://127.0.0.1:8080/product.html?product=llm-firewall&lang=zh`

## Locale Switching

The site now uses conventional locale switching instead of mixed-language copy:

1. `?lang=zh` and `?lang=en` are supported on both the homepage and product detail pages.
2. The selected locale is also stored in browser `localStorage`.
3. Homepage product cards keep the current locale when linking to `product.html`.

## Lead Form Integration

The lead form is designed to be lightweight and honest:

1. If `window.SITE_CONTENT.lead.endpoint` is configured, the form will `POST` JSON to that endpoint.
2. If no endpoint is configured, the page will:
   - save the payload in browser `localStorage`
   - export the submission as a JSON file

Update the endpoint in `site-content.js`:

```js
lead: {
  endpoint: "https://your-worker.your-subdomain.workers.dev/lead",
  storageKey: "llm_security_leads",
  exportFilePrefix: "llm-security-lead"
}
```

Recommended deployment path:

```text
cms form -> Cloudflare Worker -> Feishu Bitable
                            -> Feishu group custom bot
```

The worker template lives in:

- `..\integrations\feishu-leads-worker\worker.mjs`
- `..\integrations\feishu-leads-worker\README.md`

Example payload:

```json
{
  "company": "Example Corp",
  "name": "Alice",
  "email": "alice@example.com",
  "interest": "llm-firewall",
  "message": "We need prompt injection protection for a RAG assistant.",
  "consent": "yes",
  "locale": "zh",
  "createdAt": "2026-03-26T00:00:00.000Z",
  "page": "http://127.0.0.1:8080/"
}
```

## Release Validation

A release verification script is available at:

- `verify-release.mjs`

It validates responsive behavior, locale switching, keyboard focus path, form validation, and product-page demo links, then writes evidence files under:

- `release-artifacts/`

## Content Sources

The current copy is derived from repository content only:

- `..\LLMFirewall\README.md`
- `..\GenDetector\RULES.md`
- root `..\RULES.md`

Before publishing new benchmarks or customer proof, update the source of truth first and then update `content-zh.js` and `content-en.js`.
