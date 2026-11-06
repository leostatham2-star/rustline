"use client";

import { ArrowRight, Check, Droplets, Hammer, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS, IMG, PRODUCTS, TESTIMONIALS } from "../data";
import { Img, Kicker, Reveal, SectionHead, Stars } from "../Bits";
import { useRouter } from "../router";
import { useCart } from "../cart";

const CATEGORY_CARDS = [
  {
    label: "Landscape Edging",
    from: 44,
    image: IMG.edging4,
    category: "edging" as const,
    blurb: "Straight runs, tight curves, and everything between.",
  },
  {
    label: "Tree Rings",
    from: 120,
    image: IMG.treeRing,
    category: "tree-rings" as const,
    blurb: "A clean circle around every trunk on the block.",
  },
  {
    label: "Raised Beds",
    from: 148,
    image: IMG.raisedSunset,
    category: "raised-beds" as const,
    blurb: "Steel beds that weather into the garden.",
  },
  {
    label: "Address Signs",
    from: 145,
    image: IMG.signAngle,
    category: "signs" as const,
    blurb: "Your numbers, plasma cut from solid plate.",
  },
];

const WHY = [
  {
    icon: Hammer,
    title: "Hammer it in and walk away",
    body: "No trenching, no stakes, no concrete. Set the strip on the line, hit it with a mallet, and clip the next one on. Most yards are done in an afternoon.",
  },
  {
    icon: Droplets,
    title: "The rust is the finish",
    body: "Weathering steel rusts on purpose. The patina seals the steel underneath it, so there is no paint to chip and nothing to redo in five years.",
  },
  {
    icon: Leaf,
    title: "Grass stops at the line",
    body: "A wall of steel stops runners, roots, and mulch from wandering. Trimming takes half the time because there is nothing to fight.",
  },
];

export function Home() {
  const { navigate } = useRouter();
  const { add } = useCart();
  const featured = PRODUCTS[0];

  return (
    <main>
      {/* FRONT SECTION — full bleed editorial hero */}
      <section className="relative overflow-hidden bg-ink-deep">
        <div aria-hidden="true" className="absolute inset-0">
          <img
            src={IMG.hero}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/80 to-ink-deep/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-transparent to-ink-deep/40" />
        </div>
        <div className="relative mx-auto flex min-h-[42rem] max-w-6xl flex-col justify-end px-4 pb-12 pt-32 sm:px-6 sm:pb-14 lg:min-h-[46rem]">
          <Reveal>
            <Kicker light>
              Weathering steel edging{" "}
              <span className="whitespace-nowrap">· Est. 2019</span>
            </Kicker>
            <h1 className="max-w-3xl font-display text-[2.9rem] font-medium leading-[1.04] tracking-tight text-ivory sm:text-6xl lg:text-[4.5rem]">
              The <em className="italic text-brass-soft">last edge</em> your
              yard will ever need.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/75">
              Rustline is solid steel edging you hammer in once. It weathers to
              a warm cinnamon patina, then holds that crisp line for decades.
              No paint, no plastic, no redoing it every spring.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button
                onClick={() => navigate("shop", "edging")}
                className="h-12 rounded-lg bg-brass px-8 text-[1.02rem] font-semibold text-ink hover:bg-brass-bright"
              >
                Shop steel edging
              </Button>
              <Button
                onClick={() => navigate("install")}
                variant="outline"
                className="h-12 rounded-lg border-ivory/30 bg-ivory/5 px-8 text-[1.02rem] font-semibold text-ivory backdrop-blur-sm hover:bg-ivory/15 hover:text-ivory"
              >
                See how it installs
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="mt-12 grid gap-x-8 gap-y-3 border-t border-ivory/15 pt-6 sm:grid-cols-3">
              {[
                "Free shipping, every order",
                "16 gauge solid steel",
                "Installs in an afternoon",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-[0.9rem] font-medium tracking-wide text-ivory/80"
                >
                  <Check className="h-4 w-4 shrink-0 text-brass" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-b border-line bg-ivory">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-4 py-9 sm:px-6 lg:grid-cols-4">
          {[
            ["14,000+", "yards edged since 2019"],
            ["60 days", "to change your mind"],
            ["2 to 5 days", "from order to doorstep"],
            ["1 shop dog", "named Biscuit, quality control"],
          ].map(([big, small], i) => (
            <Reveal key={big} delay={i * 0.06} className="text-center">
              <p className="font-display text-[1.7rem] font-semibold text-ink sm:text-3xl">
                {big}
              </p>
              <p className="mt-1 text-[0.85rem] text-bronze">{small}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHead
            kicker="The lineup"
            title="One line of steel. The whole yard."
            copy="Start with a straight run of edging. Wrap a ring around the oak. Frame a bed. Put your numbers on the corner post so the pizza guy finds you. It all matches, because it is all the same steel."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORY_CARDS.map((card, i) => (
              <Reveal key={card.label} delay={i * 0.07}>
                <button
                  onClick={() => navigate("shop", card.category)}
                  className="group block w-full overflow-hidden rounded-2xl border border-line bg-card text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/10"
                >
                  <span className="block aspect-[4/3.2] overflow-hidden">
                    <Img
                      src={card.image}
                      alt={card.label}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </span>
                  <span className="block p-4">
                    <span className="flex items-center justify-between">
                      <span className="font-display text-lg font-semibold text-ink">
                        {card.label}
                      </span>
                      <span className="text-[0.82rem] font-semibold text-brass-deep">
                        From ${card.from}
                      </span>
                    </span>
                    <span className="mt-1 block text-[0.85rem] leading-relaxed text-bronze">
                      {card.blurb}
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY STEEL */}
      <section className="border-y border-line bg-ivory texture-grain py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHead
            kicker="Why steel wins"
            title="Hammer it in once. Then forget it."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {WHY.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-card p-6 shadow-sm">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-brass-soft">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-[1.35rem] font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-bronze">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
            <div>
              <SectionHead
                kicker="Before and after"
                title="The plastic edge had a good run."
                copy="Almost every yard we visit has the same black plastic ring heaved out of the dirt somewhere. The steel goes in along that same line, and suddenly the whole yard reads as finished. That is the entire trick, and it lasts decades."
              />
              <Reveal delay={0.1}>
                <Button
                  onClick={() => navigate("shop", "edging")}
                  className="mt-7 h-12 rounded-lg bg-ink px-7 font-semibold text-bone hover:bg-ink-soft"
                >
                  Replace yours this weekend
                </Button>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                <figure>
                  <Img
                    src={IMG.before}
                    alt="Yard before, with worn plastic edging"
                    className="aspect-[4/4.4] w-full rounded-2xl border border-line object-cover"
                  />
                  <figcaption className="mt-2 text-center text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-bronze">
                    Before
                  </figcaption>
                </figure>
                <figure className="sm:mt-8">
                  <Img
                    src={IMG.after}
                    alt="Same yard after, with clean steel edging"
                    className="aspect-[4/4.4] w-full rounded-2xl border border-line object-cover shadow-lg shadow-ink/10"
                  />
                  <figcaption className="mt-2 text-center text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-brass-deep">
                    After
                  </figcaption>
                </figure>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT */}
      <section className="bg-ink-deep">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <Img
              src={featured.image}
              alt="Rustline 4 ft edging strips with connector clips"
              className="aspect-[4/3.2] w-full rounded-2xl object-cover shadow-2xl shadow-black/40"
            />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHead
              light
              kicker="Start here"
              title="The 4 ft strip. The one everybody starts with."
              copy="Four strips of 16 gauge weathering steel, sixteen feet of coverage, clips in the box. It is the piece that edges the bed, the path, and the driveway, usually in the same afternoon."
            />
            <Reveal delay={0.1}>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Covers 16 feet per pack",
                  "Connector clips included",
                  "Bends to gentle curves by hand",
                  "Free shipping, 60 day returns",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2.5 text-[0.95rem] text-ivory/80"
                  >
                    <Check className="h-4 w-4 text-brass" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  onClick={() => add(featured.id)}
                  className="h-12 rounded-lg bg-brass px-7 text-[1rem] font-semibold text-ink hover:bg-brass-bright"
                >
                  Add to cart, ${featured.price}
                </Button>
                <button
                  onClick={() => navigate("shop", "all")}
                  className="group inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-ivory/85 transition-colors hover:text-brass-soft"
                >
                  Browse everything
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INSTALL PREVIEW */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHead
              kicker="Install day"
              title="An afternoon of work for decades of clean lines."
            />
            <ol className="mt-8 space-y-5">
              {[
                {
                  n: "1",
                  t: "Stake the line",
                  d: "A garden hose on the ground is your template. Curves count.",
                },
                {
                  n: "2",
                  t: "Hammer the strips in",
                  d: "Two to three inches of steel stays above grade. A mallet is the only power tool involved.",
                },
                {
                  n: "3",
                  t: "Clip and backfill",
                  d: "Drop a clip in each joint, backfill both sides, and mulch up to the steel.",
                },
              ].map((step, i) => (
                <Reveal key={step.n} delay={i * 0.07}>
                  <li className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brass font-display text-[0.95rem] font-bold text-ink">
                      {step.n}
                    </span>
                    <div>
                      <p className="font-semibold text-ink">{step.t}</p>
                      <p className="mt-0.5 text-[0.92rem] leading-relaxed text-bronze">
                        {step.d}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={0.2}>
              <Button
                onClick={() => navigate("install")}
                variant="outline"
                className="mt-8 h-12 rounded-lg border-ink/25 px-7 font-semibold text-ink hover:bg-ink hover:text-bone"
              >
                Read the full guide
              </Button>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Img
              src={IMG.hammer}
              alt="Hammering a steel edging strip into the ground"
              className="aspect-[4/3.6] w-full rounded-2xl border border-line object-cover shadow-lg shadow-ink/10"
            />
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-line bg-ivory texture-grain py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHead
            center
            kicker="Word of mouth"
            title="What yard owners tell us."
          />
          <Reveal delay={0.05} className="mt-4 text-center">
            <Stars className="justify-center" />
            <p className="mt-2 text-[0.85rem] text-bronze">
              4.9 average across 2,300 reviews
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="flex h-full flex-col rounded-2xl border border-line bg-card p-6 shadow-sm">
                  <Stars />
                  <blockquote className="mt-4 flex-1 font-display text-[1.18rem] leading-relaxed text-ink">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 text-[0.88rem]">
                    <span className="font-semibold text-ink">{t.name}</span>
                    <span className="text-bronze">, {t.place}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHead
              kicker="Quick answers"
              title="The questions we get every day."
              copy="Most people want to know about the rust, the curves, and the shipping. Here is the short version."
            />
            <Reveal delay={0.1}>
              <Button
                onClick={() => navigate("faq")}
                variant="outline"
                className="mt-7 h-12 rounded-lg border-ink/25 px-7 font-semibold text-ink hover:bg-ink hover:text-bone"
              >
                All questions, answered
              </Button>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Accordion
              type="single"
              collapsible
              className="rounded-2xl border border-line bg-card px-6"
            >
              {FAQS.slice(0, 3).map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={f.q}
                  className={i === 2 ? "border-b-0" : "border-line"}
                >
                  <AccordionTrigger className="text-left text-[1.02rem] font-semibold text-ink hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[0.92rem] leading-relaxed text-bronze">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="border-t border-brass/40 bg-ink-deep">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20">
          <Reveal>
            <Kicker light>Rustline Steel Co.</Kicker>
            <h2 className="max-w-2xl font-display text-[2.2rem] font-medium leading-tight text-ivory sm:text-5xl">
              Ready for the cleanest line on the block?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1.02rem] leading-relaxed text-ivory/70">
              Order today, hammer it in this weekend, and stop thinking about
              edging for the next twenty years.
            </p>
            <div className="mt-8">
              <Button
                onClick={() => navigate("shop", "all")}
                className="h-12 rounded-lg bg-brass px-9 text-[1.02rem] font-semibold text-ink hover:bg-brass-bright"
              >
                Shop steel edging
              </Button>
            </div>
            <p className="mt-5 text-[0.85rem] text-ivory/60">
              Free shipping. 60 day returns. Ships from Tennessee.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
