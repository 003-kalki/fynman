export default function Card({ glyph, title, subtitle, selected, onClick, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'flex w-full flex-col items-center gap-2 rounded-2xl border p-5 text-center transition-all duration-150',
        selected
          ? 'border-accent bg-accent/10 shadow-[0_0_0_1px_rgba(108,140,255,0.4),0_0_20px_rgba(108,140,255,0.25)]'
          : 'border-line bg-white/[0.02] hover:border-white/30',
        className,
      ].join(' ')}
    >
      {glyph && <span className="font-display text-3xl italic text-star/85">{glyph}</span>}
      <span className="font-body text-sm font-semibold text-star sm:text-base">{title}</span>
      {subtitle && <span className="font-body text-xs leading-relaxed text-slate">{subtitle}</span>}
    </button>
  );
}
