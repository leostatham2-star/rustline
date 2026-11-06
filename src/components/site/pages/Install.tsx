"use client";

import { Check, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HEIGHT_GUIDE, IMG, INSTALL_STEPS, TOOLS } from "../data";
import { Img, PageHero, Reveal, SectionHead } from "../Bits";
import { useRouter } from "../router";

export function Install() {
  const { navigate } = useRouter();

  return (
    <main>
      <PageHero
        kicker="Installation guide"
        title="An afternoon of work for decades of clean lines."
        copy="No trencher, no concrete, no pro required. If you can swing a mallet and follow a garden hose, you can edge your yard with steel."
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr]">
          {/* Steps */}
          <div>
            <SectionHead
              kicker="The whole job"
              title="Five steps, in this order."
            />
            <ol className="mt-8 space-y-6">
              {INSTALL_STEPS.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.05}>
                  <li className="flex gap-4 rounded-2xl border border-line bg-card p-5 shadow-sm">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brass font-display text-[1.05rem] font-bold text-ink">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-bronze">
                        {step.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>

            {/* Tip callout */}
            <Reveal delay={0.1}>
              <div className="mt-8 rounded-2xl border border-brass/40 bg-brass-soft p-5">
                <p className="font-display text-lg font-semibold text-brass-deep">
                  The two mistakes everybody makes
                </p>
                <ul className="mt-2.5 space-y-2 text-[0.92rem] leading-relaxed text-foreground">
                  <li className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-deep" />
                    Hammering the strip flush with the ground. Leave two to
                    three inches above grade or the mower will find it.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-deep" />
                    Skipping the clips. The joint is where soil heaves pries a
                    run apart, and a two dollar clip is the whole fix.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Aside: image + tools */}
          <div className="space-y-8">
            <Reveal delay={0.1} className="lg:sticky lg:top-36">
              <Img
                src={IMG.videoThumb}
                alt="Steel edging being installed along a garden bed"
                className="aspect-[4/3] w-full rounded-2xl border border-line object-cover shadow-lg shadow-ink/10"
              />
              <p className="mt-2 text-center text-[0.8rem] text-bronze">
                The first strip goes in. The rest of the run goes faster.
              </p>

              <div className="mt-6 rounded-2xl border border-line bg-card p-6 shadow-sm">
                <p className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
                  <Wrench className="h-5 w-5 text-brass-deep" />
                  What you need
                </p>
                <ul className="mt-3.5 space-y-2.5">
                  {TOOLS.map((tool) => (
                    <li
                      key={tool}
                      className="flex items-center gap-2.5 text-[0.92rem] text-foreground"
                    >
                      <Check className="h-4 w-4 shrink-0 text-brass-deep" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Height guide */}
      <section className="border-y border-line bg-ivory texture-grain py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHead
            center
            kicker="Pick a height"
            title="How tall should the wall be?"
            copy="All strips are the same steel. The only decision is how much of it shows above grade."
          />
          <Reveal delay={0.1}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-card shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="border-line bg-secondary hover:bg-secondary">
                    <TableHead className="text-[0.8rem] font-bold uppercase tracking-wide text-ink">
                      Height
                    </TableHead>
                    <TableHead className="text-[0.8rem] font-bold uppercase tracking-wide text-ink">
                      Best for
                    </TableHead>
                    <TableHead className="text-[0.8rem] font-bold uppercase tracking-wide text-ink">
                      Our take
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {HEIGHT_GUIDE.map((row) => (
                    <TableRow key={row.height} className="border-line">
                      <TableCell className="font-display text-[1.05rem] font-bold text-brass-deep">
                        {row.height}
                      </TableCell>
                      <TableCell className="text-[0.92rem] text-foreground">
                        {row.use}
                      </TableCell>
                      <TableCell className="text-[0.92rem] text-bronze">
                        {row.note}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-ink">
              Got the line staked out? Get the steel.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[1rem] leading-relaxed text-bronze">
              Strips, clips, and kits ship free and land in 2 to 5 days.
            </p>
            <Button
              onClick={() => navigate("shop", "edging")}
              className="mt-7 h-12 rounded-lg bg-brass px-8 text-[1rem] font-semibold text-ink hover:bg-brass-bright"
            >
              Shop edging strips
            </Button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
