import { Menu } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/30 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
          E
        </div>
        <span className="text-xl font-bold text-primary tracking-tight">Encuesta Institucional</span>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 rounded-full hover:bg-surface-container-high transition-colors text-secondary"
          aria-label="Abrir menú"
        >
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
