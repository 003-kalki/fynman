import { useDemoStore } from '../store/useDemoStore'

// Temporary placeholder — replaced by the real subject-map dashboard in Phase 2.
export default function Home() {
  const profile = useDemoStore((s) => s.profile)
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[radial-gradient(120%_90%_at_78%_15%,#10142a_0%,var(--color-deep)_45%,var(--color-void)_100%)] px-6 text-center font-body text-star">
      <div>
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">Home dashboard</div>
        <h1 className="font-display text-3xl italic text-star">Coming in Phase 2</h1>
        <p className="mx-auto mt-4 max-w-sm text-sm text-slate">
          Onboarding complete — grade {profile.grade || '—'}, subject {profile.subject || '—'}, level{' '}
          {profile.level || '—'}.
        </p>
      </div>
    </div>
  )
}
