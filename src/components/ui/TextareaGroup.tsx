interface TextareaGroupProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

export function TextareaGroup({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
}: TextareaGroupProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-on-surface">{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 text-on-surface resize-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none"
      />
    </div>
  );
}
