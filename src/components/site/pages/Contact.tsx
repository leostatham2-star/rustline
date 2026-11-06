"use client";

import { useState } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHero, Reveal } from "../Bits";
import { IMG } from "../data";
import { Img } from "../Bits";

const TOPICS = [
  "Order help",
  "Installation question",
  "Wholesale or landscaping crew",
  "Something else",
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<string>("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Fill in the name, email, and message so we can reply.");
      return;
    }
    if (!email.includes("@")) {
      setError("That email does not look right.");
      return;
    }
    setError("");
    setSent(true);
  };

  return (
    <main>
      <PageHero
        kicker="Contact"
        title="Talk to a human about your yard."
        copy="A real person in Chattanooga reads every message and answers within one business day. Usually faster, unless Biscuit is blocking the door."
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <Reveal>
            <div className="rounded-2xl border border-line bg-card p-6 shadow-sm sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center gap-4 py-10 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brass-soft">
                    <CheckCircle2 className="h-8 w-8 text-brass-deep" />
                  </span>
                  <h2 className="font-display text-2xl font-semibold text-ink">
                    Got it, {name.trim().split(" ")[0]}.
                  </h2>
                  <p className="max-w-sm text-[0.95rem] leading-relaxed text-bronze">
                    Your message landed in the shop inbox. We answer everything
                    within one business day, and most of it the same afternoon.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSent(false);
                      setName("");
                      setEmail("");
                      setTopic("");
                      setMessage("");
                    }}
                    className="mt-2 rounded-lg border-ink/25 font-semibold text-ink hover:bg-ink hover:text-bone"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <h2 className="font-display text-2xl font-semibold text-ink">
                    Send us a note
                  </h2>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="c-name" className="text-ink">
                        Your name
                      </Label>
                      <Input
                        id="c-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jordan Miller"
                        className="h-11 rounded-lg border-input bg-bone"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="c-email" className="text-ink">
                        Email
                      </Label>
                      <Input
                        id="c-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@yourmail.com"
                        className="h-11 rounded-lg border-input bg-bone"
                      />
                    </div>
                  </div>
                  <div className="mt-5 space-y-2">
                    <Label htmlFor="c-topic" className="text-ink">
                      What is it about?
                    </Label>
                    <Select value={topic} onValueChange={setTopic}>
                      <SelectTrigger
                        id="c-topic"
                        className="h-11 w-full rounded-lg border-input bg-bone"
                      >
                        <SelectValue placeholder="Pick one, or leave it alone" />
                      </SelectTrigger>
                      <SelectContent>
                        {TOPICS.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="mt-5 space-y-2">
                    <Label htmlFor="c-message" className="text-ink">
                      Message
                    </Label>
                    <Textarea
                      id="c-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about the yard, the order, or the problem. Photos help, paste a link if you have one."
                      className="min-h-36 rounded-lg border-input bg-bone"
                    />
                  </div>
                  {error ? (
                    <p className="mt-3 rounded-lg bg-destructive/10 px-4 py-2.5 text-[0.88rem] font-medium text-destructive">
                      {error}
                    </p>
                  ) : null}
                  <Button
                    type="submit"
                    className="mt-6 h-12 w-full rounded-lg bg-brass text-[1rem] font-semibold text-ink hover:bg-brass-bright sm:w-auto sm:px-10"
                  >
                    Send message
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info */}
          <div className="space-y-6">
            <Reveal delay={0.08}>
              <Img
                src={IMG.sign}
                alt="A steel address sign mounted in a yard"
                className="aspect-[4/2.9] w-full rounded-2xl border border-line object-cover shadow-lg shadow-ink/10"
              />
            </Reveal>
            <Reveal delay={0.12}>
              <div className="space-y-4 rounded-2xl border border-line bg-card p-6 shadow-sm">
                <a
                  href="mailto:hello@rustline.co"
                  className="flex items-center gap-3.5 transition-colors hover:text-brass-deep"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink text-brass-soft">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[0.8rem] font-semibold uppercase tracking-wide text-bronze">
                      Email
                    </span>
                    <span className="block text-[0.95rem] font-semibold text-ink">
                      hello@rustline.co
                    </span>
                  </span>
                </a>
                <a
                  href="tel:+14235550119"
                  className="flex items-center gap-3.5 transition-colors hover:text-brass-deep"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink text-brass-soft">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[0.8rem] font-semibold uppercase tracking-wide text-bronze">
                      Phone
                    </span>
                    <span className="block text-[0.95rem] font-semibold text-ink">
                      (423) 555 0119
                    </span>
                  </span>
                </a>
                <div className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink text-brass-soft">
                    <Clock className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[0.8rem] font-semibold uppercase tracking-wide text-bronze">
                      Hours
                    </span>
                    <span className="block text-[0.95rem] font-semibold text-ink">
                      Monday to Friday, 8 to 5 Eastern
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink text-brass-soft">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[0.8rem] font-semibold uppercase tracking-wide text-bronze">
                      The shop
                    </span>
                    <span className="block text-[0.95rem] font-semibold text-ink">
                      The old weld shop on Riverfront Parkway, Chattanooga,
                      Tennessee
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
