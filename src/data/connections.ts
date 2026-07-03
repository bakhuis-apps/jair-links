import {
  Bot,
  Briefcase,
  CalendarDays,
  FolderOpen,
  Globe,
  KeyRound,
  ListChecks,
  Mail,
  MessageCircle,
  NotebookPen,
  type LucideIcon,
} from "lucide-react";

export interface Connection {
  /** Short, friendly name. */
  name: string;
  /** The real tool, kept small and in parentheses so it never leads. */
  aka?: string;
  /** One plain-English sentence a grandparent would understand. */
  blurb: string;
  icon: LucideIcon;
}

/**
 * The things Vision is connected to. Order matters: this is also the order the
 * spokes are placed around the hub, starting at the top and going clockwise.
 * Kept deliberately jargon-light — the everyday name leads, the tool is a whisper.
 */
export const connections: Connection[] = [
  {
    name: "Chat apps",
    aka: "Telegram & WhatsApp",
    blurb: "How Jair talks to it — like texting a very capable assistant.",
    icon: MessageCircle,
  },
  {
    name: "Email",
    aka: "Gmail",
    blurb: "Reads and drafts his emails.",
    icon: Mail,
  },
  {
    name: "Calendar",
    blurb: "Checks the schedule and books appointments.",
    icon: CalendarDays,
  },
  {
    name: "Documents",
    aka: "Google Drive",
    blurb: "Finds and writes his documents.",
    icon: FolderOpen,
  },
  {
    name: "Notebook",
    aka: "Obsidian",
    blurb: "Keeps a notebook of everything it learns.",
    icon: NotebookPen,
  },
  {
    name: "To-do board",
    aka: "Notion",
    blurb: "Tracks his to-dos and tickets.",
    icon: ListChecks,
  },
  {
    name: "Helper robot",
    aka: "n8n",
    blurb: "Runs repetitive jobs automatically, on its own.",
    icon: Bot,
  },
  {
    name: "Password vault",
    aka: "Bitwarden",
    blurb: "Logs into websites for him, securely.",
    icon: KeyRound,
  },
  {
    name: "Web browser",
    blurb: "Can browse the web and look things up.",
    icon: Globe,
  },
  {
    name: "His businesses",
    aka: "SuaveCars & Bakhuis Management",
    blurb: "Helps run his companies day to day.",
    icon: Briefcase,
  },
];
