import { RefreshCw } from 'lucide-react';
import { Card, ChipGroup } from '../ui';
import type { SurveyFormData } from '../../types/survey';
import { COMO_ENTERA_OPTIONS, SIEMPRE_OPTIONS } from '../../constants/survey';

interface CambioSectionProps {
  data: SurveyFormData;
  onChange: <K extends keyof SurveyFormData>(field: K, value: SurveyFormData[K]) => void;
}

export function CambioSection({ data, onChange }: CambioSectionProps) {
  return (
    <section id="cambio">
      <Card>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center">
            <RefreshCw size={24} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">11. Gestión del Cambio y Comunicación</h2>
        </div>

        <div className="space-y-8">
          <ChipGroup
            label="¿Cómo se entera de los cambios en la organización?"
            options={COMO_ENTERA_OPTIONS}
            selected={data.comoEnteraCambios}
            onSelect={(val) => onChange('comoEnteraCambios', val)}
          />
          <ChipGroup
            label="¿La comunicación organizacional es clara y oportuna?"
            options={SIEMPRE_OPTIONS}
            selected={data.comunicacionOrgClara}
            onSelect={(val) => onChange('comunicacionOrgClara', val)}
          />
          <ChipGroup
            label="¿Cómo percibe la gestión de los cambios internos?"
            options={['Muy bien gestionados', 'Bien gestionados', 'Regular', 'Mal gestionados']}
            selected={data.gestionCambiosInternos}
            onSelect={(val) => onChange('gestionCambiosInternos', val)}
          />
          <ChipGroup
            label="¿Ha sentido resistencia al cambio en su área?"
            options={['Sí, mucha', 'Sí, algo', 'Poca', 'No']}
            selected={data.resistenciaAlCambio}
            onSelect={(val) => onChange('resistenciaAlCambio', val)}
          />
        </div>
      </Card>
    </section>
  );
}
