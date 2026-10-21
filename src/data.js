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
        name: 'Vuelo MH145 — llegada a Auckland', travel: true,
        meetingTime: '12:15 p.m.', meetingPlace: 'Auckland Airport (AKL)', startEnd: 'Vuelo 10 h 20 min',
        description: 'Malaysia Airlines MH145, clase Business. Sale de Kuala Lumpur (KUL) a las 8:55 p.m. del 9 de diciembre y aterriza en Auckland a las 12:15 p.m. del 10. Localizador DTH4EG. Boletos: 232-4832787827 (Rachelle) y 232-4832787826 (Raymond).',
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
        operator: 'Viator · Tour en grupo · Reservado',
        actionBadge: 'Comprar ferry',
        meetingTime: '10:40 a.m.', meetingPlace: 'Matiatia Wharf, Waiheke Island', startEnd: 'Hasta 3:40 p.m. · 5 h',
        description: 'Tour en grupo de 5 horas, de 10:40 a.m. a 3:40 p.m. Visita 3 de los mejores viñedos de la isla y se degustan ~15 vinos. No incluye almuerzo. Precio: USD 392.38 (2 adultos). Confirmación 1806287245 · referencia 1424036657. El guía los recibe en el ferry en Matiatia Wharf con la van de Kiwi Connect. Falta comprar los pasajes de ferry ida y vuelta a Waiheke: no están incluidos y tampoco aparecen en el itinerario oficial.',
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
        operator: 'Polynesian Spa · Reservado',
        meetingTime: '5:45 p.m.', meetingPlace: 'Polynesian Spa, 1000 Hinemoa Street', startEnd: 'Hasta 8:45 p.m. · 3 h',
        description: 'Deluxe Romantic Package (masaje, almuerzo, baño privado y regalo del spa), de 5:45 a 8:45 p.m. OJO: hay que llegar al menos UNA HORA antes, o sea a las 4:45 p.m., y cada uno debe llenar el formulario de consulta previa. Precio: NZD 818 (2 adultos). Confirmación 296082/296081. Llevar traje de baño, calzado para la piscina y una bolsa para la ropa mojada; batas, toallas, secadores y lockers los dan ellos. El paquete incluye comida, así que no hace falta comer antes.',
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
        name: 'Vuelo NZ623 — Auckland → Queenstown', travel: true,
        meetingTime: '2:40 p.m.', meetingPlace: 'Auckland Airport (AKL) → Queenstown Airport (ZQN)', startEnd: 'Llega 4:35 p.m. · 1 h 55 min',
        description: 'Air New Zealand NZ623, clase Economy. Sale de Auckland a las 2:40 p.m. y llega a Queenstown a las 4:35 p.m. Asientos 15D (Rachelle) y 15E (Raymond), una maleta documentada por persona. Localizador EIYQUH.',
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
        name: 'Milford Sound Flight and Cruise Tour',
        operator: 'True South Flights · Reservado',
        meetingTime: '8:00 a.m.', meetingPlace: 'True South Flights, 12 Hawthorne Drive, Frankton', startEnd: 'Hasta 12:30 p.m. · 4 h 30 min',
        description: 'Vuelo escénico de ida y vuelta entre Queenstown y Milford Sound más el crucero por el fiordo, de 8:00 a.m. a 12:30 p.m. Operado por True South Flights desde su base en Frankton (Bldg 8, Suite 1B / 12 Hawthorne Drive). Precio: USD 1,037.12 (2 adultos). Confirmación 1833845847 · referencia BR-1451827093. Ofrecen pickup desde Queenstown pero el itinerario oficial no indica la hora: hay que confirmarla.',
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
    activities: [
      {
        name: 'Lake Tekapo Private Day Trip from Queenstown',
        operator: 'Viator · Tour privado · Reservado',
        meetingTime: '8:00 a.m.', meetingPlace: 'Pickup en recepción del Sofitel', startEnd: 'Hasta 7:00 p.m. · 11 h',
        description: 'Excursión privada a Lake Tekapo de 8:00 a.m. a 7:00 p.m.: son 11 horas, el día más largo del viaje. El pickup es en la recepción del hotel y hay que estar listos 5 a 10 minutos antes. Precio: USD 738.74 (2 adultos). Confirmación 1833837917 · referencia BR-1451819055. Pendiente revisar con Viviana la ruta y las paradas para aprovecharlo al máximo — en el camino suelen incluirse Lindis Pass, Lake Pukaki con vista al Mt Cook y la Church of the Good Shepherd.',
        link: 'https://www.viator.com/tours/Queenstown/Lake-Tekapo-Private-Day-Trip-from-Queenstown-TravelnGo/d407-5590256P5?pid=P00001955&uid=U00767249&mcid=58086&currency=USD',
      },
    ],
    notes: 'Noche en Sofitel Queenstown Hotel & Spa. Día muy largo: salen 8:00 a.m. y regresan 7:00 p.m.',
  },
  {
    month: 'DIC', num: '20', dow: 'Dom',
    port: 'Queenstown', type: 'adventure', typeLabel: 'Jet boat & lago',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-45.03115,168.65901&destination=-45.03247,168.65918&waypoints=-44.98713,168.67137&travelmode=driving',
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
        description: 'Crucero escénico de 90 minutos por Lake Wakatipu, de 2:00 a 3:30 p.m., saliendo del muelle en 50 Beach Street. Precio: USD 91.54 (2 adultos). Confirmación 1833840517 · referencia BR-1451821679. Tiene cubierta al aire libre, cabina con calefacción y bar a bordo.',
        link: 'https://www.viator.com/tours/Queenstown/Million-Dollar-Cruise/d407-71002P1?pid=P00001955&uid=U00767249&mcid=58086&currency=USD',
      },
    ],
    notes: 'Noche en Sofitel Queenstown Hotel & Spa. Última noche en Queenstown — mañana salen temprano hacia Sídney.',
  },
  {
    month: 'DIC', num: '21', dow: 'Lun',
    port: 'Queenstown → Sídney', type: 'travel', typeLabel: 'Salida de Nueva Zelanda',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-45.03115,168.65901&destination=-45.01930,168.74344&travelmode=driving',
    activities: [
      {
        name: 'Check-out y traslado al aeropuerto', travel: true,
        meetingTime: '~5:00 a.m.', meetingPlace: 'Sofitel Queenstown → Queenstown Airport (ZQN)', startEnd: 'Auto ~10 min',
        description: 'Salida de madrugada para alcanzar el vuelo de las 7:00 a.m. El itinerario oficial muestra el check-out del Sofitel a las 11:00 a.m., así que hay que avisarle al hotel que salímos de madrugada y coordinar la cuenta la noche anterior.',
      },
      {
        name: 'Vuelo QF124 — Queenstown → Sídney', travel: true,
        meetingTime: '7:00 a.m.', meetingPlace: 'Queenstown Airport (ZQN) → Sydney (SYD)', startEnd: 'Llega 8:20 a.m. · 3 h 20 min',
        description: 'Qantas QF124, clase Economy. Sale de Queenstown a las 7:00 a.m. y llega a Sídney a las 8:20 a.m. (hora local; son 3 h 20 min de vuelo por el cambio de huso). Asientos 16D (Rachelle) y 16E (Raymond), 30 kg de equipaje por persona. Localizador ADKP77.',
      },
    ],
    notes: 'Último día en Nueva Zelanda. Desde Sídney continúa el viaje a Australia.',
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
