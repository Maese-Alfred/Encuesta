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
    personasCargo: sanitizeStr(data.personasCargo, TINY_MAX),
    transporte: sanitizeStr(data.transporte, SHORT_MAX),
    nivelEducacion: sanitizeStr(data.nivelEducacion, SHORT_MAX),
    cargo: sanitizeStr(data.cargo, STRING_MAX),
    area: sanitizeStr(data.area, STRING_MAX),
    tipoContrato: sanitizeStr(data.tipoContrato, SHORT_MAX),
    tiempoEnOrganizacion: sanitizeStr(data.tiempoEnOrganizacion, SHORT_MAX),
    tiempoEnCargo: sanitizeStr(data.tiempoEnCargo, SHORT_MAX),
    fortalezas: sanitizeStr(data.fortalezas, 2000),
    mejoras: sanitizeStr(data.mejoras, 2000),
    dificultadesDiarias: sanitizeStr(data.dificultadesDiarias, 2000),
    sugerenciasAmbiente: sanitizeStr(data.sugerenciasAmbiente, 2000),
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
