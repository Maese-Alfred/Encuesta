import { useState, useCallback } from 'react';
import type { SurveyFormData, SurveySubmitStatus } from '../types/survey';
import { INITIAL_FORM_DATA } from '../constants/survey';
import { saveDraft, updateDraft, submitSurvey } from '../services/surveyService';

const DRAFT_ID_KEY = 'survey_draft_id';

export function useSurveyForm() {
  const [formData, setFormData] = useState<SurveyFormData>(INITIAL_FORM_DATA);
  const [draftId, setDraftId] = useState<string | undefined>(
    () => localStorage.getItem(DRAFT_ID_KEY) ?? undefined
  );
  const [submitStatus, setSubmitStatus] = useState<SurveySubmitStatus>('idle');

  const setField = useCallback(
    <K extends keyof SurveyFormData>(field: K, value: SurveyFormData[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleSaveDraft = useCallback(async () => {
    try {
      if (draftId) {
        await updateDraft(draftId, formData);
      } else {
        const id = await saveDraft(formData);
        setDraftId(id);
        localStorage.setItem(DRAFT_ID_KEY, id);
      }
    } catch (error) {
      console.error('Error saving draft:', error);
    }
  }, [formData, draftId]);

  const handleSubmit = useCallback(async () => {
    if (!formData.autorizacion) return;
    setSubmitStatus('loading');
    try {
      await submitSurvey(formData, draftId);
      setSubmitStatus('success');
      // Borrar el ID del dispositivo al enviar — la encuesta ya no es borrador
      localStorage.removeItem(DRAFT_ID_KEY);
      setDraftId(undefined);
    } catch (error) {
      console.error('Error submitting survey:', error);
      setSubmitStatus('error');
    }
  }, [formData, draftId]);

  return { formData, setField, submitStatus, handleSaveDraft, handleSubmit };
}
