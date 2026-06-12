# 🗺️ ACTION PLAN

The step-by-step plan to build the Despedida Henrique Elvas · Madrid site.

## Phase 0 — Understand the brief
- [x] Read the brief: AI-native bachelor-party site, Madrid, Friday + Saturday plan.
- [x] Extract the source document (`Sources/Sites to search.docx`) in full.

## Phase 1 — Research (sources + beyond)
- [x] Parse every venue, link and note from the source doc → [`SOURCES.md`](SOURCES.md).
- [x] Go **beyond** the sources with live web research (June 2026) for every category:
  - [x] Rooftops (≥5 options, best for a Friday sunset dinner + pre-party)
  - [x] Nightlife zones + standout bars per zone + the doc's "special" bars
  - [x] Clubs (electronic/underground + mainstream/mixed) with pros & cons
  - [x] Dinner-&-dance venues (restaurant → club) with honest takes
  - [x] Saturday activities (3 options to vote on) with pros & cons
  - [x] Recovery brunch + Friday arrival lunch
  - [x] Bounce luggage app + backup

## Phase 2 — Verify every link (critical)
- [x] Content-verify each official website via fetch (correct venue).
- [x] HTTP-status-check every URL (all `200`; Panthera → use root/English page).
- [x] Build Google Maps links with the safe `?api=1&query=<name+address>` format.
- [x] Confirm Instagram handles against official sites; correct mistaken handles.
- [x] Record corrections (wrong neighborhoods, rebrands, dead domains) in [`DECISIONS.md`](DECISIONS.md).

## Phase 3 — Content model
- [x] Encode all verified venues + links into [`data.js`](data.js) as the single source of truth.

## Phase 4 — Build the site
- [x] `index.html` — hero, reservations alert, Friday & Saturday timelines, blocks, info, footer.
- [x] `styles.css` — bold bachelor-party theme (neon, confetti, responsive).
- [x] `script.js` — render cards from data, **voting booth**, club filter, scroll-reveal, confetti.
- [x] Prominent **reservation** + dress-code + logistics warnings.

## Phase 5 — Documentation
- [x] `README.md`, `ACTION_PLAN.md`, `SOURCES.md`, `DECISIONS.md`, `TODO.md`.

## Phase 6 — Ship it (GitHub)
- [x] `git init`, structured commits as work progresses.
- [x] Create the GitHub repo on the owner's account.
- [x] Push.
- [x] Enable **GitHub Pages** and verify the site is live.
- [x] Deliver repo link + live site link.
