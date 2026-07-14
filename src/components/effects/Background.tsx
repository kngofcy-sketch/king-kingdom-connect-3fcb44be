export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(238,184,76,0.18),transparent_28%),radial-gradient(circle_at_82%_4%,rgba(66,211,154,0.09),transparent_24%),linear-gradient(180deg,rgba(8,8,10,0.2),rgba(8,8,10,1))]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="cinematic-sweep absolute -left-1/4 top-0 h-[42rem] w-[70rem] rotate-[-12deg] bg-[linear-gradient(90deg,transparent,rgba(245,193,83,0.16),transparent)] blur-3xl" />
    </div>
  );
}
