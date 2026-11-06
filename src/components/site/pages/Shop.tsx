"use client";

import { useState } from "react";
import { Check, Minus, Plus, ShieldCheck, Truck, Undo2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CATEGORIES, PRODUCTS, type Product } from "../data";
import { Img, PageHero, Reveal } from "../Bits";
import { useRouter } from "../router";
import { useCart } from "../cart";
import { cn } from "@/lib/utils";

function money(n: number) {
  return `$${n.toFixed(0)}`;
}

export function Shop({ category }: { category?: string }) {
  const { navigate } = useRouter();
  const { add } = useCart();
  const [active, setActive] = useState<string>(category ?? "all");
  const [detail, setDetail] = useState<Product | null>(null);
  const [detailQty, setDetailQty] = useState(1);

  const visible =
    active === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === active);

  const openDetail = (p: Product) => {
    setDetail(p);
    setDetailQty(1);
  };

  return (
    <main>
      <PageHero
        kicker="The shop"
        title="Steel for every line in the yard."
        copy="Every piece is cut from the same 16 gauge weathering steel and ships free from Chattanooga. Order the strips first. The clips come with them."
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Tabs */}
          <Reveal>
            <div
              role="tablist"
              aria-label="Product categories"
              className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
            >
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={active === c.id}
                  onClick={() => {
                    setActive(c.id);
                    navigate("shop", c.id === "all" ? undefined : c.id);
                  }}
                  className={cn(
                    "shrink-0 rounded-full border px-4.5 py-2.5 text-[0.9rem] font-semibold transition-colors",
                    active === c.id
                      ? "border-ink bg-ink text-bone"
                      : "border-line bg-card text-ink hover:border-ink/40"
                  )}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Grid */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.06}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/10">
                  <button
                    onClick={() => openDetail(p)}
                    className="relative block aspect-[4/3.1] overflow-hidden bg-secondary text-left"
                    aria-label={`View details for ${p.name}`}
                  >
                    <Img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {p.badge ? (
                      <span className="absolute left-3 top-3 rounded-full bg-brass px-3 py-1 text-[0.72rem] font-bold uppercase tracking-wide text-ink">
                        {p.badge}
                      </span>
                    ) : null}
                  </button>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2 className="font-display text-[1.15rem] font-semibold leading-tight text-ink">
                          {p.name}
                        </h2>
                        <p className="mt-0.5 text-[0.8rem] font-medium uppercase tracking-wide text-bronze">
                          {p.pack}
                        </p>
                      </div>
                      <p className="shrink-0 font-display text-xl font-bold text-ink">
                        {money(p.price)}
                      </p>
                    </div>
                    <p className="mt-2.5 flex-1 text-[0.92rem] leading-relaxed text-bronze">
                      {p.blurb}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <Button
                        onClick={() => add(p.id)}
                        className="h-10.5 flex-1 rounded-lg bg-brass font-semibold text-ink hover:bg-brass-bright"
                      >
                        Add to cart
                      </Button>
                      <Button
                        onClick={() => openDetail(p)}
                        variant="outline"
                        className="h-10.5 rounded-lg border-ink/25 font-semibold text-ink hover:bg-ink hover:text-bone"
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Trust row */}
          <Reveal delay={0.1}>
            <div className="mt-14 grid gap-4 rounded-2xl border border-line bg-ivory p-6 sm:grid-cols-3">
              {[
                { icon: Truck, t: "Free shipping", d: "Every order, no minimum, 2 to 5 days." },
                { icon: Undo2, t: "60 day returns", d: "Change your mind, send it back." },
                { icon: ShieldCheck, t: "Built to last", d: "16 gauge steel, guaranteed against defects." },
              ].map((item) => (
                <div key={item.t} className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink text-brass-soft">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[0.95rem] font-semibold text-ink">
                      {item.t}
                    </p>
                    <p className="mt-0.5 text-[0.85rem] text-bronze">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product detail dialog */}
      <Dialog open={!!detail} onOpenChange={(open) => (open ? null : setDetail(null))}>
        <DialogContent className="max-h-[90vh] overflow-y-auto rounded-2xl bg-bone p-0 sm:max-w-2xl">
          {detail ? (
            <div className="grid sm:grid-cols-2">
              <div className="aspect-[4/3.4] bg-secondary sm:aspect-auto sm:h-full">
                <Img
                  src={detail.image}
                  alt={detail.name}
                  className="h-full w-full object-cover sm:rounded-l-2xl"
                />
              </div>
              <div className="flex flex-col p-6 sm:p-7">
                <DialogHeader className="space-y-1 text-left">
                  <p className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-brass-deep">
                    {detail.pack}
                  </p>
                  <DialogTitle className="font-display text-2xl font-semibold text-ink">
                    {detail.name}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    {detail.blurb}
                  </DialogDescription>
                </DialogHeader>
                <p className="mt-3 font-display text-2xl font-bold text-ink">
                  {money(detail.price)}
                </p>
                <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-bronze">
                  {detail.detail}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {[
                    "16 gauge weathering steel",
                    "Connector clips included",
                    "Free shipping both ways",
                  ].map((spec) => (
                    <li
                      key={spec}
                      className="flex items-center gap-2 text-[0.85rem] text-foreground"
                    >
                      <Check className="h-4 w-4 text-brass-deep" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex items-center rounded-lg border border-line bg-card">
                    <button
                      onClick={() => setDetailQty((q) => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                      className="flex h-11 w-11 items-center justify-center text-bronze hover:text-ink"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center font-semibold text-ink">
                      {detailQty}
                    </span>
                    <button
                      onClick={() => setDetailQty((q) => q + 1)}
                      aria-label="Increase quantity"
                      className="flex h-11 w-11 items-center justify-center text-bronze hover:text-ink"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <Button
                    onClick={() => {
                      add(detail.id, detailQty);
                      setDetail(null);
                    }}
                    className="h-11 flex-1 rounded-lg bg-brass font-semibold text-ink hover:bg-brass-bright"
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </main>
  );
}
