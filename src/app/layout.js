import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Crypto Athletes Club",
  description: "Dashboard de suivi des performances & actifs DEFIT2",
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Conteneur global avec couleurs et structure */}
        <div className="flex flex-col h-screen bg-[#5f3dc4] text-white overflow-hidden">

          {/* Header fixe */}
          <header className="fixed top-0 left-0 w-full bg-[#4608ad] p-4 shadow-md z-30">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
              <h1 className="text-xl font-bold">The Crypto Athletes Club</h1>
            </div>
          </header>

          {/* Contenu scrollable */}
          <div className="flex-1 overflow-auto -webkit-overflow-scrolling-touch pt-24 pb-20">
            {children}
          </div>

          {/* Footer fixe */}
          <footer className="fixed bottom-0 left-0 w-full bg-[#4608ad] text-sm text-gray-300 text-center py-3 z-30">
             <p>
              &copy; 2025 Ichiro Labs — Tous droits réservés ·{" "}
              <Link
                href="/about"
                className="underline hover:text-white transition-colors"
              >
                À propos
              </Link>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
