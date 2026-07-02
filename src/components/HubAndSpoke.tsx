import { Sparkles } from "lucide-react";
import { connections } from "@/data/connections";
import { ConnectionCard } from "./ConnectionCard";

/** Where each spoke sits on the ring, as a share of the container (0–100). */
const RADIUS = 43;

function spokePosition(index: number, total: number) {
  // Start at the top (−90°) and walk clockwise around the circle.
  const angleDeg = -90 + (360 / total) * index;
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    x: 50 + RADIUS * Math.cos(angleRad),
    y: 50 + RADIUS * Math.sin(angleRad),
  };
}

/** The glowing "Vision" node at the centre of everything. */
function Hub() {
  return (
    <div className="relative flex flex-col items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift">
      {/* Soft pulsing halo to draw the eye to the centre. */}
      <span className="pointer-events-none absolute inset-0 rounded-full bg-primary/40 animate-pulse-ring" />
      <span className="pointer-events-none absolute inset-0 rounded-full ring-8 ring-primary/10" />
      <Sparkles className="relative h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
      <span className="relative mt-1 font-display text-xl font-semibold tracking-tight sm:text-2xl">
        Vision
      </span>
      <span className="relative text-[11px] font-medium text-primary-foreground/80 sm:text-xs">
        AI chief-of-staff
      </span>
    </div>
  );
}

export function HubAndSpoke() {
  return (
    <>
      {/* ---------------------------------------------------------------
          Desktop: a true hub-and-spoke orbit with connector lines.
          --------------------------------------------------------------- */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[720px] lg:block">
        {/* Connector lines, drawn behind the cards. */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {connections.map((c, i) => {
            const { x, y } = spokePosition(i, connections.length);
            return (
              <line
                key={c.name}
                x1={50}
                y1={50}
                x2={x}
                y2={y}
                stroke="hsl(var(--primary))"
                strokeOpacity={0.25}
                strokeWidth={0.4}
                strokeLinecap="round"
              />
            );
          })}
        </svg>

        {/* Central hub. */}
        <div className="absolute left-1/2 top-1/2 z-20 h-36 w-36 -translate-x-1/2 -translate-y-1/2">
          <Hub />
        </div>

        {/* Spoke cards positioned around the ring. */}
        {connections.map((c, i) => {
          const { x, y } = spokePosition(i, connections.length);
          return (
            <div
              key={c.name}
              className="absolute z-10 w-[168px] -translate-x-1/2 -translate-y-1/2 animate-fade-up"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                animationDelay: `${i * 60}ms`,
              }}
            >
              <ConnectionCard connection={c} compact />
            </div>
          );
        })}
      </div>

      {/* ---------------------------------------------------------------
          Mobile / tablet: hub on top, then a clean responsive grid.
          Same story, no fragile positioning on small screens.
          --------------------------------------------------------------- */}
      <div className="lg:hidden">
        <div className="mx-auto mb-10 h-36 w-36">
          <Hub />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {connections.map((c, i) => (
            <ConnectionCard
              key={c.name}
              connection={c}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
