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
 * One rounded icon card describing a single thing Vision is connected to.
 * Shared between the mobile grid and the desktop radial orbit so the two
 * layouts always tell the same story.
 */
export function ConnectionCard({ connection, compact = false, className, style }: ConnectionCardProps) {
  const { name, aka, blurb, icon: Icon } = connection;

  return (
    <div
      style={style}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-border bg-card text-card-foreground shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift",
        compact ? "gap-1.5 p-4" : "gap-2 p-5",
        className
      )}
    >
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground",
          compact ? "h-10 w-10" : "h-12 w-12"
        )}
      >
        <Icon className={compact ? "h-5 w-5" : "h-6 w-6"} aria-hidden="true" />
      </span>

      <div className="flex flex-col gap-0.5">
        <h3 className={cn("font-semibold leading-tight", compact ? "text-sm" : "text-base")}>
          {name}
        </h3>
        {aka && (
          <p className="text-xs font-medium text-muted-foreground">{aka}</p>
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
