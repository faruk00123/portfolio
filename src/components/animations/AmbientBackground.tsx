export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-canvas"
    >
      <div className="absolute -top-[22rem] left-1/2 h-[48rem] w-[48rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.16),transparent_66%)]" />
      <div className="absolute -left-48 top-[42%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(109,40,217,0.13),transparent_68%)]" />
      <div className="absolute -right-56 top-[68%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.09),transparent_68%)]" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-noise opacity-[0.035]" />
    </div>
  );
}
