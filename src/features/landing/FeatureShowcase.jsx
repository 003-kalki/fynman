import { features } from './featureShowcase.data';
import './featureShowcase.css';

function OrbitIcon() {
  return (
    <svg viewBox="0 0 300 300" className="fs-svg">
      <ellipse className="fs-ring" cx="150" cy="150" rx="118" ry="46" />
      <ellipse className="fs-ring" cx="150" cy="150" rx="46" ry="118" transform="rotate(28 150 150)" />
      <circle className="fs-node fs-node-accent" cx="150" cy="150" r="10" />
      <circle className="fs-node" cx="268" cy="150" r="5" />
      <circle className="fs-node" cx="150" cy="32" r="5" />
      <circle className="fs-node fs-node-ember" cx="205" cy="243" r="6" />
    </svg>
  );
}

function GridIcon() {
  const pts = [0, 1, 2].flatMap((r) => [0, 1, 2].map((c) => ({ x: 62 + c * 88, y: 62 + r * 88 })));
  const path = [pts[0], pts[1], pts[4], pts[5], pts[8]];
  return (
    <svg viewBox="0 0 300 300" className="fs-svg">
      {pts.map((p, i) => (
        <circle key={i} className="fs-node fs-node-dim" cx={p.x} cy={p.y} r="4" />
      ))}
      {path.slice(0, -1).map((p, i) => (
        <line key={i} className="fs-link fs-link-active" x1={p.x} y1={p.y} x2={path[i + 1].x} y2={path[i + 1].y} />
      ))}
      <circle className="fs-node fs-node-accent" cx={path[0].x} cy={path[0].y} r="6" />
      <circle className="fs-node fs-node-ember" cx={path[path.length - 1].x} cy={path[path.length - 1].y} r="7" />
    </svg>
  );
}

function ClimbIcon() {
  const steps = [0, 1, 2, 3, 4].map((i) => ({ x: 46 + i * 52, y: 240 - i * 44 }));
  return (
    <svg viewBox="0 0 300 300" className="fs-svg">
      {steps.slice(0, -1).map((p, i) => (
        <line key={i} className="fs-link" x1={p.x} y1={p.y} x2={steps[i + 1].x} y2={steps[i + 1].y} />
      ))}
      {steps.map((p, i) => (
        <circle key={i} className="fs-node fs-node-dim" cx={p.x} cy={p.y} r="4" />
      ))}
      <path className="fs-arc" d="M 150 172 Q 172 130 198 128" />
      <circle className="fs-node fs-node-ember" cx="150" cy="172" r="9" />
    </svg>
  );
}

function RadarIcon() {
  const cx = 150, cy = 150, R = 100;
  const verts = Array.from({ length: 6 }, (_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI) / 3;
    return { x: cx + R * Math.cos(a), y: cy + R * Math.sin(a) };
  });
  const profile = [0.9, 0.5, 0.75, 0.4, 0.95, 0.6];
  const inner = verts.map((v, i) => ({
    x: cx + (v.x - cx) * profile[i],
    y: cy + (v.y - cy) * profile[i],
  }));
  const ring = verts.map((v) => `${v.x},${v.y}`).join(' ');
  const shape = inner.map((v) => `${v.x},${v.y}`).join(' ');
  return (
    <svg viewBox="0 0 300 300" className="fs-svg">
      <polygon className="fs-ring" points={ring} />
      <polygon className="fs-profile" points={shape} />
      {verts.map((v, i) => (
        <circle key={i} className={'fs-node' + (i === 0 ? ' fs-node-ember' : ' fs-node-dim')} cx={v.x} cy={v.y} r={i === 0 ? 6 : 4} />
      ))}
    </svg>
  );
}

const ICONS = { orbit: OrbitIcon, grid: GridIcon, climb: ClimbIcon, radar: RadarIcon };

export default function FeatureShowcase() {
  return (
    <section className="feature-showcase">
      {features.map((f, i) => {
        const Icon = ICONS[f.icon];
        return (
          <div className={'fs-row' + (i % 2 === 1 ? ' fs-row-reverse' : '')} key={f.id}>
            <div className="fs-visual">
              <Icon />
            </div>
            <div className="fs-content">
              <div className="fs-eyebrow">{f.eyebrow}</div>
              <h3 className="fs-title">{f.title}</h3>
              <p className="fs-text">{f.text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
