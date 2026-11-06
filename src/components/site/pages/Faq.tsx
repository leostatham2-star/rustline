"use client";

import { MessageCircleQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS, IMG } from "../data";
import { Img, PageHero, Reveal } from "../Bits";
import { useRouter } from "../router";

export function Faq() {
  const { navigate } = useRouter();

  return (
    <main>
      <PageHero
        kicker="FAQ"
        title="Everything people ask before they order."
        copy="Rust, curves, depth, shipping, returns. If the answer you want is not here, call the shop and a person will pick up."
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <Accordion
              type="single"
              collapsible
              className="rounded-2xl border border-line bg-card px-6 shadow-sm"
            >
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`q-${i}`}
                  className={i === FAQS.length - 1 ? "border-b-0" : "border-line"}
                >
                  <AccordionTrigger className="text-left text-[1.02rem] font-semibold text-ink hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[0.94rem] leading-relaxed text-bronze">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.08}>
              <Img
                src={IMG.faqThumb}
                alt="Close up of weathering steel edging in a garden bed"
                className="aspect-[4/3] w-full rounded-2xl border border-line object-cover shadow-lg shadow-ink/10"
              />
            </Reveal>
            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-line bg-ink-deep p-7 text-ivory shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ivory/10">
                  <MessageCircleQuestion className="h-6 w-6 text-brass-soft" />
                </span>
                <h2 className="mt-4 font-display text-xl font-semibold">
                  Still stuck on something?
                </h2>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-ivory/70">
                  Send the question with a photo of the yard if you have one. We
                  answer within a business day, and we have talked plenty of
                  people off the fence.
                </p>
                <Button
                  onClick={() => navigate("contact")}
                  className="mt-5 h-11 rounded-lg bg-brass px-6 font-semibold text-ink hover:bg-brass-bright"
                >
                  Ask us directly
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
