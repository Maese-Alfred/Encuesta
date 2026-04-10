interface InputGroupProps {
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputGroup({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
}: InputGroupProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-on-surface">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-14 bg-surface-container-lowest border border-outline-variant rounded-xl px-4 text-on-surface focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none"
      />
    </div>
  );
}
