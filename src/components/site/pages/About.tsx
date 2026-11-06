"use client";

import { Anvil, EyeOff, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMG } from "../data";
import { Img, PageHero, Reveal, SectionHead } from "../Bits";
import { useRouter } from "../router";

const STATS = [
  ["14,000+", "yards edged since 2019"],
  ["52 tons", "of steel cut every year"],
  ["1", "warehouse dog, Biscuit"],
];

const VALUES = [
  {
    icon: Layers,
    title: "Thick steel only",
    body: "16 gauge, no exceptions. Thin edging is the reason people think steel does not work, and we would rather lose a sale than ship it.",
  },
  {
    icon: Anvil,
    title: "The rust does the work",
    body: "No paint, no powder coat, nothing to chip. The patina is the finish, it renews itself, and it gets better looking every season.",
  },
  {
    icon: EyeOff,
    title: "Built to be forgotten",
    body: "Good edging should disappear into the yard and just hold the line. If you keep noticing yours, call us and we will make it right.",
  },
];

export function About() {
  const { navigate } = useRouter();

  return (
    <main>
      <PageHero
        kicker="About us"
        title="Two brothers, one torch, and a lot of crooked garden beds."
        copy="Rustline is a small steel shop in Chattanooga, Tennessee that makes one category of product and refuses to make it badly."
      />

      {/* Story */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
          <div className="space-y-5 text-[1.02rem] leading-relaxed text-foreground">
            <Reveal>
              <p>
                It started in 2019, in a welding shop that smelled like burnt
                flux and cheap coffee. Ethan ran a landscaping crew and came
                home every Friday complaining about the same two things.
                Plastic edging that popped out of the ground by August, and the
                thin steel edging from the big box stores that waved like a
                ribbon before the first summer was over.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                His brother Sam welded structural steel for a living and figured
                the problem was never the material. It was the gauge. So one
                Sunday they cut a run of 16 gauge weathering steel strips on the
                shop floor, hammered them into a client&rsquo;s front bed, and
                drove home. Three neighbors called that same week asking what
                the edge was made of and where they could buy it.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Six years later the same shop cuts edging strips, tree rings,
                raised beds, and address signs from the same steel, and every
                order ships free from the same warehouse. The strips still go
                through Sam&rsquo;s torch line. Biscuit the shop dog still
                inspects every pallet, usually by sleeping on it.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-display text-xl font-medium leading-relaxed text-ink">
                We are not trying to be a garden brand. We are trying to be the
                last edging company you ever think about.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:sticky lg:top-36">
            <Img
              src={IMG.garden}
              alt="A yard edged in weathering steel"
              className="aspect-[4/4.6] w-full rounded-2xl border border-line object-cover shadow-lg shadow-ink/10"
            />
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-line bg-ink-deep">
        <div className="mx-auto grid max-w-6xl gap-y-8 px-4 py-12 sm:px-6 md:grid-cols-3">
          {STATS.map(([big, small], i) => (
            <Reveal key={big} delay={i * 0.07} className="text-center">
              <p className="font-display text-4xl font-semibold text-ivory">
                {big}
              </p>
              <p className="mt-2 text-[0.9rem] text-ivory/65">{small}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHead
            center
            kicker="What we believe"
            title="Three rules from the shop floor."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-card p-6 shadow-sm">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brass-soft text-brass-deep">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-bronze">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="mt-12 text-center">
              <Button
                onClick={() => navigate("shop", "all")}
                className="h-12 rounded-lg bg-brass px-8 text-[1rem] font-semibold text-ink hover:bg-brass-bright"
              >
                See what we make
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
