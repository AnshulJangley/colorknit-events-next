import type { Metadata } from "next";
import { Outfit, Geist_Mono, Cinzel } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colorknit – #1 Corporate Event Management Company in Pune | Pan India",
  description:
    "Colorknit is a leading corporate event management company in Pune with 18+ years of experience and 3,600+ events executed across India. We specialise in annual day celebrations, conferences, product launches, employee engagement, and live experiences across Mumbai, Delhi, Bengaluru, Hyderabad, Chennai & pan India.",
  keywords: [
    "event management company in Pune",
    "corporate event management Pune",
    "event organisers Pune",
    "event management company India",
    "pan India event management",
    "corporate event planners Pune",
    "annual day event management",
    "product launch event company",
    "employee engagement events India",
    "conference management company Pune",
    "event management company Mumbai",
    "event management company Bangalore",
    "event management company Delhi",
    "event management company Hyderabad",
    "corporate event organisers India",
    "top event management company Pune",
    "best event management company India",
    "Colorknit events Pune",
    "gala dinner event management",
    "MICE event management India",
  ],
  authors: [{ name: "Colorknit Pvt Ltd", url: "https://www.colorknit.in" }],
  creator: "Colorknit Pvt Ltd",
  publisher: "Colorknit Pvt Ltd",
  metadataBase: new URL("https://www.colorknit.in"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.colorknit.in",
    siteName: "Colorknit – Corporate Event Management Company",
    title: "Colorknit – #1 Corporate Event Management Company in Pune | Pan India",
    description:
      "18+ years of excellence in corporate event management. Colorknit delivers impactful conferences, annual days, product launches & employee engagement events across India.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Colorknit Corporate Event Management Company – Pune, India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colorknit – #1 Corporate Event Management Company in Pune | Pan India",
    description:
      "3,600+ events. 18+ years. Pan India. Colorknit delivers world-class corporate event management from Pune to every corner of India.",
    images: ["/images/og-image.jpg"],
    creator: "@colorknit",
  },
  category: "Event Management",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.colorknit.in",
  name: "Colorknit Pvt Ltd",
  description:
    "Leading corporate event management company in Pune with 18+ years of experience, delivering conferences, annual days, product launches and employee engagement events across pan India.",
  url: "https://www.colorknit.in",
  telephone: "+91-XXXXXXXXXX",
  email: "info@colorknit.in",
  foundingDate: "2006",
  areaServed: [
    "Pune", "Mumbai", "Navi Mumbai", "Thane", "Nashik", "Goa",
    "Delhi", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "India"
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "18.5204",
    longitude: "73.8567",
  },
  sameAs: [
    "https://www.facebook.com/colorknit",
    "https://www.instagram.com/colorknit",
    "https://www.linkedin.com/company/colorknit",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "320",
    bestRating: "5",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Event Management Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Event Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Annual Day Celebration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conference & MICE Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Launch Events" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Employee Engagement Programs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gala Dinner & Award Nights" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable} ${cinzel.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune, Maharashtra, India" />
        <meta name="geo.position" content="18.5204;73.8567" />
        <meta name="ICBM" content="18.5204, 73.8567" />
        <meta name="theme-color" content="#2b032d" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
