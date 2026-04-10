import { Briefcase } from 'lucide-react';
import { Card, InputGroup, SelectGroup, ChipGroup, CheckboxCard, ScaleGroup, TextareaGroup } from '../ui';
import type { SurveyFormData } from '../../types/survey';
import {
  CONTRATO_OPTIONS,
  IDIOMA_OPTIONS,
  NIVEL_OPCIONES,
  SI_NO_OPTIONS,
} from '../../constants/survey';

interface LaboralSectionProps {
  data: SurveyFormData;
  onChange: <K extends keyof SurveyFormData>(field: K, value: SurveyFormData[K]) => void;
}

export function LaboralSection({ data, onChange }: LaboralSectionProps) {
  return (
    <section id="laboral">
      <Card>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
            <Briefcase size={24} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">2. Perfil Laboral y Competencias</h2>
        </div>

        <div className="space-y-10">
          {/* Datos básicos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InputGroup
              label="Cargo actual"
              value={data.cargo}
              onChange={(e) => onChange('cargo', e.target.value)}
            />
            <InputGroup
              label="Área o dependencia"
              value={data.area}
              onChange={(e) => onChange('area', e.target.value)}
            />
            <SelectGroup
              label="Tipo de contrato"
              options={CONTRATO_OPTIONS}
              value={data.tipoContrato}
              onChange={(e) => onChange('tipoContrato', e.target.value)}
            />
            <InputGroup
              label="Años de experiencia en su área"
              type="number"
              value={data.anosExperiencia}
              onChange={(e) => onChange('anosExperiencia', e.target.value)}
            />
            <InputGroup
              label="Tiempo en el cargo actual"
              placeholder="Ej: 2 años 3 meses"
              value={data.tiempoEnCargo}
              onChange={(e) => onChange('tiempoEnCargo', e.target.value)}
            />
            <InputGroup
              label="Tiempo en la organización"
              placeholder="Ej: 5 años"
              value={data.tiempoEnOrganizacion}
              onChange={(e) => onChange('tiempoEnOrganizacion', e.target.value)}
            />
            <SelectGroup
              label="Nivel de dominio de segunda lengua"
              options={IDIOMA_OPTIONS}
              value={data.nivelIdioma}
              onChange={(e) => onChange('nivelIdioma', e.target.value)}
            />
          </div>

          {/* Conocimientos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TextareaGroup
              label="¿En qué herramientas de software o metodologías se considera experto?"
              placeholder="Ej: Excel avanzado, Scrum, Power BI..."
              value={data.herramientas}
              onChange={(e) => onChange('herramientas', e.target.value)}
              rows={3}
            />
            <TextareaGroup
              label="¿En qué áreas ha recibido capacitación en el último año?"
              placeholder="Ej: Liderazgo, ofimática, normatividad..."
              value={data.areasCapacitacion}
              onChange={(e) => onChange('areasCapacitacion', e.target.value)}
              rows={3}
            />
            <TextareaGroup
              label="¿Qué tipo de formación adicional le gustaría recibir?"
              placeholder="Describa las áreas de interés..."
              value={data.formacionDeseada}
              onChange={(e) => onChange('formacionDeseada', e.target.value)}
              rows={3}
            />
          </div>

          {/* Evaluaciones */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ChipGroup
              label="¿Considera que su formación es adecuada para su cargo?"
              options={SI_NO_OPTIONS}
              selected={data.formacionAdecuada}
              onSelect={(val) => onChange('formacionAdecuada', val)}
            />
            <ChipGroup
              label="¿Cómo maneja el trabajo en equipo?"
              options={['Excelente', 'Bien', 'Regular', 'Con dificultad']}
              selected={data.manejoEquipo}
              onSelect={(val) => onChange('manejoEquipo', val)}
            />
            <ChipGroup
              label="¿Cómo responde ante situaciones de presión?"
              options={['Muy bien', 'Bien', 'Regular', 'Con dificultad']}
              selected={data.manejoPresion}
              onSelect={(val) => onChange('manejoPresion', val)}
            />
            <ChipGroup
              label="¿Qué tan desarrollado considera su liderazgo?"
              options={NIVEL_OPCIONES}
              selected={data.nivelLiderazgo}
              onSelect={(val) => onChange('nivelLiderazgo', val)}
            />
          </div>

          <ScaleGroup
            label="¿Cómo califica sus habilidades de comunicación? (1 = Deficiente, 5 = Excelente)"
            min={1}
            max={5}
            value={data.habilidadesComunicacion}
            onChange={(val) => onChange('habilidadesComunicacion', val)}
            minLabel="Deficiente"
            maxLabel="Excelente"
          />

          <CheckboxCard
            label="¿Cuenta con formación adicional (cursos, diplomados, certificaciones)?"
            checked={data.formacionAdicional}
            onChange={(val) => onChange('formacionAdicional', val)}
          />
        </div>
      </Card>
    </section>
  );
}

