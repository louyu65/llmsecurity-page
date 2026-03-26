# CMS Release Checklist (2026-03-26)

## Scope

- Website: `cms/index.html` and `cms/product.html`
- Lead path: `cms -> https://llmsecurity-feishubots.louyu.tech/lead`
- Locale: `zh` and `en`

## Rule Mapping

Mapped to root rules:

- `2.2 Bilingual Delivery` (locale switching)
- `5.3 Lead Collection Rules` (consent and transparent submission path)
- `6.1 Required Test Thinking` website checks (responsive, keyboard, form validation)
- `6.2 Release Blocking Conditions`
- `9. Definition of Done`

## Automated Evidence

Verification script:

- `cms/verify-release.mjs`

Artifacts:

- `cms/release-artifacts/verification.json`
- `cms/release-artifacts/home-desktop.png`
- `cms/release-artifacts/home-mobile.png`
- `cms/release-artifacts/product-firewall.png`

Verification result summary (from `verification.json`):

- `summary.pass = true`
- Homepage duplicate visuals section removed (`hasVisualSection=false`)
- Product cards = 3, product preview cards = 3
- Desktop keyboard tab focus reaches interactive element (`focusAfterTab.tag = A`)
- Locale switch works (`htmlLangEn=en`, `htmlLangZh=zh-CN`)
- Mobile no horizontal overflow (`horizontalOverflow=0`)
- Mobile nav collapses (`navDisplay=none`)
- Firewall product has live demo button and demo source link

## Lead Endpoint Runtime Checks

1. Health check:

- `GET https://llmsecurity-feishubots.louyu.tech/healthz`
- Result: `ok=true`

2. CORS preflight:

- `OPTIONS https://llmsecurity-feishubots.louyu.tech/lead`
- Origin: `https://llmsecurity.louyu.tech`
- Result: `204 No Content`, `Access-Control-Allow-Origin: https://llmsecurity.louyu.tech`

3. Lead submit:

- `POST https://llmsecurity-feishubots.louyu.tech/lead`
- Result: `ok=true`, `record_id=recveY5tTOc3zC`, `bot_notified=true`

## Release Decision

Status: **PASS (Go for production publish)**.

Rationale:

- Release-blocking checks required by current repository rules are covered and passed.
- Bilingual switching, responsive behavior, keyboard focus path, form validation, and real lead delivery path are all verified with concrete evidence files.
