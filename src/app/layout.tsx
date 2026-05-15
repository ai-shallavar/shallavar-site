import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shallavar.com"),
  title: {
    default: "Shallavar Technologies - Web & Mobile App Development Company in Bangalore",
    template: "%s | Shallavar Technologies",
  },
  description:
    "Top-rated web & mobile app development company in Bangalore. Custom websites, iOS/Android apps, UI/UX design, dashboards & 24/7 support. Free consultation. Call +91 94821 37212. hello@shallavar.com",
  keywords: [
    "web development company Bangalore",
    "mobile app development Bangalore",
    "software development company Bangalore",
    "web design company Bangalore",
    "app development company Bangalore",
    "IT company Bangalore",
    "startup tech company Bangalore",
    "website development Bangalore",
    "React Native development Bangalore",
    "Next.js development company India",
    "UI UX design Bangalore",
    "cloud deployment services Bangalore",
    "dashboard development Bangalore",
    "website maintenance Bangalore",
    "affordable web development Bangalore",
    "best web developer Bangalore",
    "Shallavar Technologies",
    "shallavar.com",
    "hello@shallavar.com",
    "best IT company Bangalore 2026",
    "tech company Banashankari Bangalore",
    "full stack development Bangalore",
    "custom software development Bangalore",
    "ecommerce website development Bangalore",
  ],
  authors: [{ name: "Shallavar Technologies" }],
  creator: "Shallavar Technologies",
  publisher: "Shallavar Technologies",
  robots: {
    index: true,
    follow: true,
     "max-snippet": -1,
     "max-image-preview": "large",
     "max-video-preview": -1,
   },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Shallavar Technologies",
    title: "Shallavar Technologies — Web & Mobile App Development Company in Bangalore",
    description:
      "Top-rated web & mobile app development company in Bangalore. Custom websites, iOS/Android apps, UI/UX design, dashboards & 24/7 support. Free consultation.",
    url: "https://shallavar.com",
    images: [
      {
        url: "/logo-full.png",
        width: 1200,
        height: 630,
        alt: "Shallavar Technologies — Web & Mobile App Development Company in Bangalore",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shallavar_tech",
    creator: "@shallavar_tech",
    title: "Shallavar Technologies — Web & Mobile App Development Company in Bangalore",
    description: "Top-rated web & mobile app development company in Bangalore. Custom websites, iOS/Android apps, UI/UX design, dashboards & 24/7 support.",
    images: ["/logo-full.png"],
  },
  category: "Web Development & Mobile App Development",
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Organization + LocalBusiness combined schema
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shallavar Technologies",
    "alternateName": "Shallavar",
    "url": "https://shallavar.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://shallavar.com/logo-full.png",
    },
    "description": "Web & mobile app development company in Bangalore. Custom websites, iOS/Android apps, UI/UX design, cloud deployment & 24/7 support.",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-94821-37212",
      "email": "hello@shallavar.com",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi", "Kannada"],
    },
    "sameAs": [
      "https://x.com/shallavar",
      "https://www.instagram.com/shallavar/",
      "https://www.linkedin.com/company/shallavar/",
    ],
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Shallavar Technologies",
    "description": "Top-rated web & mobile app development company in Bangalore. We build custom websites, iOS/Android apps, UI/UX design, dashboards and provide 24/7 tech support. Free consultation.",
    "url": "https://shallavar.com",
    "telephone": "+919482137212",
    "email": "hello@shallavar.com",
    "logo": "https://shallavar.com/logo-full.png",
    "image": "https://shallavar.com/logo-full.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "#180/1, Somanahalli Gate, Kanakapura Main Road",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560082",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946,
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Banashankari, Bangalore",
      },
      {
        "@type": "Place",
        "name": "JP Nagar, Bangalore",
      },
      {
        "@type": "Place",
        "name": "Whitefield, Bangalore",
      },
      {
        "@type": "Place",
        "name": "MG Road, Bangalore",
      },
      {
        "@type": "Place",
        "name": "Hebbala, Bangalore",
      },
      {
        "@type": "Place",
        "name": "Majestic, Bangalore",
      },
      {
        "@type": "Place",
        "name": "Kaggalipura, Bangalore",
      },
      {
        "@type": "Place",
        "name": "South Bangalore",
      },
    ],
    "priceRange": "₹₹",
    "openingHours": "Mo-Fr 09:00-18:00",
    "knowsAbout": [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "Next.js",
      "React Native",
      "Flutter",
      "Cloud Deployment",
      "Dashboard Development",
      "Software Development",
    ],
    "sameAs": [
      "https://x.com/shallavar",
      "https://www.instagram.com/shallavar/",
      "https://www.linkedin.com/company/shallavar/",
    ],
    "foundingDate": "2024",
    "serviceArea": [
      "India",
      "Bangalore",
      "Bengaluru",
      "Karnataka",
    ],
    "contactOption": [
      {
        "@type": "ContactOption",
        "contactType": "customer service",
        "phone": "+919482137212",
        "availableChannel": {
          "@type": "ContactChannel",
          "serviceLanguage": ["English", "Hindi", "Kannada"],
          "availableOnline": true,
        },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a website cost in Bangalore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our website development starts from ₹12,500 for a starter package. Pricing depends on complexity, features, and timeline. Contact us for a free custom quote.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the typical timeline for mobile app development in Bangalore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most mobile app projects are completed within 6-12 weeks depending on complexity. We provide a detailed timeline during the discovery phase.",
        },
      },
      {
        "@type": "Question",
        "name": "Do you provide post-launch support and maintenance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All our packages include post-launch support. We also offer ongoing retainer plans starting from ₹10,000/month for continuous maintenance and updates.",
        },
      },
      {
        "@type": "Question",
        "name": "What makes you different from other IT companies in Bangalore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus on quality over quantity, offer transparent pricing with no hidden fees, provide dedicated project managers, and build for long-term success. Our 98% client satisfaction rate speaks for itself.",
        },
      },
      {
        "@type": "Question",
        "name": "Do you work with startups and small businesses in Bangalore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We specialize in working with startups and small businesses in Bangalore. Our starter plan at ₹12,500 is specifically designed for small businesses and entrepreneurs.",
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Shallavar_logos/logoOnly.png" sizes="32x32" />
        <link rel="icon" href="/Shallavar_logos/logoOnly.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/Shallavar_logos/logoOnly.png" sizes="180x180" />
        <link rel="shortcut icon" href="/Shallavar_logos/logoOnly.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="English" />
        <meta name="region" content="Bangalore, Karnataka, India" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="3 days" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Shallavar Technologies",
            "url": "https://shallavar.com",
            "description": "Web & mobile app development company in Bangalore. Custom websites, iOS/Android apps, UI/UX design.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://shallavar.com/insights?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }) }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          async
          defer
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', { page_path: window.location.pathname });
            `,
          }}
        />
      </head>
        <body className={`${manrope.variable} ${inter.variable}`}>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <WhatsAppButton />
          <SpeedInsights />
        </body>
    </html>
  );
}