import { Rocket } from 'lucide-react';
import { Card, ChipGroup } from '../ui';
import type { SurveyFormData } from '../../types/survey';
import { SI_NO_OPTIONS } from '../../constants/survey';

interface ProyeccionSectionProps {
  data: SurveyFormData;
  onChange: <K extends keyof SurveyFormData>(field: K, value: SurveyFormData[K]) => void;
}

export function ProyeccionSection({ data, onChange }: ProyeccionSectionProps) {
  return (
    <section id="proyeccion">
      <Card>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
            <Rocket size={24} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">10. Proyección y Desarrollo Profesional</h2>
        </div>

        <div className="space-y-8">
          <ChipGroup
            label="¿Percibe oportunidades de crecimiento en la organización?"
            options={SI_NO_OPTIONS}
            selected={data.oportunidadesCrecimiento}
            onSelect={(val) => onChange('oportunidadesCrecimiento', val)}
          />
          <ChipGroup
            label="¿Le gustaría ascender o asumir más responsabilidades?"
            options={SI_NO_OPTIONS}
            selected={data.deseoAscenso}
            onSelect={(val) => onChange('deseoAscenso', val)}
          />
          <ChipGroup
            label="¿La organización apoya su desarrollo profesional?"
            options={SI_NO_OPTIONS}
            selected={data.apoyoDesarrollo}
            onSelect={(val) => onChange('apoyoDesarrollo', val)}
          />

          <div className="space-y-3">
            <label className="block font-bold text-on-surface">
              ¿Cómo se visualiza en la institución en los próximos 5 años?
            </label>
            <textarea
              value={data.proyeccion}
              onChange={(e) => onChange('proyeccion', e.target.value)}
              className="w-full h-36 bg-surface-container-lowest border-none rounded-2xl p-5 resize-none focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface"
              placeholder="Escriba sus aspiraciones..."
            />
          </div>
        </div>
      </Card>
    </section>
  );
}
