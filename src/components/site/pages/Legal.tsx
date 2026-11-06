"use client";

import { PageHero, Reveal } from "../Bits";

type Section = { heading: string; body: string[] };

const PRIVACY: Section[] = [
  {
    heading: "What we collect",
    body: [
      "When you place an order we collect your name, shipping address, email, and phone number so the steel actually shows up at your house. When you email or message us, we keep the conversation so we can help you faster next time.",
      "We collect basic usage data like which pages get visited and which products get viewed. It is aggregated and anonymized, and it tells us things like which strip size deserves the front page.",
    ],
  },
  {
    heading: "What we do with it",
    body: [
      "Order information goes to our shipping carrier and payment processor, and to nobody else. We do not sell, rent, or trade personal information. That has been true since the first strip left the shop and it will stay true.",
      "If you join the email list we send about one message a month. Every message has an unsubscribe link that works the first time you click it.",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "The site uses a small number of cookies to keep your cart intact between visits and to understand traffic. You can clear or block cookies in your browser whenever you like. The only cost is that the cart forgets you.",
    ],
  },
  {
    heading: "Your data, your call",
    body: [
      "Want a copy of what we have, or want it deleted? Email hello@rustline.co and we will take care of it within a week. Shopping data we are legally required to keep, like tax records, is the only exception.",
    ],
  },
];

const TERMS: Section[] = [
  {
    heading: "Orders and payment",
    body: [
      "Prices are in US dollars and include nothing hidden. Shipping is free on every order within the lower 48 states. Orders leave the warehouse within two business days and tracking lands in your inbox the moment the box moves.",
      "Address signs are cut to order, so they ship in about a week. Everything else ships in 2 to 5 days.",
    ],
  },
  {
    heading: "Returns",
    body: [
      "You have 60 days from delivery to send anything back for a full refund. The steel needs to be unused and in resellable shape. If a piece arrives bent, short, or wrong, we ship a replacement immediately and do not ask for anything back.",
      "Refunds land on the original payment method within five business days of the return reaching the warehouse.",
    ],
  },
  {
    heading: "The product itself",
    body: [
      "Weathering steel rusts on purpose. The patina is the finish, not a defect, and slight variation in color from piece to piece is part of the material. We guarantee the steel against manufacturing defects for as long as you own it.",
      "Staining on adjacent concrete during the first weathering months is a known trait of the material, not a flaw. Keep fresh strips a couple of inches off pale concrete if that matters to your project.",
    ],
  },
  {
    heading: "The honest fine print",
    body: [
      "This site describes real products as accurately as we can, and we fix mistakes the moment we find them. Nothing here is legal, engineering, or landscaping advice for your specific site. Installation is your call and your mallet.",
      "Questions about any of this go to hello@rustline.co. A person answers.",
    ],
  },
];

export function Legal({ kind }: { kind: "privacy" | "terms" }) {
  const isPrivacy = kind === "privacy";
  const sections = isPrivacy ? PRIVACY : TERMS;

  return (
    <main>
      <PageHero
        kicker="The legal bit"
        title={isPrivacy ? "Privacy Policy" : "Terms of Service"}
        copy={
          isPrivacy
            ? "Written to be read, not skimmed past. Last updated March 2026."
            : "The plain English version. Last updated March 2026."
        }
      />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-9">
            {sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 0.04}>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-ink">
                    {i + 1}. {s.heading}
                  </h2>
                  {s.body.map((p) => (
                    <p
                      key={p.slice(0, 32)}
                      className="mt-3 text-[0.98rem] leading-relaxed text-foreground/85"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
