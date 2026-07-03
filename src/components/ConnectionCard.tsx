import type { Connection } from "@/data/connections";
import { cn } from "@/lib/utils";

interface ConnectionCardProps {
  connection: Connection;
  /** Compact variant used inside the tight radial orbit on large screens. */
  compact?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * One card describing a single thing Vision is connected to. The everyday name
 * leads in the body face; the real tool name whispers underneath in the mono
 * "instrument label" face. Shared between the mobile grid and the desktop
 * observatory dial so both layouts tell the same story.
 */
export function ConnectionCard({ connection, compact = false, className, style }: ConnectionCardProps) {
  const { name, aka, blurb, icon: Icon } = connection;

  return (
    <div
      style={style}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-brass/50 hover:shadow-lift",
        compact ? "gap-1.5 p-4" : "gap-2.5 p-5",
        className
      )}
    >
      {/* A thin brass filament lights along the top edge on hover — the signal. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-brass to-transparent opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100"
      />

      <span
        className={cn(
          "inline-flex items-center justify-center rounded-xl bg-secondary text-primary ring-1 ring-inset ring-primary/10 transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground",
          compact ? "h-10 w-10" : "h-12 w-12"
        )}
      >
        <Icon className={compact ? "h-5 w-5" : "h-6 w-6"} aria-hidden="true" />
      </span>

      <div className="flex flex-col gap-1">
        <h3
          className={cn(
            "font-display font-semibold leading-tight tracking-tight",
            compact ? "text-[0.95rem]" : "text-lg"
          )}
        >
          {name}
        </h3>
        {aka && (
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
            {aka}
          </p>
        )}
      </div>

      <p
        className={cn(
          "text-pretty text-muted-foreground",
          compact ? "text-xs leading-snug" : "text-sm leading-relaxed"
        )}
      >
        {blurb}
      </p>
    </div>
  );
}
