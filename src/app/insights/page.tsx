"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
  BookOpen,
  TrendingUp,
  Code2,
  Palette,
  Smartphone,
  Rocket,
  Cloud,
  Mail,
  ArrowRight,
  Clock,
  Calendar,
  ChevronRight,
  Sparkles,
  Search,
  Filter,
} from "lucide-react";
import Link from "next/link";

interface Article {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
  imageGradient: string;
  icon: React.ReactNode;
}

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "All", icon: Sparkles },
    { name: "Digital Strategy", icon: TrendingUp },
    { name: "Technology", icon: Code2 },
    { name: "Design", icon: Palette },
    { name: "Mobile Development", icon: Smartphone },
    { name: "SEO & Performance", icon: Rocket },
    { name: "Cloud & Infrastructure", icon: Cloud },
  ];

  const articles: Article[] = [
    {
      id: "1",
      slug: "the-future-of-digital-excellence",
      category: "Digital Strategy",
      title: "The Future of Digital Excellence: Why Premium Design Matters in 2026",
      excerpt: "In a world where first impressions happen in milliseconds, your digital presence isn't just a representation of your brand — it is your brand. Discover why premium design and engineering separate market leaders from the noise.",
      date: "Jan 15, 2026",
      readTime: "6 min read",
      featured: true,
      imageGradient: "from-blue-500 to-cyan-400",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      id: "2",
      slug: "why-modern-tech-stacks",
      category: "Technology",
      title: "Why Modern Tech Stacks Are the Backbone of Scalable Digital Products",
      excerpt: "From React to Next.js, the tools we choose shape what's possible. Explore why modern frameworks enable faster iteration, better SEO, and unmatched performance at scale.",
      date: "Feb 3, 2026",
      readTime: "5 min read",
      imageGradient: "from-violet-500 to-purple-400",
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      id: "3",
      slug: "editorial-design-digital",
      category: "Design",
      title: "Editorial Design: Applying Print Luxury to Digital Experiences",
      excerpt: "The most successful digital products don't feel like products. They feel like curated experiences. Learn how editorial design principles transform functional interfaces into memorable narratives.",
      date: "Feb 20, 2026",
      readTime: "7 min read",
      imageGradient: "from-pink-500 to-rose-400",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      id: "4",
      slug: "native-vs-cross-platform",
      category: "Mobile Development",
      title: "Native vs. Cross-Platform: Choosing the Right Mobile Strategy",
      excerpt: "Your mobile strategy can make or break your market penetration. We break down the trade-offs between native iOS/Android development and cross-platform frameworks.",
      date: "Mar 8, 2026",
      readTime: "8 min read",
      imageGradient: "from-emerald-500 to-teal-400",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      id: "5",
      slug: "core-web-vitals-seo",
      category: "SEO & Performance",
      title: "Core Web Vitals: The Invisible Architecture of SEO Success",
      excerpt: "Google's Core Web Vitals have fundamentally changed how we think about web performance. It's not just about speed — it's about the quality of the user's visual and interactive experience.",
      date: "Mar 22, 2026",
      readTime: "5 min read",
      imageGradient: "from-orange-500 to-amber-400",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      id: "6",
      slug: "cloud-architecture-patterns",
      category: "Cloud & Infrastructure",
      title: "Cloud Architecture Patterns for High-Availability Applications",
      excerpt: "When your application scales from hundreds to millions of users, architecture matters. Explore patterns from serverless to microservices that keep applications robust under pressure.",
      date: "Apr 5, 2026",
      readTime: "9 min read",
      imageGradient: "from-sky-500 to-blue-400",
      icon: <Cloud className="w-6 h-6" />,
    },
  ];

  const featuredArticle = articles.find((a) => a.featured);
  const remainingArticles = articles.filter((a) => !a.featured || a.id !== featuredArticle?.id);

  const filteredArticles = activeCategory === "All"
    ? remainingArticles
    : remainingArticles.filter((a) => a.category === activeCategory);

  const searchedArticles = searchQuery
    ? filteredArticles.filter(
        (a) =>
          a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredArticles;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-50 pt-36 pb-20 md:pt-44 md:pb-28">
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-violet-200/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4" />
              Insights & Blog
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-tight mb-6">
              Thoughtful{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Perspectives
              </span>
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
              Expert insights on digital strategy, premium design, and the technology that powers modern brands.
            </p>
          </div>
        </section>

        {/* Search & Filter Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
          <div className="bg-white rounded-2xl p-4 border border-outline/10 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/50" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-outline/10 rounded-xl pl-12 pr-4 py-3 text-on-surface focus:bg-white focus:border-primary/30 focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 placeholder:text-on-surface-variant/40"
                />
              </div>
              {/* Filter toggle indicator */}
              <div className="flex items-center gap-2 text-on-surface-variant text-sm shrink-0">
                <Filter className="w-4 h-4" />
                <span>{activeCategory === "All" ? "All Topics" : activeCategory}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-label text-sm font-semibold transition-all duration-300 ease-out-expo ${
                  activeCategory === cat.name
                    ? "bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg shadow-primary/25"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface border border-outline/10"
                }`}
              >
                {cat.icon && <cat.icon className="w-4 h-4" />}
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && activeCategory === "All" && !searchQuery && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <Link href={`/insights/${featuredArticle.slug}`} className="block group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-white to-violet-50 border border-outline/10 hover:shadow-xl transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left - Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary font-label text-xs font-bold rounded-full uppercase tracking-wider">
                      <TrendingUp className="w-3 h-3" />
                      Featured
                    </span>
                    <span className="font-label text-xs text-on-surface-variant flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {featuredArticle.date}
                    </span>
                  </div>
                  <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface leading-tight group-hover:text-primary transition-colors duration-300">
                    {featuredArticle.title}
                  </h2>
                  <p className="font-body text-on-surface-variant leading-relaxed text-base">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-200">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="font-label text-xs text-on-surface-variant flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                </div>
                {/* Right - Visual */}
                <div className="relative min-h-[280px] lg:min-h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${featuredArticle.imageGradient} opacity-80`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                      {featuredArticle.icon}
                    </div>
                  </div>
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-6 right-6 w-20 h-20 border-2 border-white rounded-full" />
                    <div className="absolute bottom-8 left-10 w-12 h-12 border-2 border-white rounded-xl rotate-45" />
                    <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-white rounded-full" />
                    <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-white rounded-full" />
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Articles Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface">
              {searchQuery ? `Results for "${searchQuery}"` : activeCategory === "All" ? "Latest Articles" : activeCategory}
            </h2>
            <span className="font-label text-sm text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-full">
              {searchedArticles.length} article{searchedArticles.length !== 1 ? "s" : ""}
            </span>
          </div>

          {searchedArticles.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-on-surface-variant/40" />
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-2">No articles found</h3>
              <p className="text-on-surface-variant">Try adjusting your search or filter to find what you're looking for.</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="mt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Clear all filters
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchedArticles.map((article) => (
                <Link key={article.id} href={`/insights/${article.slug}`} className="block group relative overflow-hidden rounded-2xl bg-white border border-outline/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out-expo">
                  {/* Top gradient bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${article.imageGradient}`} />
                  
                  <div className="p-6 space-y-5">
                    {/* Meta */}
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r ${article.imageGradient} bg-opacity-10 text-on-surface font-label text-xs font-bold rounded-full`}>
                        {article.icon}
                        {article.category}
                      </span>
                    </div>

                    {/* Date & Read time */}
                    <div className="flex items-center gap-3 text-xs text-on-surface-variant">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                      <span className="w-1 h-1 bg-outline-variant rounded-full" />
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="font-headline text-lg font-bold text-on-surface leading-snug group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h3>

                    <p className="font-body text-on-surface-variant leading-relaxed text-sm line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Read more */}
                    <div className="flex items-center gap-2 pt-1">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-200">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Hover decorative element */}
                  <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${article.imageGradient} opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-300`} />
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="relative overflow-hidden bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-10 md:p-14">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
            <div className="absolute top-10 right-20 w-8 h-8 bg-white/20 rounded-full" />
            <div className="absolute bottom-10 right-40 w-4 h-4 bg-white/20 rounded-full" />
            <div className="absolute top-1/3 left-10 w-6 h-6 bg-white/15 rounded-full" />

            <div className="relative text-center max-w-2xl mx-auto space-y-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mx-auto">
                <Mail className="w-7 h-7" />
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-white">
                Stay Informed
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                Get the latest insights on digital strategy, design, and technology delivered directly to your inbox. No spam, unsubscribe anytime.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3.5 font-body text-sm text-white placeholder:text-blue-200/60 outline-none focus:bg-white/20 focus:border-white/40 transition-all"
                />
                <button className="bg-white text-primary px-8 py-3.5 rounded-xl font-label font-semibold text-sm hover:bg-blue-50 transition-all duration-300 shadow-lg whitespace-nowrap hover:-translate-y-0.5">
                  Subscribe
                </button>
              </form>
              <p className="text-blue-200/60 text-xs">
                Join 2,000+ professionals who receive our weekly digest.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-surface-container-low rounded-3xl p-10 md:p-12 border border-outline/10 text-center">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">
              Looking for something specific?
            </h2>
            <p className="text-on-surface-variant text-lg mb-8 max-w-xl mx-auto">
              Explore our services or get in touch to discuss how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-3.5 rounded-xl font-label font-semibold hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                Our Services
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-on-surface px-8 py-3.5 rounded-xl font-label font-semibold border border-outline/10 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                Contact Us
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}