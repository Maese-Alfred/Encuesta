interface SelectGroupProps {
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function SelectGroup({ label, options, value, onChange }: SelectGroupProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-on-surface">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="w-full h-14 bg-surface-container-lowest border border-outline-variant rounded-xl px-4 text-on-surface focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none appearance-none cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
