import { Smartphone } from 'lucide-react';
import { Card, CheckboxCard, ScaleGroup } from '../ui';
import type { SurveyFormData } from '../../types/survey';

interface DigitalSectionProps {
  data: SurveyFormData;
  onChange: <K extends keyof SurveyFormData>(field: K, value: SurveyFormData[K]) => void;
}

export function DigitalSection({ data, onChange }: DigitalSectionProps) {
  return (
    <section id="digital">
      <Card>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
            <Smartphone size={24} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">5. Dimensión Digital</h2>
        </div>

        <div className="space-y-8">
          <CheckboxCard
            label="¿Cuenta con conexión a internet estable y equipo propio en casa?"
            checked={data.internetEstable}
            onChange={(val) => onChange('internetEstable', val)}
          />

          <ScaleGroup
            label="¿Qué tan cómodo se siente aprendiendo nuevas herramientas tecnológicas de forma autónoma?"
            min={1}
            max={5}
            value={data.comodidadTecnologia}
            onChange={(val) => onChange('comodidadTecnologia', val)}
            minLabel="Muy incómodo"
            maxLabel="Muy cómodo"
          />
        </div>
      </Card>
    </section>
  );
}
