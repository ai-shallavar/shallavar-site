"use client";

export default function LogoCarousel() {
  // Simple text-based brand logos - fast loading, no external dependencies
  const brands = [
    { name: "Google", color: "#4285F4" },
    { name: "AWS", color: "#FF9900" },
    { name: "Microsoft", color: "#00A4EF" },
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#868080" },
    { name: "Flutter", color: "#02569B" },
    { name: "Firebase", color: "#FFCA28" },
    { name: "Stripe", color: "#635BFF" },
    { name: "Shopify", color: "#96BF48" },
    { name: "WordPress", color: "#21759B" },
    { name: "Figma", color: "#F24E1E" },
    { name: "Vercel", color: "#121111" },
  ];

  // Triple for seamless loop
  const items = [...brands, ...brands, ...brands];

  return (
    <section className="relative py-12 bg-white overflow-hidden">
      {/* Fade edges */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
      
      <div className="relative">
        {/* Header */}
        <div className="text-center mb-8 px-4">
          <h2 className="font-headline text-2xl md:text-4xl font-bold text-gray-900">
            Trusted <span className="text-blue-600">Technologies</span>
          </h2>
        </div>

        {/* Single Row Carousel */}
        <div className="flex items-center overflow-hidden">
          <div 
            className="flex items-center gap-6 w-max"
            style={{ animation: 'scrollLeft 40s linear infinite' }}
          >
            {items.map((brand, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-32 h-16 bg-gray-50 rounded-lg flex-shrink-0 hover:bg-gray-100 transition-colors"
              >
                <span 
                  className="font-bold text-lg truncate px-2"
                  style={{ color: brand.color }}
                >
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}