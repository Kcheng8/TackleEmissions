import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const SITE_URL = "https://tacklemission.com";
const SITE_NAME = "TacklEmission";
const TITLE = "TacklEmission — Engineering Biology to Eliminate Methane from Livestock";
const DESCRIPTION =
  "TacklEmission develops targeted, biodegradable PHA nanoparticles displaying the PeiR enzyme to selectively reduce methane-producing archaea in the cattle rumen — helping agriculture reach net zero.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "methane emissions",
    "cattle methane reduction",
    "livestock",
    "synthetic biology",
    "bionanotechnology",
    "PHA nanoparticles",
    "PeiR enzyme",
    "climate tech",
    "agri-biotech",
    "net zero agriculture",
    "enteric fermentation",
  ],
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#07182C",
  colorScheme: "dark",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description: DESCRIPTION,
  email: "contact@tacklemission.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brisbane",
    addressRegion: "Queensland",
    addressCountry: "AU",
  },
  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: "University of Queensland",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
