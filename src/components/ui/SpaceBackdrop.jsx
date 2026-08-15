const STAR_LAYERS = [
  'radial-gradient(1.5px 1.5px at 20% 30%, rgba(255,255,255,0.9), transparent)',
  'radial-gradient(1px 1px at 65% 12%, rgba(255,255,255,0.7), transparent)',
  'radial-gradient(1.5px 1.5px at 82% 55%, rgba(255,255,255,0.8), transparent)',
  'radial-gradient(1px 1px at 35% 70%, rgba(255,255,255,0.6), transparent)',
  'radial-gradient(1.5px 1.5px at 5% 60%, rgba(255,255,255,0.7), transparent)',
  'radial-gradient(1px 1px at 92% 80%, rgba(255,255,255,0.6), transparent)',
  'radial-gradient(1.5px 1.5px at 55% 85%, rgba(255,255,255,0.8), transparent)',
  'radial-gradient(1px 1px at 10% 92%, rgba(255,255,255,0.6), transparent)',
  'radial-gradient(1.5px 1.5px at 45% 45%, rgba(255,255,255,0.5), transparent)',
  'radial-gradient(1px 1px at 75% 35%, rgba(255,255,255,0.6), transparent)',
];

export default function SpaceBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-80"
      style={{
        backgroundImage: STAR_LAYERS.join(', '),
        backgroundRepeat: 'repeat',
        backgroundSize: '600px 600px',
      }}
    />
  );
}
