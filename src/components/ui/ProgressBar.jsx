export default function ProgressBar({ stages, currentStep }) {
  let offset = 0;
  return (
    <div className="mx-auto flex w-full max-w-md gap-2">
      {stages.map((size, i) => {
        const start = offset;
        offset += size;
        const end = offset;
        let fill = 0;
        if (currentStep >= end) fill = 100;
        else if (currentStep >= start) fill = ((currentStep - start + 1) / size) * 100;
        return (
          <div key={i} className="h-1 flex-1 overflow-hidden rounded-full bg-line-dim">
            <div
              className="h-full rounded-full bg-accent shadow-[0_0_8px_rgba(108,140,255,0.6)] transition-all duration-500 ease-out"
              style={{ width: `${fill}%` }}
            />
          </div>
        );
      })}
    </div>
  );
}
