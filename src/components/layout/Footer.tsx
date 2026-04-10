const FOOTER_LINKS = ['Protección de Datos', 'Términos y Condiciones', 'Soporte Técnico'];

export function Footer() {
  return (
    <footer className="py-12 border-t border-outline-variant/20 flex flex-col items-center justify-center space-y-6">
      <div className="flex flex-wrap justify-center gap-8">
        {FOOTER_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="text-xs font-medium text-outline hover:text-primary transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
      <div className="text-center space-y-2">
        <p className="text-xs text-outline font-medium">
          © 2024 Institución. Todos los derechos reservados.
        </p>
        <div className="flex items-center justify-center gap-2 text-[10px] text-outline/60 font-bold uppercase tracking-widest">
          <span>Seguridad</span>
          <div className="w-1 h-1 bg-outline/30 rounded-full" />
          <span>Privacidad</span>
          <div className="w-1 h-1 bg-outline/30 rounded-full" />
          <span>Confidencialidad</span>
        </div>
      </div>
    </footer>
  );
}
