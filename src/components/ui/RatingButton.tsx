interface RatingButtonProps {
  value: number;
  selected: boolean;
  onClick: (value: number) => void;
}

export function RatingButton({ value, selected, onClick }: RatingButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      className={`h-12 rounded-xl font-bold transition-all duration-200 ${
        selected
          ? 'bg-primary text-white shadow-md scale-110'
          : 'bg-surface-container-highest text-on-surface-variant border border-outline-variant/60 hover:border-primary hover:bg-surface-container-high'
      }`}
    >
      {value}
    </button>
  );
}
