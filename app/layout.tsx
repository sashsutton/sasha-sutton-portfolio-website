import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ModeProvider } from "@/components/ModeProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LocaleProvider } from "@/components/LocaleProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

// Runs before paint: resolves theme (stored → system → dark) and language
// onto <html> so there's no flash of the wrong theme on load.
const noFlashScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);var l=localStorage.getItem('locale');if(l==='fr'||l==='en'){document.documentElement.setAttribute('lang',l);}}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

// A characterful grotesque for oversized display, Inter for body, mono for
// the numbered index labels. Big, bold, kinetic — one type system, many scales.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sashasutton.dev"),
  title: {
    default: "Sasha Sutton · AI Master's student & music producer",
    template: "%s · Sasha Sutton",
  },
  description:
    "Machine learning student (NLP & computer vision, M1 DKAI at Paris-Saclay) with a background in music production (Fabric London, Point Blank), now making videos on maths & CS. One identity, three lenses.",
  openGraph: {
    title: "Sasha Sutton · AI Master's student & music producer",
    description:
      "Science & AI (NLP & computer vision) and a music production background.",
    type: "website",
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
      data-mode="science"
      data-theme="dark"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col overflow-x-hidden">
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
        <LocaleProvider>
          <ThemeProvider>
            <ModeProvider>
              <Nav />
              <main className="flex-1">{children}</main>
              <Footer />
            </ModeProvider>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
