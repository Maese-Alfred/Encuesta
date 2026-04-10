interface ChipGroupProps {
  label: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

export function ChipGroup({ label, options, selected, onSelect }: ChipGroupProps) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-semibold text-on-surface">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onSelect(opt)}
            className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
              selected === opt
                ? 'bg-primary text-white shadow-md'
                : 'bg-surface-container-high text-on-surface-variant border border-outline-variant/60 hover:border-primary hover:bg-surface-container-highest'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
