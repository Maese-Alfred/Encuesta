import { Users } from 'lucide-react';
import { Card, ChipGroup, ScaleGroup } from '../ui';
import type { SurveyFormData } from '../../types/survey';
import { SIEMPRE_OPTIONS } from '../../constants/survey';

interface LiderazgoSectionProps {
  data: SurveyFormData;
  onChange: <K extends keyof SurveyFormData>(field: K, value: SurveyFormData[K]) => void;
}

export function LiderazgoSection({ data, onChange }: LiderazgoSectionProps) {
  return (
    <section id="liderazgo">
      <Card>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
            <Users size={24} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">9. Gestión del Liderazgo</h2>
        </div>

        <div className="space-y-8">
          <ScaleGroup
            label="¿Cómo califica la calidad del liderazgo de su jefe directo?"
            min={1}
            max={10}
            value={data.calidadLiderazgo}
            onChange={(val) => onChange('calidadLiderazgo', val)}
            minLabel="Muy deficiente"
            maxLabel="Excelente"
          />
          <ChipGroup
            label="¿Su jefe le da orientación clara sobre sus tareas?"
            options={SIEMPRE_OPTIONS}
            selected={data.orientacionClara}
            onSelect={(val) => onChange('orientacionClara', val)}
          />
          <ChipGroup
            label="¿Su jefe promueve la participación del equipo?"
            options={SIEMPRE_OPTIONS}
            selected={data.promueveParticipacion}
            onSelect={(val) => onChange('promueveParticipacion', val)}
          />
          <ChipGroup
            label="¿Cómo gestiona los conflictos su jefe?"
            options={['Muy bien', 'Adecuadamente', 'Con dificultad', 'No los gestiona']}
            selected={data.gestionConflictos}
            onSelect={(val) => onChange('gestionConflictos', val)}
          />
        </div>
      </Card>
    </section>
  );
}
