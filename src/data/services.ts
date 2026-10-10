export type Service = {
  slug: string;
  shortTitle: string;
  title: string;
  summary: string;
  problem: string;
  audience: string[];
  signals: string[];
  actions: string[];
  benefits: string[];
  deliverables: string[];
  modalities: string[];
  faqs: { question: string; answer: string }[];
  icon: 'workflow' | 'headset' | 'blocks' | 'files' | 'brain';
};

export const services: Service[] = [
  {
    slug: 'automatizacion-optimizacion-procesos', icon: 'workflow',
    shortTitle: 'Automatización de procesos',
    title: 'Automatización y optimización de procesos',
    summary: 'Simplificamos tareas repetitivas, reducimos fricción operativa y conectamos el trabajo de personas y sistemas.',
    problem: 'Procesos manuales, duplicidad de tareas, demoras y poca visibilidad dificultan que la operación crezca de forma ordenada.',
    audience: ['Empresas con operaciones administrativas repetitivas', 'Equipos que dependen de hojas de cálculo y correos', 'Áreas que necesitan estandarizar antes de escalar'],
    signals: ['Se registra la misma información más de una vez', 'Las aprobaciones dependen de seguimiento manual', 'Los errores se detectan tarde', 'Es difícil conocer el estado de cada caso'],
    actions: ['Mapeamos el proceso actual y sus puntos críticos', 'Diseñamos un flujo futuro más simple', 'Automatizamos tareas, reglas y notificaciones', 'Documentamos y acompañamos la adopción'],
    benefits: ['Mayor trazabilidad', 'Menos tareas manuales', 'Procesos consistentes', 'Mejor capacidad de respuesta'],
    deliverables: ['Mapa AS-IS y propuesta TO-BE', 'Backlog priorizado', 'Flujos automatizados', 'Documentación funcional y guía de uso'],
    modalities: ['Proyecto por alcance', 'Bolsa de horas evolutiva', 'Acompañamiento continuo'],
    faqs: [{ question: '¿Debemos cambiar todos nuestros sistemas?', answer: 'No necesariamente. Primero evaluamos cómo aprovechar y conectar las herramientas existentes.' }, { question: '¿Se puede empezar por un solo proceso?', answer: 'Sí. Recomendamos iniciar con un proceso acotado y de impacto visible para validar el enfoque.' }],
  },
  {
    slug: 'soporte-aplicativo-gestionado', icon: 'headset',
    shortTitle: 'Soporte aplicativo gestionado',
    title: 'Soporte aplicativo gestionado y soporte operativo',
    summary: 'Organizamos la atención, priorización y seguimiento de incidentes y requerimientos de aplicaciones de negocio.',
    problem: 'Incidentes recurrentes, solicitudes dispersas y falta de trazabilidad consumen tiempo del equipo y afectan la continuidad operativa.',
    audience: ['Empresas con aplicaciones críticas para su operación', 'Áreas usuarias sin un modelo claro de atención', 'Equipos TI que necesitan capacidad especializada'],
    signals: ['Los pedidos llegan por múltiples canales', 'No hay prioridades ni responsables claros', 'Se repiten incidentes sin análisis de causa', 'El negocio desconoce el avance de sus solicitudes'],
    actions: ['Definimos canales, categorías y niveles de atención', 'Gestionamos incidentes y requerimientos', 'Identificamos causas recurrentes y oportunidades de mejora', 'Generamos visibilidad operativa para la toma de decisiones'],
    benefits: ['Atención ordenada', 'Continuidad operativa', 'Comunicación clara', 'Conocimiento documentado'],
    deliverables: ['Modelo de atención', 'Matriz de priorización y escalamiento', 'Base de conocimiento', 'Reportes de gestión acordados'],
    modalities: ['Servicio mensual gestionado', 'Bolsa de horas', 'Cobertura por aplicación o proceso'],
    faqs: [{ question: '¿Reemplazan a nuestro equipo interno?', answer: 'Podemos complementar al equipo existente y asumir el alcance operativo que se acuerde.' }, { question: '¿Atienden cualquier aplicación?', answer: 'La viabilidad se confirma durante el diagnóstico según tecnología, documentación, accesos y criticidad.' }],
  },
  {
    slug: 'desarrollo-integracion-soluciones', icon: 'blocks',
    shortTitle: 'Desarrollo e integración',
    title: 'Desarrollo e integración de soluciones empresariales',
    summary: 'Construimos soluciones enfocadas y conectamos sistemas para que la información fluya de manera confiable.',
    problem: 'Herramientas aisladas, funcionalidades faltantes e intercambios manuales generan silos y dificultan una visión integral.',
    audience: ['Empresas que necesitan extender sus sistemas', 'Equipos con integraciones manuales o frágiles', 'Áreas con necesidades que no cubre el software estándar'],
    signals: ['Se copian datos entre plataformas', 'No existe una vista única de la información', 'Las soluciones actuales limitan el proceso', 'Los reportes requieren consolidación manual'],
    actions: ['Definimos requisitos y arquitectura adecuada', 'Diseñamos experiencias simples para el usuario', 'Desarrollamos aplicaciones e integraciones', 'Validamos, documentamos y transferimos conocimiento'],
    benefits: ['Información conectada', 'Menos reprocesos', 'Soluciones ajustadas al negocio', 'Base tecnológica mantenible'],
    deliverables: ['Diseño funcional y técnico', 'Software o integración acordada', 'Pruebas y evidencias', 'Documentación y transferencia'],
    modalities: ['Proyecto por alcance', 'Desarrollo iterativo', 'Equipo de evolución'],
    faqs: [{ question: '¿Trabajan con sistemas existentes?', answer: 'Sí. Evaluamos APIs, archivos, bases de datos y otras interfaces permitidas por cada plataforma.' }, { question: '¿Quién conserva el código?', answer: 'Las condiciones de propiedad y acceso se definen de forma transparente en la propuesta.' }],
  },
  {
    slug: 'automatizacion-documental', icon: 'files',
    shortTitle: 'Automatización documental',
    title: 'Automatización documental, seguimiento y gestión de información',
    summary: 'Ordenamos el ingreso, clasificación, validación y seguimiento de documentos e información operativa.',
    problem: 'Documentos dispersos y controles manuales provocan pérdida de tiempo, versiones inconsistentes y poca trazabilidad.',
    audience: ['Áreas con alto volumen de documentos', 'Operaciones sujetas a plazos y aprobaciones', 'Equipos que consolidan información desde múltiples fuentes'],
    signals: ['Se buscan documentos en correos o carpetas', 'Los vencimientos dependen de recordatorios personales', 'Hay versiones duplicadas', 'La captura y clasificación es manual'],
    actions: ['Definimos reglas de captura y organización', 'Implementamos flujos de revisión y aprobación', 'Configuramos alertas y trazabilidad', 'Integramos repositorios y sistemas cuando corresponde'],
    benefits: ['Información accesible', 'Seguimiento oportuno', 'Control de versiones', 'Menor carga administrativa'],
    deliverables: ['Taxonomía y reglas documentales', 'Flujo de gestión', 'Tablero o registro de seguimiento', 'Manual operativo'],
    modalities: ['Proyecto por proceso documental', 'Implementación por etapas', 'Mejora continua'],
    faqs: [{ question: '¿Incluye digitalización física?', answer: 'Podemos diseñar el proceso y evaluar aliados o herramientas; el alcance se confirma en la propuesta.' }, { question: '¿Puede conectarse con nuestro repositorio?', answer: 'Depende de las capacidades de integración y permisos del repositorio. Lo validamos técnicamente.' }],
  },
  {
    slug: 'inteligencia-artificial-empresarial', icon: 'brain',
    shortTitle: 'IA aplicada a procesos',
    title: 'Inteligencia artificial aplicada a procesos empresariales',
    summary: 'Identificamos usos responsables de IA para asistir decisiones, consultas y tareas dentro de procesos reales.',
    problem: 'La información crece, las consultas se repiten y el conocimiento está disperso, pero adoptar IA sin gobierno crea nuevos riesgos.',
    audience: ['Empresas que quieren explorar IA con un caso concreto', 'Equipos con conocimiento documental disperso', 'Operaciones que requieren asistencia y clasificación'],
    signals: ['Las mismas consultas consumen tiempo experto', 'Es difícil encontrar respuestas en documentación interna', 'Se desea probar IA sin exponer información sensible', 'Existen tareas de clasificación o resumen repetitivas'],
    actions: ['Priorizamos casos de uso viables', 'Evaluamos datos, riesgos y controles', 'Construimos pruebas de concepto o soluciones acotadas', 'Definimos supervisión humana y criterios de calidad'],
    benefits: ['Acceso más ágil al conocimiento', 'Asistencia contextual', 'Experimentación controlada', 'Mejora gradual basada en evidencia'],
    deliverables: ['Evaluación de oportunidad y riesgos', 'Diseño del caso de uso', 'Prototipo o solución según alcance', 'Guía de operación y controles'],
    modalities: ['Discovery y prueba de concepto', 'Proyecto de implementación', 'Evolución y evaluación continua'],
    faqs: [{ question: '¿La IA reemplaza decisiones humanas?', answer: 'Diseñamos el nivel de autonomía según el riesgo. En procesos sensibles priorizamos revisión y control humano.' }, { question: '¿Cómo protegen la información?', answer: 'Definimos accesos, datos permitidos, retención y proveedores antes de implementar. Cada propuesta explicita estos controles.' }],
  },
];

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);
