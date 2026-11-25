// Itinerario Auckland & Rotorua — datos de este viaje.
// Refleja las decisiones finales confirmadas en los correos con Viviana (Forest Travel).
// Viviana ya reservó por Viator todas las actividades; el spa está en proceso y el auto es cotización.
export const DAYS = [
  {
    month: 'NOV', num: '24', dow: 'Mar',
    port: 'Panamá → Newark → Ciudad del Cabo', type: 'travel', typeLabel: 'Inicio del viaje',
    activities: [
      {
        name: 'Vuelo UA727 — Panamá → Newark', travel: true,
        meetingTime: '10:00 a.m.', meetingPlace: 'Tocumen (PTY) → Newark (EWR)', startEnd: 'Llega 3:16 p.m. · 5 h 16 min',
        description: 'United Airlines UA727. Localizador MWGCVT. Boletos 0162396255338 (Rachelle) y 0162396255337 (Raymond).',
      },
      {
        name: 'Vuelo UA1122 — Newark → Ciudad del Cabo', travel: true,
        meetingTime: '8:35 p.m.', meetingPlace: 'Newark (EWR) → Cape Town (CPT)', startEnd: 'Llega 6:00 p.m. del 25 · 14 h 25 min',
        description: 'United Airlines UA1122, vuelo nocturno que aterriza en Ciudad del Cabo a las 6:00 p.m. del miércoles 25. Está cargado como DOS reservas separadas: ABW3PE (Rachelle) y MV4Q4R (Raymond). OJO: en la reserva MV4Q4R el nombre aparece como “Raymind Eskenazi Michaan” — hay que pedirle a Viviana que lo corrija antes de emitir.',
      },
    ],
    notes: 'Noche a bordo. Entre los dos vuelos hay unas 5 horas de conexión en Newark.',
  },
  {
    month: 'NOV', num: '25', dow: 'Mié',
    port: 'Ciudad del Cabo', type: 'city', typeLabel: 'Llegada',
    weather: { i: '☀️', t: '24° / 13°', d: 'Primavera tardía: seco y soleado, con el viento del sureste («Cape Doctor»)' },
    activities: [
      {
        name: 'Llegada a Ciudad del Cabo', travel: true,
        meetingTime: '6:00 p.m.', meetingPlace: 'Cape Town International (CPT)', startEnd: '',
        description: 'Llegada del UA1122. Incluye asistencia en el aeropuerto a la llegada y traslado hasta el hotel.',
      },
      {
        name: 'Check-in — Southern Sun The Cullinan', travel: true,
        meetingTime: 'Al llegar', meetingPlace: 'Southern Sun The Cullinan', startEnd: '4 noches',
        description: 'Habitación Standard con desayuno incluido, del 25 al 29 de noviembre. Este hotel no aparece en el itinerario oficial de Axus — viene del itinerario de &Beyond.',
      },
    ],
    notes: 'Noche en Southern Sun The Cullinan, Ciudad del Cabo.',
  },
  {
    month: 'NOV', num: '26', dow: 'Jue',
    port: 'Cape Point & Table Mountain', type: 'city', typeLabel: 'Tour privado',
    weather: { i: '☀️', t: '24° / 13°', d: 'Primavera tardía: seco y soleado, con el viento del sureste («Cape Doctor»)' },
    activities: [
      {
        name: "Hike Lion's Head",
        meetingTime: '5:30 a.m.', meetingPlace: "Inicio del sendero, Signal Hill Road (parqueo de Lion's Head)", startEnd: '~2–3 h ida y vuelta',
        description: 'Subida de unas 2–3 horas ida y vuelta, con vista a Table Mountain, Camps Bay y el Atlántico. No requiere reserva ni entrada. El último tramo tiene cadenas y escaleras de metal; hay una ruta alterna sin cadenas. Llevar agua, zapatos con buen agarre y una capa para el viento. OJO: el mismo día es el tour privado de Cape Point; hay que confirmar la hora de pickup para estar de vuelta en el hotel a tiempo.',
        link: 'https://www.google.com/maps/search/?api=1&query=Lion%27s+Head+Trailhead+Cape+Town',
      },
      {
        name: 'Tour privado de día completo — Cape Point y Boulders Beach',
        operator: '&Beyond · Vehículo y guía privados',
        meetingTime: 'Día completo', meetingPlace: 'Pickup en el hotel', startEnd: '',
        description: 'Recorrido por la península del Cabo con vehículo y guía privados. Incluye las entradas a Cape Point y a Boulders Beach (la colonia de pingüinos). Horario exacto por confirmar.',
      },
      {
        name: 'Table Mountain — entradas fast track',
        meetingTime: 'Mismo día', meetingPlace: 'Table Mountain', startEnd: '',
        description: 'Entradas fast track al teleférico de Table Mountain incluidas en el tour.',
      },
    ],
    notes: 'Noche en Southern Sun The Cullinan, Ciudad del Cabo.',
  },
  {
    month: 'NOV', num: '27', dow: 'Vie',
    port: 'Winelands', type: 'city', typeLabel: 'Viñedos',
    weather: { i: '☀️', t: '24° / 13°', d: 'Primavera tardía: seco y soleado, con el viento del sureste («Cape Doctor»)' },
    activities: [
      {
        name: 'Tour privado de día completo por los Winelands',
        operator: '&Beyond · Vehículo y guía privados',
        meetingTime: 'Día completo', meetingPlace: 'Pickup en el hotel', startEnd: '',
        description: 'Recorrido privado por la región de los viñedos (Stellenbosch, Franschhoek y alrededores) con las entradas incluidas. Horario exacto por confirmar.',
      },
    ],
    notes: 'Noche en Southern Sun The Cullinan, Ciudad del Cabo.',
  },
  {
    month: 'NOV', num: '28', dow: 'Sáb',
    port: 'Ciudad del Cabo', type: 'city', typeLabel: 'Día libre',
    weather: { i: '☀️', t: '24° / 13°', d: 'Primavera tardía: seco y soleado, con el viento del sureste («Cape Doctor»)' },
    activities: [
      {
        name: 'Quads en las dunas de Atlantis — WildX (tour privado)',
        operator: 'WildX Adventures · Reservado',
        meetingTime: '8:30 a.m.', meetingPlace: 'Witzands Aquifer Nature Reserve, Dassenberg Dr, Atlantis', startEnd: 'Salir del hotel 7:15 a.m. · ~1 h',
        description: 'Tour privado de quads con guía por las dunas de Atlantis, solo para los dos (2 adultos), sábado 28 nov a las 8:30 a.m. Reserva Viator 1465047223 · confirmación del operador 2526475. Incluye quad, guía y equipo de seguridad; NO incluye el transporte ni el permiso de la reserva Witzands, que se paga al llegar. Salir del hotel a las 7:15 a.m.: son ~45 min en carro hacia el norte y la oficina de WildX está dentro de la reserva Witzands Aquifer. Llevar los pasaportes, porque hay que llenar en el lugar el formulario de exoneración de la ciudad; zapatos cerrados, lentes de sol y bandana o buff. No es reembolsable ni se puede cambiar. Contacto de WildX: +27 84 800 2336.',
        link: 'reservas/quads-atlantis-28nov.pdf',
      },
      {
        name: 'Pasear por el Waterfront y shops',
        meetingTime: '~11:00 a.m.', meetingPlace: 'V&A Waterfront', startEnd: '',
        description: 'Al volver de las dunas. Paseo y compras por el V&A Waterfront, con parada en SKINS – Cape Town (belleza y fragancias de lujo): Victoria Wharf Mall, nivel superior, local 6214; abre todos los días de 9:00 a.m. a 9:00 p.m.; tel. 021 065 0331. Si quieren mercado, es sábado: Oranjezicht City Farm Market en el V&A Waterfront (Granger Bay, 8:00 a.m.–2:00 p.m., comida y productores locales) o Neighbourgoods Market en The Old Biscuit Mill, Woodstock (9:00 a.m.–3:00 p.m.). Sin reserva.',
      },
      {
        name: 'Cheetah Outreach',
        operator: 'Somerset West · De Beers Avenue, frente al Somerset Mall',
        meetingTime: '3:30 p.m.', meetingPlace: 'Cheetah Outreach, De Beers Avenue, Somerset West', startEnd: 'Hasta 4:30 p.m. · llegar 3:10 p.m.',
        description: 'Centro de conservación de guepardos a unos 45 min del V&A, en dirección a Stellenbosch. Encuentro con los guepardos de 3:30 a 4:30 p.m.; hay que llegar 20 minutos antes, a las 3:10 p.m., así que conviene salir del V&A hacia las 2:15 p.m. Contacto: cheetah.co.za (+27 82 623 9960).',
      },
    ],
    notes: 'Noche en Southern Sun The Cullinan, Ciudad del Cabo. Última noche en la ciudad. Si sobra tiempo: Bo-Kaap, Robben Island o la playa de Camps Bay.',
  },
  {
    month: 'NOV', num: '29', dow: 'Dom',
    port: 'Ciudad del Cabo → Safari', type: 'travel', typeLabel: 'Vuelo al safari',
    weather: { i: '⛈️', t: '33° / 19°', d: 'Verano del bushveld: amanece fresco, calor fuerte al mediodía y tormentas aisladas por la tarde' },
    activities: [
      {
        name: 'Traslado al aeropuerto de Ciudad del Cabo', travel: true,
        meetingTime: 'Por confirmar', meetingPlace: 'Hotel → Cape Town International (CPT)', startEnd: '',
        description: 'Traslado desde el hotel, con asistencia en el aeropuerto a la salida. Para el vuelo de las 10:15 a.m., conviene salir del hotel hacia las 8:15 a.m.',
      },
      {
        name: 'Vuelo 4Z657 — Ciudad del Cabo → Hoedspruit', travel: true,
        operator: 'Airlink · reservado vía Bateleur Travel',
        meetingTime: '10:15 a.m.', meetingPlace: 'Cape Town (CPT) → Hoedspruit Eastgate (HDS)', startEnd: 'Llega 12:45 p.m. · 2 h 30 min',
        description: 'Airlink 4Z657, vuelo regular de Cape Town International al aeropuerto de Hoedspruit Eastgate, la puerta de entrada a la zona de Kruger y Timbavati.',
      },
      {
        name: 'Traslado a Ngala Tented Camp', travel: true,
        meetingTime: 'Al llegar', meetingPlace: 'Hoedspruit → andBeyond Ngala Tented Camp', startEnd: '',
        description: 'Traslado terrestre desde el aeropuerto de Hoedspruit hasta el campamento, dentro de la reserva privada de Ngala. Sale al llegar el 4Z657 (12:45 p.m.).',
      },
    ],
    notes: 'Noche en andBeyond Ngala Tented Camp — Tented Suite, todo incluido, 3 noches.',
  },
  {
    month: 'NOV', num: '30', dow: 'Lun',
    port: 'Safari — Ngala', type: 'adventure', typeLabel: 'Safari',
    weather: { i: '⛈️', t: '33° / 19°', d: 'Verano del bushveld: amanece fresco, calor fuerte al mediodía y tormentas aisladas por la tarde' },
    activities: [
      {
        name: 'Día de safari en Ngala',
        operator: 'andBeyond · Todo incluido',
        meetingTime: 'Todo el día', meetingPlace: 'andBeyond Ngala Tented Camp', startEnd: '',
        description: 'Día completo en la reserva privada de Ngala, con el régimen todo incluido del campamento. Los game drives suelen ser al amanecer y al atardecer, pero los horarios los fija el campamento — no vienen detallados en el itinerario.',
      },
    ],
    notes: 'Noche en andBeyond Ngala Tented Camp.',
  },
  {
    month: 'DIC', num: '1', dow: 'Mar',
    port: 'Safari — Ngala', type: 'adventure', typeLabel: 'Safari',
    weather: { i: '⛈️', t: '34° / 20°', d: 'Verano del bushveld: amanece fresco, calor fuerte al mediodía y tormentas aisladas por la tarde' },
    activities: [
      {
        name: 'Día de safari en Ngala',
        operator: 'andBeyond · Todo incluido',
        meetingTime: 'Todo el día', meetingPlace: 'andBeyond Ngala Tented Camp', startEnd: '',
        description: 'Último día completo de safari, con el régimen todo incluido del campamento.',
      },
    ],
    notes: 'Noche en andBeyond Ngala Tented Camp. Última noche del safari.',
  },
  {
    month: 'DIC', num: '2', dow: 'Mié',
    port: 'Safari → Johannesburgo', type: 'travel', typeLabel: 'Día de traslado',
    weather: { i: '⛈️', t: '26° / 15°', d: 'Verano en el Highveld: tormentas eléctricas al caer la tarde' },
    activities: [
      {
        name: 'Traslado al aeropuerto de Hoedspruit', travel: true,
        meetingTime: 'Por confirmar', meetingPlace: 'Ngala Tented Camp → Hoedspruit (HDS)', startEnd: '',
        description: 'Traslado terrestre desde el campamento hasta el aeropuerto de Hoedspruit Eastgate, para el vuelo de las 2:30 p.m. El campamento confirma la hora de salida.',
      },
      {
        name: 'Vuelo 4Z874 — Hoedspruit → Johannesburgo', travel: true,
        operator: 'Airlink · reservado vía Bateleur Travel',
        meetingTime: '2:30 p.m.', meetingPlace: 'Hoedspruit Eastgate (HDS) → O.R. Tambo (JNB)', startEnd: 'Llega 3:30 p.m. · 1 h',
        description: 'Airlink 4Z874, vuelo regular, con la modificación de vuelo ya aplicada según el itinerario de &Beyond. Incluye asistencia a la llegada en O.R. Tambo.',
      },
      {
        name: 'Check-in — City Lodge OR Tambo', travel: true,
        meetingTime: 'Al llegar', meetingPlace: 'City Lodge OR Tambo International Airport', startEnd: '1 noche',
        description: 'Habitación Standard con desayuno, dentro del aeropuerto. Una sola noche para conectar con el vuelo a Singapur del día siguiente.',
      },
      {
        name: 'Nine Yards',
        operator: 'Parktown North · 167 Jan Smuts Avenue, esquina Chester Road',
        meetingTime: '~5:00 p.m.', meetingPlace: '', startEnd: 'Abre hasta las 6:00 p.m.',
        description: 'Precinto al aire libre abierto en 2026: nueve propiedades históricas unidas en un paseo peatonal entre bambú, con tiendas de diseño, galerías, cafés y restaurantes (Salvation Café, Platō Coffee, Ole Ole, Doppio Bistrot, Ti Amo Deli). Los listados dan horario de 7:00 a.m. a 6:00 p.m. todos los días, así que conviene salir del City Lodge hacia las 4:30 p.m.: son ~23 km (26 min sin tráfico, pero a esa hora es hora pico). Queda a 1 km de Marble (2–3 min en Uber) para seguir con el atardecer a las 6:46 p.m.',
      },
      {
        name: 'Cena en Marble',
        operator: 'Rosebank · Trumpet on Keyes, esquina Keyes y Jellicoe',
        meetingTime: '8:30 p.m.', meetingPlace: 'Marble', startEnd: 'Reservado',
        description: 'Reserva confirmada a las 8:30 p.m. Parrilla a la leña del chef David Higgs en la azotea del Keyes Art Mile. El atardecer es a las 6:46 p.m., antes de la cena: el bar de la azotea de Marble abre hasta las 10:00 p.m. sin reserva, así que se puede llegar desde Nine Yards (a 1 km) para ver el sol y quedarse a cenar. Regreso al City Lodge en Uber (~26 min); el Gautrain ya no opera a esa hora.',
      },
    ],
    notes: 'Noche en City Lodge OR Tambo, Johannesburgo. Regreso al hotel en Uber: el Gautrain deja de operar a las 8:30 p.m.',
  },
  {
    month: 'DIC', num: '3', dow: 'Jue',
    port: 'Johannesburgo → Singapur', type: 'travel', typeLabel: 'Vuelo largo',
    weather: { i: '⛈️', t: '26° / 15°', d: 'Verano en el Highveld: tormentas eléctricas al caer la tarde' },
    activities: [
      {
        name: 'Vuelo SQ479 — Johannesburgo → Singapur', travel: true,
        meetingTime: '1:40 p.m.', meetingPlace: 'O.R. Tambo (JNB) → Singapur Changi (SIN)', startEnd: 'Llega 6:15 a.m. del 4 · 10 h 35 min',
        description: 'Singapore Airlines SQ479, vuelo nocturno. Localizador FBNPDT. PROBLEMA: en el itinerario oficial este segmento aparece Únicamente a nombre de Raymond — Rachelle no figura en el vuelo. Hay que verificarlo con Viviana con urgencia. Incluye asistencia en el aeropuerto a la salida.',
      },
    ],
    notes: 'Noche a bordo rumbo a Singapur.',
  },
  {
    month: 'DIC', num: '4', dow: 'Vie',
    port: 'Singapur → Maldivas', type: 'travel', typeLabel: 'Llegada a Maldivas · 🕎 Día 1',
    weather: { i: '🌦️', t: '30° / 26°', d: 'Caluroso y húmedo, con chubascos tropicales breves (~12 días al mes); mar a 28–29°' },
    activities: [
      {
        name: 'Vuelo SQ432 — Singapur → Malé', travel: true,
        meetingTime: '10:05 a.m.', meetingPlace: 'Singapur Changi (SIN) → Malé (MLE)', startEnd: 'Llega 11:40 a.m. · 4 h 35 min',
        description: 'Singapore Airlines SQ432. Localizador FBNPDT. OJO: el itinerario oficial lista este vuelo bajo el 3 de diciembre, pero el SQ479 no aterriza en Singapur hasta las 6:15 a.m. del 4 — así que la fecha correcta debería ser el 4. Hay que confirmarlo.',
      },
      {
        name: 'Traslado al resort', travel: true,
        meetingTime: 'Por confirmar', meetingPlace: 'Malé (MLE) → Kothaifaru, Raa Atoll', startEnd: '',
        description: 'El Raa Atoll se alcanza en hidroavión o vuelo doméstico más lancha. No hay ningún traslado reservado en el itinerario oficial — hay que confirmarlo con el resort o con Viviana.',
      },
      {
        name: 'Check-in — Alila Kothaifaru Maldives', travel: true,
        meetingTime: '2:00 p.m.', meetingPlace: 'Kothaifaru Island, Raa Atoll', startEnd: '5 noches',
        description: 'Ocean Water Villa, cama King, del 4 al 9 de diciembre. Confirmación 150754RA003580. Teléfono 960 659-1234. OJO: la tarifa es totalmente no reembolsable y no admite cambios.',
      },
    ],
    notes: 'Noche en Alila Kothaifaru Maldives, Raa Atoll.',
  },
  {
    month: 'DIC', num: '5', dow: 'Sáb',
    port: 'Maldivas', type: 'city', typeLabel: 'Resort · 🕎 Día 2',
    weather: { i: '🌦️', t: '30° / 26°', d: 'Caluroso y húmedo, con chubascos tropicales breves (~12 días al mes); mar a 28–29°' },
    activities: [
      {
        name: 'Día libre en Alila Kothaifaru',
        meetingTime: 'Todo el día', meetingPlace: 'Raa Atoll', startEnd: '',
        description: 'Día libre en el resort.',
      },
    ],
    notes: 'Noche en Alila Kothaifaru Maldives.',
  },
  {
    month: 'DIC', num: '6', dow: 'Dom',
    port: 'Maldivas', type: 'city', typeLabel: 'Resort · 🕎 Día 3',
    weather: { i: '🌦️', t: '30° / 26°', d: 'Caluroso y húmedo, con chubascos tropicales breves (~12 días al mes); mar a 28–29°' },
    activities: [
      {
        name: 'Día libre en Alila Kothaifaru',
        meetingTime: 'Todo el día', meetingPlace: 'Raa Atoll', startEnd: '',
        description: 'Día libre en el resort.',
      },
    ],
    notes: 'Noche en Alila Kothaifaru Maldives.',
  },
  {
    month: 'DIC', num: '7', dow: 'Lun',
    port: 'Maldivas', type: 'city', typeLabel: 'Resort · 🕎 Día 4',
    weather: { i: '🌦️', t: '30° / 26°', d: 'Caluroso y húmedo, con chubascos tropicales breves (~12 días al mes); mar a 28–29°' },
    activities: [
      {
        name: 'Scuba diving — Euro-Divers Alila Kothaifaru',
        operator: 'Euro-Divers · centro de buceo del resort (PADI 5 Estrellas)',
        meetingTime: '8:00 a.m.', meetingPlace: 'Centro de buceo Euro-Divers, en la playa del resort', startEnd: 'Hasta 12:00 p.m.',
        description: 'Salida de la mañana en dhoni (barco tradicional maldivo), dos tanques. Es la salida que el centro usa para ir a ver mantas: Sola Corner, una estación de limpieza a 15–20 minutos del resort, o Maafaru Thila, a 45 minutos; en diciembre empieza la temporada, pero no está garantizado. Como son Open Water, el límite es 18 m; las mantas suelen estar a 10–15 m. En los thilas puede haber corriente fuerte. Obligatorio: seguro de buceo (el centro vende el DAN de corto plazo), boya de superficie y computadora (se alquilan junto con el equipo). Nitrox gratis para buzos certificados. Llevar las tarjetas de certificación. Pueden volar en el hidroavión del 9 sin problema: pasan más de 24 horas. Contacto: alila@euro-divers.com · +960 777 1245.',
        link: 'https://www.euro-divers.com/alila-maldives-dive-water-sports-centre/',
      },
      {
        name: 'Tarde libre en Alila Kothaifaru',
        meetingTime: 'Desde 12:00 p.m.', meetingPlace: 'Raa Atoll', startEnd: '',
        description: 'Tarde libre en el resort después del buceo.',
      },
    ],
    notes: 'Noche en Alila Kothaifaru Maldives.',
  },
  {
    month: 'DIC', num: '8', dow: 'Mar',
    port: 'Maldivas', type: 'city', typeLabel: 'Resort · 🕎 Día 5',
    weather: { i: '🌦️', t: '30° / 26°', d: 'Caluroso y húmedo, con chubascos tropicales breves (~12 días al mes); mar a 28–29°' },
    activities: [
      {
        name: 'Día libre en Alila Kothaifaru',
        meetingTime: 'Todo el día', meetingPlace: 'Raa Atoll', startEnd: '',
        description: 'Último día completo en el resort.',
      },
    ],
    notes: 'Noche en Alila Kothaifaru Maldives. Última noche en Maldivas.',
  },
  {
    month: 'DIC', num: '9', dow: 'Mié',
    port: 'Maldivas → Kuala Lumpur → Auckland', type: 'travel', typeLabel: 'Día de vuelos · 🕎 Día 6',
    weather: { i: '🌦️', t: '30° / 26°', d: 'Caluroso y húmedo, con chubascos tropicales breves (~12 días al mes); mar a 28–29°' },
    activities: [
      {
        name: 'Check-out y salida de la isla', travel: true,
        meetingTime: 'Temprano', meetingPlace: 'Alila Kothaifaru → Malé (MLE)', startEnd: '',
        description: 'El check-out figura a las 12:00 p.m., pero el vuelo a Kuala Lumpur sale de Malé también a las 12:00 p.m. Como del Raa Atoll a Malé hay hidroavión o vuelo doméstico, tienen que salir de la isla temprano en la mañana. Hay que coordinar el check-out anticipado y el traslado.',
      },
      {
        name: 'Vuelo MH484 — Malé → Kuala Lumpur', travel: true,
        meetingTime: '12:00 p.m.', meetingPlace: 'Malé (MLE) → Kuala Lumpur (KUL)', startEnd: 'Llega 7:45 p.m. · 4 h 45 min',
        description: 'Malaysia Airlines MH484. Localizador DTH4EG. Boletos 232-4832787827 (Rachelle) y 232-4832787826 (Raymond).',
      },
      {
        name: 'Vuelo MH145 — Kuala Lumpur → Auckland', travel: true,
        meetingTime: '8:55 p.m.', meetingPlace: 'Kuala Lumpur (KUL) → Auckland (AKL)', startEnd: 'Llega 12:15 p.m. del 10 · 10 h 20 min',
        description: 'Malaysia Airlines MH145, mismo localizador DTH4EG. OJO: el MH484 aterriza en Kuala Lumpur a las 7:45 p.m. y este sale a las 8:55 p.m. — solo 1 hora 10 minutos de conexión. Van en la misma reserva, así que la aerolínea responde si se atrasa, pero es ajustada.',
      },
    ],
    notes: 'Noche a bordo rumbo a Auckland. Llegan a Nueva Zelanda al mediodía del 10.',
  },
  {
    month: 'DIC', num: '10', dow: 'Jue',
    port: 'Llegada a Auckland', type: 'city', typeLabel: 'Llegada · 🕎 Día 7',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-37.00655,174.79034&destination=-36.84335,174.76654&travelmode=driving',
    weather: { i: '🌤️', t: '22° / 15°', d: 'Inicio del verano: templado, húmedo y cambiante, con chubascos ocasionales' },
    activities: [
      {
        name: 'Vuelo MH145 — llegada a Auckland', travel: true,
        meetingTime: '12:15 p.m.', meetingPlace: 'Auckland Airport (AKL)', startEnd: 'Vuelo 10 h 20 min',
        description: 'Malaysia Airlines MH145. Sale de Kuala Lumpur (KUL) a las 8:55 p.m. del 9 de diciembre y aterriza en Auckland a las 12:15 p.m. del 10. Localizador DTH4EG. Boletos: 232-4832787827 (Rachelle) y 232-4832787826 (Raymond).',
      },
      {
        name: 'Traslado y check-in — Hotel InterContinental', travel: true,
        meetingTime: 'Por confirmar', meetingPlace: 'InterContinental Auckland, 1 Queen Street', startEnd: '2 noches',
        description: 'Traslado del aeropuerto al hotel (~30 minutos) y check-in. Habitación Classic, cama King, del 10 al 12 de diciembre (check-out 3:00 p.m.). Confirmación 28546839. El auto de alquiler se recoge recién el 12 dic, así que este traslado sería en taxi o transfer — no hay ninguno reservado.',
      },
      {
        name: 'Tarde libre en Auckland',
        meetingTime: 'Resto del día', meetingPlace: 'Centro de Auckland', startEnd: '',
        description: 'Día de llegada: descansar del vuelo y pasear por el centro (Viaduct Harbour, Britomart, Queen Street). Pendiente buscar recomendaciones de la ciudad y reservar cena.',
      },
    ],
    notes: 'Noche en Hotel InterContinental, Auckland.',
  },
  {
    month: 'DIC', num: '11', dow: 'Vie',
    port: 'Auckland', type: 'city', typeLabel: 'Waiheke Island · 🕎 Día 8',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-36.84335,174.76654&destination=-36.78059,174.99168&travelmode=transit',
    weather: { i: '🌤️', t: '22° / 15°', d: 'Inicio del verano: templado, húmedo y cambiante, con chubascos ocasionales' },
    activities: [
      {
        name: 'Ferry a Waiheke — Island Direct', travel: true,
        operator: 'Island Direct · Reservado (solo ida)',
        meetingTime: '9:15 a.m.', meetingPlace: 'Downtown Ferry Terminal, Pier 13 → Matiatia (Waiheke)', startEnd: 'Embarque 8:55 a.m. · llega ~9:55 a.m.',
        description: 'Boleto de ida con Island Direct para 2 adultos, viernes 11 dic, salida 9:15 a.m. Confirmación 67309434. Hay que llegar 20 minutos antes (embarque 8:55 a.m.) y el embarque cierra 5 minutos antes de zarpar. Se aborda mostrando el código QR, que está en el PDF de la reserva (abajo) y en el correo de confirmación (se puede guardar en Apple/Google Wallet) y los dos tienen que hacer la fila juntos. Island Direct sale del Pier 13 del Downtown Ferry Terminal, a ~2 minutos caminando del InterContinental: salir del hotel ~8:40 a.m. El trayecto dura ~40 minutos y llega a Matiatia Pier 3 con tiempo de sobra para el tour de las 10:40 a.m. Si pierden el ferry el boleto se invalida; para cambiar de horario hay que hacerlo en línea (Manage Booking) antes de la salida. Sentido Auckland → Waiheke (Boarding Location: Auckland), ya corregido.',
        link: 'reservas/ferry-waiheke-11dic.pdf',
      },
      {
        name: 'Scenic Wine Tour con guía y 12 degustaciones (Waiheke)',
        operator: 'Viator · Tour en grupo · Reservado',
        meetingTime: '10:40 a.m.', meetingPlace: 'Matiatia Wharf, Waiheke Island', startEnd: 'Hasta 3:40 p.m. · 5 h',
        description: 'Tour en grupo de 5 horas, de 10:40 a.m. a 3:40 p.m. Visita 3 de los mejores viñedos de la isla y se degustan ~15 vinos. No incluye almuerzo. Confirmación 1806287245 · referencia 1424036657. El guía los recibe en el ferry en Matiatia Wharf con la van de Kiwi Connect. El ferry no está incluido en el tour: la ida ya está comprada (Island Direct, 9:15 a.m.) y falta comprar el regreso.',
        link: 'https://www.viator.com/tours/Waiheke-Island/4-hour-SCENIC-WINE-Tour-with-a-Private-Guide-and-12-tastings/d32653-62882P4?pid=P00001955&uid=U00767249&mcid=58086&currency=USD',
      },
      {
        name: 'Regreso a Auckland en ferry', travel: true,
        actionBadge: 'No comprado',
        meetingTime: 'Por definir', meetingPlace: 'Matiatia → Downtown Ferry Terminal', startEnd: '~40 min',
        description: 'El boleto de regreso todavía NO está comprado. Salidas de los viernes desde Matiatia: Island Direct (Pier 3) a las 5:15, 6:15, 7:30, 8:45, 10:15 y 11:15 p.m. y 12:15 a.m.; Fullers360 (Pier 1) a las 4:30, 5:00, 5:30, 6:00, 6:30, 7:00, 7:30, 8:00, 9:30 y 11:00 p.m. y 12:30 a.m. Son compañías distintas, cada una con sus propios boletos. El atardecer es a las 8:33 p.m. El 12 dic salen del hotel a las 7:00 a.m., así que conviene no volver muy tarde. Horario de Auckland Transport vigente desde el 19 oct 2026; en Navidad puede cambiar. Noche en Hotel InterContinental, Auckland.',
      },
    ],
    notes: 'Noche en Hotel InterContinental, Auckland. (Este día se usa el ferry — el auto se recoge el 12 dic.)',
  },
  {
    month: 'DIC', num: '12', dow: 'Sáb',
    port: 'Auckland → Rotorua', type: 'travel', typeLabel: 'Día de traslado',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-36.84835,174.75927&destination=-38.10875,176.24180&waypoints=-38.26087,175.10354%7C-38.03574,175.84193&travelmode=driving',
    weather: { i: '🌦️', t: '21° / 12°', d: 'Verano templado: llueve ~1 de cada 3 días, lleva impermeable' },
    activities: [
      {
        name: 'Salida del hotel + recoger auto de alquiler (Divine Rentals)', travel: true,
        meetingTime: '7:00 a.m.', meetingPlace: 'Divine Rentals — Auckland Downtown', startEnd: 'Auto ~3 h a Waitomo',
        description: 'Salida del hotel a las 7:00 a.m. para retirar el auto en Divine Rentals, Auckland Downtown. Vehículo: Midsize Convertible — Mazda MX-5 Roadster o similar, del 12 al 15 de diciembre, con kilometraje ilimitado y sin combustible incluido. Devolución: 15 dic, Auckland Airport, 12:00 p.m. Desde Auckland son ~3 h en auto hasta Waitomo.',
      },
      {
        name: 'Waitomo Glowworm Caves Guided Tour',
        operator: 'Viator · Reservado',
        meetingTime: '11:40 a.m.', meetingPlace: '39 Waitomo Village Road, Waitomo Caves', startEnd: '',
        description: 'Tour guiado por las cuevas de luciérnagas de Waitomo. Horario confirmado: 11:40 a.m. (Viviana lo recomendó en vez de 10:10 para no ir corriendo).',
        link: 'https://www.viator.com/tours/Waitomo/Waitomo-Glowworm-Caves-Guided-Tour/d27469-3930P3?pid=P00001955&uid=U00767249&mcid=58086&currency=USD',
      },
      {
        name: 'Almuerzo en la zona de Waitomo', travel: true,
        meetingTime: '~1:00 p.m.', meetingPlace: '', startEnd: '',
        description: 'Almuerzo en Waitomo después de las cuevas, antes de continuar hacia Blue Spring.',
      },
      {
        name: 'Blue Spring — Te Waihou Walkway',
        meetingTime: 'Tarde', meetingPlace: 'Estacionamiento de Leslie Road', startEnd: '',
        description: 'Parada en el manantial Blue Spring, entrando por el estacionamiento de Leslie Road, que es el acceso corto al manantial. El traslado desde Waitomo es de aproximadamente 1 h 15 min.',
      },
      {
        name: 'Traslado a Rotorua + check-in', travel: true,
        meetingTime: 'Fin de la tarde', meetingPlace: 'Black Swan Lakeside, 171 Kawaha Point Rd', startEnd: '3 noches',
        description: 'Traslado desde Blue Spring a Rotorua (~1 hora) y check-in a partir de las 3:00 p.m. Habitación Lake Front, cama King, del 12 al 15 de diciembre (check-out 11:00 a.m.). Confirmación 73471838798067. Teléfono 64 7-346-3602. Incluye desayuno y estacionamiento.',
      },
    ],
    notes: 'Noche en Black Swan Lakeside Boutique Hotel, Rotorua.',
  },
  {
    month: 'DIC', num: '13', dow: 'Dom',
    port: 'Rotorua', type: 'adventure', typeLabel: 'Aventura',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-38.10875,176.24180&destination=-38.17578,176.25323&waypoints=-38.05189,176.33803%7C-38.31539,176.37569&travelmode=driving',
    weather: { i: '🌦️', t: '21° / 12°', d: 'Verano templado: llueve ~1 de cada 3 días, lleva impermeable' },
    activities: [
      {
        name: 'Jet Ski to Sacred Hot Pools on Lake Rotorua (Tandem)',
        operator: 'Reservado',
        meetingTime: '9:00 a.m.', meetingPlace: 'Lake Rotoiti – Okawa Bay Boat Ramp', startEnd: '',
        description: 'Jet ski en tándem hacia las Sacred Hot Pools. El punto de encuentro (Lake Rotoiti – Okawa Bay Boat Ramp) está a aproximadamente 25 minutos en carro del hotel.',
      },
      {
        name: 'Almuerzo', travel: true,
        meetingTime: 'Mediodía', meetingPlace: '', startEnd: '',
        description: 'Almuerzo antes del hike de la tarde.',
      },
      {
        name: 'Mt Kakaramea (Rainbow Mountain) Summit Track',
        operator: 'Sendero DOC · gratuito',
        meetingTime: '2:00 p.m.', meetingPlace: 'Rainbow Mountain car park (SH5, Waiotapu)', startEnd: '~3 h ida y vuelta',
        description: 'Caminata a la cumbre del Mt Kakaramea (Rainbow Mountain) a las 2:00 p.m., con vistas de los lagos cráter y la zona geotérmica. Dura ~3 horas; el trailhead está sobre la SH5 en Waiotapu, a ~30 minutos en carro al sur de Rotorua. Sendero gratuito del DOC, no requiere reserva.',
      },
      {
        name: 'Secret Spot Forest Hot Tub Soak',
        operator: 'Viator · Reservado',
        meetingTime: '6:00 p.m.', meetingPlace: 'Secret Spot Hot Tubs Rotorua', startEnd: '',
        description: 'Baño en los hot tubs del bosque a las 6:00 p.m. 13/33 Waipa State Mill Road, ~15 min del hotel.',
        link: 'https://www.viator.com/tours/Rotorua/Secret-Spot-Hot-Tub-soak/d395-210014P1?pid=P00001955&uid=U00767249&mcid=58086&currency=USD',
      },
    ],
    notes: 'Noche en Black Swan Lakeside Boutique Hotel, Rotorua.',
  },
  {
    month: 'DIC', num: '14', dow: 'Lun',
    port: 'Rotorua', type: 'adventure', typeLabel: 'Aventura & Spa',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-38.10875,176.24180&destination=-38.13798,176.25827&waypoints=-38.15858,176.27019%7C-38.01782,176.34348&travelmode=driving',
    weather: { i: '🌦️', t: '21° / 12°', d: 'Verano templado: llueve ~1 de cada 3 días, lleva impermeable' },
    activities: [
      {
        name: 'Hike — Whakarewarewa Forest (The Redwoods)',
        operator: 'Sendero gratuito',
        meetingTime: '8:30 a.m.', meetingPlace: 'The Redwoods (Long Mile Rd)', startEnd: '~1.5 h',
        description: 'Caminata de ~1.5 horas por el bosque de secuoyas (Whakarewarewa Forest) a las 8:30 a.m. Entrada por el visitor centre en Long Mile Rd / Tītokorangi Dr. Sendero gratuito.',
      },
      {
        name: 'Almuerzo', travel: true,
        meetingTime: 'Mediodía', meetingPlace: '', startEnd: '',
        description: 'Almuerzo después del hike, antes del rafting.',
      },
      {
        name: 'Kaituna River White Water Rafting',
        operator: 'Viator · Reservado',
        meetingTime: '1:00 p.m.', meetingPlace: '761 State Highway 33, Okere Falls', startEnd: '',
        description: 'Rafting en el río Kaituna a la 1:00 p.m. El punto de encuentro (761 State Highway 33, Okere Falls) está a ~30 minutos en carro del hotel.',
        link: 'https://www.viator.com/tours/Rotorua/Kaituna-River-White-Water-Rafting/d395-17658P1?pid=P00001955&uid=U00767249&mcid=58086&currency=USD',
      },
      {
        name: 'Polynesian Spa — Deluxe Romantic Package',
        operator: 'Polynesian Spa · Reservado',
        meetingTime: '5:45 p.m.', meetingPlace: 'Polynesian Spa, 1000 Hinemoa Street', startEnd: 'Hasta 8:45 p.m. · 3 h',
        description: 'Deluxe Romantic Package (masaje, almuerzo, baño privado y regalo del spa), de 5:45 a 8:45 p.m. OJO: hay que llegar al menos UNA HORA antes, o sea a las 4:45 p.m., y cada uno debe llenar el formulario de consulta previa. Confirmación 296082/296081. Llevar traje de baño, calzado para la piscina y una bolsa para la ropa mojada; batas, toallas, secadores y lockers los dan ellos. El paquete incluye comida, así que no hace falta comer antes.',
        link: 'https://www.polynesianspa.co.nz/vitality-day-escape-retreat-nz/',
      },
    ],
    notes: 'Noche en Black Swan Lakeside Boutique Hotel, Rotorua. Último día con el auto — mañana se devuelve en Auckland Airport.',
  },
  {
    month: 'DIC', num: '15', dow: 'Mar',
    port: 'Rotorua → Auckland → Queenstown', type: 'travel', typeLabel: 'Día de traslado',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-38.10875,176.24180&destination=-37.00655,174.79034&travelmode=driving',
    weather: { i: '🌤️', t: '22° / 10°', d: 'Clima alpino y muy variable: mañanas frescas, tardes templadas; conviene ir por capas' },
    activities: [
      {
        name: 'Salida de Rotorua hacia Auckland Airport', travel: true,
        meetingTime: '~7:30 a.m.', meetingPlace: 'Black Swan Lakeside Boutique Hotel', startEnd: 'Auto ~3 h',
        description: 'Check-out y traslado en auto de Rotorua a Auckland Airport (~3 horas / 230 km). Conviene salir temprano para llegar con holgura antes de las 12:00 p.m., que es la hora de devolución del auto.',
      },
      {
        name: 'Devolución del auto — Auckland Airport', travel: true,
        meetingTime: '12:00 p.m.', meetingPlace: 'Auckland Airport', startEnd: '',
        description: 'Devolución del auto de alquiler (Divine Rentals) en Auckland Airport a las 12:00 p.m., según la cotización. Recordar cargar combustible antes de entregarlo.',
      },
      {
        name: 'Vuelo NZ623 — Auckland → Queenstown', travel: true,
        meetingTime: '2:40 p.m.', meetingPlace: 'Auckland Airport (AKL) → Queenstown Airport (ZQN)', startEnd: 'Llega 4:35 p.m. · 1 h 55 min',
        description: 'Air New Zealand NZ623. Sale de Auckland a las 2:40 p.m. y llega a Queenstown a las 4:35 p.m. Una maleta documentada por persona. Localizador EIYQUH.',
      },
      {
        name: 'Check-in — Sofitel Queenstown Hotel & Spa', travel: true,
        meetingTime: 'Tarde', meetingPlace: 'Sofitel Queenstown, 8 Duke Street', startEnd: '6 noches',
        description: 'Del aeropuerto al hotel son ~10 minutos. Habitación Superior, cama King, del 15 al 21 de diciembre (check-out 11:00 a.m.). Confirmación 5688ALE0502. Teléfono 64 3-450-0045.',
      },
    ],
    notes: 'Noche en Sofitel Queenstown Hotel & Spa. Primera noche en Queenstown.',
  },
  {
    month: 'DIC', num: '16', dow: 'Mié',
    port: 'Milford Sound', type: 'adventure', typeLabel: 'Fiordos',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-45.03115,168.65901&destination=-45.02487,168.74103&travelmode=driving',
    weather: { i: '🌤️', t: '22° / 10°', d: 'Clima alpino y muy variable: mañanas frescas, tardes templadas; conviene ir por capas' },
    activities: [
      {
        name: 'Milford Sound Flight and Cruise Tour',
        operator: 'True South Flights · Reservado',
        meetingTime: '8:00 a.m.', meetingPlace: 'True South Flights, 12 Hawthorne Drive, Frankton', startEnd: 'Hasta 12:30 p.m. · 4 h 30 min',
        description: 'Vuelo escénico de ida y vuelta entre Queenstown y Milford Sound más el crucero por el fiordo, de 8:00 a.m. a 12:30 p.m. Operado por True South Flights desde su base en Frankton (Bldg 8, Suite 1B / 12 Hawthorne Drive). Confirmación 1833845847 · referencia BR-1451827093. Ofrecen pickup desde Queenstown pero el itinerario oficial no indica la hora: hay que confirmarla.',
      },
      {
        name: 'Actividad por definir',
        actionBadge: 'Por definir',
        meetingTime: 'Tarde', meetingPlace: '', startEnd: '',
        description: 'Tarde libre por definir. Al volver del vuelo alrededor del mediodía queda toda la tarde disponible. Opciones cercanas: Onsen Hot Pools (tina privada de 60 min sobre el cañón del Shotover), Ziptrek Ecotours (~3 h de tirolesas en el bosque, sale del centro) o la caminata de Queenstown Hill (2–3 h desde el pueblo).',
      },
    ],
    notes: 'Noche en Sofitel Queenstown Hotel & Spa.',
  },
  {
    month: 'DIC', num: '17', dow: 'Jue',
    port: 'Queenstown', type: 'adventure', typeLabel: 'Adrenalina & naturaleza',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-45.03115,168.65901&destination=-45.13257,168.75789&waypoints=-45.03122,168.65970&travelmode=driving',
    weather: { i: '🌤️', t: '22° / 10°', d: 'Clima alpino y muy variable: mañanas frescas, tardes templadas; conviene ir por capas' },
    activities: [
      {
        name: 'NZONE Skydive — salto tándem',
        operator: 'NZONE Skydive · Reservado',
        meetingTime: '9:00 a.m.', meetingPlace: 'NZONE Shop, 35 Shotover Street (check-in 8:50 a.m.)', startEnd: 'Hasta 12:30 p.m. · 3 h 30 min',
        description: '15,000ft Tandem Skydive, de 9:00 a.m. a 12:30 p.m. Check-in a las 8:50 a.m. en la tienda de NZONE (35 Shotover Street) y de ahí un shuttle gratuito a la zona de salto — no hacen pickup en el hotel. Confirmación 187669. Incluye traje completo, gafas, casco y guantes. Mandan un mensaje 30 minutos antes con el estado del clima; si no llega, llamar al +64 3 442 5867. Llevar ropa cómoda y zapatos cerrados; lentes de contacto o anteojos no son problema. Termina a las 12:30, así que da tiempo de sobra para el sendero de las 3:00 p.m.',
        link: 'https://www.nzoneskydive.co.nz/tandem-skydive/skydiving-in-queenstown/',
      },
      {
        name: 'Almuerzo', travel: true,
        meetingTime: '~1:30 p.m.', meetingPlace: 'Centro de Queenstown', startEnd: '',
        description: 'Almuerzo al volver del skydive, antes de salir hacia el sendero.',
      },
      {
        name: 'Lower Wye Creek Track',
        operator: 'Sendero DOC · gratuito',
        meetingTime: '3:00 p.m.', meetingPlace: 'Wye Creek Carpark, SH6 (Kingston Road)', startEnd: '~4 h ida y vuelta',
        description: 'Caminata por el Lower Wye Creek Track, en el Remarkables Conservation Area: ~4 horas ida y vuelta, saliendo a las 3:00 p.m. El trailhead está sobre la SH6 a ~20 minutos al sur de Queenstown, entrando por un portón del lado izquierdo yendo hacia Kingston; se puede manejar hasta el estacionamiento de pasto (con 4x4 se llega a uno más alto y se ahorran 15 min de subida). A unos 20 minutos aparece la primera cascada, luego un pasillo de tablones de ~200 m montado sobre la tubería de desvío pegada al acantilado, y el sendero termina en otra cascada y un helipuerto con vista al lago. Sendero gratuito del DOC, no requiere reserva. Plan B si está cerrado (revisar la página del DOC ese día): Sawpit Gully en Arrowtown, ~3 h, ver Opciones de Queenstown.',
        link: 'https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/remarkables-conservation-area/things-to-do/lower-wye-creek-track/',
      },
    ],
    notes: 'Noche en Sofitel Queenstown Hotel & Spa. Empezando a las 3:00 p.m. el sendero termina cerca de las 7:00 p.m.; en diciembre en Queenstown hay luz hasta pasadas las 9:00 p.m., así que da de sobra. Llevar agua y calzado de trail.',
  },
  {
    month: 'DIC', num: '18', dow: 'Vie',
    port: 'The Nevis', type: 'adventure', typeLabel: 'Adrenalina',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-45.03091,168.65965&destination=-45.06480,169.02888&travelmode=driving',
    weather: { i: '🌤️', t: '22° / 10°', d: 'Clima alpino y muy variable: mañanas frescas, tardes templadas; conviene ir por capas' },
    activities: [
      {
        name: 'Nevis Bungy & Swing Combo',
        operator: 'AJ Hackett · The Nevis · Reservado',
        actionBadge: 'Firmar waiver online',
        meetingTime: '8:40 a.m.', meetingPlace: 'Queenstown Bungy Centre, 25 Shotover Street (check-in 8:10 a.m.)', startEnd: 'Hasta 12:40 p.m. · 4 h',
        description: 'Nevis Combo: el bungy de 134 m (el más alto de Nueva Zelanda) más el Nevis Swing, el columpio más grande del mundo, que se puede hacer en pareja. De 8:40 a.m. a 12:40 p.m. Check-in a las 8:10 a.m. en el mostrador de AJ Hackett dentro del Queenstown Bungy Centre, 25 Shotover Street (esquina con Camp St), de donde sale el bus 4x4. Confirmación 2561743. Hay que completar el waiver en línea ANTES de llegar o el salto se puede retrasar. Estacionar en el centro es difícil y cuesta extra; no hay parking en Shotover St.',
        link: 'https://www.bungy.co.nz/queenstown/nevis/',
      },
      {
        name: 'Actividad por definir',
        actionBadge: 'Por definir',
        meetingTime: 'Tarde', meetingPlace: '', startEnd: '',
        description: 'Tarde libre por definir. Al regresar del Nevis cerca de las 12:40 p.m. queda toda la tarde. Opciones: Onsen Hot Pools (60 min, ideal después del bungy), Skyline Gondola + Luge (1–2 h desde el centro), o la caminata a Lake Alta en The Remarkables (1.5 h ida y vuelta).',
      },
      {
        name: 'Sauna privado — Watershed Saunas',
        operator: 'Watershed Saunas · Sesión privada · Reservado',
        meetingTime: '5:45 p.m.', meetingPlace: 'Watershed Saunas, 110 Beach Street (St Omer Wharf), Queenstown', startEnd: 'Hasta 7:00 p.m. · 75 min',
        description: 'Sesión privada de 75 minutos para los dos: sauna con piscina fría propia y cuarto de descanso, con vista al lago Wakatipu. Reserva #392930296. Antes de ir hay que llenar el check-in previo que mandan por correo (salud y seguridad). Llevar traje de baño y botella de agua; dan toallas y hay lockers. No hay parqueo en el muelle: queda a 3 minutos a pie del centro, o se puede estacionar gratis en Lake Esplanade o pagando en Man Street Car Park (5 min a pie). Cancelación o cambio de fecha con 24 horas de aviso; cambios el mismo día, con 12 horas. Teléfono +64 3 777 4300.',
        link: 'reservas/watershed-sauna-18dic.pdf',
      },
    ],
    notes: 'Noche en Sofitel Queenstown Hotel & Spa.',
  },
  {
    month: 'DIC', num: '19', dow: 'Sáb',
    port: 'Glenorchy → Arrowtown → Wanaka', type: 'adventure', typeLabel: 'Cabalgata y road trip',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-45.03115,168.65901&destination=-45.03115,168.65901&waypoints=-44.80017,168.37191%7C-44.85152,168.38152%7C-45.02884,168.43857%7C-44.97013,168.82441%7C-44.94056,168.83508%7C-44.88152,169.00338%7C-44.68324,169.18726%7C-44.69402,169.13876%7C-44.69835,169.11756&travelmode=driving',
    weather: { i: '🌤️', t: '22° / 10°', d: 'Clima alpino y muy variable: mañanas frescas, tardes templadas; conviene ir por capas' },
    activities: [
      {
        name: 'Recoger el carro', travel: true,
        actionBadge: 'Por confirmar',
        meetingTime: '7:00 a.m.', meetingPlace: 'Por confirmar', startEnd: '',
        description: 'Recoger el carro de alquiler para manejar a Glenorchy. Compañía, lugar y hora por confirmar. Son unos 57 km por la carretera escénica que bordea el lago Wakatipu, ~47 min de manejo: salir de Queenstown a más tardar a las 7:35 a.m. para estar en Lighthorse a las 8:30 a.m.',
      },
      {
        name: 'Cabalgata Easy Rider — Lighthorse Adventures',
        operator: 'Lighthorse Adventures · Reservado',
        meetingTime: '8:30 a.m.', meetingPlace: 'Lighthorse Adventures, 2 Swamp Road, Glenorchy', startEnd: 'Sale 9:00 a.m. · ~1.5 h',
        description: 'Cabalgata al paso (solo caminando) por los ríos y el valle de Glenorchy, con las montañas de fondo, para los dos. Hay que llegar a las 8:30 a.m., 30 minutos antes de la salida de las 9:00 a.m., para el check-in y el equipo: si llegan tarde pierden la cabalgata y no hay reembolso. Son ~1.5 h en total: 30–40 min de introducción, conocer al caballo y equiparse, y 50–60 min montando. Incluye paquete de 20 fotos. Orden R8BFLFV. El cruce de ríos depende del clima y la cabalgata se puede cancelar el mismo día por seguridad. Cambios o cancelación: 10% de cargo hasta 48 h antes, 50% entre 48 y 24 h, y sin reembolso con menos de 24 h. Contacto: +64 21 766 437 · bookings@lighthorseadventures.com.',
        link: 'reservas/caballos-glenorchy-19dic.pdf',
      },
      {
        name: 'Glenorchy: muelle, cobertizo rojo y los sauces',
        meetingTime: '10:45 a.m.', meetingPlace: 'Glenorchy Wharf', startEnd: '~30 min',
        description: 'A ~10 min de Lighthorse. El cobertizo rojo es el antiguo depósito de los vapores del lago, justo frente al muelle: la foto clásica de Glenorchy. Los famosos sauces («Sister Trees») están junto al muelle, a la derecha. Se puede estacionar en el mismo muelle.',
      },
      {
        name: 'Picar algo — Mrs Woolly\'s General Store',
        meetingTime: '11:15 a.m.', meetingPlace: '64 Oban St, Glenorchy', startEnd: '~30 min',
        description: 'Café y almacén del pueblo, famoso por sus pies (pedirlos de res o cordero, no de cerdo) y su café. Sábados de 8:30 a.m. a 6:00 p.m.',
      },
      {
        name: 'Mirador Bennett\'s Bluff',
        meetingTime: '12:05 p.m.', meetingPlace: 'Carretera Glenorchy–Queenstown', startEnd: '~10 min',
        description: 'A 19 min de Glenorchy, de camino a Queenstown. El mirador más famoso de la carretera, sobre el lago Wakatipu.',
      },
      {
        name: 'Lake Hayes',
        meetingTime: '12:55 p.m.', meetingPlace: 'Lake Hayes (Waiwhakaata), camino a Arrowtown', startEnd: '~15 min',
        description: 'A 42 min de Bennett\'s Bluff. Parada para la foto de los reflejos de las montañas en el lago; queda a 8 min de Arrowtown.',
      },
      {
        name: 'Arrowtown — brunch en Dishery, Buckingham Street y Chinese Settlement',
        meetingTime: '1:20 p.m.', meetingPlace: 'Dishery, 4 Buckingham St, Arrowtown', startEnd: 'Hasta ~3:30 p.m.',
        description: 'Brunch en Dishery (Dudley\'s Cottage Precinct, 4 Buckingham St): mesas afuera bajo una magnolia histórica, junto al Arrow River Reserve, y un salón muy luminoso. Menú de todo el día: huevos turcos con labneh de ajo negro, Village Benedict, French toast de matcha o burger de wagyu a la parrilla; buenos cócteles y DJs los fines de semana. Sábados de 8:00 a.m. a 6:00 p.m.; se puede reservar en su web. De paso, un sticky bun para llevar en Provisions (65 Buckingham St; cierra a las 4:00 p.m.). Después: Buckingham Street, el pueblo minero de la fiebre del oro con sus casas históricas, el Chinese Settlement y caminar el pueblo.',
        link: 'https://www.dishery.co.nz/bookings',
      },
      {
        name: 'Crown Range Road — lupinos',
        meetingTime: '3:30 p.m.', meetingPlace: 'Crown Range Road (Arrowtown → Cardrona)', startEnd: '',
        description: 'La carretera de montaña hacia Wanaka. En la subida suele haber lupinos, sobre todo amarillos. Parar solo en los miradores o donde haya espacio para orillarse, porque tiene muchas curvas.',
      },
      {
        name: 'Cardrona Hotel',
        meetingTime: '~4:30 p.m.', meetingPlace: 'Cardrona Valley Road, Cardrona', startEnd: '~30 min',
        description: 'Pub histórico de 1863, de la época de la fiebre del oro. Tomar algo en el jardín; el menú del bar es desde las 11:00 a.m.',
      },
      {
        name: 'Desvío a Albert Town — lupinos morados',
        meetingTime: '~5:25 p.m.', meetingPlace: 'Albert Town, carretera hacia Lake Hawea', startEnd: '~25 min',
        description: 'Lo primero al llegar a Wanaka: a 24 min del Cardrona Hotel. Las guías mencionan lupinos morados y rosados a la orilla del camino por Albert Town, rumbo a Lake Hawea. No hay un campo fijo: el municipio a veces los fumiga y los mejores campos suelen estar en terreno privado, así que verlos desde el camino y parar solo donde haya espacio. De ahí son 6 min a Ardmore Street.',
      },
      {
        name: 'Pasear por Ardmore Street',
        meetingTime: '~5:55 p.m.', meetingPlace: 'Ardmore Street, Wanaka (frente al lago)', startEnd: '~1 h',
        description: 'La calle principal de Wanaka, frente al lago, con tiendas, cafés y bares, y la orilla del lago con su playa de piedritas al lado. Estacionar por aquí y caminar.',
      },
      {
        name: 'That Wanaka Tree',
        meetingTime: '~7:00 p.m.', meetingPlace: 'Roys Bay, orilla del lago Wanaka', startEnd: '~20 min',
        description: 'El árbol solo dentro del lago, la foto más famosa de Wanaka. A 5 min en carro de Ardmore Street, o ~25 min caminando por la orilla del lago. De ahí son 4 min en carro a Kika.',
      },
      {
        name: 'Cena — Kika',
        actionBadge: 'Por reservar',
        meetingTime: '7:30 p.m.', meetingPlace: '2 Dunmore St, Wanaka', startEnd: 'Hasta ~9:00 p.m. (cierra a las 9)',
        description: 'Platos para compartir; «Casual Dining of the Year» de Cuisine. Cena todos los días de 5:30 a 9:00 p.m. No está claro si toma reservas: llamar al 03 443 6536 o revisar kika.nz. Ojo: tiene scampi, que es marisco.',
        link: 'https://kika.nz',
      },
      {
        name: 'Regreso a Queenstown', travel: true,
        meetingTime: '~9:00 p.m.', meetingPlace: 'Wanaka → Sofitel Queenstown', startEnd: '~1 h 20 min',
        description: 'Por la Crown Range, ~69 km: llegan hacia las 10:20 p.m. El atardecer es a las 9:27 p.m., así que buena parte de la Crown Range se cruza ya de noche. Es una carretera de montaña con muchas curvas: manejar con calma y sin alcohol.',
      },
    ],
    notes: 'Noche en Sofitel Queenstown Hotel & Spa. Día largo de carretera: ~4 h 30 min de manejo en total, con el regreso de noche por la Crown Range. Se maneja por la izquierda.',
  },
  {
    month: 'DIC', num: '20', dow: 'Dom',
    port: 'Queenstown', type: 'adventure', typeLabel: 'Jet boat & lago',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-45.03115,168.65901&destination=-45.03247,168.65918&waypoints=-44.98713,168.67137&travelmode=driving',
    weather: { i: '🌤️', t: '22° / 10°', d: 'Clima alpino y muy variable: mañanas frescas, tardes templadas; conviene ir por capas' },
    activities: [
      {
        name: 'Shotover River Extreme Jet Boat Ride',
        operator: 'Viator · Shotover Jet + transporte · Reservado',
        meetingTime: '10:00 a.m.', meetingPlace: 'The Station Building, Duke Street (check-in 9:15 a.m.)', startEnd: 'Paseo de 25 min · 10:00 – 10:25 a.m.',
        description: 'Jet boat por el cañón del río Shotover. El paseo en sí dura solo 25 minutos (10:00 a 10:25 a.m.), pero el check-in es 45 minutos antes — a las 9:15 a.m. — en The Station Building, de donde sale el shuttle a la base en Arthurs Point. Confirmación 1833839411 · referencia BR-1451820557. Con el traslado de regreso estarían de vuelta en el centro antes del mediodía.',
        link: 'https://www.viator.com/tours/Queenstown/Shotover-River-Extreme-Jet-Boat-Ride-from-Queenstown/d407-5626SHOTOVER?pid=P00001955&uid=U00767249&mcid=58086&currency=USD',
      },
      {
        name: 'Almuerzo', travel: true,
        meetingTime: '~11:30 a.m.', meetingPlace: 'Centro de Queenstown', startEnd: '',
        description: 'Almuerzo al volver del jet boat. Como el paseo termina 10:25 a.m., queda bastante tiempo libre antes del crucero de las 2:00 p.m.',
      },
      {
        name: 'Lake Wakatipu Scenic Cruise (90 min)',
        operator: 'Viator · Million Dollar Cruise · Reservado',
        meetingTime: '2:00 p.m.', meetingPlace: '50 Beach Street, waterfront, Queenstown', startEnd: 'Hasta 3:30 p.m. · 90 min',
        description: 'Crucero escénico de 90 minutos por Lake Wakatipu, de 2:00 a 3:30 p.m., saliendo del muelle en 50 Beach Street. Confirmación 1833840517 · referencia BR-1451821679. Tiene cubierta al aire libre, cabina con calefacción y bar a bordo.',
        link: 'https://www.viator.com/tours/Queenstown/Million-Dollar-Cruise/d407-71002P1?pid=P00001955&uid=U00767249&mcid=58086&currency=USD',
      },
      {
        name: 'Cena — The Terrace by ROKI Collection',
        operator: 'ROKI Collection Queenstown · Reservado',
        meetingTime: '8:15 p.m.', meetingPlace: 'The Terrace Restaurant, hotel ROKI Collection Queenstown', startEnd: '',
        description: 'Mesa para 2 a nombre de Raymond Eskenazi. Reserva #74NTLFUU5HF. OJO: hay que cancelar al menos 24 horas antes, es decir antes de las 8:15 p.m. del sábado 19 de diciembre. La carta se inclina a los mariscos: pedir pescado o carnes y avisar al mesero que no comen mariscos ni cerdo.',
      },
    ],
    notes: 'Noche en Sofitel Queenstown Hotel & Spa. Última noche en Queenstown — mañana salen temprano hacia Sídney.',
  },
  {
    month: 'DIC', num: '21', dow: 'Lun',
    port: 'Queenstown → Sídney → Whitsundays', type: 'travel', typeLabel: 'Nueva Zelanda → Australia',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-45.03115,168.65901&destination=-45.01930,168.74344&travelmode=driving',
    weather: { i: '🌦️', t: '30° / 25°', d: 'Trópico húmedo: calor, humedad y chubascos de tarde; mar a 27–28° (temporada de medusas: stinger suit)' },
    activities: [
      {
        name: 'Check-out y traslado al aeropuerto', travel: true,
        meetingTime: '~5:00 a.m.', meetingPlace: 'Sofitel Queenstown → Queenstown Airport (ZQN)', startEnd: 'Auto ~10 min',
        description: 'Salida de madrugada para alcanzar el vuelo de las 7:00 a.m. El itinerario oficial muestra el check-out del Sofitel a las 11:00 a.m., así que hay que avisarle al hotel que salimos de madrugada y coordinar la cuenta la noche anterior.',
      },
      {
        name: 'Vuelo QF124 — Queenstown → Sídney', travel: true,
        meetingTime: '7:00 a.m.', meetingPlace: 'Queenstown (ZQN) → Sydney (SYD)', startEnd: 'Llega 8:20 a.m. · 3 h 20 min',
        description: 'Qantas QF124. Sale de Queenstown a las 7:00 a.m. y llega a Sídney a las 8:20 a.m. (hora local; son 3 h 20 min de vuelo por el cambio de huso). 30 kg de equipaje por persona. Localizador ADKP77.',
      },
      {
        name: 'Vuelo QF5840 — Sídney → Proserpine', travel: true,
        meetingTime: '11:45 a.m.', meetingPlace: 'Sydney (SYD) → Whitsunday Coast (PPP)', startEnd: 'Llega 1:15 p.m. · 2 h 30 min',
        description: 'Qantas QF5840, operado por Jetstar como JQ840. Sale de Sídney a las 11:45 a.m. y llega al aeropuerto de Whitsunday Coast (Proserpine) a la 1:15 p.m. Mismo localizador ADKP77 que el QF124, con unas 3 h 25 min de conexión en Sídney. 30 kg de equipaje por persona.',
      },
      {
        name: 'Bus + ferry a Hamilton Island — Cruise Whitsundays', travel: true,
        operator: 'Cruise Whitsundays · Resort Connections · Comprado',
        meetingTime: '~1:45 p.m.', meetingPlace: 'Whitsunday Coast Airport (PPP) → Port of Airlie → Hamilton Island Marina', startEnd: 'Ferry directo 3:05 p.m. · llega 4:05 p.m.',
        description: 'Ya está comprado. El aeropuerto de Proserpine queda en tierra firme: se va en bus hasta Port of Airlie (Airlie Beach) y de ahí en ferry a Hamilton Island, con el traslado combinado bus + ferry de Cruise Whitsundays. Con el vuelo aterrizando a la 1:15 p.m., el ferry que calza es el directo de las 3:05 p.m. desde Port of Airlie, que llega a Hamilton Island Marina a las 4:05 p.m.: confirmar en el boleto la hora del bus y del ferry. Hay que estar en la terminal 30 minutos antes. En la marina los recoge el traslado gratuito del Beach Club (avisar al hotel 24 horas antes).',
      },
      {
        name: 'Check-in — Hotel Beach Club, Whitsundays', travel: true,
        meetingTime: '4:00 p.m.', meetingPlace: 'Hotel Beach Club, 9 Resort Dr, Whitsundays QLD', startEnd: '4 noches',
        description: 'Habitación Beach Club Room, cama King, del 21 al 25 de diciembre (check-out 11:00 a.m.). Confirmación SH30025471. Incluye desayuno y traslado gratuito desde el aeropuerto y el ferry, pero hay que contactar al hotel 24 horas antes para coordinarlo — no hay traslado reservado. OJO con la política de cancelación: la ventana con 20% de penalidad vencía el 22 de octubre a la 1:00 a.m. hora local del hotel; después de esa fecha cualquier cambio o cancelación cuesta el 100%.',
      },
    ],
    notes: 'Noche en Hotel Beach Club, Whitsundays. Día largo: tres vuelos y dos países.',
  },
  {
    month: 'DIC', num: '22', dow: 'Mar',
    port: 'Whitsundays', type: 'adventure', typeLabel: 'Buceo',
    weather: { i: '🌦️', t: '30° / 25°', d: 'Trópico húmedo: calor, humedad y chubascos de tarde; mar a 27–28° (temporada de medusas: stinger suit)' },
    activities: [
      {
        name: 'Full Day Cert Dive the Great Barrier Reef — Hamilton Island',
        operator: 'Explore Group · 2 buceos certificados · Reservado y pagado',
        meetingTime: '7:45 a.m.', meetingPlace: 'Jetty A9/10, Hamilton Island Marina (frente al Explore Shop)', startEnd: 'Sale 8:00 a.m. · Regresa 4:00 p.m.',
        description: 'Día completo de buceo certificado en la Gran Barrera de Coral con Explore Group, para 2 adultos. El barco sale a las 8:00 a.m. y regresa a las 4:00 p.m.; hay que estar en el Jetty A9/10 de la marina de Hamilton Island al menos 15 minutos antes. OJO: el tour sale ÚNICAMENTE desde Hamilton Island. Referencia 981276 · booking ref 292101. Pagado en full. ACCIÓN PENDIENTE: la reserva no queda confirmada hasta llenar el Diver Registration y el Medical Questionnaire (botón "Complete Dive Form" en el correo de confirmación de Explore del 25 de octubre). Llevar: traje de baño y toalla, protección solar, cámara, tarjeta (no aceptan efectivo), zapatos de suela plana, botella de agua y pastillas para el mareo si hacen falta. Cancelación gratis con más de 48 h de anticipación; entre 24 y 48 h cobran 50%; con menos de 24 h no hay reembolso. Si Explore cancela por clima, reprograman o devuelven todo; si el clima obliga a cambiar la ruta, ofrecen un crucero alterno de día completo con dos paradas en el arrecife interior.',
        link: 'https://www.google.com/maps/search/?api=1&query=Hamilton+Island+Marina+Jetty+A9',
      },
      {
        name: 'Cena — Manta Ray',
        operator: 'Reservado',
        meetingTime: '8:00 p.m.', meetingPlace: 'Manta Ray, frente a la marina de Hamilton Island', startEnd: 'Salir del hotel ~7:45 p.m. · ~12 min a pie',
        description: 'Cocina de inspiración griega frente a la marina: meze, pescado fresco y el menú Feed Me del chef para compartir. A ~12 min a pie del Beach Club. Ojo: en la cocina griega abundan el pulpo, el calamar y los mariscos. IMPORTANTE: si al final no van, hay que cancelar la reserva con un día de anticipación.',
        link: 'https://www.hamiltonisland.com.au/restaurants/manta-ray',
      },
    ],
    notes: 'Noche en Hotel Beach Club, Whitsundays. Día de buceo: salen 8:00 a.m. y regresan 4:00 p.m. Pendiente llenar el formulario médico de Explore. Cena en Manta Ray: si no van, cancelar con un día de anticipación.',
  },
  {
    month: 'DIC', num: '23', dow: 'Mié',
    port: 'Whitsundays', type: 'city', typeLabel: 'Día libre',
    weather: { i: '🌦️', t: '30° / 25°', d: 'Trópico húmedo: calor, humedad y chubascos de tarde; mar a 27–28° (temporada de medusas: stinger suit)' },
    activities: [
      {
        name: 'Día libre en Whitsundays',
        meetingTime: 'Todo el día', meetingPlace: 'Hotel Beach Club', startEnd: '',
        description: 'No hay nada reservado en el itinerario oficial.',
      },
    ],
    notes: 'Noche en Hotel Beach Club, Whitsundays.',
  },
  {
    month: 'DIC', num: '24', dow: 'Jue',
    port: 'Whitsundays', type: 'adventure', typeLabel: 'Nochebuena · Hill Inlet',
    weather: { i: '🌦️', t: '30° / 25°', d: 'Trópico húmedo: calor, humedad y chubascos de tarde; mar a 27–28° (temporada de medusas: stinger suit)' },
    activities: [
      {
        name: 'Hill Inlet y Whitehaven Beach — Explore Half Day (mañana)',
        operator: 'Explore Group · salida desde Hamilton Island · Confirmado',
        meetingTime: '~7:45 a.m.', meetingPlace: 'Explore Shop, Front Street, Hamilton Island Marina', startEnd: 'Sale ~8:00 a.m. · Regresa ~12:00 p.m.',
        description: 'Confirmado. Medio día en barco a Whitsunday Island: caminata guiada al mirador de Hill Inlet y tiempo libre en la arena de Whitehaven Beach. La hora de salida depende de la marea: revisar en la confirmación de Explore la hora exacta. OJO: el 24 la marea alta es cerca de las 10:47 a.m., así que desde el mirador se verá más agua y menos remolinos de arena que en marea baja. Temporada de medusas: usar stinger suit si se meten al agua.',
        link: 'https://www.exploregroup.com.au/',
      },
      {
        name: 'Tarde libre en Whitsundays',
        meetingTime: 'Desde 12:00 p.m.', meetingPlace: 'Hotel Beach Club', startEnd: '',
        description: 'Nochebuena. Si quieren cena especial en el hotel conviene reservarla con tiempo.',
      },
    ],
    notes: 'Noche en Hotel Beach Club, Whitsundays. Última noche en las islas.',
  },
  {
    month: 'DIC', num: '25', dow: 'Vie',
    port: 'Whitsundays → Sídney', type: 'travel', typeLabel: 'Navidad · traslado',
    weather: { i: '☀️', t: '26° / 18°', d: 'Pleno verano: soleado, con el mar a 21–22°' },
    activities: [
      {
        name: 'Check-out y traslado a Hamilton Island', travel: true,
        meetingTime: '11:00 a.m.', meetingPlace: 'Hotel Beach Club → Hamilton Island (HTI)', startEnd: '',
        description: 'OJO: llegaron por el aeropuerto de Proserpine (PPP) pero el vuelo de salida es desde Hamilton Island (HTI), que es otro aeropuerto — se llega en ferry. Además el check-out es a las 11:00 a.m. y el vuelo sale a las 11:55 a.m., así que el margen es muy corto. No hay ningún traslado reservado: hay que resolverlo con Viviana.',
      },
      {
        name: 'Vuelo QF579 — Hamilton Island → Sídney', travel: true,
        meetingTime: '11:55 a.m.', meetingPlace: 'Hamilton Island (HTI) → Sydney (SYD)', startEnd: 'Llega 3:15 p.m. · 2 h 20 min',
        description: 'Qantas QF579. Localizador CBE5RE. Una pieza de equipaje por persona. Boletos: 081-7497103738 (Rachelle) y 081-749710373 (Raymond) — el de Raymond tiene un dígito menos que el de Rachelle, hay que verificarlo.',
      },
      {
        name: 'Check-in — Pier One Sydney Harbour', travel: true,
        meetingTime: '3:00 p.m.', meetingPlace: 'Pier One, 11 Hickson Road, Walsh Bay', startEnd: 'Hasta el 27 dic',
        description: 'Habitación Partial Water View, cama King, en un muelle histórico debajo del Harbour Bridge. Confirmación 97130874. Teléfono 61 2-8298-9999. El huesped figura como “Raymond Eskenazi”, sin “Michaan”: conviene corregirlo. Check-out el domingo 27 de diciembre a las 11:00 a.m. Cancelación gratis hasta el miércoles 23 de diciembre a las 11:59 p.m., hora del hotel.',
        link: 'reservas/pier-one-25dic.pdf',
      },
      {
        name: 'Café en Surry Hills — bills',
        actionBadge: 'Confirmar que abre',
        meetingTime: '4:35 p.m.', meetingPlace: 'bills Surry Hills, 359 Crown St', startEnd: '~15 min en Uber desde el hotel',
        description: 'Normalmente abre todos los días de 7:00 a.m. a 10:00 p.m., pero en Navidades anteriores cerró el 25 y no encontré confirmación para este año: llamar antes al (02) 9360 4762. Los otros cafés conocidos de Surry Hills cierran más temprano (Shuk, a las 4:00 p.m.).',
        link: 'https://www.bills.com.au/',
      },
      {
        name: 'Pasear por el Opera House y Circular Quay',
        meetingTime: '5:45 p.m.', meetingPlace: 'Sydney Opera House', startEnd: '',
        description: 'Por fuera: las escalinatas, la explanada y el paseo de Circular Quay. El 25 no hay funciones ni tours, pero el paseo es libre.',
      },
      {
        name: "Royal Botanic Garden y Mrs Macquarie's Chair",
        meetingTime: '6:15 p.m.', meetingPlace: 'Royal Botanic Garden Sydney (entrada junto a la Ópera)', startEnd: 'Cierra 8:00 p.m.',
        description: "Abre todos los días; en diciembre, de 7:00 a.m. a 8:00 p.m. Cruzar el jardín hasta Mrs Macquarie's Chair, la punta con la vista clásica de la Ópera con el Harbour Bridge detrás.",
        link: 'https://www.botanicgardens.org.au/royal-botanic-garden-sydney',
      },
      {
        name: 'Cruzar el Harbour Bridge a pie al atardecer',
        meetingTime: '7:30 p.m.', meetingPlace: 'Escaleras del puente en Cumberland St, The Rocks', startEnd: 'Puesta de sol ~8:05 p.m.',
        description: "La acera peatonal es gratis y está abierta siempre. Desde Mrs Macquarie's Chair son ~10 min en Uber hasta The Rocks. Cruzar hasta la mitad y volver, o seguir hasta Milsons Point (~25 min) y regresar en Uber.",
      },
      {
        name: 'Cena — restaurante pendiente',
        actionBadge: 'Pendiente',
        meetingTime: '8:45 p.m.', meetingPlace: 'Por decidir', startEnd: '',
        description: 'Sushi E está cerrado el 25, así que el restaurante está por decidir. Nobu (Crown Barangaroo) sí abre el 25 para cenar; más ideas en Opciones de Sídney. En Navidad todo se llena: reservar cuanto antes. Ojo con los platos con mariscos y cerdo.',
      },
      {
        name: 'Tragos — JAM Record Bar',
        meetingTime: '10:30 p.m.', meetingPlace: 'Ivy, 320 George St', startEnd: '',
        description: 'Bar de vinilos al estilo de Tokio, del mismo grupo que Sushi E, con 15.000 discos y unas 40 sillas; no aceptan reservas. Normalmente abre de lunes a sábado hasta la medianoche; no está confirmado que abra en Navidad.',
        link: 'https://www.broadsheet.com.au/sydney/bars/jam-record-bar',
      },
    ],
    notes: 'Navidad en Sídney. Noche en Pier One Sydney Harbour.',
  },
  {
    month: 'DIC', num: '26', dow: 'Sáb',
    port: 'Sídney', type: 'city', typeLabel: 'Bondi y ciudad',
    weather: { i: '☀️', t: '26° / 18°', d: 'Pleno verano: soleado, con el mar a 21–22°' },
    activities: [
      {
        name: 'Brunch — Blackwood Bondi',
        meetingTime: '9:15 a.m.', meetingPlace: 'Blackwood, Bondi Beach', startEnd: 'Salir del hotel 8:45 a.m. · Uber ~25 min',
        description: 'Sin reserva: se llega directo, así que conviene llegar temprano. Ojo con los platos con bacon.',
        link: 'https://www.timeout.com/sydney/restaurants/blackwood-bondi',
      },
      {
        name: 'Caminar por Bondi Beach',
        meetingTime: '10:45 a.m.', meetingPlace: 'Bondi Beach', startEnd: '',
        description: 'Caminar la playa y, si quieren, seguir el sendero de la costa hasta Tamarama, ~15–20 min con muy buena vista. Luego tiendas en Gould St, Hall St y Campbell Parade.',
      },
      {
        name: 'Café — Skittle Lane Coffee + Yo-Chi',
        meetingTime: '12:00 p.m.', meetingPlace: 'Skittle Lane, 135 Curlewis Street, Bondi Beach · Yo-Chi en Campbell Parade', startEnd: '',
        description: 'Tostadores de café de especialidad con local en Bondi. Los sábados abre de 7:00 a.m. a 3:00 p.m.; en feriados ha tenido horario reducido (en Semana Santa cerró al mediodía) y el de Boxing Day no está publicado: confirmar antes al +61 448 887 728. Después, frozen yogurt en Yo-Chi, en Campbell Parade.',
        link: 'https://www.google.com/maps/search/?api=1&query=Skittle+Lane+135+Curlewis+Street+Bondi+Beach',
      },
      {
        name: 'Compras en el centro — QVB, Westfield Sydney y The Galeries',
        meetingTime: '1:00 p.m.', meetingPlace: 'George St / Pitt St Mall', startEnd: 'Uber ~25 min desde Bondi',
        description: 'Boxing Day es el día de las grandes rebajas en Sídney: los malls abren temprano y se llenan. Los tres quedan a 5 min a pie uno del otro. El QVB (Queen Victoria Building) es una galería comercial histórica, no un mercado.',
      },
      {
        name: 'Paddington — Oxford St, William St y Paddington Markets',
        meetingTime: '3:30 p.m.', meetingPlace: 'Paddington Markets, 395 Oxford St', startEnd: 'Uber ~10 min desde el centro',
        description: 'Boutiques y tiendas independientes en Oxford St y William St. El mercado de los sábados abre de 10:00 a.m. a 4:00 p.m., así que solo quedan ~30 min, y en feriados el horario puede cambiar.',
        link: 'https://www.sydney.com/destinations/sydney/inner-sydney/paddington/events/paddington-markets',
      },
      {
        name: 'Happy hour — Restaurant Hubert',
        meetingTime: '5:00 p.m.', meetingPlace: 'Restaurant Hubert, 15 Bligh St (Bar Pincer)', startEnd: 'Hasta 6:00 p.m.',
        description: 'Happy hour de 5:00 a 6:00 p.m. en el Bar Pincer, sin reserva; jazz en vivo todos los días. El horario de Boxing Day no está confirmado.',
        link: 'https://swillhouse.com/venues/restaurant-hubert/',
      },
      {
        name: 'Cena — Bar Totti\'s CBD',
        operator: 'Reservado · 2 personas',
        meetingTime: '8:30 p.m.', meetingPlace: 'Bar Totti\'s, Shop 4, 330 George St (ivy)', startEnd: '',
        description: 'Reserva #BTOT-85U969HL7VZE, para 2. Italiano de Merivale, hermano de Totti\'s Bondi, dentro del precinto ivy y con entrada por su propio callejón. Ojo con los embutidos de cerdo (prosciutto, salami) y los mariscos. IMPORTANTE: si al final no van, hay que cancelar la reserva al menos 3 horas antes.',
      },
      {
        name: 'Tragos — Opera Bar',
        meetingTime: 'Después de cenar', meetingPlace: 'Opera Bar, Sydney Opera House (Lower Concourse)', startEnd: '',
        description: 'Abre todos los días de 11:00 a.m. a medianoche; las mesas de afuera son sin reserva. Reabrió en noviembre de 2026 con nuevos dueños.',
        link: 'https://operabar.com.au/',
      },
    ],
    notes: 'Noche en Pier One Sydney Harbour. Cena en Bar Totti\'s a las 8:30 p.m.: si no van, cancelar al menos 3 horas antes.',
  },
  {
    month: 'DIC', num: '27', dow: 'Dom',
    port: 'Sídney → Houston → Panamá', type: 'travel', typeLabel: 'Regreso a casa',
    weather: { i: '☀️', t: '26° / 18°', d: 'Pleno verano: soleado, con el mar a 21–22°' },
    activities: [
      {
        name: 'Check-out — Pier One', travel: true,
        meetingTime: 'Madrugada', meetingPlace: 'Pier One → Sydney (SYD)', startEnd: '',
        description: 'El vuelo sale a las 9:15 a.m., así que hay que salir del hotel de madrugada. El itinerario muestra el check-out a las 11:00 a.m. (sin fecha), lo cual no cuadra con el vuelo: hay que coordinar la salida temprana. No hay traslado reservado al aeropuerto.',
      },
      {
        name: 'Vuelo UA100 — Sídney → Houston', travel: true,
        meetingTime: '9:15 a.m.', meetingPlace: 'Sydney (SYD) → Houston (IAH)', startEnd: 'Llega 7:55 a.m. · 15 h 40 min',
        description: 'United Airlines UA100. Por cruzar la línea de cambio de fecha, llegan a Houston la mañana del mismo 27. Localizador ABX40E. Boleto de Raymond: 2302155054681. En el itinerario oficial no aparece el número de boleto de Rachelle en este tramo — hay que pedirlo.',
      },
      {
        name: 'Vuelo UA1034 — Houston → Panamá', travel: true,
        meetingTime: '2:27 p.m.', meetingPlace: 'Houston (IAH) → Tocumen (PTY)', startEnd: 'Llega 7:38 p.m. · 4 h 11 min',
        description: 'United Airlines UA1034, con unas 6 h 30 min de conexión en Houston. Está cargado como dos reservas separadas, una por pasajero: LNEPF6 (Rachelle, boleto 0162101807267) y MX6VH4 (Raymond, boleto 0162396262460).',
      },
    ],
    notes: 'Fin del viaje — llegada a Panamá a las 7:38 p.m.',
  },

]

// Pendientes por ciudad — checklist independiente del itinerario.
export const TODO = [
  {
    city: 'Auckland',
    items: [
      'Reservar wine tour',
      'Comprar ferry de regreso de Waiheke (11 dic) — la ida ya está comprada',
      'Alquilar carro',
      'Buscar recomendaciones de la ciudad',
    ],
  },
  {
    city: 'Queenstown',
    items: [
      'Confirmar con Viviana el tour de Milford Sound — 8:00 a.m. (16 dic)',
      'Reservar Nevis Bungy & Swing — salida 8:40 a.m. (18 dic)',
      'Definir actividad de la tarde del 16 dic',
      'Definir actividad de la tarde del 18 dic',
      'Reservar NZONE Skydive — mañana (17 dic)',
      'Reservar Lake Wakatipu cruise 2:00 p.m. (20 dic)',
      'Confirmar vuelo Auckland → Queenstown (15 dic)',
    ],
  },
]

// Opciones por lugar: restaurantes y actividades posibles, se van llenando.
// comer se divide en cafe / brunch / almuerzo / cena / bar. Cada item: { name, note?, link? }
export const OPCIONES = [
  {
    city: 'Ciudad del Cabo (25–29 nov)',
    comer: {
      cafe: [
        { name: 'Cookie Co.', note: 'Galletas y café, la más cercana al hotel (4 min a pie); cierra a las 4:00 p.m.' },
        { name: 'Truth Coffee', note: 'Tostadores de culto con decoración steampunk, a 8 min a pie.' },
        { name: 'Origin Coffee Roasting', note: 'Pioneros del café de especialidad en la ciudad, en De Waterkant.' },
        { name: 'Bootlegger Coffee Company', note: 'Cadena local de buen café, en De Waterkant.' },
        { name: 'Rosetta Roastery', note: 'Café de especialidad de origen único, en Bree Street; cierra a las 4:00 p.m.' },
        { name: 'Espressolab', note: 'Entre los 100 mejores cafés del mundo en 2026, en Green Point.' },
      ],
      brunch: [
        { name: 'Jarryds', note: 'Brunch todo el día en Sea Point; no aceptan reservas.' },
      ],
      almuerzo: [
        { name: 'Time Out Market', note: 'Food hall con los mejores chefs locales en el V&A Waterfront; sin reserva.' },
        { name: 'The Bungalow by Kove Collection', note: 'Mediterráneo con sushi en terraza sobre el mar, en Clifton; reservar y evitar los mariscos.' },
        { name: 'The Pot Luck Club', note: 'Tapas de autor con vista en el Old Biscuit Mill; reservar con anticipación.' },
        { name: 'Chefs Warehouse at Tintswalo Atlantic', note: 'Tapas de autor frente al mar en Chapman’s Peak, en la ruta de Cape Point; reserva obligatoria.' },
      ],
      cena: [
        { name: 'Figo', note: 'Italiano con terraza frente al Atlántico, en Sea Point; pedir mesa junto a la ventana.' },
        { name: 'Nobu', note: 'Japonés-peruano en el One&Only del Waterfront; solo cena, reservar.' },
      ],
      bar: [
        { name: 'Gigi Rooftop · Hotel Gorgeous George', note: 'Rooftop de hotel boutique en el centro, bonito para el sunset.' },
        { name: 'Hacienda', note: 'Mexicano y bar de tequilas en Bree Street; happy hour de margaritas desde las 4:00 p.m.' },
        { name: 'Chinchilla', note: 'Rooftop con vista a la playa de Camps Bay y los Doce Apóstoles.' },
        { name: 'Baptiste Rooftop', note: 'Rooftop con vista 360° en Camps Bay, ideal para el sunset; cierra ~8:00 p.m.' },
      ],
    },
    actividades: [
      { name: 'Pasear por el wharf', note: 'Muelles y tiendas del V&A Waterfront, con el Time Out Market ahí mismo.' },
      { name: "Hike Lion's Head Trail", note: 'Subida de 2–3 h con vista a Table Mountain y Camps Bay; sin reserva.' },
      { name: 'Chapman’s Peak Drive', note: 'Carretera escénica tallada en el acantilado, de peaje; la cierran si hay viento fuerte.' },
    ],
  },
  {
    city: 'Johannesburgo (2–3 dic)',
    comer: {
      cafe: [],
      brunch: [],
      almuerzo: [],
      cena: [
        { name: 'Marble', note: 'Reservado el 2 dic a las 8:30 p.m.: parrilla a la leña en azotea con vista al atardecer.' },
      ],
      bar: [
        { name: 'Alto234', note: 'Bar al aire libre en el piso 57, el más alto de África; cobra entrada y depende del clima.' },
      ],
    },
    actividades: [],
  },
  {
    city: 'Auckland (10–12 dic)',
    comer: { cafe: [], brunch: [], almuerzo: [], cena: [], bar: [] },
    actividades: [
      { name: 'Mount Eden (Maungawhau)', note: 'Volcán con cráter y vista 360° de la ciudad; gratis, el último tramo es a pie, ideal al atardecer.' },
    ],
  },
  { city: 'Rotorua (12–15 dic)', comer: { cafe: [], brunch: [], almuerzo: [], cena: [], bar: [] }, actividades: [] },
  {
    city: 'Queenstown (15–21 dic)',
    comer: {
      cafe: [],
      brunch: [
        { name: 'The Boat Shed Cafe', note: 'Brunch a orillas del lago con vista a The Remarkables; cierra a las 3:00 p.m., reservar.' },
      ],
      almuerzo: [
        { name: 'Ayrburn', note: 'Complejo de restaurantes, bares y viñedo junto a Arrowtown; cada lugar se reserva aparte.' },
        { name: 'The Lodge Bar · Rodd & Gunn', note: 'Cocina neozelandesa y vinos dentro de la tienda Rodd & Gunn, frente al lago en el centro; conviene reservar.' },
        { name: 'Fergburger', note: 'La hamburguesa más famosa de Nueva Zelanda, en el centro (Shotover Street); siempre hay fila.' },
        { name: 'Firebird (Wanaka)', note: 'Food truck de pollo frito picante en Wanaka; casual, confirmar horario.' },
      ],
      cena: [
        { name: 'Sundays', note: 'Mediterráneo-italiano dentro de una iglesia de los años 30, en Frankton; cierra lunes y martes.' },
        { name: 'Roki Collection', note: 'The Terrace reservado el 20 dic a las 8:15 p.m. (carta con muchos mariscos); Essence es alta cocina con dos estrellas Michelin.' },
      ],
      bar: [
        { name: 'The Sundeck (rooftop)', note: 'Rooftop en pleno centro con cócteles y tapas mediterráneas; sin reserva.' },
        { name: 'The Balcony at Crowne Plaza', note: 'Terraza con fogatas y vista a las montañas, para tragos al atardecer; depende del clima, reservar.' },
        { name: 'Little Mez', note: 'Bar subterráneo de mezcal y tequila con snacks mexicanos, debajo de Margo’s; confirmar horario.' },
        { name: 'Little Blackwood', note: 'Coctelería frente al lago en Steamer Wharf, con terraza con calefacción; abre desde la tarde.' },
      ],
    },
    actividades: [
      { name: 'Skyline Queenstown · góndola y luge (los carritos)', note: 'Góndola a Bob’s Peak con vista al lago y bajada en carritos; a 6 min a pie del hotel.' },
      { name: 'Alquilar carro para pasear', note: 'Para Glenorchy, Arrowtown y Wanaka; se maneja por la izquierda y sirve la licencia de EE. UU.' },
      { name: 'Pasear por el Queenstown Mall', note: 'Calle peatonal del centro con tiendas y bares, que baja hasta el lago.' },
      { name: 'Tour en caballo · LightHorse Adventures', note: 'Cabalgatas en el valle de Glenorchy, a ~1 h; se reserva en línea y se necesita carro.' },
      { name: 'Sauna u Onsen Hot Pools', note: 'Piscinas privadas de cedro con vista a los Alpes; se llena con mucha anticipación.' },
      { name: 'Sawpit Gully Trail (Arrowtown) · plan B de Lower Wye Creek', note: 'Circuito de ~3 h con subida constante en Arrowtown; plan B si Lower Wye Creek está cerrado.', link: 'https://www.queenstownnz.co.nz/listing/sawpit-gully-trail/2040/' },
    ],
  },
  {
    city: 'Whitsundays (21–25 dic)',
    comer: {
      cafe: [],
      casual: [
        { name: 'Bob’s Bakery', note: 'Panadería frente a la marina, pies y croissants; ojo, los sausage rolls son de cerdo.', link: 'https://www.hamiltonisland.com.au/cafes-and-takeaway/bobs-bakery' },
        { name: 'Marina Cafe', note: 'Café y jugos frente a la marina para algo liviano; cierra a las 2:00 p.m.', link: 'https://www.hamiltonisland.com.au/cafes-and-takeaway/marina-cafe' },
        { name: 'HI Fresh', note: 'Comida fresca mediterránea para llevar a la piscina o la playa; solo hasta las 3:30 p.m.', link: 'https://www.hamiltonisland.com.au/cafes-and-takeaway/hi-fresh' },
        { name: 'Hamilton Island Wildlife Café', note: 'Desayuno o almuerzo junto a los koalas del parque de fauna; cierra a las 3:30 p.m.', link: 'https://www.hamiltonisland.com.au/cafes-and-takeaway/wildlife-hamilton-island' },
        { name: 'HI Yo', note: 'Frozen yogurt con toppings frente a las piscinas principales; de 12:00 a 5:00 p.m.', link: 'https://www.hamiltonisland.com.au/cafes-and-takeaway/hi-yo' },
        { name: 'Ice Cream Parlour', note: 'Heladería clásica con conos de waffle y milkshakes; abre hasta las 9:30 p.m.', link: 'https://www.hamiltonisland.com.au/cafes-and-takeaway/ice-cream-parlour' },
      ],
      brunch: [],
      almuerzo: [
        { name: 'Marina Tavern', note: 'Pub frente a la marina con steak y schnitzel; sin reservas.', link: 'https://www.hamiltonisland.com.au/bars-and-clubs/marina-tavern' },
        { name: 'Clubhouse Restaurant (Dent Island)', note: 'Almuerzo con vista en el club de golf de la isla vecina, se llega en ferry; reservar.', link: 'https://www.hamiltonisland.com.au/bars-and-clubs/clubhouse-restaurant' },
        { name: 'Manta Ray (almuerzo)', note: 'Griego frente a la marina; en su estadía el almuerzo no calza, solo la cena.', link: 'https://www.hamiltonisland.com.au/restaurants/manta-ray' },
      ],
      cena: [
        { name: 'Catseye Pool Club', note: 'Australiano para compartir de Josh Niland frente a la playa; en diciembre se llena, reservar ya.', link: 'https://www.hamiltonisland.com.au/the-sundays-restaurant' },
        { name: 'The Palms', note: 'BBQ ahumado al aire libre con música en vivo; casual y sin reservas.', link: 'https://www.hamiltonisland.com.au/the-palms' },
        { name: 'Manta Ray', note: 'Griego para compartir frente a la marina; reserva obligatoria, ojo con pulpo, calamar y mariscos.', link: 'https://www.hamiltonisland.com.au/restaurants/manta-ray' },
        { name: 'Romano’s', note: 'Italiano romántico con mesas sobre el agua; reserva obligatoria, cierra lunes y martes.', link: 'https://www.hamiltonisland.com.au/restaurants/romanos' },
        { name: 'Pebble Beach (qualia)', note: 'Cena de autor en el resort más exclusivo de la isla; pocas mesas, vestimenta elegante, reservar.', link: 'https://www.qualia.com.au/dining/dinner/' },
      ],
      bar: [
        { name: 'One Tree Hill (sunset cocktails)', note: 'El mirador del atardecer con cócteles y margaritas; sin reserva, llegar hacia las 6:00 p.m.', link: 'https://www.hamiltonisland.com.au/one-tree-hill' },
      ],
    },
    actividades: [],
  },
  {
    city: 'Sídney (25–27 dic)',
    comer: {
      cafe: [
        { name: 'Shuk (Surry Hills, The Rocks y Bondi)', note: 'Panadería-café israelí famosa por sus donas; cierra hacia las 4:00 p.m.', link: 'https://www.broadsheet.com.au/sydney/north-bondi/cafes/shuk' },
        { name: 'bills Surry Hills', note: 'El café clásico de Sídney, famoso por sus hotcakes de ricotta; puede cerrar el 25.', link: 'https://www.bills.com.au/' },
      ],
      casual: [
        { name: 'Butterboy', note: 'Galletas gruesas y soft serve; la tienda principal está en Manly, se llega en ferry.', link: 'https://concreteplayground.com/australia/food-drink/now-open-butterboy-broadway-sydney' },
        { name: 'Yo-Chi Bondi', note: 'Frozen yogurt y açaí de autoservicio frente a la playa de Bondi.', link: 'https://www.visitbondibeach.com/bondi-eat-and-drink/venues/yo-chi-bondi-beach' },
        { name: 'Common Supply (Bondi)', note: 'Batidos y comida saludable frente a la playa de Bondi; confirmar horario en Boxing Day.' },
      ],
      brunch: [
        { name: 'Pocket (Bondi)', note: 'Brunch de la lista de ustedes en Bondi; también sirve para almorzar.' },
        { name: "Harry's Bondi", note: 'El mejor café de Bondi 2026 según la guía local; sábados hasta ~4:00 p.m.', link: 'https://www.visitbondibeach.com/bondi-eat-and-drink/venues/harrys-bondi' },
      ],
      almuerzo: [
        { name: 'Ibushi (Prefecture 48)', note: 'Robata japonés con atún sobre arroz crujiente, estilo Paperfish; sin cerdo, pocos puestos.', link: 'https://p48.com.au/venues-ibushi/' },
      ],
      cena: [
        { name: 'Nobu Sydney (Crown Barangaroo)', note: 'Japonés-peruano que abre el 25; plan B de Navidad, ojo con pulpo y calamar.', link: 'https://www.crownsydney.com.au/whats-on/christmas/offers/nobu' },
        { name: '6HEAD (The Rocks)', note: 'Steakhouse de wagyu frente a la bahía, a 10 min a pie del hotel; reservar.', link: 'https://6head.com.au/sydney-restaurant/' },
        { name: 'Grappa (The Rocks)', note: 'Italiano nuevo de pizza a la leña y pasta fresca, estilo Serafina, a 7 min a pie.', link: 'https://grappa.com.au/the-rocks-home' },
      ],
      bar: [
        { name: 'Opera Bar', note: 'Tragos frente a la bahía, debajo de la Ópera; afuera es sin reserva.', link: 'https://operabar.com.au/' },
        { name: 'JAM Record Bar', note: 'Bar de vinilos al estilo de Tokio; sin reservas, cierra a medianoche.', link: 'https://www.broadsheet.com.au/sydney/bars/jam-record-bar' },
        { name: 'Restaurant Hubert', note: 'Bar francés subterráneo con jazz en vivo; happy hour de 5:00 a 6:00 p.m. sin reserva.', link: 'https://swillhouse.com/venues/restaurant-hubert/' },
      ],
    },
    actividades: [
      { name: 'Paseo por la bahía', note: 'Crucero desde Circular Quay o el ferry público a Manly, con vista a la Ópera y el puente.', link: 'https://www.captaincook.com.au' },
      { name: 'Luna Park', note: 'Parque de diversiones al otro lado del Harbour Bridge; horario del 25 y 26 sin publicar.', link: 'https://tickets.lunaparksydney.com/events_hours' },
      { name: 'The Rocks Markets', note: 'Mercado de puestos a pasos del hotel, sábados y domingos; sin confirmar para Boxing Day.', link: 'https://secretsydney.com/the-rocks-markets-sydney/' },
      { name: 'Westfield Bondi Junction', note: 'Mall grande cerca de Bondi; en Boxing Day se llena muchísimo.' },
      { name: 'Birkenhead Point (outlet)', note: 'El outlet más grande de Sídney, a ~20 min del centro.', link: 'https://www.sydney.com/articles/outlet-shopping-in-sydney' },
    ],
  },
]

// Restaurantes y bares donde fueron y les gustaron, por ciudad: { name, note }
export const FAVORITOS = []
