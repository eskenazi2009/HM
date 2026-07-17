// Itinerario Auckland & Rotorua — datos de este viaje.
// Refleja las decisiones finales confirmadas en los correos con Viviana (Forest Travel).
// Viviana ya reservó por Viator todas las actividades; el spa está en proceso y el auto es cotización.
export const DAYS = [
  {
    month: 'DIC', num: '11', dow: 'Vie',
    port: 'Auckland', type: 'city', typeLabel: 'Waiheke Island',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-36.84335,174.76654&destination=-36.78059,174.99168&travelmode=transit',
    activities: [
      {
        name: 'Salida del hotel + ferry a Waiheke', travel: true,
        meetingTime: '9:00 a.m.', meetingPlace: 'Downtown Ferry Terminal', startEnd: 'Ferry ~45 min',
        description: 'El Downtown Ferry Terminal queda a ~2 minutos caminando del Hotel InterContinental. El ferry hasta Matiatia Ferry Terminal (Waiheke Island) dura unos 45 minutos. Recomendado salir del hotel alrededor de las 9:00 a.m.',
      },
      {
        name: 'Scenic Wine Tour con guía y 12 degustaciones (Waiheke)',
        operator: 'Viator · Opción en grupo (4.5 h) · Reservado',
        meetingTime: '10:40 a.m.', meetingPlace: 'Matiatia Ferry Terminal', startEnd: '4.5 h · hasta ~3:10 p.m.',
        description: 'Opción elegida: tour en grupo (4.5 horas). Visita 3 de los mejores viñedos de la isla y se degustan ~15 vinos. No incluye almuerzo. Precio: USD 412.62 (2 personas). Encuentro en Matiatia Ferry Terminal.',
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
    activities: [
      {
        name: 'Recoger auto de alquiler (Hertz) y salir hacia Waitomo', travel: true,
        meetingTime: '7:30 a.m.', meetingPlace: 'Hertz — Auckland Downtown', startEnd: 'Auto ~3 h a Waitomo',
        description: 'Retiro del auto a las 7:30 a.m. (horario más temprano disponible) en Hertz Auckland Downtown. Vehículo: Midsize Convertible — Mazda MX-5 Roadster o similar. Precio: USD 739.45 (12–15 dic; kilometraje ilimitado, no incluye combustible). Devolución: 15 dic, Auckland Airport, 12:00 p.m. Desde Auckland son ~3 h en auto hasta Waitomo.',
      },
      {
        name: 'Waitomo Glowworm Caves Guided Tour',
        operator: 'Viator · Reservado',
        meetingTime: '11:40 a.m.', meetingPlace: '39 Waitomo Village Road, Waitomo Caves', startEnd: '',
        description: 'Tour guiado por las cuevas de luciérnagas de Waitomo. Horario confirmado: 11:40 a.m. (Viviana lo recomendó en vez de 10:10 para no ir corriendo). Precio: USD 100.20 (2 personas).',
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
        meetingTime: 'Fin de la tarde', meetingPlace: 'Blue Spring', startEnd: 'Auto ~1 h',
        description: 'Traslado desde Blue Spring a Rotorua (~1 hora). Check-in en el Black Swan Lakeside Boutique Hotel.',
      },
    ],
    notes: 'Noche en Black Swan Lakeside Boutique Hotel, Rotorua.',
  },
  {
    month: 'DIC', num: '13', dow: 'Dom',
    port: 'Rotorua', type: 'adventure', typeLabel: 'Aventura',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-38.10875,176.24180&destination=-38.17578,176.25323&waypoints=-38.05189,176.33803%7C-38.15858,176.27019&travelmode=driving',
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
        name: 'Hike — Whakarewarewa Forest (The Redwoods)',
        swap: true,
        meetingTime: 'Después del almuerzo', meetingPlace: 'The Redwoods', startEnd: '~1.5 h',
        description: 'Caminata de aproximadamente 1.5 horas por el bosque de secuoyas. Queda justo al lado de Secret Spot Hot Tubs, así que se puede ir directo de la caminata a los hot tubs sin volver a manejar. Sendero gratuito.',
      },
      {
        name: 'Secret Spot Forest Hot Tub Soak',
        operator: 'Viator · Reservado',
        meetingTime: '4:00 p.m.', meetingPlace: 'Secret Spot Hot Tubs Rotorua', startEnd: '',
        description: 'Baño en los hot tubs del bosque a las 4:00 p.m. (terminando el hike). A ~15 minutos en carro del hotel, junto a los Redwoods.',
        link: 'https://www.viator.com/tours/Rotorua/Secret-Spot-Hot-Tub-soak/d395-210014P1?pid=P00001955&uid=U00767249&mcid=58086&currency=USD',
      },
    ],
    notes: 'Noche en Black Swan Lakeside Boutique Hotel, Rotorua.',
  },
  {
    month: 'DIC', num: '14', dow: 'Lun',
    port: 'Rotorua', type: 'adventure', typeLabel: 'Aventura & Spa',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-38.10875,176.24180&destination=-38.13798,176.25827&waypoints=-38.31539,176.37569%7C-38.01782,176.34348&travelmode=driving',
    activities: [
      {
        name: 'Mt Kakaramea (Rainbow Mountain) Summit Track',
        swap: true,
        operator: 'Sendero DOC · gratuito',
        meetingTime: '7:00 a.m.', meetingPlace: 'Rainbow Mountain car park (SH5, Waiotapu)', startEnd: '~3 h ida y vuelta',
        description: 'Caminata a la cumbre del Mt Kakaramea (Rainbow Mountain), con vistas de los lagos cráter y la zona geotérmica. Dura ~3 horas; el trailhead está sobre la SH5 en Waiotapu, a ~30 minutos en carro al sur de Rotorua. Se hace temprano (~7:00 a.m.) para tener tiempo para el rafting y el spa. Sendero gratuito del DOC, no requiere reserva.',
      },
      {
        name: 'Almuerzo temprano', travel: true,
        meetingTime: '~11:30 a.m.', meetingPlace: '', startEnd: '',
        description: 'Almuerzo temprano de regreso del hike, antes del rafting.',
      },
      {
        name: 'Kaituna River White Water Rafting',
        operator: 'Viator · Reservado',
        meetingTime: '~1:30 p.m.', meetingPlace: '761 State Highway 33, Okere Falls', startEnd: '',
        description: 'Rafting en el río Kaituna alrededor de la 1:30 p.m. El punto de encuentro (761 State Highway 33, Okere Falls) está a ~30 minutos en carro del hotel.',
        link: 'https://www.viator.com/tours/Rotorua/Kaituna-River-White-Water-Rafting/d395-17658P1?pid=P00001955&uid=U00767249&mcid=58086&currency=USD',
      },
      {
        name: 'Polynesian Spa — Deluxe Romantic Package',
        operator: 'Polynesian Spa · Reserva en proceso',
        meetingTime: '5:45 p.m.', meetingPlace: 'Polynesian Spa', startEnd: 'Abierto hasta las 7:00 p.m.',
        description: 'Deluxe Romantic Package reservado para las 5:45 p.m. (llegada estimada al spa entre 4:30 y 5:00 p.m. después del rafting). A ~10 minutos en carro del hotel.',
        link: 'https://www.polynesianspa.co.nz/vitality-day-escape-retreat-nz/',
      },
    ],
    notes: 'Noche en Black Swan Lakeside Boutique Hotel, Rotorua. El 15 dic se devuelve el auto en Auckland Airport (12:00 p.m.).',
  },
]
