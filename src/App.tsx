import { Lock, MessageSquareText, Server, Sparkles } from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";
import { HubAndSpoke } from "./components/HubAndSpoke";

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 font-display font-bold tracking-tight ${className}`}>
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-soft">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-lg"
          style={{ background: "radial-gradient(60% 55% at 50% 30%, hsl(var(--brass) / 0.55), transparent 60%)" }}
        />
        <Sparkles className="relative h-4 w-4" aria-hidden="true" />
      </span>
      Vision
    </span>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="text-lg">
          <Wordmark />
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* A wash of light spilling from the top — Vision's glow. */}
      <div aria-hidden="true" className="beam pointer-events-none absolute inset-x-0 top-0 h-[32rem]" />
      <div className="container relative flex flex-col items-center py-24 text-center sm:py-32">
        <span className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-card/80 px-4 py-1.5 shadow-soft animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brass" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Jair's private AI assistant
          </span>
        </span>

        <h1 className="max-w-3xl text-balance font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl animate-fade-up">
          What is <span className="text-primary">Vision</span>?
        </h1>

        <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl animate-fade-up [animation-delay:80ms]">
          Vision is Jair's personal AI assistant. He texts it like a person — and it helps
          run his businesses: reading email, managing the calendar, keeping notes, and much
          more.
        </p>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row animate-fade-up [animation-delay:160ms]">
          <a
            href="#connections"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0"
          >
            See what it can do
          </a>
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MessageSquareText className="h-4 w-4 text-brass" aria-hidden="true" />
            Just like texting a very capable assistant
          </span>
        </div>
      </div>
    </section>
  );
}

/** A mono, wide-tracked label above each section heading. */
function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="kicker mb-4">{children}</p>;
}

function ConnectionsSection() {
  return (
    <section id="connections" className="scroll-mt-20 border-t border-border/70 bg-muted/40">
      <div className="container py-24 sm:py-32">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Kicker>The connections</Kicker>
          <h2 className="text-balance font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Everything Vision is connected to
          </h2>
          <p className="mt-5 text-pretty text-lg text-muted-foreground">
            Think of Vision in the middle, with a helper for each part of Jair's day. Here's
            what each one does, in plain words.
          </p>
        </div>

        <HubAndSpoke />
      </div>
    </section>
  );
}

function PoweredBy() {
  const points = [
    {
      icon: Sparkles,
      label: "The brain",
      title: "Its brain is Claude",
      body: "Vision thinks using Claude, the friendly AI made by a company called Anthropic. That's what lets it understand plain language and get real work done.",
    },
    {
      icon: Server,
      label: "The home",
      title: "It lives on Jair's own server",
      body: "Vision runs on Jair's own private computer — not a public chatbot everyone shares. It's his, and only his.",
    },
    {
      icon: Lock,
      label: "The trust",
      title: "It's private by design",
      body: "Because it's private, Jair can trust it with his email, his calendar, and his companies — the everyday things a real assistant handles.",
    },
  ];

  return (
    <section className="border-t border-border/70">
      <div className="container py-24 sm:py-32">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Kicker>Why it's trustworthy</Kicker>
          <h2 className="text-balance font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Powered by Claude, and truly his own
          </h2>
          <p className="mt-5 text-pretty text-lg text-muted-foreground">
            The important part: this isn't a generic public chatbot. It's a private assistant
            built just for Jair.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {points.map(({ icon: Icon, label, title, body }) => (
            <div
              key={title}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-8 text-card-foreground shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-brass/50 hover:shadow-lift"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-brass to-transparent opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100"
              />
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary ring-1 ring-inset ring-primary/10">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-brass">
                  {label}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold tracking-tight">{title}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/70 bg-muted/40">
      <div className="container flex flex-col items-center gap-3 py-14 text-center text-sm text-muted-foreground">
        <Wordmark className="text-base text-foreground" />
        <p>Jair's private AI assistant · powered by Claude, running on his own server.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div id="top" className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ConnectionsSection />
        <PoweredBy />
      </main>
      <Footer />
    </div>
  );
}
