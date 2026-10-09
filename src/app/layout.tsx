import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Amiri } from "next/font/google";
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

const title = "Abdalla Eldoumani | Islamic Software Portfolio";
const description =
  "Open-source Islamic projects by Abdalla Eldoumani: Qur'an videos, Tajweed lessons, the Prophet's life, the 99 Names of Allah, guidance for new Muslims, a browser extension and a prayer-times widget.";

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
    { media: "(prefers-color-scheme: light)", color: "#f5eedd" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1c" },
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
      className={`${cormorant.variable} ${jakarta.variable} ${amiri.variable}`}
    >
      <body className="min-h-screen bg-bg-primary font-body text-text-primary">
        {children}
      </body>
    </html>
  );
}
