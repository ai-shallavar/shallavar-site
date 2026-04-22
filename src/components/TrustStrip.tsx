export default function TrustStrip() {
  const stats = [
    { value: "250+", label: "Projects Delivered" },
    { value: "98%", label: "Happy Clients" },
    { value: "10+", label: "Years Exp." },
    { value: "<2h", label: "Response Time" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 relative z-20 -mt-16">
      <div className="bg-surface-container-lowest rounded-3xl py-12 px-8 grid grid-cols-2 md:grid-cols-4 gap-8 shadow-premium border-border/30 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="space-y-2">
            <div className="font-headline text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">{stat.value}</div>
            <div className="font-label text-sm text-on-surface-variant uppercase tracking-widest font-semibold">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}