import { Save, User, Briefcase, Heart, Brain, Smartphone, Cloud, Users, TrendingUp, FileText, Star, ShieldCheck, RefreshCw } from 'lucide-react';
import type { Section, SectionId } from '../../types/survey';

const SECTION_ICONS: Record<SectionId, React.ReactNode> = {
  perfil: <User size={20} />,
  laboral: <Briefcase size={20} />,
  bienestar: <Heart size={20} />,
  psicosocial: <Brain size={20} />,
  digital: <Smartphone size={20} />,
  clima: <Cloud size={20} />,
  motivacion: <Star size={20} />,
  bienestarLaboral: <ShieldCheck size={20} />,
  liderazgo: <Users size={20} />,
  proyeccion: <TrendingUp size={20} />,
  cambio: <RefreshCw size={20} />,
  abiertas: <FileText size={20} />,
};

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

function SidebarLink({ icon, label, active, onClick }: SidebarLinkProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-4 py-3 transition-all duration-200 rounded-r-full text-left ${
        active
          ? 'bg-primary/10 text-primary font-bold border-l-4 border-primary'
          : 'text-secondary hover:bg-surface-container-high'
      }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </button>
  );
}

interface SidebarProps {
  sections: Section[];
  activeSection: SectionId;
  isOpen: boolean;
  onSectionChange: (id: SectionId) => void;
  onSave: () => void;
}

export function Sidebar({
  sections,
  activeSection,
  isOpen,
  onSectionChange,
  onSave,
}: SidebarProps) {
  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-surface-container-low border-r border-outline-variant/30 p-6 flex flex-col transition-transform duration-300
        lg:sticky lg:top-16 lg:inset-auto lg:h-[calc(100vh-4rem)] lg:overflow-y-auto lg:shrink-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}
    >
      <nav className="flex-1 space-y-1 overflow-y-auto -mx-2">
        {sections.map((section) => (
          <SidebarLink
            key={section.id}
            icon={SECTION_ICONS[section.id]}
            label={section.title}
            active={activeSection === section.id}
            onClick={() => onSectionChange(section.id)}
          />
        ))}
      </nav>

      <button
        onClick={onSave}
        className="mt-8 w-full py-4 bg-primary-container text-on-primary-container rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
      >
        <Save size={18} />
        Guardar Progreso
      </button>
    </aside>
  );
}
