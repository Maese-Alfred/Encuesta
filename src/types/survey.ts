export interface SurveyFormData {
  // 1. Perfil Sociodemográfico
  nombre: string;
  edad: string;
  estadoCivil: string;
  lugarResidencia: string;
  estrato: string;
  personasCargo: string;
  hijosDiscapacidad: boolean;
  nivelEducacion: string;
  estudiaActualmente: boolean;
  viviendaPropia: boolean;
  transporte: string;
  actividadesExtralaborales: string;

  // 2. Perfil Laboral y Competencias
  cargo: string;
  area: string;
  tipoContrato: string;
  anosExperiencia: string;
  tiempoEnCargo: string;
  tiempoEnOrganizacion: string;
  herramientas: string;
  nivelIdioma: string;
  formacionAdicional: boolean;
  areasCapacitacion: string;
  formacionAdecuada: string;
  formacionDeseada: string;
  habilidadesComunicacion: number;
  manejoEquipo: string;
  manejoPresion: string;
  nivelLiderazgo: string;

  // 3. Bienestar y Salud
  ejercicio: boolean;
  fumador: boolean;
  bebedor: boolean;
  enfermedadCronica: boolean;
  estres: number;
  condicionesFisicas: string;

  // 4. Psicosocial y Motivacional
  valoraEmpleo: string;
  alineacionMision: string;
  comunicacionJefeP: string;
  logrosValorados: string;

  // 5. Digital
  internetEstable: boolean;
  comodidadTecnologia: number;

  // 6. Clima Organizacional
  ambienteLaboral: number;
  relacionJefe: string;
  comunicacionEquipo: string;
  confianzaCompaneros: string;
  escuchadoOrganizacion: string;

  // 7. Motivación y Satisfacción Laboral
  satisfaccionTrabajo: string;
  motivacionContinuar: string;
  salarioAcorde: string;
  beneficiosLaborales: string;
  recomendariaEmpresa: string;

  // 8. Bienestar y Condiciones Laborales
  condicionesTrabajo: number;
  participaBienestar: boolean;
  equilibrioVida: string;
  estresLaboral: boolean;

  // 9. Gestión del Liderazgo
  calidadLiderazgo: number;
  orientacionClara: string;
  promueveParticipacion: string;
  gestionConflictos: string;

  // 10. Proyección y Desarrollo
  oportunidadesCrecimiento: string;
  deseoAscenso: string;
  apoyoDesarrollo: string;
  proyeccion: string;

  // 11. Gestión del Cambio y Comunicación
  comoEnteraCambios: string;
  comunicacionOrgClara: string;
  gestionCambiosInternos: string;
  resistenciaAlCambio: string;

  // 12. Preguntas Abiertas
  mejoras: string;
  fortalezas: string;
  dificultadesDiarias: string;
  sugerenciasAmbiente: string;

  // Consentimiento
  autorizacion: boolean;
}

export interface Section {
  id: SectionId;
  title: string;
  progress: number;
}

export type SectionId =
  | 'perfil'
  | 'laboral'
  | 'bienestar'
  | 'psicosocial'
  | 'digital'
  | 'clima'
  | 'motivacion'
  | 'bienestarLaboral'
  | 'liderazgo'
  | 'proyeccion'
  | 'cambio'
  | 'abiertas';

export type SurveySubmitStatus = 'idle' | 'loading' | 'success' | 'error';
