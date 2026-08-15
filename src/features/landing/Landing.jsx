import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';
import FeatureShowcase from './FeatureShowcase';
import './landing.css';

function TwinkleStars({ count = 18 }) {
  const [stars] = useState(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
    }))
  );
  return stars.map((s) => (
    <div
      key={s.id}
      className="twinkle"
      style={{
        width: s.size,
        height: s.size,
        left: s.left + 'vw',
        top: s.top + 'vh',
        animationDelay: s.delay + 's',
      }}
    />
  ));
}

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="fynman-landing">
      <div className="stars" />
      <TwinkleStars />
      <nav>
        <div className="logo-mini"><span className="logo-mark" />fynman</div>
        <a href="#" className="signin">Sign in</a>
      </nav>
      <Hero onStart={() => navigate('/onboarding')} />
      <FeatureShowcase />
    </div>
  );
}
