// Itinerario Auckland & Rotorua — datos de este viaje.
// Solo se incluyen los enlaces de reserva que llegaron en los correos de Viviana.
export const DAYS = [
  {
    month: 'DIC', num: '11', dow: 'Vie',
    port: 'Auckland', type: 'city', typeLabel: 'Waiheke Island',
    activities: [
      {
        name: 'Salida del hotel + ferry a Waiheke', travel: true,
        meetingTime: '9:00 a.m.', meetingPlace: 'Downtown Ferry Terminal', startEnd: 'Ferry ~45 min',
        description: 'El Downtown Ferry Terminal queda a ~2 minutos caminando del Hotel InterContinental. El ferry hasta Matiatia Ferry Terminal (Waiheke Island) dura unos 45 minutos. Recomendado salir del hotel alrededor de las 9:00 a.m.',
      },
      {
        name: '5-Hour Scenic Wine Tour with Private Guide & Up to 12 Tastings',
        operator: 'Viator · Tour privado',
        meetingTime: '10:40 a.m.', meetingPlace: 'Matiatia Ferry Terminal', startEnd: '10:40 a.m. – 3:40 p.m.',
        description: 'Tour privado de vinos por Waiheke Island con guía y hasta 12 degustaciones. No incluye almuerzo — pendiente confirmar con Viviana si se puede coordinar almuerzo en uno de los viñedos.',
        link: 'https://www.viator.com/tours/Waiheke-Island/4-hour-SCENIC-WINE-Tour-with-a-Private-Guide-and-12-tastings/d32653-62882P4?pid=P00001955&uid=U00767249&mcid=58086&currency=USD',
      },
      {
        name: 'Regreso a Auckland en ferry', travel: true,
        meetingTime: 'Tarde', meetingPlace: 'Matiatia Ferry Terminal', startEnd: '',
        description: 'Ferry de regreso desde Matiatia al Downtown Ferry Terminal. Noche en Hotel InterContinental, Auckland.',
      },
    ],
    notes: 'Noche en Hotel InterContinental, Auckland.',
  },
  {
    month: 'DIC', num: '12', dow: 'Sáb',
    port: 'Auckland → Rotorua', type: 'travel', typeLabel: 'Día de traslado',
    activities: [
      {
        name: 'Salida de Auckland hacia Waitomo', travel: true,
        meetingTime: '7:00 a.m.', meetingPlace: 'Hotel InterContinental', startEnd: 'Auto ~3 h',
        description: 'Trayecto en auto de aproximadamente 3 horas desde Auckland hasta las Waitomo Glowworm Caves.',
      },
      {
        name: 'Waitomo Glowworm Caves Guided Tour',
        operator: 'Viator',
        meetingTime: '10:10 a.m.', meetingPlace: '39 Waitomo Village Road, Waitomo Caves', startEnd: '',
        description: 'Tour guiado por las cuevas de luciérnagas de Waitomo. Horario elegido: 10:10 a.m. (confirmar disponibilidad; la ventana general es de 8:00 a.m. a 6:00 p.m.).',
        link: 'https://www.viator.com/tours/Waitomo/Waitomo-Glowworm-Caves-Guided-Tour/d27469-3930P3?pid=P00001955&uid=U00767249&mcid=58086&currency=USD',
      },
      {
        name: 'Almuerzo en la zona de Waitomo', travel: true,
        meetingTime: '~12:00 p.m.', meetingPlace: '', startEnd: '',
        description: 'Almuerzo en Waitomo antes de continuar hacia Blue Spring. Pendiente de recomendación de Viviana.',
      },
      {
        name: 'Blue Spring — Te Waihou Walkway',
        meetingTime: '~1:15 p.m.', meetingPlace: 'Estacionamiento de Leslie Road', startEnd: '',
        description: 'Parada en el manantial Blue Spring, entrando por el estacionamiento de Leslie Road, que es el acceso corto al manantial. El traslado desde Waitomo es de aproximadamente 1 h 15 min.',
      },
      {
        name: 'Traslado a Rotorua + check-in', travel: true,
        meetingTime: '~2:15 p.m.', meetingPlace: 'Blue Spring', startEnd: 'Auto ~1 h',
        description: 'Traslado desde Blue Spring a Rotorua (~1 hora). Llegada estimada al Black Swan Lakeside Boutique Hotel entre 4:30 y 5:30 p.m.',
      },
    ],
    notes: 'Noche en Black Swan Lakeside Boutique Hotel, Rotorua.',
  },
  {
    month: 'DIC', num: '13', dow: 'Dom',
    port: 'Rotorua', type: 'adventure', typeLabel: 'Aventura',
    activities: [
      {
        name: 'Jet Ski to Sacred Hot Pools on Lake Rotorua (Tandem)',
        operator: 'Reservado',
        meetingTime: '9:00 a.m.', meetingPlace: 'Lake Rotoiti – Okawa Bay Boat Ramp', startEnd: '',
        description: 'Jet ski en tándem hacia las Sacred Hot Pools. El punto de encuentro (Lake Rotoiti – Okawa Bay Boat Ramp) está a aproximadamente 25 minutos en carro del hotel.',
      },
      {
        name: 'Almuerzo', travel: true,
        meetingTime: '~11:00 a.m.', meetingPlace: '', startEnd: '',
        description: 'Almuerzo antes del hike de la tarde.',
      },
      {
        name: 'Hike — Whakarewarewa Forest (The Redwoods)',
        meetingTime: 'Después del almuerzo', meetingPlace: 'The Redwoods', startEnd: '~1 – 1.5 h',
        description: 'Caminata de aproximadamente 1 a 1.5 horas por el bosque de secuoyas. Queda justo al lado de Secret Spot Hot Tubs, así que se puede ir directo de la caminata a los hot tubs sin volver a manejar.',
      },
      {
        name: 'Secret Spot Forest Hot Tub Soak',
        operator: 'Viator',
        meetingTime: '~4:00 – 4:30 p.m.', meetingPlace: 'Secret Spot Hot Tubs Rotorua', startEnd: '',
        description: 'Baño en los hot tubs del bosque. Disponibilidad durante toda la tarde; a ~15 minutos en carro del hotel (y junto a los Redwoods).',
        link: 'https://www.viator.com/tours/Rotorua/Secret-Spot-Hot-Tub-soak/d395-210014P1?pid=P00001955&uid=U00767249&mcid=58086&currency=USD',
      },
    ],
    notes: 'Noche en Black Swan Lakeside Boutique Hotel, Rotorua.',
  },
  {
    month: 'DIC', num: '14', dow: 'Lun',
    port: 'Rotorua', type: 'adventure', typeLabel: 'Aventura & Spa',
    activities: [
      {
        name: 'Kaituna River White Water Rafting',
        operator: 'Viator',
        meetingTime: '9:00 / 10:00 / 10:30 a.m.', meetingPlace: '761 State Highway 33, Okere Falls', startEnd: '',
        description: 'Rafting en el río Kaituna. Horarios recomendados: 9:00, 10:00 o 10:30 a.m. El punto de encuentro está a aproximadamente 30 minutos en carro del hotel.',
        link: 'https://www.viator.com/tours/Rotorua/Kaituna-River-White-Water-Rafting/d395-17658P1?pid=P00001955&uid=U00767249&mcid=58086&currency=USD',
      },
      {
        name: 'Almuerzo + paseo por el centro de Rotorua', travel: true,
        meetingTime: '~11:00 a.m.', meetingPlace: 'Centro de Rotorua', startEnd: '',
        description: 'Tiempo libre para almorzar y pasear por el centro de Rotorua antes del spa.',
      },
      {
        name: 'Mt Kakaramea (Rainbow Mountain) Summit Track',
        extra: true,
        meetingTime: 'Tarde (opcional)', meetingPlace: 'Rainbow Mountain car park (SH5, Waiotapu)', startEnd: '~2 – 2.5 h ida y vuelta',
        description: 'Caminata opcional a la cumbre del Mt Kakaramea (Rainbow Mountain), con vistas panorámicas de los lagos cráter y la zona geotérmica. Aproximadamente 2 – 2.5 horas ida y vuelta, dificultad moderada. El inicio del sendero está sobre la SH5 en Waiotapu, a ~30 minutos en carro al sur de Rotorua. Sendero gratuito del DOC, no requiere reserva.',
      },
      {
        name: 'Polynesian Spa — Deluxe Romantic Package',
        operator: 'Polynesian Spa',
        meetingTime: 'Tarde', meetingPlace: 'Polynesian Spa', startEnd: 'Abierto hasta las 7:00 p.m.',
        description: 'Paquete sugerido: Deluxe Romantic Package. A ~10 minutos en carro del hotel. Otras opciones: Elevate & Renew, Family Massage & Facial, Indulgent Retreat, Pair & Pamper, Solo Restore.',
        link: 'https://www.polynesianspa.co.nz/vitality-day-escape-retreat-nz/',
      },
    ],
    notes: 'Noche en Black Swan Lakeside Boutique Hotel, Rotorua.',
  },
]
