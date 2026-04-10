interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`p-8 md:p-12 rounded-2xl bg-surface-container-low transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
