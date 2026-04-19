export default function CTA() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-container/10 via-primary/5 to-transparent py-24 px-8">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-fixed/30 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-container/20 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
        <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">
          Ready to build something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-primary">
            extraordinary
          </span>
          ?
        </h2>
        <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
          Whether you need a stunning website, a mobile app, or a complete digital strategy — we&apos;re here to turn your vision into reality.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="/contact"
            className="bg-gradient-to-br from-primary-container to-primary text-on-primary rounded-full px-8 py-4 font-label font-semibold shadow-[0_12px_32px_rgba(0,62,199,0.25)] hover:-translate-y-1 transition-all duration-300 ease-out-expo text-lg"
          >
            Get Free Consultation
          </a>
          <a
            href="/services"
            className="rounded-full px-8 py-4 font-label font-semibold text-primary border border-outline-variant/30 hover:bg-surface-container-low transition-all duration-300 ease-out-expo text-lg"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
