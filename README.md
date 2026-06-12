# 🍾 Despedida Henrique Elvas · Madrid

An **AI-native bachelor-party ("despedida de solteiro") website** for **Henrique Elvas** — a single-page, party-themed weekend battle plan for Madrid, built and fact-checked with AI.

> **🔴 Live site:** https://fabiosampaio-91.github.io/despedida-henrique-madrid/
> **The plan:** Friday (arrive → explore → rooftop dinner → bars) and Saturday (recovery brunch → group-voted activity → rooftop → late dinner-club → clubs).

---

## ✨ What's inside

- **Full Friday + Saturday itinerary** as an interactive timeline.
- **5 rooftop options** for the Friday sunset dinner (3 headline picks + 2 alternatives).
- **Madrid's best nightlife zones** (Malasaña, Chueca, Huertas, La Latina, Lavapiés, Salesas) with standout bars in each, plus 3 "special" bars with a story.
- **🗳️ Live voting booth** — the crew votes on the Saturday afternoon activity (Beer Bike vs Craft Beer Tour vs Karting), each with honest pros & cons.
- **Dinner & Dance venues** — restaurants that turn into clubs (~22–23h), explained honestly (including where the food is *not* the point).
- **8 clubs** filterable by Electronic/Underground vs Mainstream/Mixed, each with pros & cons.
- **Recovery brunch** and **Friday arrival lunch** spots.
- **Bounce** ("Uber for luggage") + a backup, plus prominent reservation/dress-code/logistics warnings.

## 🔗 Every link is verified

Wrong links were not acceptable, so **every official website, Google Maps pin and Instagram handle was checked** (June 2026): official URLs were content-verified and HTTP-status-checked (all return `200`), Maps links use the safe `?api=1&query=` format, and source-doc errors were corrected (see [`SOURCES.md`](SOURCES.md) and [`DECISIONS.md`](DECISIONS.md)).

## 🤖 Why "AI-native"

The plan was **researched, fact-checked, corrected and assembled by AI** from the crew's source notes — then taken *beyond* those notes with live web research (current venues, hours, closures, better options). The site is hand-buildable static HTML/CSS/JS so it deploys free on GitHub Pages with zero backend.

## 🛠️ Tech

Plain **HTML + CSS + vanilla JS**. No build step, no dependencies, no tracking.

| File | Purpose |
|------|---------|
| [`index.html`](index.html) | Page structure & content sections |
| [`styles.css`](styles.css) | Party theme (neon magenta/purple/gold, confetti) |
| [`data.js`](data.js) | **Single source of truth** — every venue + verified links |
| [`script.js`](script.js) | Card rendering, voting, club filter, confetti, scroll-reveal |

### Run locally
```bash
python3 -m http.server 8080   # then open http://localhost:8080
```

## 📚 Docs

- [`ACTION_PLAN.md`](ACTION_PLAN.md) — the step-by-step build plan
- [`SOURCES.md`](SOURCES.md) — everything extracted from the source doc + web research
- [`DECISIONS.md`](DECISIONS.md) — design/engineering decisions, link-verification method, corrections
- [`TODO.md`](TODO.md) — status & nice-to-haves

## 🗳️ A note on voting

Votes are stored in the browser's `localStorage` — they persist per device and sync across tabs, which keeps the site 100% static and free with no backend to maintain. For a shared group tally, everyone opens the link and the result gets confirmed in the group chat. See [`DECISIONS.md`](DECISIONS.md) for the trade-off and how to upgrade to a shared backend.

---

_Built with AI · all links verified June 2026 · ¡Vamos, Henrique! 🥂_
