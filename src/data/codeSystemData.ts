export type AppCategory = 'Todas' | 'Gestión & Control' | 'EdTech & Gaming' | 'Retail & Media';

export interface AppGalleryItem {
  url: string;
  label: string;
  caption: string;
  orientation: 'portrait' | 'landscape';
}

export interface AppProduct {
  id: string;
  name: string;
  category: Exclude<AppCategory, 'Todas'>;
  sectorLabel: string;
  tagline: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  galleryLayout?: 'portrait' | 'broadcast';
  galleryImages?: AppGalleryItem[];
  platformStatus: string;
  stack: string[];
  features: string[];
  architectureSummary: string;
}

export interface ServicePillar {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface TechItem {
  name: string;
  layer: string;
  usage: string;
}

export const OFFICIAL_EMAIL = 'fcodiazsilva@gmail.com';

export const APP_CATEGORIES: AppCategory[] = [
  'Todas',
  'Gestión & Control',
  'EdTech & Gaming',
  'Retail & Media',
];

export const PORTFOLIO_APPS: AppProduct[] = [
  {
    id: 'e-parking',
    name: 'e-Parking',
    category: 'Gestión & Control',
    sectorLabel: 'Movilidad & Control Inteligente',
    tagline: 'Gestión integral de estacionamientos, tarifas, QR y reportes PDF',
    description:
      'Aplicación móvil profesional para el control operativo y financiero de estacionamientos. Registra ingresos por patente, administra casilleros visuales en tiempo real, calcula tarifas fraccionadas con IVA configurable, genera reportes contables en PDF y opera con base de datos SQLite local.',
    imageUrl: '/assets/aistudio/Screenshot_20261118-195631.e-Parking_2afa4478.png',
    imageAlt: 'Pantalla principal de e-Parking mostrando ocupación de plazas, reloj en vivo y cobro rápido',
    galleryLayout: 'portrait',
    galleryImages: [
      {
        url: '/assets/aistudio/Screenshot_20261118-195631.e-Parking_2afa4478.png',
        label: 'Panel Principal (Modo Oscuro)',
        caption: 'Reloj en vivo, estado de horario, plazas disponibles, privacidad de recaudación y acceso rápido.',
        orientation: 'portrait',
      },
      {
        url: '/assets/aistudio/Screenshot_20261118-200043.e-Parking_b1ee676d.png',
        label: 'Operación & Salida Rápida QR',
        caption: 'Búsqueda de vehículos activos por patente o ticket, tolerancia gratuita y cobro con código QR.',
        orientation: 'portrait',
      },
      {
        url: '/assets/aistudio/Screenshot_20261118-200007.e-Parking_1f74be31.png',
        label: 'Nuevo Ingreso de Vehículo',
        caption: 'Registro ágil de patente por tipo de vehículo (Automóvil, Camioneta/SUV, Motocicleta) y casillero.',
        orientation: 'portrait',
      },
      {
        url: '/assets/aistudio/Screenshot_20261118-195704.e-Parking_4c8b3823.png',
        label: 'Mapa Visual de Casilleros',
        caption: 'Grilla interactiva de espacios libres y ocupados para asignar o cobrar directamente desde el plano.',
        orientation: 'portrait',
      },
      {
        url: '/assets/aistudio/Screenshot_20261118-200141.e-Parking_8ef87a5e.png',
        label: 'Dashboard de Métricas & Gráficos',
        caption: 'Indicadores de ingresos día/mes/año, gráfico de ocupación por hora y desglose por forma de pago.',
        orientation: 'portrait',
      },
      {
        url: '/assets/aistudio/Screenshot_20261118-200155.e-Parking_ba84d7d0.png',
        label: 'Generación de Reportes PDF',
        caption: 'Exportación contable de reportes diarios, mensuales y anuales con detalle de patentes, horas e IVA.',
        orientation: 'portrait',
      },
      {
        url: '/assets/aistudio/Screenshot_20261118-195735.e-Parking_8710fa5f.png',
        label: 'Configuración de Tarifas & IVA',
        caption: 'Valor por hora, minuto fraccionado, monto mínimo, tope máximo 24h, IVA y tarifas por vehículo.',
        orientation: 'portrait',
      },
      {
        url: '/assets/aistudio/Screenshot_20261118-195859.e-Parking_1ead6474.png',
        label: 'Personalización & Datos Fiscales',
        caption: 'Logotipo propio, nombre comercial, RUT/identificación fiscal y dirección para encabezado y tickets.',
        orientation: 'portrait',
      },
      {
        url: '/assets/aistudio/Screenshot_20261118-195833.e-Parking_bf365fa7.png',
        label: 'Operadores & Seguridad PIN',
        caption: 'Control de turnos, roles administrativos y bloqueo seguro mediante clave PIN por operador.',
        orientation: 'portrait',
      },
      {
        url: '/assets/aistudio/Screenshot_20261118-195800.e-Parking_7c6afd24.png',
        label: 'SQLite & Respaldo Local',
        caption: 'Persistencia offline-first con exportación de script SQLite (.sql) y respaldo/restauración JSON.',
        orientation: 'portrait',
      },
      {
        url: '/assets/aistudio/Screenshot_20261118-195931.e-Parking_a04a070a.png',
        label: 'Modo Claro Operativo',
        caption: 'Tema claro optimizado para casetas o turnos diurnos con alta visibilidad al aire libre.',
        orientation: 'portrait',
      },
    ],
    platformStatus: 'Próximamente en Google Play',
    stack: ['Android App', 'SQLite', 'Exportación PDF', 'Lectura QR', 'Tema Claro/Oscuro'],
    features: [
      'Ingreso rápido por patente (Auto, SUV, Moto) y mapa visual interactivo de casilleros',
      'Cobro ágil por ticket, QR o patente con tolerancia gratuita, tope 24h, descuentos y abonados',
      'Dashboard de ocupación por hora y generación de reportes contables PDF (Diario, Mensual, Anual)',
      'Operación offline-first con base de datos SQLite exportable (.sql / JSON), roles con PIN y marca blanca',
    ],
    architectureSummary:
      'Construida con almacenamiento local persistente compatible con SQLite 3, exportación nativa de respaldos y documentos PDF fiscales, soporte bilingüe y cambio instantáneo entre modo oscuro y modo claro.',
  },
  {
    id: 'learnworld-3d',
    name: 'LearnWorld 3D',
    category: 'EdTech & Gaming',
    sectorLabel: 'Educación Inmersiva & 3D',
    tagline: 'Aprendizaje activo mediante mundos tridimensionales',
    description:
      'Videojuego educativo interactivo en 3D diseñado para potenciar el aprendizaje inmersivo mediante mecánicas de gamificación, exploración de entornos científicos y retos dinámicos adaptativos.',
    imageUrl: '/src/assets/images/app_learnworld_preview_1795524364055.jpg',
    imageAlt: 'Entorno isométrico 3D educativo del videojuego LearnWorld 3D desarrollado por Code System',
    platformStatus: 'Próximamente en Google Play',
    stack: ['Unity 3D', 'C#', 'Android NDK', 'WebGL', 'Analytics SDK'],
    features: [
      'Mundos interactivos 3D optimizados para dispositivos móviles',
      'Motor de progresión por misiones, logros y desafíos lógicos',
      'Módulos temáticos en ciencias, geografía y pensamiento computacional',
      'Panel de seguimiento del progreso educativo para docentes y familias',
    ],
    architectureSummary:
      'Pipeline gráfico de bajo consumo de batería a 60 FPS estables en dispositivos Android de gama media y alta, con carga modular de escenarios.',
  },
  {
    id: 'vektor-dooh',
    name: 'Vektor DOOH',
    category: 'Retail & Media',
    sectorLabel: 'Digital Out-Of-Home & Broadcast Signage',
    tagline: 'Cartelería digital broadcast con layouts multipantalla, CMS y QR',
    description:
      'Plataforma profesional de cartelería digital (Vektor Studio) para pantallas horizontales y tótems verticales. Combina reproducción híbrida (video local, carpetas y YouTube Online) con 6 layouts broadcast, faldones promocionales, ticker en directo, clima/hora local y cupones QR dinámicos.',
    imageUrl: '/assets/aistudio/Screenshot_20261124-111614.Chrome_d3b75423.png',
    imageAlt: 'Interfaz broadcast de Vektor DOOH mostrando contenido multimedia, menú lateral, ticker en vivo y QR',
    galleryLayout: 'broadcast',
    galleryImages: [
      {
        url: '/assets/aistudio/Screenshot_20261124-111614.Chrome_d3b75423.png',
        label: 'Layout L-Bar & Menú Comercial (16:9)',
        caption: 'Composición simultánea de video principal, menú lateral de precios, faldón promocional, ticker en directo y cupón QR.',
        orientation: 'landscape',
      },
      {
        url: '/assets/aistudio/Screenshot_20261124-111635.Chrome_665b6295.png',
        label: 'Selector CMS & 6 Modos Broadcast',
        caption: 'Control en vivo de layouts (100% Full, Split 50/50, 2/3 + 1/3, Lower Third, L-Bar 75%, Squeezeback) y fuentes híbridas.',
        orientation: 'landscape',
      },
      {
        url: '/assets/aistudio/Screenshot_20261124-111657.Chrome_fe7c90f5.png',
        label: 'Plantilla Split + Ficha & Cupón QR',
        caption: 'Panel lateral con destacado de producto, widget meteorológico en vivo, reloj y código QR escaneable.',
        orientation: 'landscape',
      },
      {
        url: '/assets/aistudio/Screenshot_20261124-112418.Chrome_97246567.png',
        label: 'Formato Tótem Vertical (9:16)',
        caption: 'Adaptación responsiva para tótems publicitarios verticales con faldón promocional, QR y ticker inferior.',
        orientation: 'portrait',
      },
      {
        url: '/assets/aistudio/Screenshot_20261124-112353.Chrome_8a942953.png',
        label: 'Control CMS en Modo Vertical',
        caption: 'Gestión directa de reproducción híbrida (Local / YouTube / Carpeta), audio ducking y cambio de formato desde móvil o tótem.',
        orientation: 'portrait',
      },
    ],
    platformStatus: 'Próximamente en Google Play',
    stack: ['Vektor Studio', 'Android TV / Web', 'Modos Broadcast', 'YouTube & Local', 'QR & Ticker'],
    features: [
      '6 plantillas broadcast en vivo: 100% Full, Split 50/50, 2/3 + 1/3, Lower Third, L-Bar 75% y Squeezeback',
      'Reproducción híbrida desde archivos locales, carpetas sincronizadas o streams de YouTube con control de Audio/Ducking',
      'Faldones promocionales, ticker de noticias EN DIRECTO, reloj, clima por ciudad y cupones QR dinámicos',
      'Adaptación automática a pantallas panorámicas (16:9) y tótems verticales de retail y gastronomía',
    ],
    architectureSummary:
      'Motor de composición multicapa en tiempo real con conmutación instantánea de layouts sin cortes de reproducción, soporte híbrido online/offline y telemetría climática integrada.',
  },
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    index: '01',
    title: 'Desarrollo Móvil Nativo y Multiplataforma',
    subtitle: 'Android, iOS, Kotlin, React Native & Flutter',
    description:
      'Construimos aplicaciones móviles rápidas, seguras y preparadas para los estándares de publicación de Google Play Store y App Store, priorizando fluidez en gestos, operación offline y consumo eficiente de batería.',
    deliverables: [
      'Apps nativas Android e iOS orientadas a consumo masivo',
      'Arquitecturas multiplataforma con React Native y Flutter',
      'Integración de biometría, pagos, cámara y geolocalización',
    ],
  },
  {
    index: '02',
    title: 'Sistemas Empresariales y Cloud',
    subtitle: 'Plataformas SaaS, APIs, IoT & Control en Tiempo Real',
    description:
      'Diseñamos software corporativo a la medida para digitalizar operaciones críticas: desde portales administrativos multi-tenant hasta sistemas de telemetría conectada con hardware en terreno.',
    deliverables: [
      'APIs REST y WebSockets de alta disponibilidad',
      'Integración con sensores, barreras, impresoras térmicas y POS',
      'Infraestructura contenerizada con Docker y despliegue automatizado',
    ],
  },
  {
    index: '03',
    title: 'Experiencias Interactivas & 3D',
    subtitle: 'Gamificación, Simuladores & Entornos WebGL / Unity',
    description:
      'Transformamos procesos de capacitación, educación y exhibición comercial en experiencias interactivas tridimensionales que elevan la retención y el compromiso del usuario final.',
    deliverables: [
      'Videojuegos educativos y serious games multiplataforma',
      'Simuladores técnicos y recorridos espaciales en 3D',
      'Optimización de shaders y assets para hardware móvil',
    ],
  },
  {
    index: '04',
    title: 'Diseño UI/UX & Arquitectura Escalable',
    subtitle: 'Sistemas de Diseño, Auditoría & Escalamiento',
    description:
      'Acompañamos cada producto desde la definición de arquitectura hasta la interfaz final. Creamos sistemas de diseño modulares y bases de código mantenibles preparadas para crecer sin deuda técnica.',
    deliverables: [
      'Design systems accesibles en modo oscuro y claro',
      'Prototipado funcional y validación de flujos críticos',
      'Reingeniería de rendimiento, seguridad y observabilidad',
    ],
  },
];

export const TECH_STACK: TechItem[] = [
  { name: 'React', layer: 'Frontend Web', usage: 'Interfaces SaaS reactivas y modulares' },
  { name: 'Next.js', layer: 'Full-Stack Web', usage: 'SSR, rutas API y rendimiento SEO' },
  { name: 'TypeScript', layer: 'Tipado Estricto', usage: 'Contratos seguros de extremo a extremo' },
  { name: 'Node.js', layer: 'Backend & APIs', usage: 'Microservicios y eventos en tiempo real' },
  { name: 'Android SDK', layer: 'Plataforma Móvil', usage: 'Apps nativas y reproductores Android TV' },
  { name: 'Flutter / RN', layer: 'Multiplataforma', usage: 'Despliegue unificado iOS y Android' },
  { name: 'Unity / 3D', layer: 'Motor Gráfico', usage: 'Gamificación y simulaciones interactivas' },
  { name: 'PostgreSQL', layer: 'Datos & Transacciones', usage: 'Integridad relacional y analítica' },
  { name: 'Docker', layer: 'Contenedores', usage: 'Entornos reproducibles y CI/CD' },
  { name: 'Cloud Infra', layer: 'Infraestructura', usage: 'Auto-escalado, CDN y alta disponibilidad' },
];
