import { ShieldCheck } from 'lucide-react';
import { Card, CheckboxCard, ChipGroup, ScaleGroup } from '../ui';
import type { SurveyFormData } from '../../types/survey';

interface BienestarLaboralSectionProps {
  data: SurveyFormData;
  onChange: <K extends keyof SurveyFormData>(field: K, value: SurveyFormData[K]) => void;
}

export function BienestarLaboralSection({ data, onChange }: BienestarLaboralSectionProps) {
  return (
    <section id="bienestarLaboral">
      <Card>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-tertiary/10 text-tertiary rounded-2xl flex items-center justify-center">
            <ShieldCheck size={24} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">8. Bienestar y Condiciones Laborales</h2>
        </div>

        <div className="space-y-8">
          <ScaleGroup
            label="¿Cómo califica sus condiciones de trabajo (espacio, seguridad, herramientas)?"
            min={1}
            max={5}
            value={data.condicionesTrabajo}
            onChange={(val) => onChange('condicionesTrabajo', val)}
            minLabel="Muy deficientes"
            maxLabel="Excelentes"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CheckboxCard
              label="¿Ha participado en programas de bienestar laboral?"
              checked={data.participaBienestar}
              onChange={(val) => onChange('participaBienestar', val)}
            />
            <CheckboxCard
              label="¿Ha experimentado estrés laboral significativo?"
              checked={data.estresLaboral}
              onChange={(val) => onChange('estresLaboral', val)}
            />
          </div>

          <ChipGroup
            label="¿Siente equilibrio entre vida personal y laboral?"
            options={['Muy equilibrado', 'Equilibrado', 'Poco equilibrado', 'Sin equilibrio']}
            selected={data.equilibrioVida}
            onSelect={(val) => onChange('equilibrioVida', val)}
          />
        </div>
      </Card>
    </section>
  );
}
