import type { SurveyFormData, Section } from '../types/survey';

export const INITIAL_FORM_DATA: SurveyFormData = {
  // 1. Perfil
  nombre: '',
  edad: '',
  estadoCivil: 'Soltero/a',
  lugarResidencia: '',
  estrato: '3',
  personasCargo: '0',
  hijosDiscapacidad: false,
  nivelEducacion: 'Pregrado',
  estudiaActualmente: false,
  viviendaPropia: false,
  transporte: 'Vehículo Propio',
  actividadesExtralaborales: '',
  // 2. Laboral
  cargo: '',
  area: '',
  tipoContrato: 'Indefinido',
  anosExperiencia: '',
  tiempoEnCargo: '',
  tiempoEnOrganizacion: '',
  herramientas: '',
  nivelIdioma: 'Básico',
  formacionAdicional: false,
  areasCapacitacion: '',
  formacionAdecuada: 'Sí',
  formacionDeseada: '',
  habilidadesComunicacion: 3,
  manejoEquipo: 'Bien',
  manejoPresion: 'Bien',
  nivelLiderazgo: 'Medio',
  // 3. Bienestar y Salud
  ejercicio: false,
  fumador: false,
  bebedor: false,
  enfermedadCronica: false,
  estres: 5,
  condicionesFisicas: 'Adecuadas',
  // 4. Psicosocial
  valoraEmpleo: 'Estabilidad',
  alineacionMision: 'Parcialmente',
  comunicacionJefeP: 'Buena',
  logrosValorados: 'A veces',
  // 5. Digital
  internetEstable: false,
  comodidadTecnologia: 3,
  // 6. Clima
  ambienteLaboral: 3,
  relacionJefe: 'Buena',
  comunicacionEquipo: 'Buena',
  confianzaCompaneros: 'Sí',
  escuchadoOrganizacion: 'A veces',
  // 7. Motivación y Satisfacción
  satisfaccionTrabajo: 'Satisfecho',
  motivacionContinuar: 'Estabilidad',
  salarioAcorde: 'Parcialmente',
  beneficiosLaborales: 'Buenos',
  recomendariaEmpresa: 'Sí',
  // 8. Bienestar Laboral
  condicionesTrabajo: 3,
  participaBienestar: false,
  equilibrioVida: 'Equilibrado',
  estresLaboral: false,
  // 9. Liderazgo
  calidadLiderazgo: 7,
  orientacionClara: 'Siempre',
  promueveParticipacion: 'Siempre',
  gestionConflictos: 'Adecuadamente',
  // 10. Proyección
  oportunidadesCrecimiento: 'Sí',
  deseoAscenso: 'Sí',
  apoyoDesarrollo: 'Sí',
  proyeccion: '',
  // 11. Cambio
  comoEnteraCambios: 'Correo electrónico',
  comunicacionOrgClara: 'Siempre',
  gestionCambiosInternos: 'Bien',
  resistenciaAlCambio: 'No',
  // 12. Abiertas
  mejoras: '',
  fortalezas: '',
  dificultadesDiarias: '',
  sugerenciasAmbiente: '',
  // Consentimiento
  autorizacion: false,
};

export const SECTIONS: Section[] = [
  { id: 'perfil',         title: '1. Perfil',           progress: 0 },
  { id: 'laboral',        title: '2. Laboral',           progress: 0 },
  { id: 'bienestar',      title: '3. Bienestar y Salud', progress: 0 },
  { id: 'psicosocial',    title: '4. Psicosocial',       progress: 0 },
  { id: 'digital',        title: '5. Digital',           progress: 0 },
  { id: 'clima',          title: '6. Clima',             progress: 0 },
  { id: 'motivacion',     title: '7. Motivación',        progress: 0 },
  { id: 'bienestarLaboral', title: '8. Bienestar Lab.',  progress: 0 },
  { id: 'liderazgo',      title: '9. Liderazgo',         progress: 0 },
  { id: 'proyeccion',     title: '10. Proyección',       progress: 0 },
  { id: 'cambio',         title: '11. Cambio',           progress: 0 },
  { id: 'abiertas',       title: '12. Abiertas',         progress: 0 },
];

// ── Options ────────────────────────────────────────────────────────────────

export const ESTADO_CIVIL_OPTIONS = ['Soltero/a', 'Casado/a', 'Unión Libre', 'Divorciado/a', 'Viudo/a'];
export const ESTRATO_OPTIONS = ['1', '2', '3', '4', '5', '6'];
export const EDUCACION_OPTIONS = ['Bachillerato', 'Técnico', 'Tecnólogo', 'Pregrado', 'Especialización', 'Maestría', 'Doctorado'];
export const TRANSPORTE_OPTIONS = ['Vehículo Propio', 'Transporte Público', 'Bicicleta', 'Caminando', 'Moto'];
export const CONTRATO_OPTIONS = ['Indefinido', 'Fijo', 'Prestación de Servicios', 'Aprendizaje', 'Otro'];
export const IDIOMA_OPTIONS = ['Ninguno', 'Básico', 'Intermedio', 'Avanzado', 'Nativo'];
export const ESCALA_5_OPTIONS = ['1', '2', '3', '4', '5'];
export const SI_NO_OPTIONS = ['Sí', 'No'];
export const SIEMPRE_OPTIONS = ['Siempre', 'Casi siempre', 'A veces', 'Casi nunca', 'Nunca'];
export const ESCALA_ACUERDO_OPTIONS = ['Muy de acuerdo', 'De acuerdo', 'Parcialmente', 'En desacuerdo', 'Muy en desacuerdo'];

export const VALORA_EMPLEO_OPTIONS = ['Estabilidad', 'Salario', 'Flexibilidad', 'Aprendizaje', 'Ambiente'];
export const MOTIVACION_OPTIONS = ['Salario', 'Estabilidad', 'Beneficios', 'Crecimiento', 'Ambiente', 'Reconocimiento'];
export const NIVEL_OPCIONES = ['Bajo', 'Medio', 'Alto', 'Muy Alto'];
export const CONDICIONES_OPTIONS = ['Inadecuadas', 'Regulares', 'Adecuadas', 'Muy buenas', 'Excelentes'];
export const COMO_ENTERA_OPTIONS = ['Correo electrónico', 'Reuniones', 'Carteleras', 'Grupos de chat', 'Rumores'];
export const LIDERAZGO_RATINGS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
