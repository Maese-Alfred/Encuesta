import { User } from 'lucide-react';
import { Card, InputGroup, SelectGroup, ChipGroup, CheckboxCard, TextareaGroup } from '../ui';
import type { SurveyFormData } from '../../types/survey';
import {
  ESTADO_CIVIL_OPTIONS,
  ESTRATO_OPTIONS,
  EDUCACION_OPTIONS,
  TRANSPORTE_OPTIONS,
} from '../../constants/survey';

interface PerfilSectionProps {
  data: SurveyFormData;
  onChange: <K extends keyof SurveyFormData>(field: K, value: SurveyFormData[K]) => void;
}

export function PerfilSection({ data, onChange }: PerfilSectionProps) {
  return (
    <section id="perfil">
      <Card>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
            <User size={24} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">1. Perfil Sociodemográfico</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InputGroup
            label="Nombre y apellidos"
            placeholder="Escriba su nombre completo"
            value={data.nombre}
            onChange={(e) => onChange('nombre', e.target.value)}
          />
          <InputGroup
            label="Edad"
            type="number"
            value={data.edad}
            onChange={(e) => onChange('edad', e.target.value)}
          />
          <SelectGroup
            label="Estado civil"
            options={ESTADO_CIVIL_OPTIONS}
            value={data.estadoCivil}
            onChange={(e) => onChange('estadoCivil', e.target.value)}
          />
          <InputGroup
            label="Lugar de residencia"
            placeholder="Ciudad / Municipio"
            value={data.lugarResidencia}
            onChange={(e) => onChange('lugarResidencia', e.target.value)}
          />
          <ChipGroup
            label="Estrato socioeconómico"
            options={ESTRATO_OPTIONS}
            selected={data.estrato}
            onSelect={(val) => onChange('estrato', val)}
          />
          <InputGroup
            label="¿Cuántas personas dependen económicamente de usted?"
            type="number"
            value={data.personasCargo}
            onChange={(e) => onChange('personasCargo', e.target.value)}
          />
          <SelectGroup
            label="Último título obtenido"
            options={EDUCACION_OPTIONS}
            value={data.nivelEducacion}
            onChange={(e) => onChange('nivelEducacion', e.target.value)}
          />
          <SelectGroup
            label="Medio de transporte al trabajo"
            options={TRANSPORTE_OPTIONS}
            value={data.transporte}
            onChange={(e) => onChange('transporte', e.target.value)}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <CheckboxCard
            label="¿Tiene hijos o personas a cargo en situación de discapacidad?"
            checked={data.hijosDiscapacidad}
            onChange={(val) => onChange('hijosDiscapacidad', val)}
          />
          <CheckboxCard
            label="¿Está estudiando actualmente?"
            checked={data.estudiaActualmente}
            onChange={(val) => onChange('estudiaActualmente', val)}
          />
          <CheckboxCard
            label="¿Posee vivienda propia?"
            checked={data.viviendaPropia}
            onChange={(val) => onChange('viviendaPropia', val)}
          />
        </div>

        <div className="mt-8">
          <TextareaGroup
            label="¿En qué actividades invierte su tiempo fuera de la oficina? (deporte, arte, lectura, etc.)"
            placeholder="Describa sus actividades..."
            value={data.actividadesExtralaborales}
            onChange={(e) => onChange('actividadesExtralaborales', e.target.value)}
            rows={3}
          />
        </div>
      </Card>
    </section>
  );
}

