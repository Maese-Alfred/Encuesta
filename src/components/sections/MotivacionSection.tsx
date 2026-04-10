import { Star } from 'lucide-react';
import { Card, ChipGroup } from '../ui';
import type { SurveyFormData } from '../../types/survey';
import { MOTIVACION_OPTIONS, SI_NO_OPTIONS } from '../../constants/survey';

interface MotivacionSectionProps {
  data: SurveyFormData;
  onChange: <K extends keyof SurveyFormData>(field: K, value: SurveyFormData[K]) => void;
}

export function MotivacionSection({ data, onChange }: MotivacionSectionProps) {
  return (
    <section id="motivacion">
      <Card>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
            <Star size={24} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">7. Motivación y Satisfacción Laboral</h2>
        </div>

        <div className="space-y-8">
          <ChipGroup
            label="¿Se siente satisfecho con su trabajo?"
            options={['Muy satisfecho', 'Satisfecho', 'Indiferente', 'Insatisfecho', 'Muy insatisfecho']}
            selected={data.satisfaccionTrabajo}
            onSelect={(val) => onChange('satisfaccionTrabajo', val)}
          />
          <ChipGroup
            label="¿Qué lo motiva a continuar en la empresa?"
            options={MOTIVACION_OPTIONS}
            selected={data.motivacionContinuar}
            onSelect={(val) => onChange('motivacionContinuar', val)}
          />
          <ChipGroup
            label="¿Considera que su salario es acorde a sus funciones?"
            options={['Sí, completamente', 'Parcialmente', 'No']}
            selected={data.salarioAcorde}
            onSelect={(val) => onChange('salarioAcorde', val)}
          />
          <ChipGroup
            label="¿Cómo evalúa los beneficios laborales?"
            options={['Excelentes', 'Buenos', 'Regulares', 'Deficientes']}
            selected={data.beneficiosLaborales}
            onSelect={(val) => onChange('beneficiosLaborales', val)}
          />
          <ChipGroup
            label="¿Recomendaría la empresa como lugar de trabajo?"
            options={SI_NO_OPTIONS}
            selected={data.recomendariaEmpresa}
            onSelect={(val) => onChange('recomendariaEmpresa', val)}
          />
        </div>
      </Card>
    </section>
  );
}
