import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-10", className)}
      aria-hidden="true"
    >
      <rect width="44" height="44" rx="9" fill="#211A0E" />
      <path
        d="M10 31h14V13"
        stroke="#F5F0E2"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="31.5" cy="31" r="3.4" fill="#C09A3E" />
    </svg>
  );
}

export function Logo({
  light = false,
  className,
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.5rem] font-semibold tracking-tight",
            light ? "text-ivory" : "text-ink"
          )}
        >
          Rustline
        </span>
        <span
          className={cn(
            "mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.32em]",
            light ? "text-ivory/60" : "text-bronze"
          )}
        >
          Steel Edging
        </span>
      </span>
    </span>
  );
}
