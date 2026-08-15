const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-body text-sm font-semibold transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star disabled:cursor-not-allowed disabled:opacity-40';

const variants = {
  primary: 'bg-star text-void hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(245,246,250,0.15)]',
  secondary: 'border border-line bg-transparent text-star hover:-translate-y-0.5 hover:border-white/40',
  ghost: 'bg-transparent text-slate hover:text-star',
};

export default function Button({ variant = 'primary', className = '', children, ...props }) {
  return (
    <button type="button" className={[base, variants[variant], className].join(' ')} {...props}>
      {children}
    </button>
  );
}
