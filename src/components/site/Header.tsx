"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, Phone, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./Logo";
import { useRouter, type View } from "./router";
import { useCart } from "./cart";
import { IMG } from "./data";
import { cn } from "@/lib/utils";

const SHOP_LINKS = [
  {
    label: "Edging Strips",
    desc: "4 ft, 2 ft, and short strips",
    image: IMG.edging4,
    category: "edging",
  },
  {
    label: "Tree Rings",
    desc: "Steel circles for trunks",
    image: IMG.treeRing,
    category: "tree-rings",
  },
  {
    label: "Raised Beds",
    desc: "Kits that go up in minutes",
    image: IMG.raisedBed,
    category: "raised-beds",
  },
  {
    label: "Address Signs",
    desc: "Numbers cut from steel",
    image: IMG.signAngle,
    category: "signs",
  },
  {
    label: "Accessories",
    desc: "Clips and hardware",
    image: IMG.clips,
    category: "accessories",
  },
];

const MAIN_LINKS: { label: string; view: View }[] = [
  { label: "Installation", view: "install" },
  { label: "About", view: "about" },
  { label: "Contact", view: "contact" },
];

export function Header() {
  const { route, navigate } = useRouter();
  const { count, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const go = (view: View, category?: string) => {
    setMobileOpen(false);
    navigate(view, category);
  };

  const isActive = (v: View) => route.view === v;

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement bar */}
      <div className="bg-ink-deep text-ivory/85">
        <p className="mx-auto max-w-6xl px-4 py-2 text-center text-[0.78rem] font-medium tracking-[0.08em] sm:px-6">
          Free shipping on every order. Ships in 2 to 5 days from Tennessee.
        </p>
      </div>

      {/* Main bar */}
      <div className="border-b border-line bg-bone/95 backdrop-blur supports-[backdrop-filter]:bg-bone/85">
        <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <button
            onClick={() => go("home")}
            aria-label="Rustline home"
            className="shrink-0"
          >
            <Logo />
          </button>

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {/* Shop dropdown */}
            <div className="group relative">
              <button
                className={cn(
                  "flex items-center gap-1 rounded-lg px-3.5 py-2.5 text-[0.95rem] font-medium transition-colors",
                  isActive("shop")
                    ? "text-brass-deep"
                    : "text-ink hover:bg-secondary hover:text-ink"
                )}
                aria-haspopup="true"
              >
                Shop
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div
                className="invisible absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
              >
                <div className="overflow-hidden rounded-2xl border border-line bg-card p-3 shadow-xl shadow-ink/10">
                  <div className="grid grid-cols-2 gap-1">
                    {SHOP_LINKS.map((link) => (
                      <button
                        key={link.category}
                        onClick={() => go("shop", link.category)}
                        className="flex items-center gap-3 rounded-xl p-2.5 text-left transition-colors hover:bg-secondary"
                      >
                        <span className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-line bg-secondary">
                          <img
                            src={link.image}
                            alt=""
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </span>
                        <span>
                          <span className="block text-[0.92rem] font-semibold text-ink">
                            {link.label}
                          </span>
                          <span className="block text-[0.8rem] text-bronze">
                            {link.desc}
                          </span>
                        </span>
                      </button>
                    ))}
                    <button
                      onClick={() => go("shop", "all")}
                      className="flex items-center justify-between rounded-xl bg-ink px-4 py-2.5 text-left text-bone transition-colors hover:bg-ink-soft"
                    >
                      <span className="text-[0.92rem] font-semibold">
                        Shop everything
                      </span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {MAIN_LINKS.map((link) => (
              <button
                key={link.view}
                onClick={() => go(link.view)}
                className={cn(
                  "rounded-lg px-3.5 py-2.5 text-[0.95rem] font-medium transition-colors",
                  isActive(link.view)
                    ? "text-brass-deep"
                    : "text-ink hover:bg-secondary hover:text-ink"
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={openCart}
              aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
              className="relative flex h-11 w-11 items-center justify-center rounded-lg text-ink transition-colors hover:bg-secondary"
            >
              <ShoppingBag className="h-5 w-5" />
              {count > 0 ? (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brass px-1 text-[0.68rem] font-bold text-ink">
                  {count}
                </span>
              ) : null}
            </button>

            <Button
              onClick={() => go("shop", "edging")}
              className="hidden h-11 rounded-lg bg-brass px-5 text-[0.92rem] font-semibold text-ink shadow-sm hover:bg-brass-bright sm:inline-flex"
            >
              Shop edging
            </Button>

            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className="flex h-11 w-11 items-center justify-center rounded-lg text-ink transition-colors hover:bg-secondary lg:hidden"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                aria-describedby={undefined}
                className="flex w-[19rem] flex-col bg-bone p-0 sm:w-[21rem]"
              >
                <SheetHeader className="border-b border-line px-5 py-4 text-left">
                  <SheetTitle asChild>
                    <div>
                      <Logo />
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto px-5 py-4">
                  <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-bronze">
                    Shop
                  </p>
                  <div className="mb-5 space-y-1">
                    {SHOP_LINKS.map((link) => (
                      <button
                        key={link.category}
                        onClick={() => go("shop", link.category)}
                        className="flex w-full items-center gap-3 rounded-lg p-2 text-left transition-colors hover:bg-secondary"
                      >
                        <span className="h-10 w-10 shrink-0 overflow-hidden rounded-md border border-line">
                          <img
                            src={link.image}
                            alt=""
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </span>
                        <span className="text-[0.95rem] font-medium text-ink">
                          {link.label}
                        </span>
                      </button>
                    ))}
                    <button
                      onClick={() => go("shop", "all")}
                      className="w-full rounded-lg bg-ink px-3 py-2.5 text-left text-[0.92rem] font-semibold text-bone"
                    >
                      Shop everything
                    </button>
                  </div>

                  <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-bronze">
                    Company
                  </p>
                  <div className="space-y-1">
                    {MAIN_LINKS.map((link) => (
                      <button
                        key={link.view}
                        onClick={() => go(link.view)}
                        className="block w-full rounded-lg px-3 py-2.5 text-left text-[0.95rem] font-medium text-ink transition-colors hover:bg-secondary"
                      >
                        {link.label}
                      </button>
                    ))}
                    <button
                      onClick={() => go("faq")}
                      className="block w-full rounded-lg px-3 py-2.5 text-left text-[0.95rem] font-medium text-ink transition-colors hover:bg-secondary"
                    >
                      FAQ
                    </button>
                  </div>
                </div>
                <div className="border-t border-line px-5 py-4">
                  <a
                    href="tel:+14235550119"
                    className="flex items-center gap-2 text-[0.9rem] font-medium text-ink"
                  >
                    <Phone className="h-4 w-4 text-brass-deep" />
                    (423) 555 0119
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
