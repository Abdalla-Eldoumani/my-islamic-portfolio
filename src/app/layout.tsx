import type { Metadata, Viewport } from "next";
import {
  Aref_Ruqaa,
  Instrument_Sans,
  Instrument_Serif,
  Scheherazade_New,
} from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const arefRuqaa = Aref_Ruqaa({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-aref-ruqaa",
  display: "swap",
});

const scheherazade = Scheherazade_New({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-scheherazade",
  display: "swap",
});

const title = "Abdalla Eldoumani | Islamic Software Portfolio";
const description =
  "Open-source Islamic projects by Abdalla Eldoumani: guidance for new Muslims, Tajweed lessons, the Prophet's life, the 99 Names of Allah, a browser extension, a prayer-times widget, Qur'an verse videos and an audio mirror of verse-by-verse recitations.";

export const metadata: Metadata = {
  metadataBase: new URL("https://my-islamic-portfolio.vercel.app"),
  icons: {
    icon: "/favicon.svg",
  },
  title,
  description,
  authors: [{ name: "Abdalla Eldoumani" }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e4e5e2" },
    { media: "(prefers-color-scheme: dark)", color: "#161716" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${instrumentSans.variable} ${arefRuqaa.variable} ${scheherazade.variable}`}
    >
      <body className="min-h-screen bg-ground font-body text-ink">
        {children}
      </body>
    </html>
  );
}
