export default function TrustStrip() {
  return (
    <div className="bg-surface-container-lowest rounded-2xl py-12 px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-surface-variant/50 text-center shadow-sm">
      {[
        { value: "250+", label: "Projects Delivered" },
        { value: "98%", label: "Happy Clients" },
        { value: "10+", label: "Years of Experience" },
        { value: "&lt;2h", label: "Response Time" },
      ].map((stat) => (
        <div key={stat.label} className="space-y-2 px-4">
          <div className="font-headline text-4xl font-extrabold text-primary">{stat.value}</div>
          <div className="font-label text-sm text-on-surface-variant uppercase tracking-wider">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
