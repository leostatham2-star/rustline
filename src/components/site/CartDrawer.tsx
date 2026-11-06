"use client";

import {
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
  Phone,
  Mail,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "./cart";
import { Img } from "./Bits";
import { useRouter } from "./router";

function money(n: number) {
  return `$${n.toFixed(0)}`;
}

export function CartDrawer() {
  const { lines, isOpen, closeCart, setQty, remove, subtotal, productFor } =
    useCart();
  const { navigate } = useRouter();

  return (
    <Sheet open={isOpen} onOpenChange={(open) => (open ? null : closeCart())}>
      <SheetContent
        side="right"
        aria-describedby={undefined}
        className="flex w-[22rem] flex-col gap-0 bg-bone p-0 sm:w-[24rem]"
      >
        <SheetHeader className="flex flex-row items-center justify-between border-b border-line px-5 py-4">
          <SheetTitle className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
            <ShoppingBag className="h-5 w-5 text-brass-deep" />
            Your cart
          </SheetTitle>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-bronze transition-colors hover:bg-secondary hover:text-ink"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </SheetHeader>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
              <ShoppingBag className="h-7 w-7 text-bronze" />
            </span>
            <p className="font-display text-lg font-semibold text-ink">
              Nothing in here yet
            </p>
            <p className="text-[0.9rem] leading-relaxed text-bronze">
              Start with the 4 ft strips. Most yards do.
            </p>
            <Button
              onClick={() => {
                closeCart();
                navigate("shop", "edging");
              }}
              className="mt-2 rounded-lg bg-brass px-6 font-semibold text-ink hover:bg-brass-bright"
            >
              Shop steel edging
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="space-y-4">
                {lines.map((line) => {
                  const p = productFor(line.id);
                  if (!p) return null;
                  return (
                    <li key={line.id} className="flex gap-3.5">
                      <span className="h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-line bg-card">
                        <Img
                          src={p.image}
                          alt={p.name}
                          className="h-full w-full object-cover"
                        />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-[0.92rem] font-semibold leading-tight text-ink">
                              {p.name}
                            </p>
                            <p className="mt-0.5 text-[0.78rem] text-bronze">
                              {p.pack}
                            </p>
                          </div>
                          <button
                            onClick={() => remove(line.id)}
                            aria-label={`Remove ${p.name}`}
                            className="text-bronze transition-colors hover:text-brass-deep"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-2.5 flex items-center justify-between">
                          <div className="flex items-center rounded-lg border border-line bg-card">
                            <button
                              onClick={() => setQty(line.id, line.qty - 1)}
                              aria-label="Decrease quantity"
                              className="flex h-8 w-8 items-center justify-center text-bronze transition-colors hover:text-ink"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-7 text-center text-[0.9rem] font-semibold text-ink">
                              {line.qty}
                            </span>
                            <button
                              onClick={() => setQty(line.id, line.qty + 1)}
                              aria-label="Increase quantity"
                              className="flex h-8 w-8 items-center justify-center text-bronze transition-colors hover:text-ink"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <p className="text-[0.95rem] font-bold text-ink">
                            {money(p.price * line.qty)}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="border-t border-line px-5 py-5">
              <div className="flex items-center justify-between">
                <p className="text-[0.92rem] text-bronze">Subtotal</p>
                <p className="font-display text-xl font-bold text-ink">
                  {money(subtotal)}
                </p>
              </div>
              <p className="mt-1 text-[0.8rem] text-bronze">
                Shipping is on us. Taxes calculated at checkout.
              </p>
              <Button
                className="mt-4 h-12 w-full rounded-lg bg-brass text-[0.98rem] font-semibold text-ink hover:bg-brass-bright"
                onClick={() => {
                  closeCart();
                  navigate("contact");
                }}
              >
                Start checkout
              </Button>
              <Separator className="my-4 bg-line" />
              <div className="space-y-2 text-[0.82rem] text-bronze">
                <p className="font-semibold text-ink">
                  Prefer to order by phone or email?
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-brass-deep" /> (423) 555 0119
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-brass-deep" /> orders@rustline.co
                </p>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
