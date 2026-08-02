// Itinerario Auckland & Rotorua — datos de este viaje.
// Refleja las decisiones finales confirmadas en los correos con Viviana (Forest Travel).
// Viviana ya reservó por Viator todas las actividades; el spa está en proceso y el auto es cotización.
export const DAYS = [
  {
    month: 'DIC', num: '10', dow: 'Jue',
    port: 'Llegada a Auckland', type: 'city', typeLabel: 'Llegada',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-37.00655,174.79034&destination=-36.84335,174.76654&travelmode=driving',
    activities: [
      {
        name: 'Llegada a Auckland Airport', travel: true,
        meetingTime: 'Por confirmar', meetingPlace: 'Auckland Airport (AKL)', startEnd: '',
        description: 'Llegada a Nueva Zelanda. Falta confirmar el número de vuelo y la hora de aterrizaje para ajustar el resto del día.',
      },
      {
        name: 'Traslado y check-in — Hotel InterContinental', travel: true,
        meetingTime: 'Por confirmar', meetingPlace: 'Hotel InterContinental Auckland', startEnd: 'Auto ~30 min desde el aeropuerto',
        description: 'Traslado del aeropuerto al Hotel InterContinental en el centro de Auckland (~30 minutos). El auto de alquiler se recoge recién el 12 dic, así que este traslado sería en taxi o transfer.',
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
    activities: [
      {
        name: 'Salida del hotel + ferry a Waiheke', travel: true,
        meetingTime: '9:00 a.m.', meetingPlace: 'Downtown Ferry Terminal', startEnd: 'Ferry ~45 min',
        description: 'El Downtown Ferry Terminal queda a ~2 minutos caminando del Hotel InterContinental. El ferry hasta Matiatia Ferry Terminal (Waiheke Island) dura unos 45 minutos. Recomendado salir del hotel alrededor de las 9:00 a.m.',
      },
      {
        name: 'Scenic Wine Tour con guía y 12 degustaciones (Waiheke)',
        operator: 'Viator · Opción en grupo (4.5 h) · Reservado',
        actionBadge: 'Comprar ferry',
        meetingTime: '10:40 a.m.', meetingPlace: 'Matiatia Ferry Terminal', startEnd: '4.5 h · hasta ~3:10 p.m.',
        description: 'Opción elegida: tour en grupo (4.5 horas). Visita 3 de los mejores viñedos de la isla y se degustan ~15 vinos. No incluye almuerzo. Precio: USD 412.62 (2 personas). Encuentro en Matiatia Ferry Terminal. Falta comprar los pasajes de ferry ida y vuelta a Waiheke Island (no están incluidos en el tour).',
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
        name: 'Salida del hotel + recoger auto de alquiler (Divine Rentals)', travel: true,
        meetingTime: '7:00 a.m.', meetingPlace: 'Divine Rentals — Auckland Downtown', startEnd: 'Auto ~3 h a Waitomo',
        description: 'Salida del hotel a las 7:00 a.m. para retirar el auto en Divine Rentals, Auckland Downtown. Vehículo: Midsize Convertible — Mazda MX-5 Roadster o similar. Precio: USD 739.45 (12–15 dic; kilometraje ilimitado, no incluye combustible). Devolución: 15 dic, Auckland Airport, 12:00 p.m. Desde Auckland son ~3 h en auto hasta Waitomo.',
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
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-38.10875,176.24180&destination=-38.17578,176.25323&waypoints=-38.05189,176.33803%7C-38.31539,176.37569&travelmode=driving',
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
        operator: 'Polynesian Spa · Reserva en proceso',
        meetingTime: '5:45 p.m.', meetingPlace: 'Polynesian Spa', startEnd: 'Abierto hasta las 7:00 p.m.',
        description: 'Deluxe Romantic Package reservado para las 5:45 p.m. A ~10 minutos en carro del hotel.',
        link: 'https://www.polynesianspa.co.nz/vitality-day-escape-retreat-nz/',
      },
    ],
    notes: 'Noche en Black Swan Lakeside Boutique Hotel, Rotorua. Último día con el auto — mañana se devuelve en Auckland Airport.',
  },
  {
    month: 'DIC', num: '15', dow: 'Mar',
    port: 'Rotorua → Auckland → Queenstown', type: 'travel', typeLabel: 'Día de traslado',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-38.10875,176.24180&destination=-37.00655,174.79034&travelmode=driving',
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
        name: 'Vuelo Auckland → Queenstown', travel: true,
        actionBadge: 'Confirmar vuelo',
        meetingTime: 'Por confirmar', meetingPlace: 'Auckland Airport (AKL) → Queenstown Airport (ZQN)', startEnd: 'Vuelo ~2 h',
        description: 'Vuelo doméstico de Auckland a Queenstown (aproximadamente 2 horas). Falta confirmar aerolínea, número de vuelo y horario para cuadrar bien el día.',
      },
      {
        name: 'Check-in — Sofitel Queenstown Hotel & Spa', travel: true,
        meetingTime: 'Tarde', meetingPlace: 'Sofitel Queenstown, 8 Duke Street', startEnd: 'Auto ~10 min desde ZQN',
        description: 'Llegada a Queenstown y check-in en el Sofitel Queenstown Hotel & Spa (8 Duke Street), en pleno centro. Del aeropuerto al hotel son ~10 minutos.',
      },
    ],
    notes: 'Noche en Sofitel Queenstown Hotel & Spa. Primera noche en Queenstown.',
  },
  {
    month: 'DIC', num: '16', dow: 'Mié',
    port: 'Milford Sound', type: 'adventure', typeLabel: 'Fiordos',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-45.03115,168.65901&destination=-45.02487,168.74103&travelmode=driving',
    activities: [
      {
        name: 'Milford Sound Fly-Cruise-Fly',
        operator: 'Viator · Opción elegida por Raymond',
        actionBadge: 'Confirmar con Viviana',
        meetingTime: '10:30 a.m.', meetingPlace: 'Queenstown / Frankton (punto exacto por confirmar)', startEnd: 'Día completo',
        description: 'Vuelo escénico a Milford Sound, crucero por el fiordo y vuelo de regreso. Es la opción que le propusiste a Viviana (más económica y equivalente a las que ella mandó) — falta que ella confirme si conviene frente a sus dos opciones. El punto de encuentro de las opciones de Viviana era 3 Tex Smith Lane, Frankton; hay que confirmar el de este operador.',
        link: 'https://www.viator.com/tours/Queenstown/Milford-Sound-Fly-Cruise-Fly/d407-171544P1?pid=P00050706&mcid=42383&medium=link&campaign=review-milford-sound-fly-cruise-fly',
      },
      {
        name: 'Tarde / noche libre en Queenstown',
        meetingTime: 'Al regreso', meetingPlace: 'Centro de Queenstown', startEnd: '',
        description: 'Regreso a Queenstown y tiempo libre para caminar por el centro y la costanera de Lake Wakatipu.',
      },
    ],
    notes: 'Noche en Sofitel Queenstown Hotel & Spa.',
  },
  {
    month: 'DIC', num: '17', dow: 'Jue',
    port: 'Lake Tekapo', type: 'travel', typeLabel: 'Excursión privada',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-45.03115,168.65901&destination=-44.00452,170.47773&travelmode=driving',
    activities: [
      {
        name: 'Lake Tekapo Private Day Trip from Queenstown',
        operator: 'Viator · Tour privado',
        meetingTime: '8:00 a.m.', meetingPlace: 'Pickup en el Sofitel', startEnd: 'Día completo',
        description: 'Excursión privada de día completo a Lake Tekapo, con pickup en el hotel a las 8:00 a.m. (los horarios disponibles iban de 7:00 a 9:00 a.m.). Pendiente revisar con Viviana la ruta y las paradas para aprovecharlo al máximo — en el camino suelen incluirse Lindis Pass, Lake Pukaki con vista al Mt Cook y la Church of the Good Shepherd.',
        link: 'https://www.viator.com/tours/Queenstown/Lake-Tekapo-Private-Day-Trip-from-Queenstown-TravelnGo/d407-5590256P5?pid=P00001955&uid=U00767249&mcid=58086&currency=USD',
      },
    ],
    notes: 'Noche en Sofitel Queenstown Hotel & Spa. Día largo — son ~3.5 h de viaje en cada sentido.',
  },
  {
    month: 'DIC', num: '18', dow: 'Vie',
    port: 'Gibbston Valley', type: 'adventure', typeLabel: 'Adrenalina',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-45.03115,168.65901&destination=-45.00941,168.90031&travelmode=driving',
    activities: [
      {
        name: 'Kawarau Bungy & Swing Combo (en pareja)',
        operator: 'AJ Hackett · Kawarau Bridge',
        actionBadge: 'Por reservar',
        meetingTime: 'Por definir', meetingPlace: 'Kawarau Bungy Centre, Gibbston Highway (SH6)', startEnd: '~30 min en auto desde Queenstown',
        description: 'Combo de bungy (43 m, el bungy original del mundo) + swing en el Kawarau Bridge — se puede hacer en pareja, que fue la razón para preferirlo sobre el Nevis. A ~30 minutos de Queenstown por la SH6, camino a Gibbston Valley.',
        link: 'https://www.bungy.co.nz/combos/kawarau-bungy-swing-combo/',
      },
      {
        name: 'Actividad corta adicional (por definir)',
        actionBadge: 'Por definir',
        meetingTime: 'Tarde', meetingPlace: '', startEnd: '',
        description: 'Queda tiempo en el día para una segunda actividad corta. Opciones cercanas: viñedos de Gibbston Valley (queda al lado del bungy), Arrowtown (pueblo histórico minero, ~15 min del Kawarau Bridge), o Skyline Gondola + Luge en Queenstown.',
      },
    ],
    notes: 'Noche en Sofitel Queenstown Hotel & Spa.',
  },
  {
    month: 'DIC', num: '19', dow: 'Sáb',
    port: 'Queenstown', type: 'city', typeLabel: 'Por definir',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-45.03115,168.65901&destination=-44.84975,168.38520&travelmode=driving',
    activities: [
      {
        name: 'Glenorchy + caminata en Routeburn (propuesta)',
        actionBadge: 'Por definir',
        meetingTime: 'Propuesta', meetingPlace: 'Glenorchy (~45 min de Queenstown)', startEnd: 'Día completo',
        description: 'Descartaste el tour de helicóptero por repetitivo con el vuelo de Milford. Propuesta: manejar hasta Glenorchy por la carretera escénica del lago (~45 min), y hacer una caminata del Routeburn Track (Routeburn Flats, 3–4 h ida y vuelta) o la Glenorchy Lagoon Walk (45 min, fácil). Es terrestre, con paisaje de El Señor de los Anillos, y no repite nada del resto del viaje. Ver otras opciones abajo.',
      },
    ],
    notes: 'Noche en Sofitel Queenstown Hotel & Spa. Día aún por confirmar — hay varias alternativas propuestas.',
  },
  {
    month: 'DIC', num: '20', dow: 'Dom',
    port: 'Queenstown', type: 'adventure', typeLabel: 'Jet boat & lago',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-45.03115,168.65901&destination=-45.03247,168.65918&waypoints=-44.98713,168.67137&travelmode=driving',
    activities: [
      {
        name: 'Shotover River Extreme Jet Boat Ride',
        operator: 'Viator · Shotover Jet + transporte',
        meetingTime: '10:00 a.m.', meetingPlace: 'Check-in en The Station Building, Queenstown CBD', startEnd: 'Check-in 45 min antes (~9:15 a.m.)',
        description: 'Jet boat por el cañón del río Shotover a las 10:00 a.m. La opción elegida incluye transporte de ida y vuelta desde Queenstown: el check-in es 45 minutos antes en The Station Building (centro de Queenstown), y de ahí los llevan a la base en Arthurs Point. Precio: USD 241.18 (2 adultos).',
        link: 'https://www.viator.com/tours/Queenstown/Shotover-River-Extreme-Jet-Boat-Ride-from-Queenstown/d407-5626SHOTOVER?pid=P00001955&uid=U00767249&mcid=58086&currency=USD',
      },
      {
        name: 'Almuerzo y tarde libre', travel: true,
        meetingTime: 'Mediodía', meetingPlace: 'Centro de Queenstown', startEnd: '',
        description: 'Almuerzo y tiempo libre en el centro antes del crucero de la tarde.',
      },
      {
        name: 'Lake Wakatipu Scenic Cruise (90 min)',
        operator: 'Viator · Million Dollar Cruise',
        actionBadge: 'Por reservar',
        meetingTime: '4:00 p.m.', meetingPlace: '50 Beach Street, waterfront, Queenstown', startEnd: '90 minutos',
        description: 'Crucero escénico de 90 minutos por Lake Wakatipu a las 4:00 p.m., saliendo del muelle en 50 Beach Street. Buena hora para la luz de la tarde sobre The Remarkables.',
        link: 'https://www.viator.com/tours/Queenstown/Million-Dollar-Cruise/d407-71002P1?pid=P00001955&uid=U00767249&mcid=58086&currency=USD',
      },
    ],
    notes: 'Noche en Sofitel Queenstown Hotel & Spa. Último día de actividades confirmadas — falta definir hasta cuándo se quedan en Queenstown.',
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
      'Confirmar con Viviana el tour de Milford Sound (16 dic)',
      'Reservar Kawarau Bungy & Swing combo (18 dic)',
      'Definir actividad corta extra del 18 dic',
      'Definir qué hacer el 19 dic',
      'Reservar Lake Wakatipu cruise 4:00 p.m. (20 dic)',
      'Revisar con Viviana la ruta y paradas del Lake Tekapo (17 dic)',
      'Confirmar vuelo Auckland → Queenstown (15 dic)',
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
