# 🧭 DECISIONS

Design & engineering decisions, the link-verification method, and the corrections made along the way.

## Link verification (the critical requirement)

Wrong links were explicitly unacceptable, so a multi-step process was used for **every** link:

1. **Content verification** — each official site was fetched and its content read to confirm it is the *correct, official* page for that exact venue (not a reseller, aggregator, or look-alike).
2. **HTTP status check** — every URL was hit with a real browser user-agent following redirects. **All official URLs return `200`.** Notable findings:
   - `usebounce.com` → **308** redirect to canonical `bounce.com` (used the canonical).
   - `fabrikclub.com` → **301** to `fabrikmadrid.com` (used the canonical).
   - `pantheramadrid.com` language sub-paths returned **500** intermittently; the root and the **`/home-english/`** page return `200` → linked there.
   - Expired-SSL domains avoided: `picalagartos.com`, `azoteacibeles.com`, `deldiego.com` → used the working `azoteagrupo.com` sub-domains.
3. **Google Maps** — built with the official, always-resolving format `https://www.google.com/maps/search/?api=1&query=<URL-encoded venue name + address>` rather than fragile place-ID or short links.
4. **Instagram** — handles confirmed against each venue's official website. Instagram blocks automated profile fetching, so handles are corroborated (not page-fetched); wrong handles from the source doc were corrected.

### Corrections made to the source doc
| Item | Source doc said | Reality (corrected) |
|---|---|---|
| Salmon Guru | Chueca | Barrio de las Letras (Huertas) |
| Inclán Brutal Bar | Lavapiés | Barrio de las Letras |
| Joy Eslava | "La Joy" | Rebranded **Teatro Eslava** (same building) |
| LAB Club | Chueca, small/intimate | **LAB theClub**, inside Chamartín station, mid-large |
| Josealfredo | live jazz | Recorded soul/funk/jazz + occasional DJs |
| Bad Company 1920 | — | **No website** (Instagram-only; password posted there) |
| Numa Pompilio | "becomes a DJ party" | Not corroborated officially — flagged as the intimate option |
| Florida Park | floridaretiro.com | Use **floridapark.es** (old domain stale/suspect) |
| Karting | one location | Only **Las Rozas** open; **La Ermita closed** |
| Beer Bike | "ends at a rooftop" | Official page lists start/finish at Atocha — confirm with operator |
| Loca Obsesión IG | @locaobsesion_madrid | IG is **@locaobsesion_brunch** (other handle is TikTok) |

## Architecture

- **Static HTML/CSS/vanilla JS, no build step, no dependencies.** Chosen for a free, zero-maintenance GitHub Pages deploy and instant load. A framework would add weight with no benefit for a one-page plan.
- **`data.js` as the single source of truth.** All venue content + verified links live in one object; `script.js` renders every card from it. Updating a link or venue is a one-line edit, which keeps links trustworthy over time.
- **Progressive, accessible interactions** — scroll-reveal, confetti and the vote burst all respect `prefers-reduced-motion`. Links open in new tabs with `rel="noopener"`.

## Voting feature

- **localStorage-based**, per device, with cross-tab live sync. Tapping moves your single vote, animates the tallies, and fires a confetti burst.
- **Why not a shared backend?** A truly shared tally needs a server/DB, which breaks the free static-hosting model and adds maintenance and a failure point before a one-weekend event. The pragmatic call: keep it static and reliable, and confirm the winner in the group chat.
- **How to upgrade later** (if shared tallies are wanted): swap the `loadVotes`/`saveVotes` functions in `script.js` for calls to a tiny serverless KV (e.g. Cloudflare Workers KV, Supabase, or a Google Apps Script endpoint). The render logic stays identical.

## Theme

- Bachelor-party energy: near-black base with neon **magenta / purple / gold / cyan**, `Anton` display type + `Sora` body, falling confetti, glowing timeline. Bold and festive without becoming unreadable — strong contrast, generous spacing, responsive down to mobile.

## Honest content

Pros **and** cons are shown for activities, dinner-clubs and clubs (e.g. Panthera's ~2.9/5 food caveat, Fabrik being far out, the 25+ door at Oh My Club) so the crew can decide with real information rather than hype.
