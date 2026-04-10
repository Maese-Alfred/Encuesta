import { Cloud } from 'lucide-react';
import { Card, ChipGroup, ScaleGroup } from '../ui';
import type { SurveyFormData } from '../../types/survey';
import { SIEMPRE_OPTIONS } from '../../constants/survey';

interface ClimaSectionProps {
  data: SurveyFormData;
  onChange: <K extends keyof SurveyFormData>(field: K, value: SurveyFormData[K]) => void;
}

export function ClimaSection({ data, onChange }: ClimaSectionProps) {
  return (
    <section id="clima">
      <Card>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
            <Cloud size={24} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">6. Clima Organizacional</h2>
        </div>

        <div className="space-y-8">
          <ScaleGroup
            label="¿Cómo califica el ambiente laboral?"
            min={1}
            max={5}
            value={data.ambienteLaboral}
            onChange={(val) => onChange('ambienteLaboral', val)}
            minLabel="Muy malo"
            maxLabel="Excelente"
          />
          <ChipGroup
            label="¿Cómo es la relación con su jefe inmediato?"
            options={['Excelente', 'Buena', 'Regular', 'Deficiente']}
            selected={data.relacionJefe}
            onSelect={(val) => onChange('relacionJefe', val)}
          />
          <ChipGroup
            label="¿Cómo es la comunicación dentro del equipo?"
            options={['Excelente', 'Buena', 'Regular', 'Deficiente']}
            selected={data.comunicacionEquipo}
            onSelect={(val) => onChange('comunicacionEquipo', val)}
          />
          <ChipGroup
            label="¿Existe confianza entre compañeros?"
            options={['Sí, mucha', 'Sí', 'Poca', 'No']}
            selected={data.confianzaCompaneros}
            onSelect={(val) => onChange('confianzaCompaneros', val)}
          />
          <ChipGroup
            label="¿Se siente escuchado por la organización?"
            options={SIEMPRE_OPTIONS}
            selected={data.escuchadoOrganizacion}
            onSelect={(val) => onChange('escuchadoOrganizacion', val)}
          />
        </div>
      </Card>
    </section>
  );
}
