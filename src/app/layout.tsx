import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Amiri } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "Abdalla Eldoumani — Islamic Software Portfolio",
  description:
    "Open-source Islamic tools built as sadaqah jariyah. Quran video pipelines, Tajweed training, Seerah exploration, and more.",
  keywords: [
    "Islamic software",
    "Quran",
    "Tajweed",
    "Seerah",
    "sadaqah jariyah",
    "open source",
    "Muslim developer",
  ],
  authors: [{ name: "Abdalla Eldoumani" }],
  openGraph: {
    title: "Abdalla Eldoumani — Islamic Software Portfolio",
    description:
      "Open-source Islamic tools built as sadaqah jariyah for the Muslim community.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdalla Eldoumani — Islamic Software Portfolio",
    description:
      "Open-source Islamic tools built as sadaqah jariyah for the Muslim community.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${amiri.variable}`}
    >
      <body className="font-body bg-bg-primary text-text-primary min-h-screen">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
