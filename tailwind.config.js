/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        brass: {
          DEFAULT: "hsl(var(--brass))",
          foreground: "hsl(var(--brass-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
      },
      fontFamily: {
        // Display: characterful, contemporary grotesque used with restraint.
        display: ["Bricolage Grotesque", "ui-sans-serif", "system-ui", "sans-serif"],
        // Body: warm humanist grotesque, easy for a non-technical reader.
        sans: ["Hanken Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        // Utility: engraved instrument label for tool names and eyebrows.
        mono: ["Space Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        // Shadows carry a faint harbor-teal tint rather than neutral grey.
        soft: "0 1px 2px hsl(196 42% 11% / 0.05), 0 10px 30px hsl(196 42% 11% / 0.07)",
        lift: "0 2px 6px hsl(196 42% 11% / 0.06), 0 22px 50px hsl(196 42% 11% / 0.14)",
        // Warm glow used behind the central Vision orb.
        glow: "0 0 0 1px hsl(var(--brass) / 0.35), 0 0 40px hsl(var(--brass) / 0.35), 0 0 90px hsl(var(--primary) / 0.30)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        // Signature: the central orb breathes, its halo swelling gently.
        "orb-glow": {
          "0%, 100%": {
            boxShadow:
              "0 0 0 1px hsl(var(--brass) / 0.30), 0 0 26px hsl(var(--brass) / 0.28), 0 0 70px hsl(var(--primary) / 0.22)",
          },
          "50%": {
            boxShadow:
              "0 0 0 1px hsl(var(--brass) / 0.45), 0 0 46px hsl(var(--brass) / 0.42), 0 0 110px hsl(var(--primary) / 0.34)",
          },
        },
        // The instrument bezel turns almost imperceptibly — alive, not busy.
        "bezel-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        // Orbit rings and spokes draw themselves in on load.
        "draw-in": {
          "0%": { strokeDashoffset: "var(--dash, 320)", opacity: "0" },
          "100%": { strokeDashoffset: "0", opacity: "1" },
        },
        // A pulse of light travels from Vision out to a tool.
        "signal": {
          "0%": { opacity: "0", transform: "scale(0.4)" },
          "40%": { opacity: "1" },
          "100%": { opacity: "0", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.9s ease both",
        "orb-glow": "orb-glow 5s ease-in-out infinite",
        "bezel-spin": "bezel-spin 90s linear infinite",
        "draw-in": "draw-in 1.1s cubic-bezier(0.16, 1, 0.3, 1) both",
        "signal": "signal 4.5s ease-out infinite",
      },
    },
  },
  plugins: [],
};
