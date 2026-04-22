"use client";

import { Lightbulb, Palette, Code2, CheckCircle2, Rocket } from "lucide-react";

export default function ProcessFlow() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Discover",
      description: "Deep dive into your goals and requirements.",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Crafting wireframes and visual designs.",
    },
    {
      icon: Code2,
      title: "Build",
      description: "Pixel-perfect development & integration.",
      highlighted: true,
    },
    {
      icon: CheckCircle2,
      title: "Test",
      description: "Rigorous QA and quality assurance.",
    },
    {
      icon: Rocket,
      title: "Deploy",
      description: "Launch and monitor your product.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container mb-6">
          <Code2 className="w-4 h-4 text-primary" />
          <span className="font-label text-sm font-semibold text-primary uppercase tracking-widest">How We Work</span>
        </div>
        <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Our Process
        </h2>
        <p className="text-on-surface-variant font-body text-xl max-w-2xl mx-auto">
          A systematic approach to delivering premium digital experiences.
        </p>
      </div>

      <div className="relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
          {steps.map((Step, i) => (
            <div key={i} className="flex flex-col items-center text-center flex-1 relative">
              <div
                className={`${
                  Step.highlighted
                    ? "bg-gradient-to-br from-primary to-blue-600 text-white shadow-xl ring-4 ring-primary/20"
                    : "bg-surface-container text-on-surface border-2 border-outline/15"
                } rounded-full w-20 h-20 flex items-center justify-center mb-6 transition-all duration-300 hover:scale-110`}
              >
                <Step.icon className="w-8 h-8" />
              </div>
              <div>
                <h4 className={`font-headline font-bold text-lg mb-2 ${Step.highlighted ? "text-primary" : "text-on-surface"}`}>
                  {String(i + 1).padStart(2, '0')} — {Step.title}
                </h4>
                <p className="text-sm text-on-surface-variant max-w-[160px]">{Step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
