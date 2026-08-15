export default function MomentumScreen() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-8 h-3 w-3 rounded-full bg-ember shadow-[0_0_18px_6px_rgba(232,176,75,0.5)]" />
      <div className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">Almost there</div>
      <h2 className="max-w-lg font-display text-4xl italic text-star sm:text-5xl">
        You're one step from your first real puzzle.
      </h2>
      <p className="mt-5 max-w-md font-body text-base leading-relaxed text-slate">
        Every fynman lesson ends with something you solve yourself — not a quiz, an actual puzzle. Let's warm up.
      </p>
    </div>
  )
}
