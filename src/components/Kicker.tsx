export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold tracking-[0.14em] text-accent-600 uppercase mb-3">
      {children}
    </p>
  );
}
