import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  TrendingUp,
  Code2,
  Palette,
  Smartphone,
  Rocket,
  Cloud,
  ArrowLeft,
  Clock,
  Calendar,
  ChevronRight,
  Share2,
} from "lucide-react";

interface ArticleData {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageGradient: string;
  icon: React.ReactNode;
  content: { type: "paragraph" | "heading" | "list"; content: string | string[] }[];
}

const articles: Record<string, ArticleData> = {
  "the-future-of-digital-excellence": {
    slug: "the-future-of-digital-excellence",
    category: "Digital Strategy",
    title: "The Future of Digital Excellence: Why Premium Design Matters in 2026",
    excerpt: "In a world where first impressions happen in milliseconds, your digital presence isn't just a representation of your brand — it is your brand.",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    imageGradient: "from-blue-500 to-cyan-400",
    icon: <TrendingUp className="w-6 h-6" />,
    content: [
      { type: "heading", content: "The Millisecond Impression" },
      { type: "paragraph", content: "In a world where first impressions happen in milliseconds, your digital presence isn't just a representation of your brand — it is your brand. When potential customers land on your website or interact with your mobile app, they form an opinion about your credibility, quality, and trustworthiness before they've read a single word of copy." },
      { type: "paragraph", content: "Research from MIT's Cognitive Science Lab shows that users make subconscious judgments about a website's trustworthiness within 50 milliseconds. That's faster than the blink of an eye. In those fleeting moments, users are processing visual hierarchy, color harmony, typography quality, spacing consistency, and micro-interaction polish." },
      { type: "heading", content: "Why Premium Design Separates Market Leaders" },
      { type: "paragraph", content: "The companies dominating their markets in 2026 share a common trait: they treat design not as decoration, but as a core business function. Apple, Stripe, Linear — these companies understand that every pixel communicates value. Every animation tells a story. Every interaction builds (or erodes) trust." },
      { type: "list", content: ["Visual hierarchy that guides users naturally to conversion points", "Consistent design systems that build recognition and trust across all touchpoints", "Performance-first thinking where beauty never compromises speed", "Accessibility baked in from day one, not bolted on as an afterthought", "Micro-interactions that delight without distracting from core tasks"] },
      { type: "heading", content: "The Engineering Side of Premium Design" },
      { type: "paragraph", content: "Premium design isn't just about aesthetics — it's equally about engineering excellence. The modern web demands products that load instantly, work flawlessly across devices, and scale gracefully under traffic spikes. Frameworks like Next.js have raised the bar, making server-side rendering, image optimization, and code splitting standard rather than exceptional." },
      { type: "paragraph", content: "The teams that win in 2026 are those who can marry beautiful design with rock-solid engineering. They use component-driven development, design tokens for consistency, and automated testing to ensure quality at every scale. They understand that technical debt is just as costly as design debt." },
      { type: "heading", content: "What This Means for Your Business" },
      { type: "paragraph", content: "If your digital products feel dated, inconsistent, or slow, you're leaving money on the table. The good news: it's never too late to elevate your digital experience. Start by auditing your current touchpoints against the standards above. Identify the gaps between what you offer and what your design communicates." },
      { type: "paragraph", content: "The companies that invest in premium design and engineering today will be the ones your customers remember tomorrow. The question isn't whether you can afford to — it's whether you can afford not to." },
    ],
  },
  "why-modern-tech-stacks": {
    slug: "why-modern-tech-stacks",
    category: "Technology",
    title: "Why Modern Tech Stacks Are the Backbone of Scalable Digital Products",
    excerpt: "From React to Next.js, the tools we choose shape what's possible.",
    date: "Feb 3, 2026",
    readTime: "5 min read",
    imageGradient: "from-violet-500 to-purple-400",
    icon: <Code2 className="w-6 h-6" />,
    content: [
      { type: "heading", content: "Tools Shape Possibility" },
      { type: "paragraph", content: "The tools and frameworks we choose don't just make development easier — they fundamentally shape what's possible. A decade ago, building a fast, SEO-friendly web application required complex server-side rendering setups and manual optimization. Today, modern frameworks handle much of this complexity out of the box." },
      { type: "heading", content: "The React Ecosystem Advantage" },
      { type: "paragraph", content: "React's component model changed how developers think about user interfaces. Instead of building pages, we build composable, testable, reusable components. This shift isn't just a development convenience — it's a force multiplier for team productivity and product quality." },
      { type: "list", content: ["Component-driven architecture enables parallel development across teams", "Huge ecosystem of pre-built, well-maintained libraries", "Strong typing with TypeScript catches bugs before they reach production", "DevTools and debugging ecosystems that save hours per week"] },
      { type: "heading", content: "Next.js: The Full-Stack Framework" },
      { type: "paragraph", content: "Next.js has become the default React framework for production applications. Its hybrid rendering model — supporting static generation, server-side rendering, and client-side interactivity in a single application — gives developers the right tool for every page. The App Router, Server Components, and streaming SSR represent the cutting edge of web development." },
      { type: "paragraph", content: "For businesses, this translates to faster load times (critical for SEO and conversion), better Core Web Vitals scores, and the ability to handle traffic spikes without infrastructure headaches. The framework handles caching, image optimization, font loading, and API routes so teams can focus on product logic." },
      { type: "heading", content: "The TypeScript Difference" },
      { type: "paragraph", content: "TypeScript's static typing catches entire categories of runtime errors at compile time. For teams building complex applications, this means fewer production bugs, better code documentation through types, and easier onboarding for new developers. The upfront investment in typing pays exponential dividends as the codebase grows." },
      { type: "paragraph", content: "Modern tooling like Turbopack and Vite makes the development experience lightning-fast, meaning more iterations per day, faster feedback loops, and ultimately better products. In 2026, the gap between teams using modern stacks and legacy approaches isn't just technical — it's a competitive advantage." },
    ],
  },
  "editorial-design-digital": {
    slug: "editorial-design-digital",
    category: "Design",
    title: "Editorial Design: Applying Print Luxury to Digital Experiences",
    excerpt: "The most successful digital products don't feel like products. They feel like curated experiences.",
    date: "Feb 20, 2026",
    readTime: "7 min read",
    imageGradient: "from-pink-500 to-rose-400",
    icon: <Palette className="w-6 h-6" />,
    content: [
      { type: "heading", content: "The Editorial Mindset" },
      { type: "paragraph", content: "Think about your favorite high-end magazine. The way it balances white space, the deliberate rhythm of full-bleed images and text columns, the tactile pleasure of well-chosen typography — these aren't accidents. They're the result of meticulous editorial design decisions made by a team whose entire job is to make information feel beautiful." },
      { type: "paragraph", content: "The most successful digital products apply the same philosophy. Not by mimicking print layouts on screens, but by internalizing the editorial mindset: every element earns its place, every transition serves a purpose, and the overall experience feels curated rather than assembled." },
      { type: "heading", content: "Typography as Experience" },
      { type: "paragraph", content: "Editorial design teaches us that typography isn't just about readability — it's about mood, personality, and hierarchy. The difference between a generic sans-serif and a carefully selected display font can be the difference between a website that feels commodity-grade and one that feels intentional." },
      { type: "list", content: ["Use display fonts for hero sections and key moments to establish personality", "Reserve body text for highly-readable, tested typefaces with excellent line-height", "Create typographic scale that guides the eye through content hierarchy", "Use weight and size contrast — not color — as your primary hierarchy signal"] },
      { type: "heading", content: "White Space as a Luxury Signal" },
      { type: "paragraph", content: "Cheap products cram information. Premium products breathe. Editorial design's master lesson is that white space isn't empty — it's a powerful design element that signals confidence and guides attention. Every pixel of white space around your key message is an investment in its impact." },
      { type: "paragraph", content: "When you give your content room to breathe, you're not wasting screen real estate — you're increasing the signal-to-noise ratio. Users can find what they need faster, understand it more clearly, and associate that clarity with your brand's quality." },
      { type: "heading", content: "Narrative Flow Over Navigation" },
      { type: "paragraph", content: "Magazines tell stories. They don't just present information — they sequence it to create emotional momentum. The best digital products do the same: they guide users through a carefully choreographed journey where each section builds toward the next, creating a sense of narrative rather than requiring users to navigate a maze of links." },
      { type: "paragraph", content: "This doesn't mean sacrificing navigability. It means designing primary flows that feel like stories — onboarding, activation, key workflows — while still providing escape hatches for power users. The editorial approach makes every user feel like the product was designed specifically for them." },
    ],
  },
  "native-vs-cross-platform": {
    slug: "native-vs-cross-platform",
    category: "Mobile Development",
    title: "Native vs. Cross-Platform: Choosing the Right Mobile Strategy",
    excerpt: "Your mobile strategy can make or break your market penetration.",
    date: "Mar 8, 2026",
    readTime: "8 min read",
    imageGradient: "from-emerald-500 to-teal-400",
    icon: <Smartphone className="w-6 h-6" />,
    content: [
      { type: "heading", content: "The Mobile Decision That Shapes Everything" },
      { type: "paragraph", content: "Choosing how to build your mobile application is one of the most consequential technical decisions a product team will make. It affects development speed, performance quality, team composition, long-term maintenance costs, and even your business model. There's no universally 'right' answer — but there is a right answer for your specific situation." },
      { type: "heading", content: "Native Development: The Gold Standard for Performance" },
      { type: "paragraph", content: "Native iOS (Swift/SwiftUI) and Android (Kotlin/Jetpack Compose) development remains the gold standard for performance, access to device features, and user experience polish. Native apps have direct access to hardware APIs, can implement complex animations at 120fps, and feel instantly responsive because they're compiled to machine code." },
      { type: "list", content: ["Maximum performance for compute-intensive tasks (games, AR, video editing)", "Full access to latest platform features on day one of OS releases", "Best-in-class animations and gesture handling", "App Store optimization with platform-specific features like widgets and deep linking"] },
      { type: "heading", content: "Cross-Platform: The Efficiency Play" },
      { type: "paragraph", content: "Flutter and React Native have closed the gap significantly. Flutter, Google's UI toolkit compiled to native ARM code, delivers performance that's nearly indistinguishable from native for most use cases. React Native benefits from the massive JavaScript ecosystem and is now powered by the new architecture (Fabric + TurboModules) for improved performance." },
      { type: "paragraph", content: "Cross-platform shines when you need to reach both iOS and Android audiences quickly with a single team. The code sharing rates of 70-95% mean faster iteration cycles, lower headcount requirements, and consistent behavior across platforms. For most business apps — e-commerce, social, productivity, content — the difference is imperceptible to end users." },
      { type: "heading", content: "Making the Right Choice" },
      { type: "paragraph", content: "Choose native when: performance is your primary differentiator, you're building a camera/video/GPU-intensive app, or you need the absolute deepest platform integration. Choose cross-platform when: speed to market matters, you have a single team, your app is data/UI-heavy rather than compute-heavy, or you want consistent experience across platforms." },
      { type: "paragraph", content: "Many successful products start cross-platform and add native modules for performance-critical paths as they scale. This hybrid approach gives you the best of both worlds: rapid development with targeted native optimization where it matters most." },
    ],
  },
  "core-web-vitals-seo": {
    slug: "core-web-vitals-seo",
    category: "SEO & Performance",
    title: "Core Web Vitals: The Invisible Architecture of SEO Success",
    excerpt: "Google's Core Web Vitals have fundamentally changed how we think about web performance.",
    date: "Mar 22, 2026",
    readTime: "5 min read",
    imageGradient: "from-orange-500 to-amber-400",
    icon: <Rocket className="w-6 h-6" />,
    content: [
      { type: "heading", content: "Performance Is a Feature" },
      { type: "paragraph", content: "Google's Core Web Vitals have fundamentally changed how we think about web performance. They're no longer just a technical metric that developers care about — they're a direct ranking factor that determines whether your content appears in search results, and a user experience signal that directly impacts conversion rates and bounce rates." },
      { type: "heading", content: "The Three Pillars" },
      { type: "paragraph", content: "Core Web Vitals measure three specific aspects of the user experience:" },
      { type: "list", content: ["Largest Contentful Paint (LCP) — measures loading performance. Should occur within 2.5 seconds of page start. This is your hero image, main heading, or primary content block."] },
      { type: "paragraph", content: ["First Input Delay (FID) / Interaction to Next Paint (INP) — measures interactivity. INP replaced FID in 2024 and measures the latency of all interactions during the page lifecycle. Should be under 200 milliseconds."] },
      { type: "paragraph", content: ["Cumulative Layout Shift (CLS) — measures visual stability. Should be 0.1 or less. This means content shouldn't shift around unexpectedly as the page loads, causing users to click the wrong thing."] },
      { type: "heading", content: "The Business Impact" },
      { type: "paragraph", content: "Google's data shows that as LCP goes from 0.4s to 2.5s, bounce probability increases by 32%. As CLS goes from 0 to 0.1, bounce probability increases by 16%. These aren't abstract metrics — they're direct revenue impacts. Every hundred milliseconds of delay costs Amazon 1% in revenue; the same principle applies to every business." },
      { type: "heading", content: "Actionable Optimization Strategies" },
      { type: "list", content: ["Preload critical above-the-fold content with <link rel='preload'>", "Use modern image formats (WebP, AVIF) with responsive srcset attributes", "Implement font-display: swap to prevent FOIT (Flash of Invisible Text)", "Set explicit width/height on images and embeds to prevent layout shifts", "Defer non-critical JavaScript and use tree-shaking to reduce bundle size", "Implement edge caching and CDN distribution for global performance"] },
      { type: "paragraph", content: "In 2026, performance optimization isn't optional. It's the invisible architecture that determines whether your beautiful design and great content actually reach the people who need it." },
    ],
  },
  "cloud-architecture-patterns": {
    slug: "cloud-architecture-patterns",
    category: "Cloud & Infrastructure",
    title: "Cloud Architecture Patterns for High-Availability Applications",
    excerpt: "When your application scales from hundreds to millions of users, architecture matters.",
    date: "Apr 5, 2026",
    readTime: "9 min read",
    imageGradient: "from-sky-500 to-blue-400",
    icon: <Cloud className="w-6 h-6" />,
    content: [
      { type: "heading", content: "When Hundreds Become Millions" },
      { type: "paragraph", content: "When your application scales from hundreds to millions of users, architecture matters. The patterns that work perfectly for 100 concurrent users become catastrophic at 100,000. The difference isn't just about adding more servers — it's about fundamentally rethinking how your system handles concurrency, failure, and growth." },
      { type: "heading", content: "Serverless: The Event-Driven Foundation" },
      { type: "paragraph", content: "Serverless architecture (AWS Lambda, Vercel Functions, Cloudflare Workers) has become the default starting point for new applications. Why? Because it eliminates capacity planning entirely. You pay per invocation, scale to zero when idle, and never worry about server patches or capacity limits." },
      { type: "list", content: ["Automatic scaling handles traffic spikes without manual intervention", "Pay only for what you use — no idle server costs during low-traffic periods", "Reduced operational overhead lets small teams manage large-scale infrastructure", "Built-in high availability across availability zones"] },
      { type: "heading", content: "Microservices vs. Modular Monolith" },
      { type: "paragraph", content: "The microservices trend has evolved. The current consensus: start with a well-structured modular monolith, and extract services only when you have specific scaling or team-composition needs. Premature microservices add distributed systems complexity without business value." },
      { type: "paragraph", content: "The key insight from 2024-2026 is 'services at the team boundary, not the technical boundary.' Organize services around organizational structure (Conway's Law) and extract them when a specific domain needs independent scaling, deployment, or technology choices." },
      { type: "heading", content: "Resilience Patterns" },
      { type: "paragraph", content: "High availability isn't about preventing failures — it's about designing systems that gracefully handle them. Key patterns include circuit breakers (preventing cascade failures), retry with exponential backoff (handling transient errors), bulkheads (isolating failure domains), and graceful degradation (maintaining core functionality under stress)." },
      { type: "paragraph", content: "The teams that build the most reliable systems don't assume everything will work. They design for the assumption that something always will — and build the observability, automation, and recovery mechanisms to handle it without user impact." },
    ],
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.values(articles).map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
            Article Not Found
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/insights" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Article Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-50 pt-36 pb-20 md:pt-44 md:pb-28">
          {/* Decorative elements */}
          <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${article.imageGradient} opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2`} />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-violet-200/30 to-transparent rounded-full blur-3xl -translate-x-1/3 translate-y-1/2" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {article.icon}
              {article.category}
            </div>

            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface leading-tight mb-6">
              {article.title}
            </h1>

            <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto mb-8">
              {article.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-center gap-4 text-sm text-on-surface-variant">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="w-1.5 h-1.5 bg-outline-variant rounded-full" />
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back link */}
          <Link href="/insights" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200 mb-12">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          {/* Content Body */}
          <div className="prose-custom max-w-none">
            {article.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2 key={index} className="font-headline text-2xl md:text-3xl font-bold text-on-surface mt-16 mb-6 first:mt-0">
                    {block.content}
                  </h2>
                );
              }
              if (block.type === "list") {
                const items = block.content as string[];
                return (
                  <ul key={index} className="space-y-3 my-8">
                    {items.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-on-surface-variant leading-relaxed">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-on-surface-variant leading-loose text-lg mb-6">
                  {block.content}
                </p>
              );
            })}
          </div>

          {/* Share & Navigation */}
          <div className="mt-16 pt-8 border-t border-outline/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Share2 className="w-5 h-5 text-on-surface-variant" />
                <span className="font-label text-sm font-semibold text-on-surface">Share this article</span>
              </div>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-xl font-label font-semibold hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                More Articles
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-surface-container-low rounded-3xl p-10 md:p-12 border border-outline/10 text-center">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">
              Discover More Insights
            </h2>
            <p className="text-on-surface-variant text-lg mb-8 max-w-xl mx-auto">
              Explore our latest articles on design, technology, and digital strategy.
            </p>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 bg-white text-on-surface px-8 py-3.5 rounded-xl font-label font-semibold border border-outline/10 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              View All Articles
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}