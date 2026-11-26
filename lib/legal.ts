import { SITE, type Lang } from './site';

/** Legal pages and SMS consent copy (10DLC / TCPA). Update EFFECTIVE when the text changes. */
export const LEGAL = {
  company: 'State Dispatchers LLC',
  location: 'Gwynn Oak, Maryland',
  program: 'State Dispatchers Text Messages',
  effective: { en: 'November 26, 2026', es: '26 de noviembre de 2026' },
};

export type Block = string | { list: string[] };
export type Section = { h: string; body: Block[] };
export type LegalDoc = { title: string; description: string; lead: string; sections: Section[] };

const c = LEGAL.company;
const phone = SITE.phoneDisplay;
const email = SITE.email;

const stopWords = 'STOP, CANCEL, END, QUIT, UNSUBSCRIBE, STOPALL, REVOKE or OPTOUT';

export const terms: Record<Lang, LegalDoc> = {
  en: {
    title: 'Terms & Conditions',
    description: `Terms and conditions for ${c}, including our SMS text messaging program terms.`,
    lead: `These terms apply to statedispatchers.com, our dispatch services and our text messaging program. Please read them carefully.`,
    sections: [
      {
        h: '1. Who we are',
        body: [
          `${c} ("State Dispatchers," "we," "us" or "our") is a truck dispatch service located in ${LEGAL.location}. By using our website, contacting us, or using our services, you agree to these Terms & Conditions and to our Privacy Policy.`,
        ],
      },
      {
        h: '2. Our services',
        body: [
          'We help owner-operators and small fleets find loads, negotiate rates and handle load paperwork. We are a dispatch service. We are not a freight broker, a motor carrier or a shipper.',
          'You decide which loads to accept. You remain responsible for your operating authority, insurance, safety, vehicle condition, hours-of-service compliance and the safe delivery of every load. Fees, payment terms and cancellation are set out in the dispatch agreement you sign with us; if that agreement conflicts with these terms, the dispatch agreement controls.',
        ],
      },
      {
        h: `3. SMS text messaging program (${LEGAL.program})`,
        body: [
          `Program description. When you opt in, ${c} sends text messages to the mobile number you provide. There are two types of messages, and you choose each one separately:`,
          {
            list: [
              'Customer care and dispatch messages: replies to your inquiries, load offers and confirmations, pickup and delivery updates, document requests, account and billing notices.',
              'Marketing messages (only if you separately agree): promotions, special offers, pricing updates and news about our services.',
            ],
          },
          'How you opt in. You opt in by checking the text message consent box(es) on our website contact form, by texting us first, or by giving us your verbal consent on a call, which we record in our system. Consent is not a condition of purchasing any goods or services.',
          'Message frequency varies based on your activity and the loads we are working on for you.',
          'Message and data rates may apply. Check your mobile plan for details.',
          `How to opt out. Reply STOP to any message to stop receiving texts. You can also reply ${stopWords}. You will receive one final message confirming that you have been unsubscribed, and you will receive no further messages unless you opt in again. To opt back in, reply START.`,
          `Help. Reply HELP to any message for help, or contact us at ${phone} or ${email}.`,
          'Mobile carriers are not liable for delayed or undelivered messages.',
          'Supported carriers include all major U.S. wireless carriers. Message delivery is not guaranteed.',
          'If you change or give up your mobile number, please tell us or reply STOP from that number so the next owner of the number does not receive our messages.',
          'Your mobile information is handled as described in our Privacy Policy. We do not share or sell your mobile number or text messaging opt-in data with third parties or affiliates for their marketing or promotional purposes.',
        ],
      },
      {
        h: '4. Using our website',
        body: [
          'You agree to use our website only for lawful purposes and to provide accurate information when you contact us. Do not attempt to interfere with the website, access it in an unauthorized way, or submit someone else\'s phone number or information without their permission.',
          'Example loads, rates and earnings shown on the website are illustrations only and are not a promise of future loads or income.',
        ],
      },
      {
        h: '5. Disclaimers and limitation of liability',
        body: [
          'The website and its content are provided "as is" without warranties of any kind. To the fullest extent allowed by law, State Dispatchers is not liable for indirect, incidental, special or consequential damages, or for lost profits, arising from your use of the website or our text messaging program. Our total liability for any claim related to the website or text messages will not exceed one hundred U.S. dollars ($100).',
        ],
      },
      {
        h: '6. Governing law',
        body: ['These terms are governed by the laws of the State of Maryland, without regard to its conflict-of-law rules.'],
      },
      {
        h: '7. Changes to these terms',
        body: ['We may update these terms from time to time. The effective date at the top of this page shows when they were last changed. Continuing to use our website or services after a change means you accept the updated terms.'],
      },
      {
        h: '8. Contact us',
        body: [`${c}, ${LEGAL.location}. Phone: ${phone}. Email: ${email}.`],
      },
    ],
  },
  es: {
    title: 'Términos y Condiciones',
    description: `Términos y condiciones de ${c}, incluidos los términos de nuestro programa de mensajes de texto (SMS).`,
    lead: 'Estos términos aplican a statedispatchers.com, a nuestros servicios de despacho y a nuestro programa de mensajes de texto. Léalos con atención.',
    sections: [
      {
        h: '1. Quiénes somos',
        body: [
          `${c} ("State Dispatchers", "nosotros" o "nuestro") es un servicio de despacho de camiones ubicado en ${LEGAL.location}. Al usar nuestro sitio web, contactarnos o usar nuestros servicios, usted acepta estos Términos y Condiciones y nuestra Política de Privacidad.`,
        ],
      },
      {
        h: '2. Nuestros servicios',
        body: [
          'Ayudamos a propietarios-operadores y flotas pequeñas a encontrar cargas, negociar tarifas y manejar el papeleo de las cargas. Somos un servicio de despacho. No somos un bróker de carga, un transportista ni un remitente.',
          'Usted decide qué cargas acepta. Usted sigue siendo responsable de su autoridad de operación, seguro, seguridad, estado del vehículo, cumplimiento de horas de servicio y la entrega segura de cada carga. Las tarifas, los términos de pago y la cancelación se establecen en el acuerdo de despacho que firma con nosotros; si ese acuerdo contradice estos términos, prevalece el acuerdo de despacho.',
        ],
      },
      {
        h: `3. Programa de mensajes de texto SMS (${LEGAL.program})`,
        body: [
          `Descripción del programa. Cuando usted se inscribe, ${c} envía mensajes de texto al número móvil que usted proporciona. Hay dos tipos de mensajes y usted elige cada uno por separado:`,
          {
            list: [
              'Mensajes de servicio al cliente y despacho: respuestas a sus consultas, ofertas y confirmaciones de cargas, actualizaciones de recogida y entrega, solicitudes de documentos, avisos de cuenta y facturación.',
              'Mensajes de marketing (solo si usted lo acepta por separado): promociones, ofertas especiales, actualizaciones de precios y noticias sobre nuestros servicios.',
            ],
          },
          'Cómo inscribirse. Usted se inscribe marcando la(s) casilla(s) de consentimiento de mensajes de texto en el formulario de contacto de nuestro sitio web, enviándonos un texto primero o dándonos su consentimiento verbal en una llamada, el cual registramos en nuestro sistema. El consentimiento no es una condición para comprar ningún bien o servicio.',
          'La frecuencia de los mensajes varía según su actividad y las cargas en las que trabajamos para usted.',
          'Pueden aplicarse tarifas de mensajes y datos. Consulte su plan móvil para más detalles.',
          `Cómo cancelar. Responda STOP (o ALTO) a cualquier mensaje para dejar de recibir textos. También puede responder ${stopWords}. Recibirá un último mensaje confirmando que se dio de baja y no recibirá más mensajes a menos que se inscriba de nuevo. Para volver a inscribirse, responda START.`,
          `Ayuda. Responda HELP (o AYUDA) a cualquier mensaje para obtener ayuda, o contáctenos al ${phone} o ${email}.`,
          'Los operadores móviles no son responsables por mensajes retrasados o no entregados.',
          'Los operadores compatibles incluyen todos los principales operadores inalámbricos de EE. UU. La entrega de mensajes no está garantizada.',
          'Si cambia o deja de usar su número móvil, avísenos o responda STOP desde ese número para que el próximo dueño del número no reciba nuestros mensajes.',
          'Su información móvil se maneja como se describe en nuestra Política de Privacidad. No compartimos ni vendemos su número móvil ni sus datos de inscripción a mensajes de texto con terceros o afiliados para sus fines de marketing o promoción.',
        ],
      },
      {
        h: '4. Uso de nuestro sitio web',
        body: [
          'Usted acepta usar nuestro sitio web solo con fines legales y proporcionar información correcta cuando nos contacte. No intente interferir con el sitio, acceder a él sin autorización ni enviar el número de teléfono o la información de otra persona sin su permiso.',
          'Las cargas, tarifas e ingresos de ejemplo que se muestran en el sitio son solo ilustraciones y no garantizan cargas ni ingresos futuros.',
        ],
      },
      {
        h: '5. Exención de garantías y limitación de responsabilidad',
        body: [
          'El sitio web y su contenido se ofrecen "tal cual", sin garantías de ningún tipo. En la máxima medida permitida por la ley, State Dispatchers no es responsable por daños indirectos, incidentales, especiales o consecuentes, ni por ganancias perdidas, derivados del uso del sitio web o de nuestro programa de mensajes de texto. Nuestra responsabilidad total por cualquier reclamo relacionado con el sitio web o los mensajes de texto no excederá cien dólares estadounidenses ($100).',
        ],
      },
      {
        h: '6. Ley aplicable',
        body: ['Estos términos se rigen por las leyes del Estado de Maryland, sin considerar sus normas sobre conflicto de leyes.'],
      },
      {
        h: '7. Cambios a estos términos',
        body: ['Podemos actualizar estos términos de vez en cuando. La fecha de vigencia al inicio de esta página indica cuándo se cambiaron por última vez. Si sigue usando nuestro sitio o servicios después de un cambio, acepta los términos actualizados.'],
      },
      {
        h: '8. Contáctenos',
        body: [`${c}, ${LEGAL.location}. Teléfono: ${phone}. Correo: ${email}.`],
      },
    ],
  },
};

export const privacy: Record<Lang, LegalDoc> = {
  en: {
    title: 'Privacy Policy',
    description: `How ${c} collects, uses and protects your information, including mobile numbers and text messaging consent.`,
    lead: 'This policy explains what information we collect, how we use it, and the choices you have.',
    sections: [
      {
        h: '1. Who we are',
        body: [`This Privacy Policy covers ${c} ("State Dispatchers," "we," "us"), located in ${LEGAL.location}, and applies to statedispatchers.com, our dispatch services and our text messaging program.`],
      },
      {
        h: '2. Information we collect',
        body: [
          {
            list: [
              'Contact information you give us: name, mobile phone number, email address and any notes you send.',
              'Business information you give us to set up dispatch: MC/USDOT number, equipment type, preferred lanes, W-9, certificate of insurance, factoring and payment details.',
              'Text messaging records: whether you opted in to customer care and/or marketing texts, the date, time and source of your consent, the consent language shown to you, your messages to us, and any opt-out requests.',
              'Technical information collected automatically when you visit our website, such as IP address, browser type, device type and pages visited, through server logs.',
            ],
          },
        ],
      },
      {
        h: '3. How we use your information',
        body: [
          {
            list: [
              'To respond to your inquiries and contact you by phone, email or text, as you have agreed.',
              'To provide dispatch services: finding loads, negotiating rates, sending carrier packets and handling load paperwork.',
              'To send customer care, dispatch and account text messages if you opted in, and marketing text messages only if you separately opted in.',
              'To keep records of consent and opt-outs and to comply with the law.',
              'To operate, secure and improve our website.',
            ],
          },
        ],
      },
      {
        h: '4. Text messaging and mobile information',
        body: [
          'No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.',
          'All of the categories of sharing described in section 5 below exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties. We only use the messaging service providers that send our texts on our behalf (such as Twilio or Zoom), and they may use the information only to deliver our messages.',
          `You can opt out of text messages at any time by replying STOP. Reply HELP for help, or contact us at ${phone} or ${email}. Message frequency varies. Message and data rates may apply.`,
        ],
      },
      {
        h: '5. How we share information',
        body: [
          'We do not sell your personal information. We share information only as follows:',
          {
            list: [
              'With brokers and shippers, when we book a load for you, we share the business information needed to set you up and move that load (for example, your MC number, insurance certificate and W-9). This excludes your text messaging opt-in data and consent.',
              'With service providers that help us run our business, such as website hosting, email and phone/SMS providers, under confidentiality obligations and only to perform services for us.',
              'When required by law, to respond to legal process, or to protect the rights and safety of our company, our customers or others.',
              'In connection with a merger, sale or transfer of our business, subject to this policy.',
            ],
          },
        ],
      },
      {
        h: '6. How long we keep information',
        body: ['We keep information for as long as needed to provide our services, to keep consent and opt-out records, and to meet legal, tax and accounting requirements. We then delete or anonymize it.'],
      },
      {
        h: '7. How we protect information',
        body: ['We use reasonable administrative, technical and physical safeguards to protect your information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.'],
      },
      {
        h: '8. Your choices and rights',
        body: [
          {
            list: [
              'Text messages: reply STOP to opt out at any time; reply START to opt back in.',
              `Email: ask us to stop emailing you at ${email}.`,
              `Access, correction or deletion: contact us at ${email} or ${phone}. Depending on your state, you may have additional privacy rights, and we will honor them as required by law.`,
            ],
          },
        ],
      },
      {
        h: '9. Children',
        body: ['Our website and services are intended for adults operating trucking businesses. We do not knowingly collect information from anyone under 18.'],
      },
      {
        h: '10. Changes to this policy',
        body: ['We may update this policy from time to time. The effective date at the top of this page shows when it was last changed.'],
      },
      {
        h: '11. Contact us',
        body: [`${c}, ${LEGAL.location}. Phone: ${phone}. Email: ${email}.`],
      },
    ],
  },
  es: {
    title: 'Política de Privacidad',
    description: `Cómo ${c} recopila, usa y protege su información, incluidos los números móviles y el consentimiento para mensajes de texto.`,
    lead: 'Esta política explica qué información recopilamos, cómo la usamos y las opciones que usted tiene.',
    sections: [
      {
        h: '1. Quiénes somos',
        body: [`Esta Política de Privacidad cubre a ${c} ("State Dispatchers", "nosotros"), ubicada en ${LEGAL.location}, y aplica a statedispatchers.com, a nuestros servicios de despacho y a nuestro programa de mensajes de texto.`],
      },
      {
        h: '2. Información que recopilamos',
        body: [
          {
            list: [
              'Información de contacto que usted nos da: nombre, número de teléfono móvil, correo electrónico y cualquier nota que nos envíe.',
              'Información comercial que nos da para el despacho: número MC/USDOT, tipo de equipo, rutas preferidas, W-9, certificado de seguro, datos de factoring y de pago.',
              'Registros de mensajes de texto: si se inscribió a textos de servicio al cliente y/o de marketing, la fecha, hora y fuente de su consentimiento, el texto de consentimiento que se le mostró, sus mensajes y cualquier solicitud de baja.',
              'Información técnica recopilada automáticamente al visitar nuestro sitio, como dirección IP, tipo de navegador, tipo de dispositivo y páginas visitadas, mediante registros del servidor.',
            ],
          },
        ],
      },
      {
        h: '3. Cómo usamos su información',
        body: [
          {
            list: [
              'Para responder a sus consultas y contactarlo por teléfono, correo o texto, según lo que usted aceptó.',
              'Para prestar servicios de despacho: buscar cargas, negociar tarifas, enviar paquetes de transportista y manejar el papeleo de las cargas.',
              'Para enviar mensajes de texto de servicio al cliente, despacho y cuenta si usted se inscribió, y mensajes de marketing solo si se inscribió por separado.',
              'Para mantener registros de consentimiento y bajas y cumplir con la ley.',
              'Para operar, proteger y mejorar nuestro sitio web.',
            ],
          },
        ],
      },
      {
        h: '4. Mensajes de texto e información móvil',
        body: [
          'No compartiremos información móvil con terceros ni afiliados para fines de marketing o promoción. Los datos de inscripción y el consentimiento del originador de mensajes de texto no se compartirán con ningún tercero.',
          'Todas las categorías de intercambio descritas en la sección 5 excluyen los datos de inscripción y el consentimiento del originador de mensajes de texto; esta información no se compartirá con ningún tercero. Solo usamos los proveedores de mensajería que envían nuestros textos en nuestro nombre (como Twilio o Zoom), y ellos pueden usar la información únicamente para entregar nuestros mensajes.',
          `Puede cancelar los mensajes de texto en cualquier momento respondiendo STOP. Responda HELP para obtener ayuda, o contáctenos al ${phone} o ${email}. La frecuencia de los mensajes varía. Pueden aplicarse tarifas de mensajes y datos.`,
        ],
      },
      {
        h: '5. Cómo compartimos información',
        body: [
          'No vendemos su información personal. Solo compartimos información de la siguiente manera:',
          {
            list: [
              'Con brókers y remitentes, cuando reservamos una carga para usted, compartimos la información comercial necesaria para darle de alta y mover esa carga (por ejemplo, su número MC, certificado de seguro y W-9). Esto excluye sus datos de inscripción y consentimiento para mensajes de texto.',
              'Con proveedores de servicios que nos ayudan a operar, como hospedaje web, correo y proveedores de teléfono/SMS, bajo obligaciones de confidencialidad y solo para prestarnos servicios.',
              'Cuando lo exija la ley, para responder a procesos legales o para proteger los derechos y la seguridad de nuestra empresa, nuestros clientes u otras personas.',
              'En relación con una fusión, venta o transferencia de nuestro negocio, sujeto a esta política.',
            ],
          },
        ],
      },
      {
        h: '6. Cuánto tiempo guardamos la información',
        body: ['Guardamos la información el tiempo necesario para prestar nuestros servicios, mantener registros de consentimiento y bajas, y cumplir requisitos legales, fiscales y contables. Después la eliminamos o la anonimizamos.'],
      },
      {
        h: '7. Cómo protegemos la información',
        body: ['Usamos medidas administrativas, técnicas y físicas razonables para proteger su información. Ningún método de transmisión o almacenamiento es completamente seguro, por lo que no podemos garantizar una seguridad absoluta.'],
      },
      {
        h: '8. Sus opciones y derechos',
        body: [
          {
            list: [
              'Mensajes de texto: responda STOP para darse de baja en cualquier momento; responda START para volver a inscribirse.',
              `Correo: pídanos que dejemos de enviarle correos escribiendo a ${email}.`,
              `Acceso, corrección o eliminación: contáctenos en ${email} o al ${phone}. Según su estado, usted puede tener derechos de privacidad adicionales, y los respetaremos según lo exija la ley.`,
            ],
          },
        ],
      },
      {
        h: '9. Menores de edad',
        body: ['Nuestro sitio y servicios están dirigidos a adultos que operan negocios de transporte. No recopilamos a sabiendas información de menores de 18 años.'],
      },
      {
        h: '10. Cambios a esta política',
        body: ['Podemos actualizar esta política de vez en cuando. La fecha de vigencia al inicio de esta página indica cuándo se cambió por última vez.'],
      },
      {
        h: '11. Contáctenos',
        body: [`${c}, ${LEGAL.location}. Teléfono: ${phone}. Correo: ${email}.`],
      },
    ],
  },
};

/** Contact-form SMS consent copy. Both boxes are optional and unchecked by default. */
export const smsConsent: Record<Lang, { care: string; marketing: string; disclosure: string; terms: string; privacy: string; and: string }> = {
  en: {
    care: `I agree to receive customer care and dispatch text messages from ${c} at the phone number provided, such as replies to my inquiry, load offers, pickup and delivery updates, and account notices.`,
    marketing: `I agree to receive marketing and promotional text messages from ${c} at the phone number provided, such as special offers and service updates.`,
    disclosure: 'Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. By opting in you agree to our',
    terms: 'Terms & Conditions',
    privacy: 'Privacy Policy',
    and: 'and',
  },
  es: {
    care: `Acepto recibir mensajes de texto de servicio al cliente y despacho de ${c} al número proporcionado, como respuestas a mi consulta, ofertas de cargas, actualizaciones de recogida y entrega, y avisos de cuenta.`,
    marketing: `Acepto recibir mensajes de texto de marketing y promoción de ${c} al número proporcionado, como ofertas especiales y novedades del servicio.`,
    disclosure: 'La frecuencia de los mensajes varía. Pueden aplicarse tarifas de mensajes y datos. Responda STOP para cancelar o HELP para obtener ayuda. El consentimiento no es una condición de compra. Al inscribirse, acepta nuestros',
    terms: 'Términos y Condiciones',
    privacy: 'Política de Privacidad',
    and: 'y la',
  },
};

export const legalLabels: Record<Lang, { terms: string; privacy: string; effective: string }> = {
  en: { terms: 'Terms & Conditions', privacy: 'Privacy Policy', effective: 'Effective date' },
  es: { terms: 'Términos y Condiciones', privacy: 'Política de Privacidad', effective: 'Fecha de vigencia' },
};
