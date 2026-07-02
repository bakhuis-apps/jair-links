import { Lock, MessageSquareText, Server, Sparkles } from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";
import { HubAndSpoke } from "./components/HubAndSpoke";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-soft">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </span>
          Vision
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft ambient glow behind the hero. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-72 w-72 rounded-full bg-primary/20 blur-3xl sm:w-[36rem]"
      />
      <div className="container relative flex flex-col items-center py-20 text-center sm:py-28">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-soft animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Jair's private AI assistant
        </span>

        <h1 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl animate-fade-up">
          What is <span className="text-primary">Vision?</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl animate-fade-up [animation-delay:80ms]">
          Vision is Jair's personal AI assistant. He texts it like a person — and it helps
          run his businesses: reading email, managing the calendar, keeping notes, and much
          more.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row animate-fade-up [animation-delay:160ms]">
          <a
            href="#connections"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0"
          >
            See what it can do
          </a>
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MessageSquareText className="h-4 w-4 text-primary" aria-hidden="true" />
            Just like texting a very capable assistant
          </span>
        </div>
      </div>
    </section>
  );
}

function ConnectionsSection() {
  return (
    <section id="connections" className="scroll-mt-20 border-t border-border/60 bg-muted/40">
      <div className="container py-20 sm:py-28">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything Vision is connected to
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
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
      title: "Its brain is Claude",
      body: "Vision thinks using Claude, the friendly AI made by a company called Anthropic. That's what lets it understand plain language and get real work done.",
    },
    {
      icon: Server,
      title: "It lives on Jair's own server",
      body: "Vision runs on Jair's own private computer — not a public chatbot everyone shares. It's his, and only his.",
    },
    {
      icon: Lock,
      title: "It's private by design",
      body: "Because it's private, Jair can trust it with his email, his calendar, and his companies — the everyday things a real assistant handles.",
    },
  ];

  return (
    <section className="border-t border-border/60">
      <div className="container py-20 sm:py-28">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Powered by Claude, and truly his own
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            The important part: this isn't a generic public chatbot. It's a private assistant
            built just for Jair.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {points.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 text-card-foreground shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold">{title}</h3>
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
    <footer className="border-t border-border/60 bg-muted/40">
      <div className="container flex flex-col items-center gap-2 py-12 text-center text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-2 font-display text-base font-semibold text-foreground">
          <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
          Vision
        </span>
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
