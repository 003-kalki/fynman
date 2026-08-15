import FeynmanDiagram from './FeynmanDiagram';

export default function Hero({ onStart }) {
  return (
    <section className="hero">
      <div className="left">
        <div className="eyebrow">STEM Career Discovery</div>
        <h1 className="logotype">fynman</h1>
        <p className="tagline">
          Learn STEM by playing with it. <b>Fynman</b> turns lessons into puzzles, puzzles into
          games, and games into a clear picture of the career that's actually yours.
        </p>
        <div className="cta-row">
          <button className="btn btn-primary" onClick={onStart}>Start exploring</button>
          <button className="btn btn-secondary">I'm a parent or school</button>
        </div>
      </div>

      <FeynmanDiagram />
    </section>
  );
}
