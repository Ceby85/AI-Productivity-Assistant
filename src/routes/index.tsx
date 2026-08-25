import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  AlertTriangle,
  CalendarCheck,
  CheckCircle2,
  Coffee,
  Megaphone,
  Package,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import heroImage from "@/assets/hero-cafe.jpg";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  aiFeatures,
  customers,
  finalOutput,
  humanRule,
  marketing,
  model,
  operations,
  overview,
  plan,
  products,
  prompts,
  responsible,
  sections,
  swot,
} from "@/content/brief";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Third Space Coffee — AI Productivity Business Outline" },
      {
        name: "description",
        content:
          "A CAPACITI project outline: a South African coffee shop concept with an AI back-office assistant, engineered prompts, and responsible-AI safeguards.",
      },
      { property: "og:title", content: "Third Space Coffee — AI Productivity Business Outline" },
      {
        property: "og:description",
        content:
          "Business concept, AI assistant features, prompt engineering, responsible AI and a five-day build plan for a Pretoria coffee shop.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Brief,
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="label-eyebrow">{children}</p>;
}

function SectionShell({
  id,
  number,
  title,
  intro,
  children,
}: {
  id: string;
  number: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-14 md:py-20">
      <div className="mb-8 flex flex-col gap-2 md:mb-10">
        <Eyebrow>Section {number}</Eyebrow>
        <h2 className="text-3xl md:text-4xl">{title}</h2>
        {intro ? <p className="max-w-3xl text-muted-foreground">{intro}</p> : null}
      </div>
      {children}
    </section>
  );
}

function Bullets({ items, icon }: { items: string[]; icon?: "check" | "dot" }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
          {icon === "check" ? (
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-leaf" aria-hidden />
          ) : (
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InfoCard({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card className={`h-full border-border/70 bg-card shadow-soft ${className ?? ""}`}>
      <CardHeader className="pb-2">
        <CardTitle className="font-display text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

function DisclaimerNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex gap-3 rounded-xl border border-accent/30 bg-accent/8 p-4 text-sm text-foreground/80">
      <AlertTriangle className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
      <span>{children}</span>
    </p>
  );
}

function Brief() {
  const [activeFeature, setActiveFeature] = useState(0);
  const feature = aiFeatures[activeFeature] ?? aiFeatures[0]!;

  return (
    <div className="min-h-screen bg-background">
      <header className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Barista steaming milk behind the counter of a warm, plant-filled specialty coffee shop"
          width={1600}
          height={912}
          className="absolute inset-0 size-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-warm opacity-90 mix-blend-multiply"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="max-w-3xl text-primary-foreground">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide backdrop-blur-sm">
              <Coffee className="size-3.5" aria-hidden />
              CAPACITI AI Productivity Project · Business Outline
            </div>
            <h1 className="text-4xl leading-[1.05] md:text-6xl">{overview.name}</h1>
            <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85 md:text-xl">
              {overview.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Real-world use case", "7 AI features", "6 engineered prompts", "Human-approved"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-primary-foreground/12 px-3 py-1 text-xs font-medium text-primary-foreground/90"
                  >
                    {chip}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </header>

      <nav className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-5 py-2.5">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="shrink-0 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <span className="text-accent">{s.number}</span> {s.title}
            </a>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-5 pb-24">
        <SectionShell
          id="overview"
          number="01"
          title="Business Overview"
          intro={overview.concept}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard title="Mission">
              <p className="text-sm leading-relaxed text-foreground/85">{overview.mission}</p>
            </InfoCard>
            <InfoCard title="Vision">
              <p className="text-sm leading-relaxed text-foreground/85">{overview.vision}</p>
            </InfoCard>
            <InfoCard title="Business objectives">
              <Bullets items={overview.objectives} icon="check" />
            </InfoCard>
            <InfoCard title="Unique selling proposition">
              <Bullets items={overview.usp} />
            </InfoCard>
            <InfoCard title="The problem we're solving" className="md:col-span-2">
              <Bullets items={overview.problem} />
            </InfoCard>
          </div>
        </SectionShell>

        <SectionShell id="customers" number="02" title="Target Customers" intro={customers.primary}>
          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard title="Demographics">
              <Bullets items={customers.demographics} />
            </InfoCard>
            <InfoCard title="Needs & pain points">
              <Bullets items={customers.needs} />
            </InfoCard>
            <InfoCard title="Buying behaviour">
              <Bullets items={customers.behaviour} />
            </InfoCard>
            <InfoCard title="Why they'd choose us">
              <Bullets items={customers.whyUs} icon="check" />
            </InfoCard>
          </div>
        </SectionShell>

        <SectionShell
          id="products"
          number="03"
          title="Products & Services"
          intro="A deliberately short menu — no more than 30 lines — so stock turns fast and quality stays consistent."
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.groups.map((group) => (
              <InfoCard key={group.title} title={group.title}>
                <Bullets items={group.items} />
              </InfoCard>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="model" number="04" title="Business Model">
          <DisclaimerNote>
            All financial and volume figures anywhere in this outline are planning estimates and
            assumptions, not results or forecasts. No statistics are claimed as fact.
          </DisclaimerNote>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <InfoCard title="Main revenue streams">
              <Bullets items={model.revenue} />
            </InfoCard>
            <InfoCard title="Pricing approach">
              <p className="text-sm leading-relaxed text-foreground/85">{model.pricing}</p>
            </InfoCard>
            <InfoCard title="Customer purchasing patterns">
              <Bullets items={model.patterns} />
            </InfoCard>
            <InfoCard title="Additional revenue streams">
              <Bullets items={model.additional} />
            </InfoCard>
            <InfoCard title="Path to profitability" className="md:col-span-2">
              <Bullets items={model.profitability} icon="check" />
            </InfoCard>
          </div>
        </SectionShell>

        <SectionShell
          id="marketing"
          number="05"
          title="Marketing Strategy"
          intro={marketing.positioning}
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard title="Social media strategy">
              <Bullets items={marketing.social} />
            </InfoCard>
            <InfoCard title="Launch campaign">
              <Bullets items={marketing.launch} />
            </InfoCard>
            <InfoCard title="Promotions">
              <Bullets items={marketing.promotions} />
            </InfoCard>
            <InfoCard title="Loyalty strategy">
              <Bullets items={marketing.loyalty} />
            </InfoCard>
            <InfoCard title="Local partnerships">
              <Bullets items={marketing.partnerships} />
            </InfoCard>
            <InfoCard title="Retention strategy">
              <Bullets items={marketing.retention} icon="check" />
            </InfoCard>
          </div>
        </SectionShell>

        <SectionShell id="operations" number="06" title="Daily Operations">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard title="Staff roles">
              <Bullets items={operations.roles} />
            </InfoCard>
            <InfoCard title="Opening procedure">
              <Bullets items={operations.opening} />
            </InfoCard>
            <InfoCard title="Closing procedure">
              <Bullets items={operations.closing} />
            </InfoCard>
            <InfoCard title="Customer ordering process">
              <Bullets items={operations.ordering} />
            </InfoCard>
            <InfoCard title="Inventory management">
              <Bullets items={operations.inventory} />
            </InfoCard>
            <InfoCard title="Supplier management">
              <Bullets items={operations.suppliers} />
            </InfoCard>
            <InfoCard title="Daily task management">
              <Bullets items={operations.daily} />
            </InfoCard>
            <InfoCard title="Customer service process">
              <Bullets items={operations.service} />
            </InfoCard>
          </div>
        </SectionShell>

        <SectionShell
          id="ai"
          number="07"
          title="AI-Powered Productivity Assistant"
          intro="Seven features, three of them core to the prototype. Each one drafts work a person then checks and approves."
        >
          <div className="flex flex-wrap gap-2">
            {aiFeatures.map((f, i) => {
              const active = i === activeFeature;
              return (
                <button
                  key={f.name}
                  type="button"
                  onClick={() => setActiveFeature(i)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors ${
                    active
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-accent/50 hover:text-foreground"
                  }`}
                >
                  {i === 0 ? (
                    <CalendarCheck className="size-3.5" aria-hidden />
                  ) : i === 1 ? (
                    <Package className="size-3.5" aria-hidden />
                  ) : i === 2 ? (
                    <Megaphone className="size-3.5" aria-hidden />
                  ) : (
                    <Sparkles className="size-3.5" aria-hidden />
                  )}
                  {f.name.replace("AI ", "")}
                  {i < 3 ? (
                    <span className={active ? "opacity-80" : "text-accent"}>core</span>
                  ) : null}
                </button>
              );
            })}
          </div>

          <Card className="mt-6 border-border/70 shadow-lift">
            <CardHeader>
              <Eyebrow>Feature {activeFeature + 1}</Eyebrow>
              <CardTitle className="font-display text-2xl">{feature.name}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              <div className="space-y-5">
                <Field label="Business problem">{feature.problem}</Field>
                <Field label="AI solution">{feature.solution}</Field>
                <Field label="User input">{feature.input}</Field>
                <Field label="Productivity benefit">{feature.benefit}</Field>
                <Field label="Human validation">{feature.validation}</Field>
              </div>
              <div className="space-y-5">
                <div>
                  <Eyebrow>Example prompt</Eyebrow>
                  <pre className="mt-2 max-h-72 overflow-auto rounded-xl bg-espresso p-4 font-mono text-[0.78rem] leading-relaxed whitespace-pre-wrap text-crema">
                    {feature.prompt}
                  </pre>
                </div>
                <div>
                  <Eyebrow>Example AI response (illustrative)</Eyebrow>
                  <p className="mt-2 rounded-xl border border-border bg-secondary/60 p-4 text-sm leading-relaxed text-foreground/85">
                    {feature.response}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </SectionShell>

        <SectionShell
          id="prompts"
          number="08"
          title="Prompt Engineering"
          intro="Six production prompts, each specifying role, context, task, instructions, constraints and output format — plus what testing showed should change."
        >
          <Accordion type="single" collapsible defaultValue="p0" className="space-y-3">
            {prompts.map((p, i) => (
              <AccordionItem
                key={p.title}
                value={`p${i}`}
                className="rounded-xl border border-border bg-card px-5 shadow-soft"
              >
                <AccordionTrigger className="text-left font-display text-base hover:no-underline">
                  <span>
                    {p.title}
                    <span className="ml-3 text-xs font-normal text-muted-foreground">
                      {p.feature}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-4">
                      <Field label="Role">{p.role}</Field>
                      <Field label="Context">{p.context}</Field>
                      <Field label="Task">{p.task}</Field>
                      <Field label="Desired output format">{p.format}</Field>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Eyebrow>Specific instructions</Eyebrow>
                        <div className="mt-2">
                          <Bullets items={p.instructions} icon="check" />
                        </div>
                      </div>
                      <div>
                        <Eyebrow>Constraints</Eyebrow>
                        <div className="mt-2">
                          <Bullets items={p.constraints} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Separator className="my-5" />
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Why it works">{p.why}</Field>
                    <Field label="Improvement after testing">{p.improve}</Field>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SectionShell>

        <SectionShell
          id="responsible"
          number="09"
          title="Responsible AI"
          intro="Risks named, with a practical safeguard attached to each one — and a hard rule on human approval."
        >
          <div className="rounded-2xl border border-leaf/35 bg-leaf/8 p-5">
            <div className="flex gap-3">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-leaf" aria-hidden />
              <p className="text-sm leading-relaxed font-medium text-foreground/90">{humanRule}</p>
            </div>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {responsible.map((r) => (
              <Card key={r.risk} className="border-border/70 shadow-soft">
                <CardHeader className="pb-2">
                  <Badge variant="outline" className="w-fit border-destructive/40 text-destructive">
                    Risk
                  </Badge>
                  <CardTitle className="font-display text-lg">{r.risk}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm leading-relaxed text-muted-foreground">{r.detail}</p>
                  <div className="rounded-lg bg-secondary/70 p-3.5">
                    <Eyebrow>Safeguard</Eyebrow>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/85">
                      {r.safeguard}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="swot" number="10" title="SWOT Analysis">
          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard title="Strengths">
              <Bullets items={swot.strengths} icon="check" />
            </InfoCard>
            <InfoCard title="Weaknesses">
              <Bullets items={swot.weaknesses} />
            </InfoCard>
            <InfoCard title="Opportunities">
              <Bullets items={swot.opportunities} icon="check" />
            </InfoCard>
            <InfoCard title="Threats">
              <Bullets items={swot.threats} />
            </InfoCard>
          </div>
        </SectionShell>

        <SectionShell
          id="plan"
          number="11"
          title="Five-Day Implementation Plan"
          intro="The build follows the five-day development approach in the brief."
        >
          <ol className="space-y-4">
            {plan.map((d) => (
              <li
                key={d.day}
                className="rounded-2xl border border-border bg-card p-5 shadow-soft md:flex md:gap-8"
              >
                <div className="mb-3 md:mb-0 md:w-52 md:shrink-0">
                  <Eyebrow>{d.day}</Eyebrow>
                  <h3 className="mt-1 text-lg">{d.title}</h3>
                </div>
                <div className="flex-1">
                  <Bullets items={d.items} />
                </div>
              </li>
            ))}
          </ol>
        </SectionShell>

        <SectionShell
          id="final"
          number="12"
          title="Final Output"
          intro="The one-page summary for the presentation."
        >
          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard title="Business problem" className="md:col-span-2">
              <p className="text-sm leading-relaxed text-foreground/85">{finalOutput.problem}</p>
            </InfoCard>
            <InfoCard title="Proposed solution" className="md:col-span-2">
              <p className="text-sm leading-relaxed text-foreground/85">{finalOutput.solution}</p>
            </InfoCard>
            <InfoCard title="Target users">
              <Bullets items={finalOutput.users} />
            </InfoCard>
            <InfoCard title="AI features">
              <Bullets items={finalOutput.features} icon="check" />
            </InfoCard>
            <InfoCard title="Key prompts">
              <Bullets items={finalOutput.keyPrompts} />
            </InfoCard>
            <InfoCard title="Productivity improvements">
              <Bullets items={finalOutput.productivity} />
            </InfoCard>
            <InfoCard title="Responsible AI considerations">
              <Bullets items={finalOutput.responsible} icon="check" />
            </InfoCard>
            <InfoCard title="Expected business impact">
              <Bullets items={finalOutput.impact} />
            </InfoCard>
            <InfoCard title="Recommended prototype / demo" className="md:col-span-2">
              <Bullets items={finalOutput.demo} icon="check" />
            </InfoCard>
          </div>
          <div className="mt-6">
            <DisclaimerNote>
              This outline contains no invented statistics. Every quantity, saving and rate is
              described as an estimate, assumption or something to be measured from real trading
              data. Example AI responses are illustrative only.
            </DisclaimerNote>
          </div>
        </SectionShell>
      </main>

      <footer className="border-t border-border bg-secondary/50 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="flex items-center gap-2">
            <Users className="size-4" aria-hidden />
            {overview.name} · CAPACITI AI Productivity Project
          </p>
          <p>AI drafts. A human decides.</p>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Eyebrow>{label}</Eyebrow>
      <p className="mt-1.5 text-sm leading-relaxed text-foreground/85">{children}</p>
    </div>
  );
}
