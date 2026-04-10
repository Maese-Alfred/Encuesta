interface CheckboxCardProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function CheckboxCard({ label, checked, onChange }: CheckboxCardProps) {
  return (
    <label className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/60 cursor-pointer hover:border-primary hover:bg-white transition-colors group">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20"
      />
      <span className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">
        {label}
      </span>
    </label>
  );
}
