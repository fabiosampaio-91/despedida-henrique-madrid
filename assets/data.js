/* =============================================================
   DESPEDIDA HENRIQUE ELVAS · MADRID
   Fonte única de verdade para todos os locais.
   Todos os links foram verificados (HTTP 200 + conteúdo) em junho de 2026.
   Ver SOURCES.md / DECISIONS.md para a proveniência e notas de verificação.
   ============================================================= */

const DATA = {
  // -------------------------------------------------------------
  // ROOFTOPS (jantar de sexta + pôr do sol + pré, antes da festa).
  // mood: "festa" (mais animado, música/DJ) | "vista" (mais tranquilo, vistas)
  // -------------------------------------------------------------
  rooftops: [
    {
      name: "Ginkgo Sky Bar",
      tag: "TOP · SEXTA",
      mood: "festa",
      area: "Plaza de España · VP Plaza España Design (12.º andar)",
      blurb: "O melhor pôr do sol da cidade, com o Palácio Real e o Templo de Debod à frente, mais um verdadeiro DJ à sexta. Jantar, pôr do sol e pré, tudo no mesmo sítio. Encaixa na ideia da noite: bebes primeiro e ficas enquanto estiver bom.",
      pros: ["Melhor orientação de pôr do sol da cidade", "DJ ao vivo todas as sextas (sessões deep house a partir das ~23:30)", "Fecha tarde (02:30), dá para esticar"],
      cons: ["Preços de 5 estrelas e dress code smart casual", "Um bocado fora do eixo da Gran Vía"],
      hours: "Sex 13:00 a 02:30 · cozinha até às ~23:00",
      reservations: "Recomendada, jantar (mediterrânico/asiático). +34 915 955 512 · taxa de terraço ~10 a 16€ a partir das 16:00",
      web: "https://www.ginkgoskybarmadrid.com/en/",
      maps: "https://www.google.com/maps/search/?api=1&query=Ginkgo%20Sky%20Bar%20Plaza%20de%20Espa%C3%B1a%203%20Madrid",
      ig: "https://www.instagram.com/ginkgoskybar/"
    },
    {
      name: "Doña Luz, The Madrid Rooftop",
      tag: "DJ TODAS AS NOITES",
      mood: "festa",
      area: "Centro · Hotel B&B (11.º andar), Calle de la Montera 10 a 12",
      blurb: "Ambiente de festa de raiz, com DJ sex/sáb por volta das 20:00 à 01:00. Jantar, pôr do sol e pré num só sítio, a dois minutos a pé da Puerta del Sol. Flui lindamente para a noite.",
      pros: ["Ambiente de festa de raiz (DJ sex/sáb)", "Jantar, pôr do sol e pré tudo junto", "A pé para a noite em Sol"],
      cons: ["Vista mais acolhedora e pequena que a das torres", "Às sextas a reserva é praticamente obrigatória"],
      hours: "Verão 14:00 a 02:00",
      reservations: "Recomendada, cozinha sul-americana e mediterrânica. +34 91 731 6757",
      web: "https://donaluzmadrid.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=Do%C3%B1a%20Luz%20Rooftop%20Montera%2010%20Madrid",
      ig: "https://www.instagram.com/donaluz_madrid/"
    },
    {
      name: "360° Rooftop Bar · Riu Plaza España",
      tag: "O FACTOR WOW",
      mood: "festa",
      area: "Plaza de España · Edificio España (pisos 26 a 27)",
      blurb: "A panorâmica de fazer cair o queixo, 360° reais sobre a cidade inteira, mais a famosa passagem de vidro entre as torres. O sítio para a foto e para os copos ao pôr do sol, com ambiente animado à noite.",
      pros: ["Vista panorâmica imbatível", "A passagem de vidro é uma diversão para o grupo", "Animação com DJ ao fim do dia"],
      cons: ["Entrada paga e muita gente", "O terraço aberto não aceita reservas, comida em formato tapas"],
      hours: "Terraço todos os dias 11:00 a 01:00 · 360° Sky Bar (interior) 18:00 a 02:00",
      reservations: "Terraço sem reserva. Reserva o gastrobar El Edén (piso 26) para jantar e depois sobe. +34 91 831 4510",
      web: "https://www.riu360rooftopbar.com/en/",
      maps: "https://www.google.com/maps/search/?api=1&query=360%20Rooftop%20Bar%20Riu%20Plaza%20Espa%C3%B1a%20Madrid",
      ig: "https://www.instagram.com/hotelriuplazaespana/"
    },
    {
      name: "Azotea del Círculo de Bellas Artes",
      tag: "A MELHOR VISTA",
      mood: "vista",
      area: "Centro · Círculo de Bellas Artes (7.º andar), Calle de Alcalá 42",
      blurb: "A icónica skyline 360° de Madrid: a cúpula do Metropolis, a Gran Vía, a serra ao fundo. Restaurante completo, sessões de DJ no verão e super central para depois cair na noite. Mais para vistas e copos tranquilos.",
      pros: ["A melhor skyline de Madrid", "Jantar, pôr do sol e cocktails ao fim da noite", "Central para o crawl de bares em Malasaña/Letras"],
      cons: ["Cheio e turístico", "Taxa de elevador e fila para um grupo", "Acalma por volta das 02:00"],
      hours: "Sex 10:00 a 02:00",
      reservations: "Sim, restaurante do chef Manuel Berganza. Online · 91 117 00 62 · WhatsApp +34 910 059 171",
      web: "https://azoteadelcirculo.azoteagrupo.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=Azotea%20del%20C%C3%ADrculo%20de%20Bellas%20Artes%20Alcal%C3%A1%2042%20Madrid",
      ig: "https://www.instagram.com/azoteadelcirculo/"
    },
    {
      name: "Picalagartos Sky Bar",
      tag: "O MAIS CENTRAL",
      mood: "vista",
      area: "Gran Vía 21 · NH Collection (pisos 8 e 9)",
      blurb: "Vista icónica a direito sobre os néons da Gran Vía. Mesmo no centro, por isso é o rooftop mais fácil para sair logo para a noite. Mais de vista e copos do que de festa.",
      pros: ["Localização central imbatível", "O restaurante aceita reservas", "Fácil entrar a pé em Malasaña/Chueca depois"],
      cons: ["O bar do 9.º piso é por ordem de chegada (o grupo pode dividir-se)", "Muito turístico"],
      hours: "Restaurante 10:00 a 02:00 · bar do terraço 15:00 a 02:00",
      reservations: "Restaurante reservável (site / Resy / +34 915 30 17 61); bar do 9.º piso por ordem de chegada",
      web: "https://picalagartos.azoteagrupo.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=Picalagartos%20Sky%20Bar%20Gran%20V%C3%ADa%2021%20Madrid",
      ig: "https://www.instagram.com/picalagartosmad/"
    }
  ],

  // -------------------------------------------------------------
  // ZONAS DE NOITE (foco na zona, com exemplos lá dentro)
  // -------------------------------------------------------------
  zones: [
    {
      name: "Malasaña",
      vibe: "Jovem, alternativa, virada para a música",
      desc: "O coração alternativo/hipster: bares vintage, música indie e cocktails de autor à volta da Plaza del Dos de Mayo. Ruas densas, ou seja, bar-hopping sem esforço. O sítio natural para aterrar depois do rooftop.",
      bars: [
        { name: "1862 Dry Bar", note: "Clássicos estilo lei seca, num espaço intimista. O abre-bocas perfeito.", web: "https://1862drybar.myrestoo.net/es/reservar", ig: "https://www.instagram.com/1862drybar/" },
        { name: "Macera Taller Bar", note: "Cocktails feitos com destilados macerados na própria casa.", web: "https://www.maceradrinks.com/sobrenosotros/", ig: "https://www.instagram.com/maceradrinks/" }
      ]
    },
    {
      name: "Chueca",
      vibe: "Festiva, inclusiva, festa até de manhã",
      desc: "Bairro LGBTQ+ e zona séria de cocktails à volta da Plaza de Chueca. Uma das áreas mais divertidas e com mais energia da cidade para um grupo que quer que a noite não pare.",
      bars: [
        { name: "Angelita Madrid", note: "Bar de vinhos ao nível da rua e um cocktail lounge muito elogiado na cave.", web: "https://madrid-angelita.es/", ig: "https://www.instagram.com/angelitamadrid/" }
      ]
    },
    {
      name: "Barrio de las Letras (Huertas)",
      vibe: "Animada, central, com qualidade",
      desc: "O coração tradicional da noite de Madrid: a Calle de las Huertas, pedonal, cheia de bares, a misturar tabernas históricas com cocktail bars de classe mundial. É aqui que estão mesmo o Salmon Guru e o Inclán.",
      bars: [
        { name: "Salmon Guru", note: "Templo de cocktails do World's 50 Best, teatral e divertido.", web: "https://salmonguru.es/en/", ig: "https://www.instagram.com/salmonguru/" },
        { name: "Viva Madrid 1856", note: "Taberna histórica de azulejos renascida pela mão de Diego Cabrera.", web: "https://www.vivamadrid1856.com/en/", ig: "https://www.instagram.com/vivamadrid1856/" }
      ]
    },
    {
      name: "La Latina",
      vibe: "Tapeo + cañeo clássico",
      desc: "A Calle Cava Baja: cerca de 50 bares de tapas em 300 metros. O crawl por excelência de 'caña + tapa, depois bora andando'. Animado, tradicional, mistura locais e turistas.",
      bars: [
        { name: "Casa Lucas", note: "Taberna pequena e famosa, raciones para partilhar e boa carta de vinhos.", web: "https://casalucas.es/", ig: "https://www.instagram.com/casalucas_madrid/" }
      ]
    },
    {
      name: "Lavapiés",
      vibe: "Boémia, diversa, sem pretensões",
      desc: "O bairro mais multicultural de Madrid: sabores do mundo, cantos indie, esplanadas na Calle Argumosa e cañas baratas e autênticas. Menos turístico, mais real.",
      bars: [
        { name: "Bodegas Lo Máximo", note: "Bar de cañas de 1948, com boleros ao vivo.", web: "https://bodegaslomaximo.es/", ig: "https://www.instagram.com/bodegaslomaximo/" }
      ]
    },
    {
      name: "Salesas / Justicia",
      vibe: "Polida, fashion, mais adulta",
      desc: "O recanto chique a norte de Chueca: bares de vinho natural, speakeasies de design, uma paragem mais classuda. Casa do Jack's Library.",
      bars: [
        { name: "Jack's Library", note: "Speakeasy escondido por trás de uma florista a funcionar.", web: "https://www.jackslibrary.com/", ig: "https://www.instagram.com/jacks_library/" }
      ]
    }
  ],

  // Bares 'especiais' que valem o desvio (do doc original)
  specialBars: [
    {
      name: "Bad Company 1920",
      area: "Junto a Callao · Calle de Miguel Moya 8",
      blurb: "Um speakeasy: um bar escondido, ao estilo da lei seca dos anos 20, em que entras dando uma password secreta. A password está no Instagram deles e muda mais ou menos todos os meses. Lá dentro, cocktails disfarçados de ovos Fabergé e bíblias-cantil, ao som de Motown e soul.",
      note: "Como funciona: vês a password atual no Instagram, tocas à campainha e dizes a password à porta. Sem website, só Instagram. Não aceita reservas ao sábado e tem pouca lotação, por isso pode haver fila.",
      web: null,
      maps: "https://www.google.com/maps/search/?api=1&query=Bad%20Company%201920%20Calle%20de%20Miguel%20Moya%208%2028004%20Madrid",
      ig: "https://www.instagram.com/badcompany_1920/"
    },
    {
      name: "Inclán Brutal Bar",
      area: "Barrio de las Letras · Calle de Álvarez Gato 4",
      blurb: "O templo teatral de cocktails: aqui os copos são preparados como um espetáculo, à tua frente. Três espaços temáticos (cozinha aberta, uma 'biblioteca de luxo' e um pátio), cocktails premiados e cozinha até tarde. Ideal para um grupo que quer comer e beber ao mesmo tempo.",
      note: "Reserva para grupos: +34 910 23 80 38 / reservas@inclanbrutalbar.com",
      web: "https://inclanbrutalbar.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=Incl%C3%A1n%20Brutal%20Bar%20Calle%20de%20%C3%81lvarez%20Gato%204%2028012%20Madrid",
      ig: "https://www.instagram.com/inclanbrutalbaroficial/"
    },
    {
      name: "Josealfredo",
      area: "Centro · Calle de Silva 22 (perto de Callao)",
      blurb: "O clássico retro aberto até tarde: um bar comprido, de luz baixa, que ajudou a lançar o boom dos cocktails em Madrid. Soul, funk e jazz nas colunas, decoração retro com toques de leopardo e umas 30 gin-tonics. O ambiente sobe depois da meia-noite e vai até às 03:30.",
      note: "Soul/funk gravado e DJs pontuais (não é jazz ao vivo todas as noites). Entras sem reserva, enche tarde. +34 915 214 960",
      web: "https://www.josealfredobar.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=Josealfredo%20Bar%20Calle%20de%20Silva%2022%2028004%20Madrid",
      ig: "https://www.instagram.com/josealfredobar/"
    }
  ],

  // -------------------------------------------------------------
  // ATIVIDADES DE SÁBADO À TARDE (votar numa)
  // -------------------------------------------------------------
  activities: [
    {
      id: "beerbike",
      name: "Beer Bike Madrid",
      emoji: "🚲🍺",
      tag: "A favorita do pessoal",
      blurb: "Um bar sobre rodas de 18 lugares que pedala pelo centro de Madrid (Prado, Cibeles, Atocha) com bar aberto (cerveja/sangria), música e um condutor profissional. Toda a gente junta, descontraído e social. A escolha de topo do doc original.",
      pros: ["Toda a gente junta, super social", "Bar aberto a bordo + percurso central giro", "Descontraído, divertido e fotogénico", "Ficamos na cidade, sem viagens"],
      cons: ["Só dura ~1 hora", "Preço sob orçamento (sem tabela pública)", "Exposto ao calor de junho", "Fim em rooftop não confirmado pelo operador, perguntar ao reservar"],
      meta: "~1h · 8 a 15 pessoas · reservar com ≥1 mês de antecedência",
      web: "https://yourspainweekend.com/en/stay-in-madrid/madrid-day-activities/beer-bike-madrid/",
      maps: "https://www.google.com/maps/search/?api=1&query=Beer%20Bike%20Madrid%20Plaza%20del%20Emperador%20Carlos%20V%20Madrid"
    },
    {
      id: "beertasting",
      name: "Craft Beer Tour, Real Flavor of Madrid",
      emoji: "🍻🗺️",
      tag: "Pub-crawl com guia",
      blurb: "Uma caminhada guiada de ~3,5h por cervejarias artesanais, com provas, conversa com produtores e petiscos. Um pub-crawl com guia especialista, à prova de chuva (interior). Sítios giros, mas ritmo mais estruturado e marcado.",
      pros: ["Guia local autêntico e conhecedor", "Comida incluída; à prova de chuva (interior)", "Boa relação qualidade/preço para 3,5 horas", "Ficamos na cidade"],
      cons: ["Reservado via GetYourGuide (revendedor, não o operador)", "Ritmo mais lento e 'educativo'", "Ponto de encontro só revelado depois de reservar"],
      meta: "~3,5h · ~69 a 75€ por pessoa · reservar online",
      web: "https://www.getyourguide.com/madrid-l46/madrid-craft-local-beer-tour-t685354/",
      maps: "https://www.google.com/maps/search/?api=1&query=Madrid%20Craft%20Local%20Beer%20Tour%20Real%20Flavor%20of%20Madrid"
    },
    {
      id: "karting",
      name: "Karting · Carlos Sainz Center",
      emoji: "🏎️🏁",
      tag: "Adrenalina pura",
      blurb: "Uma pista de karts de 450m que faz despedidas com frequência. Genuinamente divertido e competitivo, MAS atenção ao senão: fica longe da cidade e come a tarde toda.",
      pros: ["Muita adrenalina e competição", "Sessões flexíveis de 10 min", "Boas instalações para grupos"],
      cons: ["~30 km fora (só Las Rozas aberto, La Ermita fechado)", "A viagem ida-e-volta come a tarde toda", "O calor na pista em junho é brutal", "Pouco tempo real ao volante"],
      meta: "Las Rozas · ~22 a 44€ por pessoa · Sáb 10:00 a 00:00 · reservar com antecedência",
      web: "https://www.kartcsainz.com/en/karting/karting-las-rozas",
      maps: "https://www.google.com/maps/search/?api=1&query=Carlos%20Sainz%20Center%20Calle%20Bruselas%203%20Las%20Rozas%20Madrid"
    }
  ],

  // -------------------------------------------------------------
  // JANTAR QUE VIRA FESTA (jantar tardio ~22-23h que vira festa)
  // -------------------------------------------------------------
  dinnerClubs: [
    {
      name: "Perrachica",
      tag: "Sugestão do Gonçalo · jantar que vira festa",
      area: "Chamberí · Calle Eloy Gonzalo 10 (perto do metro Quevedo) · Grupo Larrumba",
      blurb: "Um sítio de jantar e copos com menu cosmopolita, dois bares de cocktails e uma decoração colonial linda. A partir do final da noite há música, e ao fim de semana fica até às ~02:00/02:30. Não é uma discoteca a sério, mas o ambiente de cocktails e festa anima mesmo a sério à medida que a noite avança. Continua pela noite.",
      pros: ["Encaixa no plano: jantar bem e depois ficar pela noite", "Dois bares de cocktails + decoração espetacular", "Chamberí, central e perto do metro Quevedo"],
      cons: ["Não é discoteca completa, é restaurante que anima", "Reservar cedo ao fim de semana"],
      music: "DJ qui/sex/sáb a partir das ~23:30 · aberto até às ~02:00/02:30 (sex/sáb)",
      reservations: "+34 917 377 775 · reservar online no site do Grupo Larrumba",
      web: "https://grupolarrumba.com/restaurante/perrachica/",
      maps: "https://www.google.com/maps/search/?api=1&query=Perrachica%20Calle%20Eloy%20Gonzalo%2010%2028010%20Madrid",
      ig: "https://www.instagram.com/perrachica/"
    },
    {
      name: "Panthera",
      tag: "O mais 'jantar e dança'",
      area: "Chamberí · Calle Miguel Ángel 21",
      blurb: "O espetáculo 'Dinner & Dance' clássico de Madrid: estátuas de panteras negras, luz baixa, pratos em forma de pantera e menu nikkei-latino. À meia-noite transforma-se numa discoteca exclusiva com DJ residente.",
      pros: ["É o que melhor encaixa no 'jantar tardio que vira discoteca à meia-noite', tudo num só sítio", "Ambiente marcante e fotogénico, feito para despedidas", "Chamberí central"],
      cons: ["⚠️ TripAdvisor ~2,9/5, vai pelo ambiente, não pela comida", "Relatos de serviço apressado e pressão para vender garrafas", "Mesas pequenas para grupos, reservar cedo (menus de grupo 10+)"],
      music: "Deep house / tribal / hits a partir das 00:00 · até às ~03:00",
      reservations: "+34 689 87 91 14 · reservar com ≥1 semana ao fim de semana",
      web: "https://www.pantheramadrid.com/home-english/",
      maps: "https://www.google.com/maps/search/?api=1&query=Panthera%20Madrid%20Calle%20Miguel%20%C3%81ngel%2021%2028010%20Madrid",
      ig: "https://www.instagram.com/pantheramadrid/"
    },
    {
      name: "La Mamona",
      tag: "Come bem e depois dança na mesa",
      area: "Castellana · Paseo de la Castellana 62",
      blurb: "O melhor meio-termo: um restaurante mediterrânico de carne genuinamente bom (jarrete de vaca, polvo grelhado) que flui para música ao vivo e sessões de DJ. Mais um 'jantar de festa' do que uma discoteca dura.",
      pros: ["Comida mesmo boa + música ao vivo/DJ", "Ótimo para um grupo que quer comer bem primeiro", "Jardim/esplanada, 50+ vinhos"],
      cons: ["Restaurante festivo, não é discoteca completa", "Reserva feita pelo site do grupo"],
      music: "Música ao vivo + DJ qua a sáb · relatos de DJ até às ~03:00",
      reservations: "+34 910 88 50 40 · reservas@grupolalala.com",
      web: "https://grupolalala.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=La%20Mamona%20Castellana%20Paseo%20de%20la%20Castellana%2062%2028046%20Madrid",
      ig: "https://www.instagram.com/lamamona_madrid/"
    }
  ],

  // -------------------------------------------------------------
  // DISCOTECAS (para quem ainda aguentar)
  // -------------------------------------------------------------
  clubs: [
    {
      name: "Fabrik",
      cat: "Electronic / Underground",
      tag: "O rei 👑",
      area: "Humanes de Madrid (~20 km a SO, discoteca-destino)",
      blurb: "A catedral da música eletrónica em Espanha, eleita Melhor Clube Grande da Península Ibérica 2025. Carl Cox, Sven Väth, Marco Carola. Lotação 4.000+. Quem vai, compromete-se com a noite.",
      pros: ["Lineups de techno de classe mundial", "Produção enorme, renovada em 2025, 7 bares + terraço", "Autocarros-shuttle a partir de Callao desde a ~meia-noite"],
      cons: ["~20 km fora, sem saída rápida depois de entrar", "Grande e impessoal, formato de noite inteira"],
      meta: "Sobretudo Sáb ~00:00 a 08:00+ · ~15 a 25€ antecipado · casual",
      web: "https://www.fabrikmadrid.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=Fabrik%20Av.%20de%20la%20Industria%2082%20Humanes%20de%20Madrid%2028970",
      ig: "https://www.instagram.com/fabrikmadrid/"
    },
    {
      name: "Teatro Kapital",
      cat: "Mainstream / Mixed",
      tag: "Agrada a todos",
      area: "Atocha · Calle de Atocha 125 (central)",
      blurb: "A lendária megadiscoteca de sete andares de Madrid, cada andar com um género (house, reggaeton, comercial, karaoke, lounge, rooftop). Há algo para toda a gente num grupo grande. A noite de despedida grande por defeito.",
      pros: ["7 andares, lotação 3.000+, há de tudo", "Perfeitamente central", "O rooftop é um ponto alto"],
      cons: ["Bebidas caras lá dentro", "Porta exigente, vai bem vestido e mete-te numa guest list"],
      meta: "Qua a dom ~23:00 a 06:00 · ~18€ · smart/elegante (camisa de colarinho)",
      web: "https://teatrokapital.com/en/",
      maps: "https://www.google.com/maps/search/?api=1&query=Teatro%20Kapital%20Calle%20de%20Atocha%20125%2028012%20Madrid",
      ig: "https://www.instagram.com/teatrokapitaloficial/"
    },
    {
      name: "Opium Madrid",
      cat: "Mainstream / Mixed",
      tag: "Discoteca polida e famosa",
      area: "Chamberí · Calle José Abascal 56",
      blurb: "Uma das discotecas mais famosas e polidas de Madrid, com restaurante anexo. O jantar é secundário: isto é uma discoteca-com-restaurante, ideal se a prioridade for a pista e as mesas VIP, não a comida. (Antes estava no jantar, mas pertence aqui: é discoteca.)",
      pros: ["Discoteca famosa e com muita energia de DJ", "Esquema de mesas VIP feito para despedidas", "Central"],
      cons: ["A parte de 'jantar' é a mais fraca do grupo", "A discoteca só arranca tarde (~23:00+)"],
      meta: "House/dance (Main) + hits (Purple Room) · até às ~06:00 · ~23:00+",
      web: "https://opiummadrid.com/en/",
      maps: "https://www.google.com/maps/search/?api=1&query=Opium%20Madrid%20Calle%20Jos%C3%A9%20Abascal%2056%2028003%20Madrid",
      ig: "https://www.instagram.com/opiummadrid/"
    },
    {
      name: "Teatro Barceló",
      cat: "Mainstream / Mixed",
      tag: "A glamorosa",
      area: "Tribunal/Malasaña · Calle Barceló 11 (central)",
      blurb: "A nave-mãe glamorosa de house e dance no histórico edifício do antigo Pacha: polida, selectiva, gente bem vestida. Top-3 das discotecas de Madrid, com serviço VIP/garrafas premium.",
      pros: ["Espaço multi-sala genuinamente glamoroso", "Programação de house de qualidade", "Serviço VIP/garrafas premium"],
      cons: ["Porta exigente e cumprida, vai aperaltado", "Caro em noites de cartaz"],
      meta: "Sex/Sáb até às ~06:00 · ~10 a 30€ · dress code glam exigente",
      web: "https://teatrobarcelo.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=Teatro%20Barcel%C3%B3%20Calle%20Barcel%C3%B3%2011%2028004%20Madrid",
      ig: "https://www.instagram.com/teatrobarcelo/"
    },
    {
      name: "Teatro Eslava (\"La Joy\")",
      cat: "Mainstream / Mixed",
      tag: "Barato e central, um clássico",
      area: "Sol · Calle del Arenal 11 (central)",
      blurb: "O histórico teatro transformado em discoteca a dois passos da Puerta del Sol (antigo Joy Eslava): grandiosidade de veludo e balcões, com banda sonora de reggaeton/pop. Mais barato que as megadiscotecas e lindamente central.",
      pros: ["Interior de teatro histórico do séc. XIX lindíssimo", "Localização imbatível em Sol", "Mais barato que as megadiscotecas"],
      cons: ["O calendário alterna concertos e noites de discoteca, confirma a tua data", "Público mais turístico, enche muito"],
      meta: "Qui a sáb ~00:00 a 06:00 · ~8 a 12€ · smart casual",
      web: "https://teatroeslava.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=Teatro%20Eslava%20Joy%20Eslava%20Calle%20del%20Arenal%2011%2028013%20Madrid",
      ig: "https://www.instagram.com/teatroeslava/"
    },
    {
      name: "Independance Club",
      cat: "Mainstream / Mixed",
      tag: "Retro e noites temáticas",
      area: "Atocha · Calle de Atocha 127 (central)",
      blurb: "Uma sala de concertos-meets-discoteca central, feita de indie, rock e noites nostálgicas de 80s/90s/2000s, mais concertos-tributo ao vivo. Mais solta e mais musical que as megadiscotecas brilhantes. Boa energia de cantar em grupo.",
      pros: ["Noites retro temáticas + cantorias ao vivo", "Central, palco a sério (lotação 720)", "Mais 'espetáculo' que uma discoteca normal"],
      cons: ["Só sex e sáb", "Depende do evento, o ambiente varia com a data, vê o calendário"],
      meta: "Sex e sáb · noite ~23:30 a 06:00 · preço por evento",
      web: "https://independanceclub.com/en",
      maps: "https://www.google.com/maps/search/?api=1&query=Independance%20Club%20Calle%20de%20Atocha%20127%2028012%20Madrid",
      ig: "https://www.instagram.com/independanceclub/"
    },
    {
      name: "Oh My Club",
      cat: "Mainstream / Mixed",
      tag: "Moderna e jovem",
      area: "Chamartín · Calle Rosario Pino 14 (norte)",
      blurb: "Uma discoteca moderna e bem equipada na zona financeira: house/reggaeton/comercial para um público jovem internacional, com som e luz de ponta. Vai impecável.",
      pros: ["Grande, moderna, produção de topo", "Público jovem internacional", "Aberta todas as noites, VIP forte"],
      cons: ["⚠️ Porta 25+ ao sáb/dom, confirma que o grupo todo passa", "Longe da noite central, planeia o transporte"],
      meta: "Todas as noites ~00:00 a 06:00 · ~16 a 21€ · smart/elegante",
      web: "https://ohmyclub.es/web/inicio/",
      maps: "https://www.google.com/maps/search/?api=1&query=Oh%20My%20Club%20Calle%20Rosario%20Pino%2014%20Madrid",
      ig: "https://www.instagram.com/ohmyclubmadrid/"
    },
    {
      name: "Mondo Disko",
      cat: "Electronic / Underground",
      tag: "A escolha central dos entendidos",
      area: "Tribunal · Calle de Barceló 11 (central)",
      blurb: "O veterano refúgio underground de techno/house de Madrid (dentro da Sala But): central, a pé, credível e curado desde 1999. A escolha para puristas da eletrónica que não querem ir até Fabrik.",
      pros: ["Genuinamente central e a pé", "Credibilidade séria e respeitada em techno/house", "Intimista e autêntico"],
      cons: ["Aberto só qui/sáb (não à sexta)", "Menos espetáculo que Fabrik"],
      meta: "Qui, sáb e vésperas de feriado ~00:00 a 06:00 · ~15 a 30€ · 18+",
      web: "https://www.mondodisko.es/",
      maps: "https://www.google.com/maps/search/?api=1&query=Mondo%20Disko%20Calle%20de%20Barcel%C3%B3%2011%2028004%20Madrid",
      ig: "https://www.instagram.com/mondo_disko/"
    },
    {
      name: "LAB theClub",
      cat: "Electronic / Underground",
      tag: "Som de referência",
      area: "Estação de Chamartín (norte, NÃO Chueca)",
      blurb: "Uma discoteca eletrónica moderna e de palco grande dentro da estação de Chamartín: som de referência e top DJs internacionais (Sven Väth, Stephan Bodzin). Polida e bem servida de transportes, mas claramente no norte de Madrid. (Nota: o doc original dizia 'Chueca, pequena/intimista', mas é a norte e média-grande.)",
      pros: ["Sistema de som de referência", "Cartazes de DJs internacionais de topo", "Super bem ligada (metro/comboio/autocarro + estacionamento)"],
      cons: ["Não é pequena/intimista nem fica em Chueca", "O cenário de estação dá menos sensação de noite fora"],
      meta: "Qui a sáb ~00:00 a 05:30 · ~20€ · smart casual",
      web: "https://www.labtheclub.com/en/",
      maps: "https://www.google.com/maps/search/?api=1&query=LAB%20theClub%20Estaci%C3%B3n%20de%20Chamart%C3%ADn%20Calle%20Agust%C3%ADn%20de%20Fox%C3%A1%2028036%20Madrid",
      ig: "https://www.instagram.com/lab.theclub/"
    }
  ],

  // -------------------------------------------------------------
  // BRUNCH DE RESSACA DE SÁBADO (fibra + energia + água)
  // -------------------------------------------------------------
  brunch: [
    {
      name: "Superchulo",
      tag: "Melhor escolha de recuperação",
      area: "Fronteira Malasaña/Chueca · Calle de Fuencarral 74",
      blurb: "'Rainbow Food', muito vegetal: bowls de açaí/smoothie, tosta de abacate, omeletas e sumos naturais. O melhor encaixe para uma recuperação de 'fibra + energia + água', aberto o dia todo.",
      web: "https://superchulorestaurante.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=Superchulo%20Calle%20de%20Fuencarral%2074%2028004%20Madrid",
      ig: "https://www.instagram.com/superchulomadrid/"
    },
    {
      name: "Cocuiza Brunch & Coffee",
      tag: "Clássico de La Latina",
      area: "La Latina · Calle del Almendro 22",
      blurb: "Ovos Benedict, chilaquiles, panquecas, bowls de César e vegetais e café de especialidade. Doses generosas na animada La Latina. Aceita reservas (bom para um grupo grande). Fecha entre as 16:00 e as 17:00.",
      web: "https://cocuizabrunch.es/",
      maps: "https://www.google.com/maps/search/?api=1&query=Cocuiza%20Brunch%20%26%20Coffee%20Calle%20del%20Almendro%2022%2028005%20Madrid",
      ig: "https://www.instagram.com/cocuiza_brunch/"
    },
    {
      name: "Loca Obsesión",
      tag: "Brunch trendy de Malasaña",
      area: "Malasaña · Calle del Molino de Viento 4",
      blurb: "Muito bem avaliado (~4,9★), brunch fusão trendy: pratos de ovos e panquecas doces/salgadas. Reserva só por telefone; grupos de 6+ devem ligar com ≥24h de antecedência. (O IG é @locaobsesion_brunch, o _madrid é o TikTok deles.)",
      web: "https://locaobsesionrestaurante.eatbu.com/?lang=en",
      maps: "https://www.google.com/maps/search/?api=1&query=Loca%20Obsesi%C3%B3n%20Brunch%20Calle%20del%20Molino%20de%20Viento%204%2028004%20Madrid",
      ig: "https://www.instagram.com/locaobsesion_brunch/"
    },
    {
      name: "Ojalá Beach Bar",
      tag: "Original e aberto até tarde",
      area: "Malasaña · Calle de San Andrés 1",
      blurb: "Brunch o dia todo numa cave original com chão de areia: smoothie bowls, sumos, pequenos-almoços grandes. Ambiente divertido e diferente; aberto sex/sáb até à 01:30 se a recuperação tiver de esperar.",
      web: "https://grupolamusa.com/en/restaurant-ojala/",
      maps: "https://www.google.com/maps/search/?api=1&query=Ojal%C3%A1%20Beach%20Bar%20Calle%20de%20San%20Andr%C3%A9s%201%2028004%20Madrid",
      ig: "https://www.instagram.com/restauranteojala/"
    }
  ],

  // -------------------------------------------------------------
  // ALMOÇO DE CHEGADA DE SEXTA (centro, grupo)
  // -------------------------------------------------------------
  lunch: [
    {
      name: "Bar La Campana",
      area: "Junto à Plaza Mayor · Calle Botoneras 6",
      blurb: "O lendário bocadillo de calamares (~4,50€). Casual, ao balcão, rápido e barulhento. A primeira paragem perfeita para quebrar o gelo mal aterrarmos.",
      web: null,
      maps: "https://www.google.com/maps/search/?api=1&query=Bar%20La%20Campana%20Calle%20Botoneras%206%2028012%20Madrid",
      ig: "https://www.instagram.com/lacampana.oficial/"
    },
    {
      name: "Mercado de San Miguel",
      area: "Ao lado da Plaza Mayor · Plaza de San Miguel",
      blurb: "Mercado gourmet animado: jamón, ostras, croquetas, vermute, paella. Turístico e caro, mas clássico; fácil de circular com um copo na mão enquanto o grupo se junta.",
      web: "https://mercadodesanmiguel.es/en/",
      maps: "https://www.google.com/maps/search/?api=1&query=Mercado%20de%20San%20Miguel%20Plaza%20de%20San%20Miguel%2028005%20Madrid",
      ig: "https://www.instagram.com/mercadosanmiguel/"
    },
    {
      name: "Casa Lucas",
      area: "La Latina · Calle de la Cava Baja 30",
      blurb: "Taberna pequena, animada e focada na qualidade na Cava Baja: pinchos, raciones para partilhar, croquetas, boa carta de vinhos. Aceita reserva, dá para garantir lugar para o grupo.",
      web: "https://casalucas.es/",
      maps: "https://www.google.com/maps/search/?api=1&query=Casa%20Lucas%20Calle%20Cava%20Baja%2030%2028005%20Madrid",
      ig: "https://www.instagram.com/casalucas_madrid/"
    },
    {
      name: "Taberna La Chata",
      area: "La Latina · Calle de la Cava Baja 24",
      blurb: "Taberna clássica de azulejos, bem animada: croquetas, jamón, callos com uma caña ou vermut. Na Cava Baja, com 50+ bares para saltar a seguir. Boa para grupos e muito Madrid.",
      web: null,
      maps: "https://www.google.com/maps/search/?api=1&query=Taberna%20La%20Chata%20Calle%20Cava%20Baja%2024%2028005%20Madrid",
      ig: "https://www.instagram.com/tabernalachata/"
    }
  ],

  // -------------------------------------------------------------
  // BAGAGEM (Bounce + backup)
  // -------------------------------------------------------------
  luggage: [
    {
      name: "Bounce",
      tag: "\"Uber para a bagagem\"",
      blurb: "Deixa as mochilas numa loja/hotel/cacifo parceiro pela cidade e explora sem peso. 270+ pontos por Madrid (Sol, Atocha, Gran Vía, Plaza Mayor, Malasaña…). Reservas na app, com proteção de 10.000€ + cancelamento grátis.",
      price: "Desde ~3,50 a 4,50€ / mala / dia",
      web: "https://bounce.com/luggage-storage/madrid"
    },
    {
      name: "Radical Storage",
      tag: "Alternativa",
      blurb: "Mesmo conceito, 40+ zonas por Madrid, incluindo o aeroporto. Um bom plano B se o Bounce não tiver ponto conveniente perto do alojamento.",
      price: "Desde ~3,40 a 5€ / mala / dia · garantia de 3.000€/mala",
      web: "https://radicalstorage.com/luggage-storage/madrid"
    }
  ]
};
