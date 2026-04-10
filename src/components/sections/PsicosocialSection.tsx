import { Brain } from 'lucide-react';
import { Card, ChipGroup } from '../ui';
import type { SurveyFormData } from '../../types/survey';
import { VALORA_EMPLEO_OPTIONS, ESCALA_ACUERDO_OPTIONS, SIEMPRE_OPTIONS } from '../../constants/survey';

interface PsicosocialSectionProps {
  data: SurveyFormData;
  onChange: <K extends keyof SurveyFormData>(field: K, value: SurveyFormData[K]) => void;
}

export function PsicosocialSection({ data, onChange }: PsicosocialSectionProps) {
  return (
    <section id="psicosocial">
      <Card>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
            <Brain size={24} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">4. Dimensión Psicosocial y Motivacional</h2>
        </div>

        <div className="space-y-8">
          <ChipGroup
            label="¿Qué es lo que más valora de su empleo?"
            options={VALORA_EMPLEO_OPTIONS}
            selected={data.valoraEmpleo}
            onSelect={(val) => onChange('valoraEmpleo', val)}
          />
          <ChipGroup
            label="¿Se siente alineado con la misión y valores de la organización?"
            options={ESCALA_ACUERDO_OPTIONS}
            selected={data.alineacionMision}
            onSelect={(val) => onChange('alineacionMision', val)}
          />
          <ChipGroup
            label="¿Cómo califica la comunicación con su jefe inmediato?"
            options={['Excelente', 'Buena', 'Regular', 'Deficiente']}
            selected={data.comunicacionJefeP}
            onSelect={(val) => onChange('comunicacionJefeP', val)}
          />
          <ChipGroup
            label="¿Siente que sus logros son valorados de manera justa y oportuna?"
            options={SIEMPRE_OPTIONS}
            selected={data.logrosValorados}
            onSelect={(val) => onChange('logrosValorados', val)}
          />
        </div>
      </Card>
    </section>
  );
}
