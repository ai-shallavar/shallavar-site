export default function ProcessFlow() {
  const steps = [
    { icon: "search", label: "Discover", highlighted: false },
    { icon: "palette", label: "Design", highlighted: false },
    { icon: "code", label: "Build", highlighted: true },
    { icon: "bug_report", label: "Test", highlighted: false },
    { icon: "rocket_launch", label: "Deploy", highlighted: false },
  ];

  return (
    <section className="bg-surface-container-low rounded-3xl relative overflow-hidden py-20 md:py-24 px-4 sm:px-8">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0, 62, 199, 0.06) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
            Our Process
          </h2>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
            A systematic approach to predictable excellence.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center text-center space-y-4">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center z-10 relative transition-transform duration-300 ${
                  step.highlighted
                    ? "bg-primary-container text-on-primary shadow-md transform scale-110"
                    : "bg-surface-container-lowest shadow-sm text-primary border border-outline-variant/20"
                }`}
              >
                <span className="material-symbols-outlined text-2xl">{step.icon}</span>
              </div>
              <h4
                className={`font-headline font-bold text-lg ${
                  step.highlighted ? "text-primary" : "text-on-surface"
                }`}
              >
                {step.label}
              </h4>
              {i < steps.length - 1 && (
                <div className="hidden md:block h-px bg-outline-variant/30 flex-grow -mx-4 w-24" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
