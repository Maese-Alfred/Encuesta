interface ScaleGroupProps {
  label: string;
  min?: number;
  max?: number;
  value: number;
  onChange: (value: number) => void;
  minLabel?: string;
  maxLabel?: string;
}

export function ScaleGroup({
  label,
  min = 1,
  max = 5,
  value,
  onChange,
  minLabel,
  maxLabel,
}: ScaleGroupProps) {
  const steps = Array.from({ length: max - min + 1 }, (_, i) => i + min);
  return (
    <div className="space-y-3">
      <label className="block text-sm font-semibold text-on-surface">{label}</label>
      {(minLabel || maxLabel) && (
        <div className="flex justify-between px-1">
          <span className="text-[10px] font-black text-outline uppercase tracking-widest">{minLabel}</span>
          <span className="text-[10px] font-black text-outline uppercase tracking-widest">{maxLabel}</span>
        </div>
      )}
      <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-1">
        {steps.map((num) => (
          <button
            key={num}
            type="button"
            onClick={() => onChange(num)}
            className={`flex-1 min-w-[2rem] h-10 rounded-xl font-bold text-sm transition-all duration-200 ${
              value === num
                ? 'bg-primary text-white shadow-md scale-105'
                : 'bg-surface-container-highest text-on-surface-variant border border-outline-variant/60 hover:border-primary hover:bg-surface-container-high'
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
