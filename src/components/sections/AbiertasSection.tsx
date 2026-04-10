import { MessageSquare } from 'lucide-react';
import type { SurveyFormData } from '../../types/survey';

interface AbiertalSectionProps {
  data: SurveyFormData;
  onChange: <K extends keyof SurveyFormData>(field: K, value: SurveyFormData[K]) => void;
}

export function AbiertasSection({ data, onChange }: AbiertalSectionProps) {
  return (
    <section id="abiertas">
      <div className="p-10 md:p-14 rounded-3xl bg-tertiary/5 border border-tertiary/10">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-14 h-14 bg-tertiary/10 text-tertiary rounded-2xl flex items-center justify-center">
            <MessageSquare size={28} />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">12. Preguntas Abiertas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <label className="block text-lg font-bold text-on-surface">
              ¿Qué mejoras propondría en la organización?
            </label>
            <textarea
              value={data.mejoras}
              onChange={(e) => onChange('mejoras', e.target.value)}
              className="w-full h-48 bg-white border-none rounded-2xl p-6 shadow-sm focus:ring-2 focus:ring-tertiary/20 transition-all outline-none"
            />
          </div>
          <div className="space-y-4">
            <label className="block text-lg font-bold text-on-surface">
              ¿Cuáles cree que son nuestras fortalezas?
            </label>
            <textarea
              value={data.fortalezas}
              onChange={(e) => onChange('fortalezas', e.target.value)}
              className="w-full h-48 bg-white border-none rounded-2xl p-6 shadow-sm focus:ring-2 focus:ring-tertiary/20 transition-all outline-none"
            />
          </div>
          <div className="space-y-4">
            <label className="block text-lg font-bold text-on-surface">
              ¿Cuáles son sus principales dificultades diarias?
            </label>
            <textarea
              value={data.dificultadesDiarias}
              onChange={(e) => onChange('dificultadesDiarias', e.target.value)}
              className="w-full h-48 bg-white border-none rounded-2xl p-6 shadow-sm focus:ring-2 focus:ring-tertiary/20 transition-all outline-none"
            />
          </div>
          <div className="space-y-4">
            <label className="block text-lg font-bold text-on-surface">
              ¿Qué sugerencias tiene para mejorar el ambiente laboral?
            </label>
            <textarea
              value={data.sugerenciasAmbiente}
              onChange={(e) => onChange('sugerenciasAmbiente', e.target.value)}
              className="w-full h-48 bg-white border-none rounded-2xl p-6 shadow-sm focus:ring-2 focus:ring-tertiary/20 transition-all outline-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
