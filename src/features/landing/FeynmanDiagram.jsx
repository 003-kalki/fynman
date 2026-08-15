import { useEffect, useRef, useState } from 'react';
import { subjects, subjectData, CARD_THRESHOLD } from './landing.data';

function distance(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

function clamp(x, y) {
  const cx = 250, cy = 250, maxR = 170;
  const dx = x - cx, dy = y - cy;
  const d = Math.hypot(dx, dy);
  if (d <= maxR) return { x, y };
  const ratio = maxR / d;
  return { x: cx + dx * ratio, y: cy + dy * ratio };
}

export default function FeynmanDiagram() {
  const svgRef = useRef(null);
  const [pos, setPos] = useState({ x: 250, y: 250 });
  const [dragging, setDragging] = useState(false);
  const rafRef = useRef(null);

  const closest = subjects.reduce(
    (best, s) => {
      const d = distance(pos.x, pos.y, s.x, s.y);
      return d < best.dist ? { subject: s, dist: d } : best;
    },
    { subject: subjects[0], dist: Infinity }
  );

  const cardVisible = closest.dist < CARD_THRESHOLD;
  const activeId = closest.subject.id;
  const cardInfo = subjectData[activeId];

  function svgPoint(clientX, clientY) {
    const rect = svgRef.current.getBoundingClientRect();
    const scaleX = 500 / rect.width, scaleY = 500 / rect.height;
    return { x: (clientX - rect.left) * scaleX, y: (clientY - rect.top) * scaleY };
  }

  function handlePointerDown() {
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    setDragging(true);
  }

  // live drag tracking
  useEffect(() => {
    if (!dragging) return;
    function onMove(e) {
      const point = e.touches ? e.touches[0] : e;
      const p = svgPoint(point.clientX, point.clientY);
      setPos(clamp(p.x, p.y));
    }
    function onUp() {
      setDragging(false);
    }
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, [dragging]);

  // snap back to center once released
  useEffect(() => {
    if (dragging) return;
    if (pos.x === 250 && pos.y === 250) return;
    const startX = pos.x, startY = pos.y;
    const startTime = performance.now();
    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 1 : 450;
    function step(now) {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setPos({ x: startX + (250 - startX) * eased, y: startY + (250 - startY) * eased });
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging]);

  return (
    <div className={'diagram-wrap' + (cardVisible ? ' dimmed' : '')}>
      <svg viewBox="0 0 500 500" ref={svgRef}>
        <g>
          {subjects.map((s, i) => {
            const next = subjects[(i + 1) % subjects.length];
            return <line key={s.id + '-ring'} className="link-line" x1={s.x} y1={s.y} x2={next.x} y2={next.y} />;
          })}
        </g>
        <g>
          {subjects.map((s) => (
            <line
              key={s.id + '-spoke'}
              className={'link-line' + (activeId === s.id ? ' active' : '')}
              x1={pos.x} y1={pos.y} x2={s.x} y2={s.y}
            />
          ))}
        </g>
        <g>
          {subjects.map((s) => (
            <g key={s.id}>
              <circle className={'node-dot' + (activeId === s.id ? ' active' : '')} cx={s.x} cy={s.y} r={7} />
              <text className={'node-label' + (activeId === s.id ? ' active' : '')} x={s.x} y={s.y - 16} textAnchor="middle">
                {s.label}
              </text>
            </g>
          ))}
        </g>
        <circle
          className="you-node"
          r={9}
          cx={pos.x}
          cy={pos.y}
          onMouseDown={handlePointerDown}
          onTouchStart={handlePointerDown}
        />
        <text className="you-label" x={pos.x} y={pos.y - 16} textAnchor="middle">YOU</text>
      </svg>

      <div className={'subject-card' + (cardVisible ? ' visible' : '')}>
        <div
          className="card-image"
          style={{ background: `radial-gradient(120% 120% at 50% 15%, rgba(${cardInfo.tint},0.35), rgba(11,14,26,0.9) 70%)` }}
        >
          <span className="card-image-note">image placeholder</span>
          <span className="card-glyph">{cardInfo.glyph}</span>
        </div>
        <div className="card-body">
          <div className="card-eyebrow">Suggested field</div>
          <div className="card-title">{cardInfo.title}</div>
          <div className="card-text">{cardInfo.text}</div>
        </div>
      </div>

      <div className="diagram-caption">drag the node near a field to explore it</div>
    </div>
  );
}
