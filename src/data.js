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
        name: 'Día libre en Ciudad del Cabo',
        meetingTime: 'Todo el día', meetingPlace: '', startEnd: '',
        description: 'No hay nada reservado este día en ninguno de los dos itinerarios. Queda libre para la ciudad: V&A Waterfront, Bo-Kaap, Robben Island o la playa de Camps Bay.',
      },
    ],
    notes: 'Noche en Southern Sun The Cullinan, Ciudad del Cabo. Última noche en la ciudad.',
  },
  {
    month: 'NOV', num: '29', dow: 'Dom',
    port: 'Ciudad del Cabo → Safari', type: 'travel', typeLabel: 'Vuelo al safari',
    weather: { i: '⛈️', t: '33° / 19°', d: 'Verano del bushveld: amanece fresco, calor fuerte al mediodía y tormentas aisladas por la tarde' },
    activities: [
      {
        name: 'Traslado al aeropuerto de Ciudad del Cabo', travel: true,
        meetingTime: 'Por confirmar', meetingPlace: 'Hotel → Cape Town International (CPT)', startEnd: '',
        description: 'Traslado desde el hotel, con asistencia en el aeropuerto a la salida.',
      },
      {
        name: 'Vuelo Ciudad del Cabo → Hoedspruit', travel: true,
        operator: 'Bateleur Travel',
        actionBadge: 'Falta número de vuelo',
        meetingTime: 'Por confirmar', meetingPlace: 'Cape Town (CPT) → Hoedspruit (HDS)', startEnd: '',
        description: 'Vuelo regular reservado vía Bateleur Travel. Este vuelo NO aparece en el itinerario oficial de Axus: falta la aerolínea, el número de vuelo y los horarios. Hay que pedirlos.',
      },
      {
        name: 'Traslado a Ngala Tented Camp', travel: true,
        meetingTime: 'Al llegar', meetingPlace: 'Hoedspruit → andBeyond Ngala Tented Camp', startEnd: '',
        description: 'Traslado terrestre desde el aeropuerto de Hoedspruit hasta el campamento, dentro de la reserva privada de Ngala.',
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
        description: 'Traslado terrestre desde el campamento hasta el aeropuerto.',
      },
      {
        name: 'Vuelo Hoedspruit → Johannesburgo', travel: true,
        operator: 'Bateleur Travel',
        actionBadge: 'Falta número de vuelo',
        meetingTime: 'Por confirmar', meetingPlace: 'Hoedspruit (HDS) → O.R. Tambo (JNB)', startEnd: '',
        description: 'Vuelo regular vía Bateleur Travel, con la modificación de vuelo ya aplicada según el itinerario de &Beyond. Tampoco aparece en el itinerario oficial de Axus: faltan aerolínea, número y horarios. Incluye asistencia a la llegada en O.R. Tambo.',
      },
      {
        name: 'Check-in — City Lodge OR Tambo', travel: true,
        meetingTime: 'Al llegar', meetingPlace: 'City Lodge OR Tambo International Airport', startEnd: '1 noche',
        description: 'Habitación Standard con desayuno, dentro del aeropuerto. Una sola noche para conectar con el vuelo a Singapur del día siguiente.',
      },
    ],
    notes: 'Noche en City Lodge OR Tambo, Johannesburgo.',
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
    port: 'Singapur → Maldivas', type: 'travel', typeLabel: 'Llegada a Maldivas',
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
    port: 'Maldivas', type: 'city', typeLabel: 'Resort',
    weather: { i: '🌦️', t: '30° / 26°', d: 'Caluroso y húmedo, con chubascos tropicales breves (~12 días al mes); mar a 28–29°' },
    activities: [
      {
        name: 'Día libre en Alila Kothaifaru',
        meetingTime: 'Todo el día', meetingPlace: 'Raa Atoll', startEnd: '',
        description: 'Día libre en el resort. Pendiente averiguar las opciones de buceo.',
      },
    ],
    notes: 'Noche en Alila Kothaifaru Maldives.',
  },
  {
    month: 'DIC', num: '6', dow: 'Dom',
    port: 'Maldivas', type: 'city', typeLabel: 'Resort',
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
    port: 'Maldivas', type: 'city', typeLabel: 'Resort',
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
    month: 'DIC', num: '8', dow: 'Mar',
    port: 'Maldivas', type: 'city', typeLabel: 'Resort',
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
    port: 'Maldivas → Kuala Lumpur → Auckland', type: 'travel', typeLabel: 'Día de vuelos',
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
    port: 'Llegada a Auckland', type: 'city', typeLabel: 'Llegada',
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
    port: 'Auckland', type: 'city', typeLabel: 'Waiheke Island',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-36.84335,174.76654&destination=-36.78059,174.99168&travelmode=transit',
    weather: { i: '🌤️', t: '22° / 15°', d: 'Inicio del verano: templado, húmedo y cambiante, con chubascos ocasionales' },
    activities: [
      {
        name: 'Salida del hotel + ferry a Waiheke', travel: true,
        meetingTime: '9:00 a.m.', meetingPlace: 'Downtown Ferry Terminal', startEnd: 'Ferry ~45 min',
        description: 'El Downtown Ferry Terminal queda a ~2 minutos caminando del Hotel InterContinental. El ferry hasta Matiatia Ferry Terminal (Waiheke Island) dura unos 45 minutos. Recomendado salir del hotel alrededor de las 9:00 a.m.',
      },
      {
        name: 'Scenic Wine Tour con guía y 12 degustaciones (Waiheke)',
        operator: 'Viator · Tour en grupo · Reservado',
        actionBadge: 'Comprar ferry',
        meetingTime: '10:40 a.m.', meetingPlace: 'Matiatia Wharf, Waiheke Island', startEnd: 'Hasta 3:40 p.m. · 5 h',
        description: 'Tour en grupo de 5 horas, de 10:40 a.m. a 3:40 p.m. Visita 3 de los mejores viñedos de la isla y se degustan ~15 vinos. No incluye almuerzo. Confirmación 1806287245 · referencia 1424036657. El guía los recibe en el ferry en Matiatia Wharf con la van de Kiwi Connect. Falta comprar los pasajes de ferry ida y vuelta a Waiheke: no están incluidos y tampoco aparecen en el itinerario oficial.',
        link: 'https://www.viator.com/tours/Waiheke-Island/4-hour-SCENIC-WINE-Tour-with-a-Private-Guide-and-12-tastings/d32653-62882P4?pid=P00001955&uid=U00767249&mcid=58086&currency=USD',
      },
      {
        name: 'Regreso a Auckland en ferry', travel: true,
        meetingTime: 'Tarde', meetingPlace: 'Matiatia Ferry Terminal', startEnd: '',
        description: 'Ferry de regreso desde Matiatia al Downtown Ferry Terminal. Noche en Hotel InterContinental, Auckland.',
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
        description: 'Caminata por el Lower Wye Creek Track, en el Remarkables Conservation Area: ~4 horas ida y vuelta, saliendo a las 3:00 p.m. El trailhead está sobre la SH6 a ~20 minutos al sur de Queenstown, entrando por un portón del lado izquierdo yendo hacia Kingston; se puede manejar hasta el estacionamiento de pasto (con 4x4 se llega a uno más alto y se ahorran 15 min de subida). A unos 20 minutos aparece la primera cascada, luego un pasillo de tablones de ~200 m montado sobre la tubería de desvío pegada al acantilado, y el sendero termina en otra cascada y un helipuerto con vista al lago. Sendero gratuito del DOC, no requiere reserva.',
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
    ],
    notes: 'Noche en Sofitel Queenstown Hotel & Spa.',
  },
  {
    month: 'DIC', num: '19', dow: 'Sáb',
    port: 'Lake Tekapo', type: 'travel', typeLabel: 'Excursión privada',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-45.03115,168.65901&destination=-44.00452,170.47773&travelmode=driving',
    weather: { i: '🌤️', t: '22° / 10°', d: 'Clima alpino y muy variable: mañanas frescas, tardes templadas; conviene ir por capas' },
    activities: [
      {
        name: 'Lake Tekapo Private Day Trip from Queenstown',
        operator: 'Viator · Tour privado · Reservado',
        meetingTime: '8:00 a.m.', meetingPlace: 'Pickup en recepción del Sofitel', startEnd: 'Hasta 7:00 p.m. · 11 h',
        description: 'Excursión privada a Lake Tekapo de 8:00 a.m. a 7:00 p.m.: son 11 horas, el día más largo del viaje. El pickup es en la recepción del hotel y hay que estar listos 5 a 10 minutos antes. Confirmación 1833837917 · referencia BR-1451819055. Pendiente revisar con Viviana la ruta y las paradas para aprovecharlo al máximo — en el camino suelen incluirse Lindis Pass, Lake Pukaki con vista al Mt Cook y la Church of the Good Shepherd.',
        link: 'https://www.viator.com/tours/Queenstown/Lake-Tekapo-Private-Day-Trip-from-Queenstown-TravelnGo/d407-5590256P5?pid=P00001955&uid=U00767249&mcid=58086&currency=USD',
      },
    ],
    notes: 'Noche en Sofitel Queenstown Hotel & Spa. Día muy largo: salen 8:00 a.m. y regresan 7:00 p.m.',
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
        name: 'Scuba diving — Gran Barrera de Coral',
        operator: 'Salida en barco · día completo',
        meetingTime: '8:00 a.m.', meetingPlace: 'Salida desde Whitsundays', startEnd: 'Regreso 4:00 p.m. · ~8 h',
        description: 'Día completo de buceo en la Gran Barrera de Coral. Salen a las 8:00 a.m. y vuelven a las 4:00 p.m. Es temporada de medusas: llevar o pedir stinger suit. Desayuno en el hotel antes de salir.',
      },
    ],
    notes: 'Noche en Hotel Beach Club, Whitsundays. Día de buceo: salen 8:00 a.m. y regresan 4:00 p.m.',
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
    port: 'Whitsundays', type: 'city', typeLabel: 'Nochebuena',
    weather: { i: '🌦️', t: '30° / 25°', d: 'Trópico húmedo: calor, humedad y chubascos de tarde; mar a 27–28° (temporada de medusas: stinger suit)' },
    activities: [
      {
        name: 'Día libre en Whitsundays',
        meetingTime: 'Todo el día', meetingPlace: 'Hotel Beach Club', startEnd: '',
        description: 'Nochebuena. No hay nada reservado — si quieren cena especial en el hotel conviene reservarla con tiempo.',
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
        description: 'Habitación Partial Water View, cama King, en un muelle histórico debajo del Harbour Bridge. Confirmación 97130874. Teléfono 61 2-8298-9999. El huesped figura como “Raymond Eskenazi”, sin “Michaan”: conviene corregirlo. El itinerario tampoco imprime la fecha de check-out, solo la hora (11:00 a.m.).',
      },
    ],
    notes: 'Navidad en Sídney. Noche en Pier One Sydney Harbour.',
  },
  {
    month: 'DIC', num: '26', dow: 'Sáb',
    port: 'Sídney', type: 'city', typeLabel: 'Día libre',
    weather: { i: '☀️', t: '26° / 18°', d: 'Pleno verano: soleado, con el mar a 21–22°' },
    activities: [
      {
        name: 'Día libre en Sídney',
        meetingTime: 'Todo el día', meetingPlace: 'Sídney', startEnd: '',
        description: 'Único día completo en Sídney y no hay nada reservado. El hotel está en Walsh Bay, a pasos del Harbour Bridge y The Rocks; la Ópera queda cruzando Circular Quay.',
      },
    ],
    notes: 'Noche en Pier One Sydney Harbour.',
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
      'Comprar ferry',
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
      'Revisar con Viviana la ruta y paradas del Lake Tekapo (19 dic)',
      'Confirmar vuelo Auckland → Queenstown (15 dic)',
    ],
  },
  {
    city: 'Posibles actividades',
    items: [
      'Tour en caballo — LightHorse Adventures (Dart Valley, Glenorchy · ~1 h de QT)',
      'Sauna u Onsen Hot Pools',
    ],
  },
  {
    city: 'Cape Town',
    items: [
      'Tour día libre (hot air balloon, four wheels)',
    ],
  },
  {
    city: 'Maldivas',
    items: [
      'Averiguar diving',
    ],
  },
]
