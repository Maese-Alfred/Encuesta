import {
  collection,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { SurveyFormData } from '../types/survey';

const SURVEYS_COLLECTION = 'surveys';

const STRING_MAX = 200;
const SHORT_MAX = 60;
const TINY_MAX = 10;

/** Trims and caps a string field to prevent oversized payloads */
function sanitizeStr(value: unknown, max = STRING_MAX): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, max);
}

/** Returns a sanitized copy of the form data before writing to Firestore */
function sanitize(data: SurveyFormData): SurveyFormData {
  return {
    ...data,
    nombre: sanitizeStr(data.nombre, STRING_MAX),
    edad: sanitizeStr(data.edad, TINY_MAX),
    lugarResidencia: sanitizeStr(data.lugarResidencia, STRING_MAX),
    estadoCivil: sanitizeStr(data.estadoCivil, SHORT_MAX),
    estrato: sanitizeStr(data.estrato, TINY_MAX),
    dependientes: sanitizeStr(data.dependientes, TINY_MAX),
    tipoCasa: sanitizeStr(data.tipoCasa, SHORT_MAX),
    medioTransporte: sanitizeStr(data.medioTransporte, SHORT_MAX),
    nivelEducacion: sanitizeStr(data.nivelEducacion, SHORT_MAX),
    otroTransporte: sanitizeStr(data.otroTransporte, STRING_MAX),
    cargoActual: sanitizeStr(data.cargoActual, STRING_MAX),
    dependenciaArea: sanitizeStr(data.dependenciaArea, STRING_MAX),
    tipoContrato: sanitizeStr(data.tipoContrato, SHORT_MAX),
    antiguedad: sanitizeStr(data.antiguedad, SHORT_MAX),
    comentariosLaboral: sanitizeStr(data.comentariosLaboral, 1000),
    comentariosBienestar: sanitizeStr(data.comentariosBienestar, 1000),
    comentariosPsicosocial: sanitizeStr(data.comentariosPsicosocial, 1000),
    comentariosDigital: sanitizeStr(data.comentariosDigital, 1000),
    comentariosClima: sanitizeStr(data.comentariosClima, 1000),
    comentariosMotivacion: sanitizeStr(data.comentariosMotivacion, 1000),
    comentariosBienestarLaboral: sanitizeStr(data.comentariosBienestarLaboral, 1000),
    comentariosLiderazgo: sanitizeStr(data.comentariosLiderazgo, 1000),
    comentariosProyeccion: sanitizeStr(data.comentariosProyeccion, 1000),
    comentariosCambio: sanitizeStr(data.comentariosCambio, 1000),
    fortalezas: sanitizeStr(data.fortalezas, 2000),
    aspectosMejorar: sanitizeStr(data.aspectosMejorar, 2000),
    sugerencias: sanitizeStr(data.sugerencias, 2000),
  };
}

export interface SurveyDocument extends SurveyFormData {
  createdAt: Timestamp;
  updatedAt: Timestamp;
  status: 'draft' | 'submitted';
}

/**
 * Saves a survey draft to Firestore.
 * Returns the auto-generated document ID.
 */
export async function saveDraft(data: SurveyFormData): Promise<string> {
  const clean = sanitize(data);
  const docRef = await addDoc(collection(db, SURVEYS_COLLECTION), {
    ...clean,
    status: 'draft',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

/**
 * Updates an existing survey draft identified by `id`.
 */
export async function updateDraft(id: string, data: Partial<SurveyFormData>): Promise<void> {
  const clean = sanitize(data as SurveyFormData);
  const docRef = doc(db, SURVEYS_COLLECTION, id);
  await updateDoc(docRef, {
    ...clean,
    updatedAt: serverTimestamp(),
  });
}

/**
 * Submits a survey as final.
 * If a draft `id` is provided, updates it; otherwise creates a new document.
 * Returns the document ID.
 */
export async function submitSurvey(data: SurveyFormData, draftId?: string): Promise<string> {
  const clean = sanitize(data);
  if (draftId) {
    const docRef = doc(db, SURVEYS_COLLECTION, draftId);
    await updateDoc(docRef, {
      ...clean,
      status: 'submitted',
      updatedAt: serverTimestamp(),
    });
    return draftId;
  }

  const docRef = await addDoc(collection(db, SURVEYS_COLLECTION), {
    ...clean,
    status: 'submitted',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}
