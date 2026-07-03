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

/**
 * The glowing "Vision" orb at the centre of the dial — a small guiding light
 * that everything is oriented around. The warm amber halo is Vision casting
 * light out along its connections.
 */
function Hub() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center rounded-full bg-gradient-to-b from-primary to-primary/80 text-primary-foreground animate-orb-glow">
      {/* Warm amber core — the light source. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 30%, hsl(var(--brass) / 0.55), transparent 62%)",
        }}
      />
      <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/25" />
      <span className="relative font-display text-xl font-bold tracking-tight sm:text-2xl">
        Vision
      </span>
      <span className="relative mt-0.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-primary-foreground/85">
        AI chief-of-staff
      </span>
    </div>
  );
}

/** The instrument bezel: a slow-turning ring of tick marks around the dial. */
function Bezel() {
  const ticks = Array.from({ length: 48 });
  return (
    <g
      className="motion-safe:animate-bezel-spin"
      style={{ transformBox: "view-box", transformOrigin: "50% 50%" }}
    >
      <circle
        cx={50}
        cy={50}
        r={48}
        fill="none"
        stroke="hsl(var(--brass))"
        strokeOpacity={0.28}
        strokeWidth={0.15}
        strokeDasharray="0.6 2.2"
      />
      {ticks.map((_, i) => {
        const major = i % 4 === 0;
        const a = (i / ticks.length) * 2 * Math.PI;
        const r1 = major ? 45.4 : 46.2;
        const r2 = 47.4;
        return (
          <line
            key={i}
            x1={50 + r1 * Math.cos(a)}
            y1={50 + r1 * Math.sin(a)}
            x2={50 + r2 * Math.cos(a)}
            y2={50 + r2 * Math.sin(a)}
            stroke="hsl(var(--brass))"
            strokeOpacity={major ? 0.5 : 0.22}
            strokeWidth={major ? 0.4 : 0.2}
            strokeLinecap="round"
          />
        );
      })}
    </g>
  );
}

export function HubAndSpoke() {
  return (
    <>
      {/* ---------------------------------------------------------------
          Desktop: the observatory dial — Vision at the centre, tools on
          the orbit ring, beams of light drawn out to each one.
          --------------------------------------------------------------- */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[760px] lg:block">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <Bezel />

          {/* Orbit rings the tools sit on, drawn in on load. */}
          <circle
            cx={50}
            cy={50}
            r={RADIUS}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeOpacity={0.22}
            strokeWidth={0.25}
            className="animate-draw-in"
            style={{ ["--dash" as string]: 2 * Math.PI * RADIUS, strokeDasharray: 2 * Math.PI * RADIUS }}
          />
          <circle
            cx={50}
            cy={50}
            r={22}
            fill="none"
            stroke="hsl(var(--brass))"
            strokeOpacity={0.3}
            strokeWidth={0.2}
            strokeDasharray="1.4 1.8"
            className="animate-draw-in [animation-delay:150ms]"
            style={{ ["--dash" as string]: 2 * Math.PI * 22 }}
          />

          {/* Beams of light from Vision out to each tool. */}
          {connections.map((c, i) => {
            const { x, y } = spokePosition(i, connections.length);
            const len = Math.hypot(x - 50, y - 50);
            return (
              <g key={c.name}>
                <line
                  x1={50}
                  y1={50}
                  x2={x}
                  y2={y}
                  stroke="hsl(var(--brass))"
                  strokeOpacity={0.4}
                  strokeWidth={0.3}
                  strokeLinecap="round"
                  className="animate-draw-in"
                  style={{ ["--dash" as string]: len, strokeDasharray: len, animationDelay: `${250 + i * 55}ms` }}
                />
                <circle
                  cx={x}
                  cy={y}
                  r={0.9}
                  fill="hsl(var(--brass))"
                  className="animate-fade-in"
                  style={{ animationDelay: `${600 + i * 55}ms` }}
                />
              </g>
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
              className="absolute z-10 w-[170px] -translate-x-1/2 -translate-y-1/2 animate-fade-up"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                animationDelay: `${650 + i * 55}ms`,
              }}
            >
              <ConnectionCard connection={c} compact />
            </div>
          );
        })}
      </div>

      {/* ---------------------------------------------------------------
          Mobile / tablet: the orb on top, then a clean responsive grid.
          Same story, no fragile positioning on small screens.
          --------------------------------------------------------------- */}
      <div className="lg:hidden">
        <div className="relative mx-auto mb-12 h-40 w-40">
          {/* A couple of faint orbit rings echo the desktop dial. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 rounded-full border border-dashed border-brass/30"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-9 rounded-full border border-border/70"
          />
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
