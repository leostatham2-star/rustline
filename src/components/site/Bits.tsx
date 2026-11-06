"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Img({
  src,
  alt,
  className,
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      className={className}
    />
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Kicker({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={cn(
        "mb-3 text-[0.72rem] font-bold uppercase tracking-[0.26em]",
        light ? "text-brass-soft" : "text-brass-deep"
      )}
    >
      {children}
    </p>
  );
}

export function Stars({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#c09a3e] text-[#c09a3e]" />
      ))}
    </span>
  );
}

export function SectionHead({
  kicker,
  title,
  copy,
  light = false,
  center = false,
}: {
  kicker: string;
  title: string;
  copy?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-2xl", center && "mx-auto text-center")}>
      <Kicker light={light}>{kicker}</Kicker>
      <h2
        className={cn(
          "font-display text-[2.1rem] font-semibold leading-[1.12] tracking-tight sm:text-[2.5rem]",
          light ? "text-ivory" : "text-ink"
        )}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={cn(
            "mt-4 text-[1.02rem] leading-relaxed",
            light ? "text-ivory/70" : "text-bronze"
          )}
        >
          {copy}
        </p>
      ) : null}
    </Reveal>
  );
}

export function PageHero({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: string;
  copy?: string;
}) {
  return (
    <section className="border-b border-line bg-ivory texture-grain">
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-6 sm:pt-16">
        <Reveal>
          <Kicker>{kicker}</Kicker>
          <h1 className="max-w-3xl font-display text-[2.4rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {copy ? (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bronze">
              {copy}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
