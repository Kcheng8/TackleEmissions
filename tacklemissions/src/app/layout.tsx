import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TacklEmissions — Engineering Biology to Eliminate Livestock Methane",
  description:
    "TacklEmissions develops targeted biodegradable PHA nanoparticles displaying PeiR enzyme to reduce methane-producing archaea in cattle rumen. Helping agriculture reach net zero.",
  keywords: [
    "methane emissions",
    "cattle",
    "livestock",
    "synthetic biology",
    "bionanotechnology",
    "PHA nanoparticles",
    "climate tech",
    "agri-biotech",
  ],
  openGraph: {
    title: "TacklEmissions — Engineering Biology to Eliminate Livestock Methane",
    description:
      "Targeted biodegradable nanotechnology that reduces methane-producing microbes in cattle, helping agriculture reach net zero.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.className}>
      <body className="bg-[#081C2D] text-[#F0F4F8] antialiased">
        {children}
      </body>
    </html>
  );
}
