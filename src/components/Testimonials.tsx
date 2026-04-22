import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Shallavar Technologies transformed our digital presence. Their attention to detail and technical expertise exceeded our expectations.",
      author: "Priya Sharma",
      role: "CEO, TechStart India",
      avatar: "PS",
    },
    {
      quote: "The mobile app they built for us increased our customer engagement by 300%. Professional team with deep technical knowledge.",
      author: "Rajesh Kumar",
      role: "Founder, FoodHub",
      avatar: "RK",
    },
    {
      quote: "From design to deployment, every step was handled with precision. Our dashboard system is now the backbone of our operations.",
      author: "Anita Patel",
      role: "CTO, MedConnect",
      avatar: "AP",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container mb-6">
          <Star className="w-4 h-4 text-primary fill-primary" />
          <span className="font-label text-sm font-semibold text-primary uppercase tracking-widest">Testimonials</span>
        </div>
        <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          What Our Clients Say
        </h2>
        <p className="text-on-surface-variant font-body text-xl max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say about working with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-surface-container-lowest rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-outline/10">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-on-surface-variant font-body text-base leading-relaxed mb-8">"{t.quote}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {t.avatar}
              </div>
              <div>
                <p className="font-headline font-bold text-on-surface">{t.author}</p>
                <p className="font-label text-sm text-on-surface-variant">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
