"use client";

import { useState } from "react";
import { Facebook, Instagram, Youtube, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Logo } from "./Logo";
import { useRouter, type View } from "./router";

const SHOP_LINKS: { label: string; view: View; category?: string }[] = [
  { label: "Edging Strips", view: "shop", category: "edging" },
  { label: "Tree Rings", view: "shop", category: "tree-rings" },
  { label: "Raised Beds", view: "shop", category: "raised-beds" },
  { label: "Address Signs", view: "shop", category: "signs" },
  { label: "Accessories", view: "shop", category: "accessories" },
];

const LEARN_LINKS: { label: string; view: View }[] = [
  { label: "Installation Guide", view: "install" },
  { label: "FAQ", view: "faq" },
  { label: "About Us", view: "about" },
  { label: "Contact", view: "contact" },
];

const LEGAL_LINKS: { label: string; view: View }[] = [
  { label: "Privacy Policy", view: "privacy" },
  { label: "Terms of Service", view: "terms" },
];

export function Footer() {
  const { navigate } = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!value || !value.includes("@")) {
      toast({
        title: "That email looks off",
        description: "Give it another try and we will get you on the list.",
      });
      return;
    }
    setEmail("");
    toast({
      title: "You are on the list",
      description: "One short email a month. The first one lands early next month.",
    });
  };

  return (
    <footer className="mt-auto bg-ink-deep text-ivory">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-[0.92rem] leading-relaxed text-ivory/65">
              Solid weathering steel edging, hammered in once and forgotten for
              decades. Cut and shipped from Chattanooga, Tennessee.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="#"
                aria-label="Rustline on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ivory/15 text-ivory/70 transition-colors hover:border-brass hover:text-brass"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="#"
                aria-label="Rustline on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ivory/15 text-ivory/70 transition-colors hover:border-brass hover:text-brass"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                href="#"
                aria-label="Rustline on YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ivory/15 text-ivory/70 transition-colors hover:border-brass hover:text-brass"
              >
                <Youtube className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <nav aria-label="Shop">
            <p className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.24em] text-ivory/45">
              Shop
            </p>
            <ul className="space-y-2.5">
              {SHOP_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.view, link.category)}
                    className="text-[0.92rem] text-ivory/75 transition-colors hover:text-brass-soft"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Learn */}
          <nav aria-label="Learn">
            <p className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.24em] text-ivory/45">
              Learn
            </p>
            <ul className="space-y-2.5">
              {LEARN_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.view)}
                    className="text-[0.92rem] text-ivory/75 transition-colors hover:text-brass-soft"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div>
            <p className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.24em] text-ivory/45">
              Stay in the loop
            </p>
            <p className="mb-4 text-[0.92rem] leading-relaxed text-ivory/65">
              One short email a month. Seasonal tips, new kits, and the occasional
              deal. No spam, ever.
            </p>
            <form onSubmit={subscribe} className="flex gap-2">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yourmail.com"
                className="h-11 w-full min-w-0 rounded-lg border border-ivory/20 bg-ivory/10 px-3.5 text-[0.9rem] text-ivory placeholder:text-ivory/40 focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brass text-ink transition-colors hover:bg-brass-bright"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-6 sm:flex-row">
          <p className="text-[0.82rem] text-ivory/50">
            &copy; {new Date().getFullYear()} Rustline Steel Co. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5">
            {LEGAL_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => navigate(link.view)}
                className="text-[0.82rem] text-ivory/50 transition-colors hover:text-brass-soft"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://m-webcraftstudio.space-z.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.82rem] text-ivory/50 transition-colors hover:text-brass-soft"
            >
              Designed By M-Webcraft Studio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
