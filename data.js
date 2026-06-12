/* =============================================================
   DESPEDIDA HENRIQUE ELVAS · MADRID
   Single source of truth for all venues.
   Every link below was verified (HTTP 200 + content check) in June 2026.
   See SOURCES.md / DECISIONS.md for provenance & verification notes.
   ============================================================= */

const DATA = {
  // -------------------------------------------------------------
  // ROOFTOPS (Friday dinner + sunset + pre-party). 5 options.
  // -------------------------------------------------------------
  rooftops: [
    {
      name: "Ginkgo Sky Bar",
      tag: "TOP PICK · FRIDAY",
      area: "Plaza de España · VP Plaza España Design (12th floor)",
      blurb: "Best sunset positioning in town — Royal Palace + Temple of Debod — plus a real Friday DJ show. Dinner, sunset and pre-party under one roof.",
      pros: ["Best sunset direction in the city", "Live 'Azur' DJ show every Friday (~20:30)", "Latest close (02:30) — stay as long as it's good"],
      cons: ["5-star pricing + smart-casual dress", "Slightly off the Gran Vía core"],
      hours: "Fri 13:00–02:30 · kitchen to ~23:00",
      reservations: "Recommended — dinner (Mediterranean/Asian). +34 915 955 512 · terrace fee ~€10–16 from 16:00",
      web: "https://www.ginkgoskybarmadrid.com/en/",
      maps: "https://www.google.com/maps/search/?api=1&query=Ginkgo%20Sky%20Bar%20Plaza%20de%20Espa%C3%B1a%203%20Madrid",
      ig: "https://www.instagram.com/ginkgoskybar/"
    },
    {
      name: "Azotea del Círculo de Bellas Artes",
      tag: "TOP PICK · THE VIEW",
      area: "Centro · Círculo de Bellas Artes (7th floor), Calle de Alcalá 42",
      blurb: "The iconic 360° Madrid skyline — Metropolis dome, Gran Vía, the mountains. Full restaurant, summer DJ sets, dead-central for rolling into the night.",
      pros: ["Best skyline view in Madrid", "Full dinner + sunset + late cocktails", "Central for the Malasaña/Letras bar crawl"],
      cons: ["Crowded & touristy", "Lift access fee + queue for a group", "Winds down by 02:00"],
      hours: "Fri 10:00–02:00",
      reservations: "Yes — restaurant by chef Manuel Berganza. Book online · 91 117 00 62 · WhatsApp +34 910 059 171",
      web: "https://azoteadelcirculo.azoteagrupo.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=Azotea%20del%20C%C3%ADrculo%20de%20Bellas%20Artes%20Alcal%C3%A1%2042%20Madrid",
      ig: "https://www.instagram.com/azoteadelcirculo/"
    },
    {
      name: "360° Rooftop Bar · Riu Plaza España",
      tag: "TOP PICK · THE WOW",
      area: "Plaza de España · Edificio España (floors 26–27)",
      blurb: "The 'wow' panorama — true 360° over the whole city plus the famous glass walkway between the towers. Best for the photo moment + sunset drinks.",
      pros: ["Unbeatable panoramic view", "Glass walkway is a fun group novelty", "Evening DJ buzz"],
      cons: ["Entry fee + crowds", "Open terrace takes no bookings — food is tapas-style"],
      hours: "Rooftop daily 11:00–01:00 · 360° Sky Bar (indoor) 18:00–02:00",
      reservations: "Terrace = no booking. Reserve the El Edén gastrobar (floor 26) to eat, then move up. +34 91 831 4510",
      web: "https://www.riu360rooftopbar.com/en/",
      maps: "https://www.google.com/maps/search/?api=1&query=360%20Rooftop%20Bar%20Riu%20Plaza%20Espa%C3%B1a%20Madrid",
      ig: "https://www.instagram.com/hotelriuplazaespana/"
    },
    {
      name: "Picalagartos Sky Bar",
      tag: "MOST CENTRAL",
      area: "Gran Vía 21 · NH Collection (floors 8 & 9)",
      blurb: "Iconic view straight down Gran Vía's neon. Dead-center, so it's the easiest rooftop to roll straight into the nightlife from.",
      pros: ["Unbeatable central location", "Restaurant takes bookings", "Easy to walk into Malasaña/Chueca after"],
      cons: ["9th-floor bar is first-come (group may split)", "Very touristy"],
      hours: "Restaurant 10:00–02:00 · rooftop bar 15:00–02:00",
      reservations: "Restaurant bookable (site / Resy / +34 915 30 17 61); 9th-floor bar first-come",
      web: "https://picalagartos.azoteagrupo.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=Picalagartos%20Sky%20Bar%20Gran%20V%C3%ADa%2021%20Madrid",
      ig: "https://www.instagram.com/picalagartosmad/"
    },
    {
      name: "Doña Luz — The Madrid Rooftop",
      tag: "BUILT-IN DJ",
      area: "Centro · B&B Hotel (11th floor), Calle de la Montera 10–12",
      blurb: "A party vibe baked in — DJ sets Fri/Sat ~20:00–01:00. Dinner, sunset and pre-party in one, a two-minute walk from Puerta del Sol.",
      pros: ["Party vibe built in (DJ Fri/Sat)", "Dinner + sunset + pre-party in one", "Walkable to Sol nightlife"],
      cons: ["Cozier / smaller view than the towers", "Reservations essentially required on Fridays"],
      hours: "Summer 14:00–02:00",
      reservations: "Recommended — South American + Mediterranean. +34 91 731 6757",
      web: "https://donaluzmadrid.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=Do%C3%B1a%20Luz%20Rooftop%20Montera%2010%20Madrid",
      ig: "https://www.instagram.com/donaluz_madrid/"
    }
  ],

  // -------------------------------------------------------------
  // NIGHTLIFE ZONES (focus on the zone, examples inside)
  // -------------------------------------------------------------
  zones: [
    {
      name: "Malasaña",
      vibe: "Young, edgy, music-driven",
      desc: "The alternative/hipster heart — vintage bars, indie music and craft cocktails around Plaza del Dos de Mayo. Dense streets = effortless bar-hopping. The natural place to land after the rooftop.",
      bars: [
        { name: "1862 Dry Bar", note: "Intimate Prohibition-style classics — the perfect opener.", web: "https://1862drybar.myrestoo.net/es/reservar", ig: "https://www.instagram.com/1862drybar/" },
        { name: "Macera Taller Bar", note: "Cocktails built on house-macerated spirits.", web: "https://www.maceradrinks.com/sobrenosotros/", ig: "https://www.instagram.com/maceradrinks/" }
      ]
    },
    {
      name: "Chueca",
      vibe: "Festive, inclusive, party-all-night",
      desc: "LGBTQ+ hub and serious cocktail zone around Plaza de Chueca — one of the most fun, high-energy areas in the city for a group that wants the night to keep going.",
      bars: [
        { name: "Angelita Madrid", note: "Street-level wine bar + acclaimed basement cocktail lounge.", web: "https://madrid-angelita.es/", ig: "https://www.instagram.com/angelitamadrid/" }
      ]
    },
    {
      name: "Barrio de las Letras (Huertas)",
      vibe: "Buzzy, central, quality-driven",
      desc: "The traditional heart of Madrid nightlife — pedestrian Calle de las Huertas packed with bars, mixing historic tabernas with world-class cocktail dens. This is where Salmon Guru & Inclán actually are.",
      bars: [
        { name: "Salmon Guru", note: "World's-50-Best cocktail temple — theatrical & playful.", web: "https://salmonguru.es/en/", ig: "https://www.instagram.com/salmonguru/" },
        { name: "Viva Madrid 1856", note: "Historic tiled taberna reborn under Diego Cabrera.", web: "https://www.vivamadrid1856.com/en/", ig: "https://www.instagram.com/vivamadrid1856/" }
      ]
    },
    {
      name: "La Latina",
      vibe: "Classic tapeo + cañeo",
      desc: "Calle Cava Baja — ~50 tapas bars in 300 metres. The quintessential 'caña + tapa, then move on' crawl. Lively, traditional, local-meets-tourist.",
      bars: [
        { name: "Casa Lucas", note: "Tiny famous taberna, sharing raciones + strong wine list.", web: "https://casalucas.es/", ig: "https://www.instagram.com/casalucas_madrid/" }
      ]
    },
    {
      name: "Lavapiés",
      vibe: "Bohemian, diverse, unpretentious",
      desc: "Madrid's most multicultural barrio — global flavours, indie corners, terraces on Calle Argumosa and cheap, authentic cañas. Less touristy, more real.",
      bars: [
        { name: "Bodegas Lo Máximo", note: "1948 bar de cañas with live boleros.", web: "https://bodegaslomaximo.es/", ig: "https://www.instagram.com/bodegaslomaximo/" }
      ]
    },
    {
      name: "Salesas / Justicia",
      vibe: "Polished, fashionable, grown-up",
      desc: "The chic pocket north of Chueca — natural-wine bars, design-forward speakeasies, a classier stop. Home of Jack's Library.",
      bars: [
        { name: "Jack's Library", note: "Speakeasy hidden behind a working florist.", web: "https://www.jackslibrary.com/", ig: "https://www.instagram.com/jacks_library/" }
      ]
    }
  ],

  // Specific 'special' bars worth a detour (from the source doc)
  specialBars: [
    {
      name: "Bad Company 1920",
      area: "Near Callao · Calle de Miguel Moya 8",
      blurb: "A 1920s Prohibition speakeasy: ring the bell and give the secret password (posted on their Instagram, changed ~monthly). Cocktails disguised as Fabergé eggs & hip-flask Bibles, to a Motown/soul soundtrack.",
      note: "No website — Instagram only. Watch IG for the current password. No Saturday reservations; small capacity = possible queue.",
      web: null,
      maps: "https://www.google.com/maps/search/?api=1&query=Bad%20Company%201920%20Calle%20de%20Miguel%20Moya%208%2028004%20Madrid",
      ig: "https://www.instagram.com/badcompany_1920/"
    },
    {
      name: "Inclán Brutal Bar",
      area: "Barrio de las Letras · Calle de Álvarez Gato 4",
      blurb: "Theatrical cocktail-bar-meets-restaurant across three themed spaces (open kitchen, 'luxury library', patio). Serious award-winning cocktails with a late kitchen — great for a group that wants food + drinks.",
      note: "Reserve for groups: +34 910 23 80 38 / reservas@inclanbrutalbar.com",
      web: "https://inclanbrutalbar.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=Incl%C3%A1n%20Brutal%20Bar%20Calle%20de%20%C3%81lvarez%20Gato%204%2028012%20Madrid",
      ig: "https://www.instagram.com/inclanbrutalbaroficial/"
    },
    {
      name: "Josealfredo",
      area: "Centro · Calle de Silva 22 (near Callao)",
      blurb: "A long, softly-lit retro bar that pioneered Madrid's cocktail boom — soul/funk/jazz on the speakers, leopard-retro decor, ~30 gin-tonics. The vibe peaks after midnight and runs to 03:30.",
      note: "Recorded soul/funk + occasional DJs (not nightly live jazz). Walk-in, fills late. +34 915 214 960",
      web: "https://www.josealfredobar.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=Josealfredo%20Bar%20Calle%20de%20Silva%2022%2028004%20Madrid",
      ig: "https://www.instagram.com/josealfredobar/"
    }
  ],

  // -------------------------------------------------------------
  // SATURDAY AFTERNOON ACTIVITIES (vote on one)
  // -------------------------------------------------------------
  activities: [
    {
      id: "beerbike",
      name: "Beer Bike Madrid",
      emoji: "🚲🍺",
      tag: "The crowd favourite",
      blurb: "An 18-seat group pedal-bar that tours central Madrid (Prado, Cibeles, Atocha) with an open bar (beer/sangría), music and a pro driver. Everyone together, relaxed, social — the source doc's top pick.",
      pros: ["Everyone together, super social", "Open bar onboard + scenic central route", "Relaxed, fun, photogenic"],
      cons: ["Only ~1 hour", "Price by quote (no public rate)", "Weather-exposed in June heat", "Rooftop ending not confirmed by operator — ask when booking"],
      meta: "~1h · 8–15 people · book ≥1 month ahead",
      web: "https://yourspainweekend.com/en/stay-in-madrid/madrid-day-activities/beer-bike-madrid/",
      maps: "https://www.google.com/maps/search/?api=1&query=Beer%20Bike%20Madrid%20Plaza%20del%20Emperador%20Carlos%20V%20Madrid"
    },
    {
      id: "beertasting",
      name: "Craft Beer Tour — Real Flavor of Madrid",
      emoji: "🍻🗺️",
      tag: "Structured pub-crawl",
      blurb: "A ~3.5h guided walk through craft-beer taprooms with tastings, brewer meetups and appetizers — an expert-led, indoor-friendly pub crawl. Cool spots, but a more structured/restricted pace.",
      pros: ["Authentic, knowledgeable local guide", "Food included; rain-friendly (indoor)", "Good value for 3.5 hours"],
      cons: ["Booked via GetYourGuide (reseller, not the operator)", "Slower / more 'educational' pace", "Meeting point only revealed after booking"],
      meta: "~3.5h · ~€69–75 pp · book online",
      web: "https://www.getyourguide.com/madrid-l46/madrid-craft-local-beer-tour-t685354/",
      maps: "https://www.google.com/maps/search/?api=1&query=Madrid%20Craft%20Local%20Beer%20Tour%20Real%20Flavor%20of%20Madrid"
    },
    {
      id: "karting",
      name: "Karting · Carlos Sainz Center",
      emoji: "🏎️🏁",
      tag: "High adrenaline",
      blurb: "A 450m go-kart circuit that explicitly runs despedidas. Genuinely fun and competitive — but it's ~30 km out in Las Rozas, can be brutally hot in June, and eats the whole afternoon getting there and back.",
      pros: ["High-adrenaline & competitive", "Flexible 10-min sessions", "Proper event facilities for groups"],
      cons: ["~30 km out (only Las Rozas open — La Ermita closed)", "Transport eats the whole afternoon", "June track heat is brutal", "Short actual driving time"],
      meta: "Las Rozas · ~€22–44 pp · Sat 10:00–00:00 · book ahead",
      web: "https://www.kartcsainz.com/en/karting/karting-las-rozas",
      maps: "https://www.google.com/maps/search/?api=1&query=Carlos%20Sainz%20Center%20Calle%20Bruselas%203%20Las%20Rozas%20Madrid"
    }
  ],

  // -------------------------------------------------------------
  // DINNER & DANCE (late dinner ~22–23h that turns into a party)
  // -------------------------------------------------------------
  dinnerClubs: [
    {
      name: "Panthera",
      tag: "Closest match to 'dinner & dance'",
      area: "Chamberí · Calle Miguel Ángel 21",
      blurb: "The signature Madrid 'Dinner & Dance' spectacle — black-panther statues, dim light, panther-shaped plates and a Nikkei-Latin menu. At midnight it transforms into an exclusive club with a resident DJ.",
      pros: ["Best fits the 'late dinner → midnight DJ club' brief, all under one roof", "Striking, photogenic, made-for-a-stag ambiance", "Central Chamberí"],
      cons: ["⚠️ TripAdvisor ~2.9/5 — go for the vibe, not the food", "Reports of rushed service & table-turnover pressure to sell bottles", "Small tables for groups — book early (10+ group menus)"],
      music: "Deep house / tribal / hits from 00:00 · until ~03:00",
      reservations: "+34 689 87 91 14 · book ≥1 week ahead for weekends",
      web: "https://www.pantheramadrid.com/home-english/",
      maps: "https://www.google.com/maps/search/?api=1&query=Panthera%20Madrid%20Calle%20Miguel%20%C3%81ngel%2021%2028010%20Madrid",
      ig: "https://www.instagram.com/pantheramadrid/"
    },
    {
      name: "La Mamona",
      tag: "Eat well, then dance at your table",
      area: "Castellana · Paseo de la Castellana 62",
      blurb: "The best middle ground — a genuinely good meat-forward Mediterranean restaurant (braised beef shank, grilled octopus) that flows into live music + DJ sessions. A buzzing 'party dinner' rather than a hard club.",
      pros: ["Actually good food + live music/DJ", "Great for a group that wants to eat properly first", "Garden/terrace, 50+ wines"],
      cons: ["Festive restaurant, not a full nightclub", "Booking runs through the group site"],
      music: "Live music + DJ Wed–Sat · reports of DJ to ~03:00",
      reservations: "+34 910 88 50 40 · reservas@grupolalala.com",
      web: "https://grupolalala.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=La%20Mamona%20Castellana%20Paseo%20de%20la%20Castellana%2062%2028046%20Madrid",
      ig: "https://www.instagram.com/lamamona_madrid/"
    },
    {
      name: "Opium Madrid",
      tag: "If the club is the real goal",
      area: "Chamberí · Calle José Abascal 56",
      blurb: "One of Madrid's most famous, polished nightclubs with a restaurant attached. The dining is secondary — this is a club-with-a-restaurant, ideal if the priority is the dancefloor and VIP tables, not the meal.",
      pros: ["Famous, high-energy club with strong DJ energy", "VIP-table setup made for bachelor parties", "Central"],
      cons: ["'Dinner' is the weakest of the group", "Club hours start late (~23:00+)"],
      music: "House/dance (Main) + chart hits (Purple Room) · to ~06:00",
      reservations: "+34 91 752 53 22 · info@opiummadrid.com · tables via site",
      web: "https://opiummadrid.com/en/",
      maps: "https://www.google.com/maps/search/?api=1&query=Opium%20Madrid%20Calle%20Jos%C3%A9%20Abascal%2056%2028003%20Madrid",
      ig: "https://www.instagram.com/opiummadrid/"
    },
    {
      name: "Florida Park",
      tag: "A one-of-a-kind show night",
      area: "Inside El Retiro park · Paseo de Panamá 1",
      blurb: "A spectacular dinner-and-show inside a pavilion in Retiro park — a ~3h stage spectacle (music, acrobatics, comedy) paired with dinner, plus club/DJ sessions on weekends. Different and memorable.",
      pros: ["Unique setting inside Retiro park", "Genuine dinner + theatrical show spectacle", "Multiple spaces including a club"],
      cons: ["More 'dinner + cabaret' than a spontaneous DJ club", "Show is structured/timed — confirm which package gives the after-club"],
      music: "Dinner show ~3h · weekend DJ/club to ~06:00",
      reservations: "+34 91 827 52 75 · info@floridapark.es · use floridapark.es (NOT the old floridaretiro.com)",
      web: "https://www.floridapark.es/",
      maps: "https://www.google.com/maps/search/?api=1&query=Florida%20Park%20Retiro%20Paseo%20de%20Panam%C3%A1%201%2028009%20Madrid",
      ig: "https://www.instagram.com/floridaparkoficial/"
    },
    {
      name: "Numa Pompilio",
      tag: "Upscale & intimate (the calm option)",
      area: "Salamanca · Calle Velázquez 18",
      blurb: "A gorgeous, fashionable high-end Italian for a refined late dinner (open until 01:30) in a 'Bridgerton-esque' room with a garden. Beautiful — but the 'turns into a DJ party' claim isn't backed by official sources.",
      pros: ["Beautiful, romantic, high-quality Italian", "Great for an upscale group dinner", "Open late (kitchen to midnight)"],
      cons: ["⚠️ DJ/party transformation NOT confirmed officially — call to verify", "Intimate rather than rowdy", "Pricey / fine-dining"],
      music: "Intimate fine-dining — confirm any DJ by phone",
      reservations: "+34 916 85 97 19 · groups 15+ via sales",
      web: "https://restaurantenuma.com/en/",
      maps: "https://www.google.com/maps/search/?api=1&query=Numa%20Pompilio%20Vel%C3%A1zquez%2018%2028001%20Madrid",
      ig: "https://www.instagram.com/restaurantenuma/"
    }
  ],

  // -------------------------------------------------------------
  // CLUBS (for whoever's still standing)
  // -------------------------------------------------------------
  clubs: [
    {
      name: "Fabrik",
      cat: "Electronic / Underground",
      tag: "The king 👑",
      area: "Humanes de Madrid (~20 km SW — destination club)",
      blurb: "Spain's cathedral of electronic music — voted Best Big Club in the Iberian Peninsula 2025. Carl Cox, Sven Väth, Marco Carola. 4,000+ capacity. You commit to the night.",
      pros: ["World-class techno lineups", "Huge production, renovated 2025, 7 bars + terrace", "Shuttle coaches from Callao from ~midnight"],
      cons: ["~20 km out — no quick exit once you're in", "Big & impersonal, all-nighter format"],
      meta: "Mainly Sat ~00:00–08:00+ · ~€15–25 advance · casual",
      web: "https://www.fabrikmadrid.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=Fabrik%20Av.%20de%20la%20Industria%2082%20Humanes%20de%20Madrid%2028970",
      ig: "https://www.instagram.com/fabrikmadrid/"
    },
    {
      name: "Teatro Kapital",
      cat: "Mainstream / Mixed",
      tag: "The everyone-pleaser",
      area: "Atocha · Calle de Atocha 125 (central)",
      blurb: "Madrid's legendary seven-floor megaclub — each floor a different genre (house, reggaeton, commercial, karaoke, lounge, rooftop). Something for everyone in a big group. The default big bachelor night.",
      pros: ["7 floors, 3,000+ cap — something for everyone", "Perfectly central", "Rooftop is a highlight"],
      cons: ["Pricey drinks inside", "Strict door — dress up & get on a guest list"],
      meta: "Wed–Sun ~23:00–06:00 · ~€18 · smart/elegant (collared shirt)",
      web: "https://teatrokapital.com/en/",
      maps: "https://www.google.com/maps/search/?api=1&query=Teatro%20Kapital%20Calle%20de%20Atocha%20125%2028012%20Madrid",
      ig: "https://www.instagram.com/teatrokapitaloficial/"
    },
    {
      name: "Teatro Barceló",
      cat: "Mainstream / Mixed",
      tag: "The glamorous one",
      area: "Tribunal/Malasaña · Calle Barceló 11 (central)",
      blurb: "The glamorous house-and-dance flagship in the storied old Pacha building — polished, selective, dressed-up. Top-3 Madrid club with premium VIP/bottle service.",
      pros: ["Genuinely glamorous multi-room space", "Quality house programming", "Premium VIP/bottle service"],
      cons: ["Strict, enforced door — dress sharp", "Expensive on marquee nights"],
      meta: "Fri/Sat to ~06:00 · ~€10–30 · strict glam dress code",
      web: "https://teatrobarcelo.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=Teatro%20Barcel%C3%B3%20Calle%20Barcel%C3%B3%2011%2028004%20Madrid",
      ig: "https://www.instagram.com/teatrobarcelo/"
    },
    {
      name: "Teatro Eslava (\"La Joy\")",
      cat: "Mainstream / Mixed",
      tag: "Cheap & central classic",
      area: "Sol · Calle del Arenal 11 (central)",
      blurb: "The historic theater-turned-club off Puerta del Sol (formerly Joy Eslava) — velvet-and-balcony grandeur with a reggaeton/pop soundtrack. Cheaper than the megaclubs and beautifully central.",
      pros: ["Gorgeous historic 19th-c. theater interior", "Unbeatable location at Sol", "Cheaper than the megaclubs"],
      cons: ["Calendar splits concerts vs club nights — check your date", "Crowd skews touristy, gets packed"],
      meta: "Thu–Sat ~00:00–06:00 · ~€8–12 · smart-casual",
      web: "https://teatroeslava.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=Teatro%20Eslava%20Joy%20Eslava%20Calle%20del%20Arenal%2011%2028013%20Madrid",
      ig: "https://www.instagram.com/teatroeslava/"
    },
    {
      name: "Independance Club",
      cat: "Mainstream / Mixed",
      tag: "Retro & themed nights",
      area: "Atocha · Calle de Atocha 127 (central)",
      blurb: "A central concert-hall-meets-club built on indie, rock and nostalgic 80s/90s/2000s nights, plus live tribute concerts. Looser and more music-led than the glossy mega-clubs — great sing-along energy for a group.",
      pros: ["Themed retro + live sing-along nights", "Central, real stage (720 cap)", "More 'show' than a standard club"],
      cons: ["Only Fri & Sat", "Event-driven — vibe varies by date, check the calendar"],
      meta: "Fri & Sat · night ~23:30–06:00 · price by event",
      web: "https://independanceclub.com/en",
      maps: "https://www.google.com/maps/search/?api=1&query=Independance%20Club%20Calle%20de%20Atocha%20127%2028012%20Madrid",
      ig: "https://www.instagram.com/independanceclub/"
    },
    {
      name: "Oh My Club",
      cat: "Mainstream / Mixed",
      tag: "Sleek & young",
      area: "Chamartín · Calle Rosario Pino 14 (north)",
      blurb: "A sleek, high-spec club in the financial district — house/reggaeton/commercial to a young international crowd under cutting-edge light & sound. Dress to impress.",
      pros: ["Large, modern, top-tier production", "Young international crowd", "Open every night, strong VIP"],
      cons: ["⚠️ 25+ door on Sat/Sun — check the whole group qualifies", "Away from central nightlife — plan transport"],
      meta: "Nightly ~00:00–06:00 · ~€16–21 · smart/elegant",
      web: "https://ohmyclub.es/web/inicio/",
      maps: "https://www.google.com/maps/search/?api=1&query=Oh%20My%20Club%20Calle%20Rosario%20Pino%2014%20Madrid",
      ig: "https://www.instagram.com/ohmyclubmadrid/"
    },
    {
      name: "Mondo Disko",
      cat: "Electronic / Underground",
      tag: "The connoisseur's central pick",
      area: "Tribunal · Calle de Barceló 11 (central)",
      blurb: "Madrid's veteran underground techno/house haunt (inside Sala But) — central, walkable, credible and curated since 1999. The pick for electronic purists who don't want to trek to Fabrik.",
      pros: ["Genuinely central & walkable", "Serious, respected techno/house credibility", "Intimate & authentic"],
      cons: ["Open Thu/Sat only (not Friday)", "Less spectacle than Fabrik"],
      meta: "Thu, Sat & holiday eves ~00:00–06:00 · ~€15–30 · 18+",
      web: "https://www.mondodisko.es/",
      maps: "https://www.google.com/maps/search/?api=1&query=Mondo%20Disko%20Calle%20de%20Barcel%C3%B3%2011%2028004%20Madrid",
      ig: "https://www.instagram.com/mondo_disko/"
    },
    {
      name: "LAB theClub",
      cat: "Electronic / Underground",
      tag: "Reference-grade sound",
      area: "Chamartín station (north — NOT Chueca)",
      blurb: "A sleek, big-stage electronic club inside Chamartín station — reference-grade d&b sound and top international DJs (Sven Väth, Stephan Bodzin). Polished and well-connected, but firmly north Madrid. (Note: the source doc said 'Chueca, small/intimate' — it's actually north & mid-large.)",
      pros: ["Reference-grade sound system", "Top international DJ bookings", "Superbly connected (metro/train/bus + parking)"],
      cons: ["Not small/intimate and not in Chueca", "Train-station setting feels less like a night out"],
      meta: "Thu–Sat ~00:00–05:30 · ~€20 · smart-casual",
      web: "https://www.labtheclub.com/en/",
      maps: "https://www.google.com/maps/search/?api=1&query=LAB%20theClub%20Estaci%C3%B3n%20de%20Chamart%C3%ADn%20Calle%20Agust%C3%ADn%20de%20Fox%C3%A1%2028036%20Madrid",
      ig: "https://www.instagram.com/lab.theclub/"
    }
  ],

  // -------------------------------------------------------------
  // SATURDAY HUNGOVER BRUNCH (fiber + energy + water)
  // -------------------------------------------------------------
  brunch: [
    {
      name: "Superchulo",
      tag: "Best recovery pick",
      area: "Malasaña/Chueca border · Calle de Fuencarral 74",
      blurb: "'Rainbow Food', plant-forward — açaí/smoothie bowls, avocado toast, omelettes and natural juices. The best match for a 'fiber + energy + water' recovery, open all day.",
      web: "https://superchulorestaurante.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=Superchulo%20Calle%20de%20Fuencarral%2074%2028004%20Madrid",
      ig: "https://www.instagram.com/superchulomadrid/"
    },
    {
      name: "Cocuiza Brunch & Coffee",
      tag: "La Latina classic",
      area: "La Latina · Calle del Almendro 22",
      blurb: "Eggs Benedict, chilaquiles, pancakes, Caesar & veg bowls and specialty coffee — generous portions in lively La Latina. Takes bookings (good for a big group). Closes 16:00–17:00.",
      web: "https://cocuizabrunch.es/",
      maps: "https://www.google.com/maps/search/?api=1&query=Cocuiza%20Brunch%20%26%20Coffee%20Calle%20del%20Almendro%2022%2028005%20Madrid",
      ig: "https://www.instagram.com/cocuiza_brunch/"
    },
    {
      name: "Loca Obsesión",
      tag: "Trendy Malasaña brunch",
      area: "Malasaña · Calle del Molino de Viento 4",
      blurb: "Top-rated (~4.9★), trendy brunch fusion — egg dishes and sweet/savory pancakes. Phone booking only; groups of 6+ should call ≥24h ahead. (IG is @locaobsesion_brunch — the _madrid handle is their TikTok.)",
      web: "https://locaobsesionrestaurante.eatbu.com/?lang=en",
      maps: "https://www.google.com/maps/search/?api=1&query=Loca%20Obsesi%C3%B3n%20Brunch%20Calle%20del%20Molino%20de%20Viento%204%2028004%20Madrid",
      ig: "https://www.instagram.com/locaobsesion_brunch/"
    },
    {
      name: "Ojalá Beach Bar",
      tag: "Quirky & open late",
      area: "Malasaña · Calle de San Andrés 1",
      blurb: "All-day brunch in a quirky sand-floor basement — smoothie bowls, juices, big breakfasts. Fun, novel vibe; open Fri–Sat to 01:30 if recovery needs to wait.",
      web: "https://grupolamusa.com/en/restaurant-ojala/",
      maps: "https://www.google.com/maps/search/?api=1&query=Ojal%C3%A1%20Beach%20Bar%20Calle%20de%20San%20Andr%C3%A9s%201%2028004%20Madrid",
      ig: "https://www.instagram.com/restauranteojala/"
    }
  ],

  // -------------------------------------------------------------
  // FRIDAY ARRIVAL LUNCH (city center, group)
  // -------------------------------------------------------------
  lunch: [
    {
      name: "Bar La Campana",
      area: "Off Plaza Mayor · Calle Botoneras 6",
      blurb: "The legendary bocadillo de calamares (~€4.50). Casual, counter, fast and loud — the perfect icebreaker first stop the minute you land.",
      web: null,
      maps: "https://www.google.com/maps/search/?api=1&query=Bar%20La%20Campana%20Calle%20Botoneras%206%2028012%20Madrid",
      ig: "https://www.instagram.com/lacampana.oficial/"
    },
    {
      name: "Mercado de San Miguel",
      area: "Next to Plaza Mayor · Plaza de San Miguel",
      blurb: "Buzzy gourmet market — jamón, oysters, croquetas, vermouth, paella. Touristy and pricey but classic; easy to roam with a drink in hand while the group gathers.",
      web: "https://mercadodesanmiguel.es/en/",
      maps: "https://www.google.com/maps/search/?api=1&query=Mercado%20de%20San%20Miguel%20Plaza%20de%20San%20Miguel%2028005%20Madrid",
      ig: "https://www.instagram.com/mercadosanmiguel/"
    },
    {
      name: "Casa Lucas",
      area: "La Latina · Calle de la Cava Baja 30",
      blurb: "Small, lively, quality-focused taberna on Cava Baja — pinchos, sharing raciones, croquetas, strong wine list. Bookable, so you can guarantee a seat for the group.",
      web: "https://casalucas.es/",
      maps: "https://www.google.com/maps/search/?api=1&query=Casa%20Lucas%20Calle%20Cava%20Baja%2030%2028005%20Madrid",
      ig: "https://www.instagram.com/casalucas_madrid/"
    },
    {
      name: "Taberna La Chata",
      area: "La Latina · Calle de la Cava Baja 24",
      blurb: "Classic tiled, lively taberna — croquetas, jamón, callos with a caña or vermut. On Cava Baja with 50+ bars to hop afterwards. Group-friendly and very Madrid.",
      web: null,
      maps: "https://www.google.com/maps/search/?api=1&query=Taberna%20La%20Chata%20Calle%20Cava%20Baja%2024%2028005%20Madrid",
      ig: "https://www.instagram.com/tabernalachata/"
    }
  ],

  // -------------------------------------------------------------
  // LUGGAGE (Bounce + backup)
  // -------------------------------------------------------------
  luggage: [
    {
      name: "Bounce",
      tag: "\"Uber for luggage\"",
      blurb: "Drop your backpacks at a partner shop/hotel/locker around the city and explore hands-free. ~270+ spots across Madrid (Sol, Atocha, Gran Vía, Plaza Mayor, Malasaña…). Book in the app, get €10,000 protection + free cancellation.",
      price: "From ~€3.50–4.50 / bag / day",
      web: "https://bounce.com/luggage-storage/madrid"
    },
    {
      name: "Radical Storage",
      tag: "Backup option",
      blurb: "Same concept, 40+ areas across Madrid including the airport. A solid fallback if Bounce has no convenient spot near the accommodation.",
      price: "From ~€3.40–5 / bag / day · €3,000/bag guarantee",
      web: "https://radicalstorage.com/luggage-storage/madrid"
    }
  ]
};
