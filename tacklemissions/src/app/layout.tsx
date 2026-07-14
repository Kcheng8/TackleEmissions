import type { Metadata, Viewport } from "next";
import { Newsreader, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Newsreader: an editorial, journal-style serif with optical sizing for the
// headlines; Public Sans keeps the body plain and legible; IBM Plex Mono gives
// the data labels a lab-instrument register.
const displaySerif = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
});

const bodySans = Public_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

const labelMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-code",
});

const SITE_URL = "https://tacklemission.com";
const SITE_NAME = "TacklEmission";
const TITLE = "TacklEmission: engineering biology to reduce methane from livestock";
const DESCRIPTION =
  "TacklEmission is developing a biological feed additive that reduces methane-producing archaea in the cattle rumen. A student team from the University of Queensland, at the early research stage.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s · ${SITE_NAME}`,
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
    <html
      lang="en"
      className={`${displaySerif.variable} ${bodySans.variable} ${labelMono.variable}`}
    >
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
