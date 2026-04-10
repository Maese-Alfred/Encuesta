import { Heart } from 'lucide-react';
import { Card, CheckboxCard, ChipGroup, ScaleGroup } from '../ui';
import type { SurveyFormData } from '../../types/survey';
import { CONDICIONES_OPTIONS } from '../../constants/survey';

interface BienestarSectionProps {
  data: SurveyFormData;
  onChange: <K extends keyof SurveyFormData>(field: K, value: SurveyFormData[K]) => void;
}

export function BienestarSection({ data, onChange }: BienestarSectionProps) {
  return (
    <section id="bienestar">
      <Card>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-tertiary/10 text-tertiary rounded-2xl flex items-center justify-center">
            <Heart size={24} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">3. Bienestar y Salud</h2>
        </div>

        <div className="space-y-8">
          <ScaleGroup
            label="¿Cómo califica su nivel de estrés actual?"
            min={1}
            max={10}
            value={data.estres}
            onChange={(val) => onChange('estres', val)}
            minLabel="1 - Relajado"
            maxLabel="10 - Extremo"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CheckboxCard
              label="¿Realiza actividad física al menos 3 veces por semana?"
              checked={data.ejercicio}
              onChange={(val) => onChange('ejercicio', val)}
            />
            <CheckboxCard
              label="¿Es fumador/a?"
              checked={data.fumador}
              onChange={(val) => onChange('fumador', val)}
            />
            <CheckboxCard
              label="¿Consume bebidas alcohólicas con frecuencia?"
              checked={data.bebedor}
              onChange={(val) => onChange('bebedor', val)}
            />
            <CheckboxCard
              label="¿Padece alguna enfermedad crónica (hipertensión, diabetes, etc.) que requiera seguimiento?"
              checked={data.enfermedadCronica}
              onChange={(val) => onChange('enfermedadCronica', val)}
            />
          </div>

          <ChipGroup
            label="¿Considera que su puesto de trabajo cuenta con las condiciones físicas adecuadas?"
            options={CONDICIONES_OPTIONS}
            selected={data.condicionesFisicas}
            onSelect={(val) => onChange('condicionesFisicas', val)}
          />
        </div>
      </Card>
    </section>
  );
}
