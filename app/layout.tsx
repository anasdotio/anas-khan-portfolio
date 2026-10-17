import type { Metadata } from "next";
import { DM_Mono, Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anasdev.in"),
  title: {
    default: "Anas Khan | Full Stack Developer",
    template: "%s | Anas Khan",
  },
  description:
    "Anas Khan is a full stack developer specializing in React, Node.js, Express, MongoDB, AWS, and AI.",
  keywords: [
    "Anas Khan",
    "Full Stack Developer",
    "React Developer",
    "Node.js",
    "Express",
    "MongoDB",
    "AWS",
    "AI",
  ],
  authors: [{ name: "Anas Khan", url: "https://www.linkedin.com/in/anaskhan12" }],
  creator: "Anas Khan",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://anasdev.in",
    title: "Anas Khan | Full Stack Developer",
    description:
      "Building useful digital things with React, Node.js, AWS, and AI.",
    siteName: "Anas Khan",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anas Khan | Full Stack Developer",
    description:
      "Building useful digital things with React, Node.js, AWS, and AI.",
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anas Khan",
  url: "https://anasdev.in",
  jobTitle: "Full Stack Developer",
  sameAs: ["https://www.linkedin.com/in/anaskhan12"],
  knowsAbout: ["React", "Node.js", "Express", "MongoDB", "AWS", "Artificial Intelligence"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrumentSerif.variable} ${dmMono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        {children}
      </body>
    </html>
  );
}
