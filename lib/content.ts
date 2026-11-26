// Copy for every page, EN + ES. Edit text here — layout lives in components/.
import type { Lang } from './site';

export const meta = {
  "home": {
    "en": {
      "title": "Truck Dispatch for Owner-Operators — 6% or $145/week",
      "description": "Truck dispatch service for owner-operators and small fleets. We find good-paying loads, negotiate rates, call brokers and do the paperwork. No contract, no forced dispatch, 24/7."
    },
    "es": {
      "title": "Despacho de Camiones para Owner-Operators — 6% o $145/semana",
      "description": "Servicio de despacho para owner-operators y flotas pequeñas. Buscamos cargas que pagan bien, negociamos tarifas y hacemos el papeleo. Sin contrato, sin despacho forzado, 24/7."
    }
  },
  "about": {
    "en": {
      "title": "About Us — Dispatchers Who Work for the Driver",
      "description": "State Dispatchers is a team of truck dispatchers for owner-operators. One dispatcher who knows your truck, clear pricing, and you say yes or no to every load."
    },
    "es": {
      "title": "Nosotros — Despachadores que Trabajan para el Chofer",
      "description": "State Dispatchers es un equipo de despachadores para owner-operators. Un despachador que conoce tu camión, precio claro y tú decides cada carga."
    }
  },
  "contact": {
    "en": {
      "title": "Contact a Truck Dispatcher — Call or Text 24/7",
      "description": "Talk to a real dispatcher day or night. Call, text, or send a message and we will get back to you in about 10 minutes."
    },
    "es": {
      "title": "Contacta a un Despachador — Llama o Manda Texto 24/7",
      "description": "Habla con un despachador real de día o de noche. Llama, manda texto o un mensaje y te contestamos en unos 10 minutos."
    }
  }
} as const;

export const nav = {
  "en": [
    [
      "Trucks",
      "/#trucks",
      "trucks"
    ],
    [
      "Pricing",
      "/#pricing",
      "pricing"
    ],
    [
      "About us",
      "/about",
      "about"
    ],
    [
      "Contact",
      "/contact",
      "contact"
    ]
  ],
  "es": [
    [
      "Camiones",
      "/#trucks",
      "trucks"
    ],
    [
      "Precios",
      "/#pricing",
      "pricing"
    ],
    [
      "Nosotros",
      "/about",
      "about"
    ],
    [
      "Contacto",
      "/contact",
      "contact"
    ]
  ]
} as Record<Lang, [string, string, string][]>;

export const home = {
  "en": {
    "heroTitle": "Keep your truck loaded.",
    "heroLead": "We find loads, call brokers and do the paperwork. You drive.",
    "call": "Call a Dispatcher",
    "text": "Text",
    "callback": "Get a call back",
    "booked": "Booked today",
    "miles": "Miles",
    "rate": "Rate",
    "perMile": "Per mile",
    "trust": [
      "No contract",
      "No forced dispatch",
      "Real person 24/7"
    ],
    "aboutLink": "Who’s behind your loads — about us",
    "ctaTitle": "Still have a question?",
    "ctaLead": "Call, text or send us a message. A real person answers.",
    "contactUs": "Contact us",
    "aboutUs": "About us",
    "weDispatch": "Trucks we dispatch",
    "tapYours": "Tap yours for details",
    "handleTitle": "What we handle",
    "handleLead": "So you don't have to, while driving.",
    "tMainT": "Find good-paying loads",
    "tMainD": "Load boards and our direct brokers",
    "tMainL": [
      "Brokers who call us first, before loads hit the board",
      "Matched to your lanes, home time and lowest rate",
      "Your next load lined up before you unload"
    ],
    "t1T": "Rate talks",
    "t1D": "We push for more",
    "t2T": "Broker calls",
    "t2D": "On your behalf",
    "t3T": "Paperwork",
    "t3D": "Rate cons, packets, invoices",
    "t4T": "Route plans",
    "t4D": "Less deadhead",
    "t5T": "Detention & TONU claims",
    "t5D": "We chase the money you’re owed",
    "howTitle": "How it works",
    "steps": [
      [
        "Call us",
        "Tell us your truck, lanes, home time and lowest rate."
      ],
      [
        "We find loads",
        "We negotiate the rate. You say yes or no."
      ],
      [
        "You drive",
        "We handle brokers, rate cons and check calls."
      ]
    ],
    "storiesTitle": "Drivers like you",
    "q1": "I was sitting empty 3 days a week. Now I'm loaded before I unload.",
    "q2": "They answer at 2 AM. That's all I needed.",
    "q3": "No more fighting brokers on the phone at the fuel island.",
    "verified": "Verified MC",
    "priceTitle": "Pick how you pay",
    "priceLead": "Per load, per week, or a price built for your fleet. No setup cost, no contract, nothing hidden in the rate con.",
    "everyPlan": "Every plan:",
    "pickTag": "Recommended",
    "priceFeatures": [
      "Load booking + rate talks",
      "Broker calls + paperwork",
      "Route planning",
      "No contract",
      "No forced dispatch"
    ],
    "plans": {
      "percent": [
        "Per load",
        "of the line haul",
        "Pay only when a load we booked delivers. Good if you’re starting out or run fewer loads.",
        "Start per load"
      ],
      "weekly": [
        "Weekly",
        "/week per truck",
        "One flat fee, however many loads we book. Good if you run hard every week.",
        "Start weekly"
      ],
      "custom": [
        "Custom",
        "fleets & special freight",
        "Several trucks, dedicated lanes or mixed equipment? We’ll build a price around you.",
        "Talk to us"
      ]
    },
    "faqTitle": "Questions drivers ask",
    "faq": [
      [
        "Do I have to take every load?",
        "No. You say yes or no to every load. No forced dispatch, ever."
      ],
      [
        "Is there a contract?",
        "No contract. Cancel any time with one call or text."
      ],
      [
        "What trucks do you dispatch?",
        "Dry van, reefer, flatbed, step deck, box truck, hotshot, power only and auto carrier — in all 48 states."
      ],
      [
        "Do you handle the paperwork?",
        "Yes. Carrier packets, rate cons, invoices, and detention or TONU claims."
      ],
      [
        "Do I need my own authority?",
        "Yes, you need an active MC number. New authority is fine — we help you get set up with brokers."
      ]
    ],
    "footer": "Truck dispatch for owner-operators and small fleets.",
    "hours": "Live dispatch 24/7, every day"
  },
  "es": {
    "heroTitle": "Mantén tu camión cargado.",
    "heroLead": "Buscamos cargas, hablamos con los brokers y hacemos el papeleo. Tú manejas.",
    "call": "Llamar ahora",
    "text": "Texto",
    "callback": "Que me llamen",
    "booked": "Reservada hoy",
    "miles": "Millas",
    "rate": "Tarifa",
    "perMile": "Por milla",
    "trust": [
      "Sin contrato",
      "Sin despacho forzado",
      "Persona real 24/7"
    ],
    "aboutLink": "Quién está detrás de tus cargas — nosotros",
    "ctaTitle": "¿Todavía tienes preguntas?",
    "ctaLead": "Llama, manda texto o un mensaje. Contesta una persona real.",
    "contactUs": "Contáctanos",
    "aboutUs": "Nosotros",
    "weDispatch": "Camiones que despachamos",
    "tapYours": "Toca el tuyo para ver más",
    "handleTitle": "Lo que hacemos",
    "handleLead": "Para que tú no lo hagas mientras manejas.",
    "tMainT": "Cargas que pagan bien",
    "tMainD": "Load boards y nuestros brokers directos",
    "tMainL": [
      "Brokers que nos llaman primero, antes del load board",
      "Según tus rutas, días en casa y tarifa mínima",
      "Tu próxima carga lista antes de descargar"
    ],
    "t1T": "Negociamos tarifa",
    "t1D": "Pedimos más",
    "t2T": "Llamadas a brokers",
    "t2D": "A tu nombre",
    "t3T": "Papeleo",
    "t3D": "Rate cons, paquetes, facturas",
    "t4T": "Rutas",
    "t4D": "Menos millas vacías",
    "t5T": "Reclamos de detention y TONU",
    "t5D": "Cobramos lo que te deben",
    "howTitle": "Cómo funciona",
    "steps": [
      [
        "Llámanos",
        "Dinos tu camión, rutas, días en casa y tarifa mínima."
      ],
      [
        "Buscamos cargas",
        "Negociamos la tarifa. Tú dices sí o no."
      ],
      [
        "Tú manejas",
        "Nosotros con los brokers, rate cons y check calls."
      ]
    ],
    "storiesTitle": "Choferes como tú",
    "q1": "Estaba vacío 3 días a la semana. Ahora tengo carga antes de descargar.",
    "q2": "Contestan a las 2 de la mañana. Eso es todo lo que necesitaba.",
    "q3": "Ya no peleo con brokers por teléfono en la gasolinera.",
    "verified": "MC verificado",
    "priceTitle": "Escoge cómo pagar",
    "priceLead": "Por carga, por semana o un precio para tu flota. Sin costo de inicio, sin contrato, nada escondido.",
    "everyPlan": "Todos los planes:",
    "pickTag": "Recomendado",
    "priceFeatures": [
      "Cargas + negociación",
      "Brokers + papeleo",
      "Planeación de rutas",
      "Sin contrato",
      "Sin despacho forzado"
    ],
    "plans": {
      "percent": [
        "Por carga",
        "del flete",
        "Solo pagas cuando entregas una carga que reservamos. Bueno si vas empezando o corres menos cargas.",
        "Empezar por carga"
      ],
      "weekly": [
        "Semanal",
        "/semana por camión",
        "Una tarifa fija, sin importar cuántas cargas. Bueno si trabajas fuerte cada semana.",
        "Empezar semanal"
      ],
      "custom": [
        "A tu medida",
        "flotas y carga especial",
        "¿Varios camiones, rutas dedicadas o equipo mixto? Armamos un precio para ti.",
        "Hablemos"
      ]
    },
    "faqTitle": "Preguntas frecuentes",
    "faq": [
      [
        "¿Tengo que aceptar todas las cargas?",
        "No. Tú decides cada carga. Nunca hay despacho forzado."
      ],
      [
        "¿Hay contrato?",
        "Sin contrato. Cancela con una llamada o un texto."
      ],
      [
        "¿Qué camiones despachan?",
        "Dry van, reefer, flatbed, step deck, box truck, hotshot, power only y car hauler — en los 48 estados."
      ],
      [
        "¿Hacen el papeleo?",
        "Sí. Paquetes, rate cons, facturas y reclamos de detention o TONU."
      ],
      [
        "¿Necesito mi propia autoridad?",
        "Sí, necesitas un MC activo. Autoridad nueva está bien — te ayudamos con los brokers."
      ]
    ],
    "footer": "Despacho de camiones para owner-operators y flotas pequeñas.",
    "hours": "Despacho en vivo 24/7"
  }
};

export const about = {
  "en": {
    "kicker": "About us",
    "title": "We work for the driver. Not the broker.",
    "lead": "State Dispatchers is a team of truck dispatchers for owner-operators and small fleets. We find the loads, fight for the rate and handle the paperwork — so you can drive.",
    "whyTitle": "Why we do this",
    "why1": "Drivers kept telling us the same story: dispatchers who don't pick up, cheap loads pulled straight off the board, and contracts they couldn't get out of.",
    "why2": "So we built the dispatch service we'd want if we were the ones behind the wheel. One dispatcher who knows your truck. Straight answers on money. And you always make the final call.",
    "promTitle": "Our promises to you",
    "promises": [
      [
        "You say yes or no",
        "Every load, every time. No forced dispatch."
      ],
      [
        "A real person picks up",
        "Day or night, 24/7. No phone trees."
      ],
      [
        "No contract",
        "Stay because it works. Leave with one call."
      ],
      [
        "Clear pricing",
        "6% per load or $145 a week. Nothing hidden in the rate con."
      ]
    ],
    "workTitle": "How we work with you",
    "yourDispatcher": "Your dispatcher",
    "workLead": "One dispatcher who learns your business — not a different voice every call.",
    "work": [
      [
        "We learn your truck",
        "Equipment, lanes, home time, lowest rate you’ll take. Written down, not guessed."
      ],
      [
        "We check in every day",
        "Where you are, when you’re empty, what’s next. Your reload is planned before you unload."
      ],
      [
        "You see the numbers",
        "Rate, miles and rate con before you roll. No surprises at settlement."
      ]
    ],
    "whoTitle": "Who we work with",
    "whoLead": "Owner-operators and small fleets with their own MC, in all 48 states. New authority is welcome.",
    "ctaTitle": "Want to talk it through?",
    "ctaLead": "Call and ask anything. No sales pitch, no pressure.",
    "call": "Call a Dispatcher",
    "callBar": "Call a Dispatcher",
    "text": "Text",
    "contact": "Contact us",
    "footer": "Truck dispatch for owner-operators and small fleets."
  },
  "es": {
    "kicker": "Nosotros",
    "title": "Trabajamos para el chofer. No para el broker.",
    "lead": "State Dispatchers es un equipo de despachadores para owner-operators y flotas pequeñas. Buscamos las cargas, peleamos la tarifa y hacemos el papeleo — para que tú manejes.",
    "whyTitle": "Por qué hacemos esto",
    "why1": "Los choferes nos contaban lo mismo: despachadores que no contestan, cargas baratas del load board y contratos de los que no podían salir.",
    "why2": "Así que creamos el servicio de despacho que querríamos si estuviéramos al volante. Un despachador que conoce tu camión. Respuestas claras sobre el dinero. Y tú siempre decides.",
    "promTitle": "Lo que te prometemos",
    "promises": [
      [
        "Tú dices sí o no",
        "Cada carga, siempre. Sin despacho forzado."
      ],
      [
        "Contesta una persona real",
        "De día o de noche, 24/7. Sin menús de teléfono."
      ],
      [
        "Sin contrato",
        "Quédate porque funciona. Sal con una llamada."
      ],
      [
        "Precio claro",
        "6% por carga o $145 a la semana. Nada escondido."
      ]
    ],
    "workTitle": "Cómo trabajamos contigo",
    "yourDispatcher": "Tu despachador",
    "workLead": "Un despachador que conoce tu negocio — no una voz diferente cada vez.",
    "work": [
      [
        "Conocemos tu camión",
        "Equipo, rutas, días en casa y tu tarifa mínima. Por escrito."
      ],
      [
        "Te llamamos cada día",
        "Dónde estás, cuándo descargas, qué sigue. Tu recarga lista antes de descargar."
      ],
      [
        "Ves los números",
        "Tarifa, millas y rate con antes de salir. Sin sorpresas."
      ]
    ],
    "whoTitle": "Con quién trabajamos",
    "whoLead": "Owner-operators y flotas pequeñas con su propio MC, en los 48 estados. Autoridad nueva es bienvenida.",
    "ctaTitle": "¿Quieres platicarlo?",
    "ctaLead": "Llama y pregunta lo que sea. Sin presión.",
    "call": "Llamar a un despachador",
    "callBar": "Llamar ahora",
    "text": "Texto",
    "contact": "Contáctanos",
    "footer": "Despacho de camiones para owner-operators y flotas pequeñas."
  }
};

export const contact = {
  "en": {
    "kicker": "Contact us",
    "title": "Talk to a real person.",
    "lead": "Day or night. Call, text, or leave your number and a dispatcher will call you back.",
    "callT": "Call — fastest",
    "callD": "Live dispatch, 24/7. A person picks up, not a menu.",
    "textT": "Text us",
    "textD": "Send your truck type and where you're empty. We'll text back.",
    "mailT": "Email",
    "mailD": "For documents, rate cons and billing.",
    "formTitle": "Send us a message",
    "formLead": "Takes 30 seconds. We reply by phone or email, usually within 10 minutes.",
    "nextTitle": "What happens next",
    "next": [
      [
        "We call you",
        "Usually within 10 minutes, any time of day."
      ],
      [
        "15-minute setup",
        "Your truck, lanes, home time and lowest rate."
      ],
      [
        "Send your docs",
        "MC, W-9 and insurance — then we start finding loads."
      ]
    ],
    "name": "Your name",
    "nameErr": "Please enter your name.",
    "phone": "Phone",
    "phoneErr": "Enter a 10-digit phone number.",
    "email": "Email",
    "emailErr": "Enter a valid email address.",
    "optional": "(optional)",
    "msg": "Note",
    "msgPh": "Lanes, home time, questions…",
    "send": "Send message",
    "sentBadge": "Request sent",
    "sentTitle": "Got it. We'll get back to you in about 10 minutes.",
    "sentLead": "Keep your phone close. Calls come from (415) 605-8130.",
    "again": "Send another",
    "callBar": "Call a Dispatcher",
    "text": "Text",
    "footer": "Truck dispatch for owner-operators and small fleets."
  },
  "es": {
    "kicker": "Contacto",
    "title": "Habla con una persona real.",
    "lead": "De día o de noche. Llama, manda texto o déjanos tu número y te llamamos.",
    "callT": "Llamar — lo más rápido",
    "callD": "Despacho en vivo 24/7. Contesta una persona, no un menú.",
    "textT": "Mándanos texto",
    "textD": "Dinos tu tipo de camión y dónde estás vacío. Te contestamos.",
    "mailT": "Correo",
    "mailD": "Para documentos, rate cons y facturación.",
    "formTitle": "Mándanos un mensaje",
    "formLead": "Toma 30 segundos. Te contestamos por teléfono o correo, normalmente en 10 minutos.",
    "nextTitle": "Qué sigue",
    "next": [
      [
        "Te llamamos",
        "Normalmente en 10 minutos, a cualquier hora."
      ],
      [
        "15 minutos para empezar",
        "Tu camión, rutas, días en casa y tarifa mínima."
      ],
      [
        "Mandas tus papeles",
        "MC, W-9 y seguro — y empezamos a buscar cargas."
      ]
    ],
    "name": "Tu nombre",
    "nameErr": "Escribe tu nombre.",
    "phone": "Teléfono",
    "phoneErr": "Escribe un número de 10 dígitos.",
    "email": "Correo",
    "emailErr": "Escribe un correo válido.",
    "optional": "(opcional)",
    "msg": "Nota",
    "msgPh": "Rutas, días en casa, preguntas…",
    "send": "Enviar mensaje",
    "sentBadge": "Enviado",
    "sentTitle": "Listo. Te contestamos en unos 10 minutos.",
    "sentLead": "Ten tu teléfono cerca. Llamamos del (415) 605-8130.",
    "again": "Enviar otro",
    "callBar": "Llamar ahora",
    "text": "Texto",
    "footer": "Despacho de camiones para owner-operators y flotas pequeñas."
  }
};

export const truckUi = {
  "en": {
    "back": "All trucks we dispatch",
    "weDispatch": "We dispatch",
    "textUs": "Text Us",
    "call": "Call a Dispatcher",
    "text": "Text",
    "haulTitle": "What you'll haul",
    "handleFor": "What we handle for",
    "needTitle": "What you need to start",
    "needLead": "Have these ready and we can start looking for loads the same day.",
    "ctaFor": "Get",
    "ctaLoads": "loads this week",
    "ctaLead": "One call. Tell us your lanes and your lowest rate. We start looking today.",
    "noContract": "No contract",
    "noForced": "No forced dispatch",
    "otherTitle": "Other trucks we dispatch",
    "footer": "Truck dispatch for owner-operators and small fleets.",
    "dispatch": "dispatch",
    "getLoads": "Get loads",
    "flat": "/week",
    "pct": "per load"
  },
  "es": {
    "back": "Todos los camiones",
    "weDispatch": "Despachamos",
    "textUs": "Mándanos texto",
    "call": "Llamar ahora",
    "text": "Texto",
    "haulTitle": "Lo que vas a llevar",
    "handleFor": "Lo que hacemos para",
    "needTitle": "Lo que necesitas para empezar",
    "needLead": "Ten esto listo y empezamos a buscar cargas el mismo día.",
    "ctaFor": "Cargas de",
    "ctaLoads": "esta semana",
    "ctaLead": "Una llamada. Dinos tus rutas y tu tarifa mínima. Empezamos hoy.",
    "noContract": "Sin contrato",
    "noForced": "Sin despacho forzado",
    "otherTitle": "Otros camiones que despachamos",
    "footer": "Despacho de camiones para owner-operators y flotas pequeñas.",
    "dispatch": "",
    "getLoads": "Pedir cargas",
    "flat": "/semana",
    "pct": "por carga"
  }
};

export type Equipment = {
  slug: string; name: string; icons: string[]; img: string[];
  grid: Record<Lang, string>; photos: (string | null)[];
  en: { lead: string; haul: string[]; handle: [string, string][]; needs: string[] };
  es: { lead: string; haul: string[]; handle: [string, string][]; needs: string[] };
};
export const equipment = [
  {
    "slug": "dry-van",
    "name": "Dry Van",
    "icons": [
      "arrow-down-up",
      "repeat",
      "handshake",
      "receipt"
    ],
    "img": [
      "53-ft dry van backed into a dock door at sunrise",
      "Driver closing van doors, checking the seal",
      "Rows of dry vans in a drop yard"
    ],
    "en": {
      "lead": "The most loads on the board — and the most brokers lowballing. We get you the good ones.",
      "haul": [
        "Retail & dry grocery",
        "Paper & packaging",
        "Beverages",
        "Consumer goods"
      ],
      "handle": [
        [
          "Drop & hook first",
          "Less waiting at the dock"
        ],
        [
          "Dedicated lanes",
          "Repeat freight you can plan around"
        ],
        [
          "Rate talks",
          "Van rates swing daily — we know when to push"
        ],
        [
          "Lumper & detention",
          "Receipts filed, money chased"
        ]
      ],
      "needs": [
        "53' dry van (48' OK)",
        "Active MC + DOT",
        "Auto liability + cargo insurance",
        "Load bars or straps"
      ]
    },
    "es": {
      "lead": "La mayoría de las cargas — y muchos brokers ofreciendo poco. Te conseguimos las buenas.",
      "haul": [
        "Retail y abarrotes secos",
        "Papel y empaque",
        "Bebidas",
        "Productos de consumo"
      ],
      "handle": [
        [
          "Drop & hook primero",
          "Menos espera en el dock"
        ],
        [
          "Rutas dedicadas",
          "Carga repetida para planear"
        ],
        [
          "Negociamos tarifa",
          "Sabemos cuándo pedir más"
        ],
        [
          "Lumper y detention",
          "Recibos y cobros por ti"
        ]
      ],
      "needs": [
        "Dry van de 53' (48' sirve)",
        "MC y DOT activos",
        "Seguro de responsabilidad y de carga",
        "Barras o correas de carga"
      ]
    },
    "grid": {
      "en": "Most loads",
      "es": "Más cargas"
    },
    "photos": [
      "/images/equipment/dry-van-hero.png",
      "/images/equipment/dry-van-1.png",
      "/images/equipment/dry-van-2.png"
    ]
  },
  {
    "slug": "reefer",
    "name": "Reefer",
    "icons": [
      "thermometer-snowflake",
      "sprout",
      "route",
      "file-check"
    ],
    "img": [
      "Reefer trailer at night, unit running, frost on doors",
      "Pallets of produce loading into a cold trailer",
      "Reefer unit display close-up"
    ],
    "en": {
      "lead": "Temperature freight pays more — when someone's watching the details. That's us.",
      "haul": [
        "Produce",
        "Meat & dairy",
        "Frozen food",
        "Beverages"
      ],
      "handle": [
        [
          "Pulp temps & seals",
          "We remind you and log it"
        ],
        [
          "Produce season",
          "We move you into the hot markets"
        ],
        [
          "Reload planning",
          "No deadhead out of Florida"
        ],
        [
          "Claims support",
          "Temp downloads ready if a claim hits"
        ]
      ],
      "needs": [
        "Reefer trailer with a working unit",
        "Unit download / temp log",
        "Reefer breakdown coverage",
        "Active MC + DOT"
      ]
    },
    "es": {
      "lead": "La carga refrigerada paga más — cuando alguien cuida los detalles. Ese somos nosotros.",
      "haul": [
        "Frutas y verduras",
        "Carne y lácteos",
        "Congelados",
        "Bebidas"
      ],
      "handle": [
        [
          "Temperaturas y sellos",
          "Te recordamos y lo registramos"
        ],
        [
          "Temporada de producto",
          "Te movemos a los mercados fuertes"
        ],
        [
          "Planeación de recarga",
          "Sin millas vacías saliendo de Florida"
        ],
        [
          "Apoyo en reclamos",
          "Registros de temperatura listos"
        ]
      ],
      "needs": [
        "Reefer con unidad funcionando",
        "Descarga de temperatura del unit",
        "Cobertura por falla del reefer",
        "MC y DOT activos"
      ]
    },
    "grid": {
      "en": "Temp freight",
      "es": "Refrigerada"
    },
    "photos": [
      "/images/equipment/reefer-hero.png",
      "/images/equipment/reefer-1.png",
      "/images/equipment/reefer-2.png"
    ]
  },
  {
    "slug": "flatbed",
    "name": "Flatbed",
    "icons": [
      "tent",
      "ruler",
      "file-badge",
      "repeat"
    ],
    "img": [
      "Flatbed with tarped load on a two-lane highway",
      "Driver ratcheting a strap on steel coils",
      "Stacked lumber strapped on a flatbed"
    ],
    "en": {
      "lead": "Steel, lumber, machinery. Every load is different — and so is the rate. We ask for tarp pay every time.",
      "haul": [
        "Steel & coils",
        "Lumber",
        "Building materials",
        "Machinery"
      ],
      "handle": [
        [
          "Tarp pay",
          "We ask for it — every load"
        ],
        [
          "Securement details",
          "Dims and weight before you book"
        ],
        [
          "Permits",
          "Oversize paperwork when needed"
        ],
        [
          "Backhauls",
          "Building-materials reloads"
        ]
      ],
      "needs": [
        "48' or 53' flatbed",
        "Straps, chains, binders",
        "Tarps (4', 6', 8')",
        "Active MC + DOT + cargo insurance"
      ]
    },
    "es": {
      "lead": "Acero, madera, maquinaria. Cada carga es diferente — y la tarifa también. Siempre pedimos pago por lona.",
      "haul": [
        "Acero y rollos",
        "Madera",
        "Materiales de construcción",
        "Maquinaria"
      ],
      "handle": [
        [
          "Pago por lona",
          "Lo pedimos en cada carga"
        ],
        [
          "Detalles de amarre",
          "Medidas y peso antes de reservar"
        ],
        [
          "Permisos",
          "Papeleo de sobredimensión"
        ],
        [
          "Regresos",
          "Recargas de materiales"
        ]
      ],
      "needs": [
        "Flatbed de 48' o 53'",
        "Correas, cadenas y binders",
        "Lonas (4', 6', 8')",
        "MC, DOT y seguro de carga"
      ]
    },
    "grid": {
      "en": "Steel, lumber",
      "es": "Acero, madera"
    },
    "photos": [
      "/images/equipment/flatbed-hero.png",
      "/images/equipment/flatbed-1.png",
      "/images/equipment/flatbed-2.png"
    ]
  },
  {
    "slug": "step-deck",
    "name": "Step Deck",
    "icons": [
      "ruler",
      "file-badge",
      "factory",
      "move-up-right"
    ],
    "img": [
      "Step deck hauling a tall excavator on the highway",
      "Chained machinery on the lower deck, close-up",
      "Step deck with ramps down at an equipment yard"
    ],
    "en": {
      "lead": "Tall freight that won't fit on a flatbed. Fewer trucks can haul it, so it should pay more.",
      "haul": [
        "Construction equipment",
        "Tall machinery",
        "Tractors & ag equipment",
        "Oversize loads"
      ],
      "handle": [
        [
          "Height checks",
          "We confirm dims before booking"
        ],
        [
          "Oversize permits",
          "Routes and escorts arranged"
        ],
        [
          "Equipment dealers",
          "Direct shippers we work with"
        ],
        [
          "Ramp loads",
          "We find drive-on freight"
        ]
      ],
      "needs": [
        "Step deck (ramps are a plus)",
        "Chains, binders, straps",
        "Oversize banners & flags",
        "Active MC + DOT"
      ]
    },
    "es": {
      "lead": "Carga alta que no cabe en flatbed. Menos camiones la pueden llevar, así que debe pagar más.",
      "haul": [
        "Equipo de construcción",
        "Maquinaria alta",
        "Tractores y equipo agrícola",
        "Cargas sobredimensionadas"
      ],
      "handle": [
        [
          "Revisión de altura",
          "Confirmamos medidas antes"
        ],
        [
          "Permisos de sobredimensión",
          "Rutas y escoltas listas"
        ],
        [
          "Dealers de equipo",
          "Shippers directos"
        ],
        [
          "Cargas con rampa",
          "Buscamos carga que sube manejando"
        ]
      ],
      "needs": [
        "Step deck (rampas, mejor)",
        "Cadenas, binders y correas",
        "Banderas y letreros de oversize",
        "MC y DOT activos"
      ]
    },
    "grid": {
      "en": "Tall freight",
      "es": "Carga alta"
    },
    "photos": [
      "/images/equipment/step-deck-hero.png",
      "/images/equipment/step-deck-1.png",
      "/images/equipment/step-deck-2.png"
    ]
  },
  {
    "slug": "box-truck",
    "name": "Box Truck",
    "icons": [
      "layers",
      "arrow-down-to-line",
      "house",
      "badge-check"
    ],
    "img": [
      "26-ft box truck on a city street in morning light",
      "Liftgate lowering pallets at a store",
      "Driver with a hand truck at the rear door"
    ],
    "en": {
      "lead": "26-footer, CDL or non-CDL. Local, regional or OTR — we keep it busy.",
      "haul": [
        "Final mile",
        "LTL & partials",
        "Furniture & appliances",
        "Expedited freight"
      ],
      "handle": [
        [
          "Partials stacked",
          "Two or three loads, one trip"
        ],
        [
          "Liftgate loads",
          "Matched to your truck"
        ],
        [
          "Local & regional",
          "Home most nights if you want"
        ],
        [
          "Broker setup",
          "We get you approved fast"
        ]
      ],
      "needs": [
        "16'–26' box truck",
        "Liftgate (recommended)",
        "Active MC",
        "Auto liability + cargo insurance"
      ]
    },
    "es": {
      "lead": "De 26 pies, con o sin CDL. Local, regional o OTR — lo mantenemos ocupado.",
      "haul": [
        "Última milla",
        "LTL y parciales",
        "Muebles y electrodomésticos",
        "Carga urgente"
      ],
      "handle": [
        [
          "Parciales juntos",
          "Dos o tres cargas en un viaje"
        ],
        [
          "Cargas con liftgate",
          "Según tu camión"
        ],
        [
          "Local y regional",
          "En casa casi todas las noches"
        ],
        [
          "Alta con brokers",
          "Te aprueban rápido"
        ]
      ],
      "needs": [
        "Box truck de 16' a 26'",
        "Liftgate (recomendado)",
        "MC activo",
        "Seguro de responsabilidad y de carga"
      ]
    },
    "grid": {
      "en": "CDL or non-CDL",
      "es": "Con o sin CDL"
    },
    "photos": [
      "/images/equipment/box-truck-hero.png",
      "/images/equipment/box-truck-1.png",
      "/images/equipment/box-truck-2.png"
    ]
  },
  {
    "slug": "hotshot",
    "name": "Hotshot",
    "icons": [
      "zap",
      "scale",
      "bell-ring",
      "repeat"
    ],
    "img": [
      "Dually pickup with gooseneck trailer on a Texas highway",
      "Oilfield parts strapped on a gooseneck",
      "Hotshot rig at a fuel stop at dusk"
    ],
    "en": {
      "lead": "Fast, tight-window freight with a pickup and gooseneck. We keep you running, not waiting.",
      "haul": [
        "Oilfield parts",
        "Machinery parts",
        "Construction materials",
        "Expedited loads"
      ],
      "handle": [
        [
          "Expedited loads",
          "Same-day and next-day"
        ],
        [
          "Weight checks",
          "Stay legal under your GVWR"
        ],
        [
          "Short-notice freight",
          "We answer when it pops"
        ],
        [
          "Reloads",
          "Chained so you're not running empty"
        ]
      ],
      "needs": [
        "1-ton pickup (3500 or bigger)",
        "30'–40' gooseneck",
        "Straps, chains, binders",
        "Active MC + DOT"
      ]
    },
    "es": {
      "lead": "Carga rápida y con horario apretado, con pickup y gooseneck. Te mantenemos rodando, no esperando.",
      "haul": [
        "Partes de campo petrolero",
        "Partes de maquinaria",
        "Materiales de construcción",
        "Cargas urgentes"
      ],
      "handle": [
        [
          "Cargas urgentes",
          "El mismo día o al siguiente"
        ],
        [
          "Revisión de peso",
          "Legal bajo tu GVWR"
        ],
        [
          "Carga de último minuto",
          "Contestamos cuando sale"
        ],
        [
          "Recargas",
          "Encadenadas para no ir vacío"
        ]
      ],
      "needs": [
        "Pickup de 1 tonelada (3500 o más)",
        "Gooseneck de 30' a 40'",
        "Correas, cadenas y binders",
        "MC y DOT activos"
      ]
    },
    "grid": {
      "en": "Pickup + gooseneck",
      "es": "Pickup + gooseneck"
    },
    "photos": [
      "/images/equipment/hotshot-hero.png",
      "/images/equipment/hotshot-1.png",
      "/images/equipment/hotshot-2.jpg"
    ]
  },
  {
    "slug": "power-only",
    "name": "Power Only",
    "icons": [
      "container",
      "arrow-down-up",
      "file-text",
      "repeat"
    ],
    "img": [
      "Tractor backing under a parked trailer in a drop yard",
      "Driver connecting air and electrical lines (gladhands)",
      "Long row of preloaded trailers at a shipper yard"
    ],
    "en": {
      "lead": "Just your tractor. We find the trailers — drop & hook from shipper and broker pools.",
      "haul": [
        "Preloaded trailers",
        "Trailer repositioning",
        "Drop & hook freight",
        "Dedicated pool runs"
      ],
      "handle": [
        [
          "Trailer pools",
          "Access to shipper and broker pools"
        ],
        [
          "Drop & hook",
          "Less time at the dock"
        ],
        [
          "Interchange paperwork",
          "Agreements handled"
        ],
        [
          "Steady lanes",
          "Repeat power-only freight"
        ]
      ],
      "needs": [
        "Tractor (day cab or sleeper)",
        "Trailer interchange insurance",
        "Active MC + DOT",
        "Air & electrical lines in good shape"
      ]
    },
    "es": {
      "lead": "Solo tu tractor. Nosotros buscamos las cajas — drop & hook de pools de shippers y brokers.",
      "haul": [
        "Cajas precargadas",
        "Reposicionar cajas",
        "Carga drop & hook",
        "Rutas de pool dedicadas"
      ],
      "handle": [
        [
          "Pools de cajas",
          "Acceso a pools de shippers y brokers"
        ],
        [
          "Drop & hook",
          "Menos tiempo en el dock"
        ],
        [
          "Papeleo de interchange",
          "Contratos listos"
        ],
        [
          "Rutas fijas",
          "Carga power only repetida"
        ]
      ],
      "needs": [
        "Tractor (day cab o sleeper)",
        "Seguro de trailer interchange",
        "MC y DOT activos",
        "Líneas de aire y eléctricas en buen estado"
      ]
    },
    "grid": {
      "en": "Tractor only",
      "es": "Solo tractor"
    },
    "photos": [
      "/images/equipment/power-only-hero.jpg",
      "/images/equipment/power-only-1.jpg",
      "/images/equipment/power-only-2.jpg"
    ]
  },
  {
    "slug": "auto-carrier",
    "name": "Auto Carrier",
    "icons": [
      "car",
      "camera",
      "calendar-clock",
      "shield-check"
    ],
    "img": [
      "Loaded open car hauler on the interstate, 8–9 cars",
      "Driver photographing a car during pickup inspection",
      "Car hauler ramps down at a dealer lot"
    ],
    "en": {
      "lead": "Dealer moves, auctions and private cars. We build full loads so you're not running half-empty.",
      "haul": [
        "Dealer & auction cars",
        "New cars from ports",
        "Private vehicles",
        "Classic & exotic (enclosed)"
      ],
      "handle": [
        [
          "Full loads",
          "We build 7–9 car loads"
        ],
        [
          "Inspection & BOL",
          "Photo checklist every pickup"
        ],
        [
          "Dealer appointments",
          "Pickup and delivery windows set"
        ],
        [
          "Damage claims",
          "We help with the paperwork"
        ]
      ],
      "needs": [
        "Open or enclosed car hauler (wedge or dually OK)",
        "Cargo insurance for vehicles",
        "Straps, chains, wheel nets",
        "Active MC + DOT"
      ]
    },
    "es": {
      "lead": "Dealers, subastas y carros particulares. Armamos cargas completas para que no vayas medio vacío.",
      "haul": [
        "Carros de dealer y subasta",
        "Carros nuevos de puerto",
        "Vehículos particulares",
        "Clásicos y exóticos (cerrado)"
      ],
      "handle": [
        [
          "Cargas completas",
          "Armamos cargas de 7 a 9 carros"
        ],
        [
          "Inspección y BOL",
          "Lista de fotos en cada pickup"
        ],
        [
          "Citas con dealers",
          "Horarios de entrega listos"
        ],
        [
          "Reclamos por daños",
          "Te ayudamos con el papeleo"
        ]
      ],
      "needs": [
        "Car hauler abierto o cerrado (wedge o dually sirve)",
        "Seguro de carga para vehículos",
        "Correas, cadenas y redes de llanta",
        "MC y DOT activos"
      ]
    },
    "grid": {
      "en": "7–9 cars",
      "es": "7–9 carros"
    },
    "photos": [
      "/images/equipment/auto-carrier-hero.png",
      "/images/equipment/auto-carrier-1.jpg",
      "/images/equipment/auto-carrier-2.jpg"
    ]
  }
] as Equipment[];

export const getEquipment = (slug: string) => equipment.find((e) => e.slug === slug);
