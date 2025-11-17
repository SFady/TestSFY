"use client";

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

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Crypto Athletes Club</title>
        <meta
          name="description"
          content="Dashboard de suivi des performances & actifs"
        />
        <meta charSet="UTF-8" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative flex flex-col h-dvh text-white overflow-hidden">
          {/* IMAGE DE FOND */}
          <div className="hidden md:block absolute inset-0 z-0" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/images/banner.webp')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>

            {/* Gradient droit harmonisé */}
            <div
              className="hidden md:block absolute top-0 h-full right-0 z-10"
              style={{
                width: "calc(100vw - 1280px)",
                background:
                  "linear-gradient(to right, rgba(74,46,163,0.95) 0%, rgba(74,46,163,0.8) 10%, rgba(74,46,163,0) 100%)",
              }}
            ></div>
          </div>

          {/* CONTENU */}
          <div className="relative flex flex-col flex-1 z-20">
            {/* HEADER FIXE ALIGNÉ À LA ZONE CENTRALE */}
            <header className="fixed top-0 left-0 w-full bg-[#390494]/90 p-4 shadow-md z-30 backdrop-blur-md">
              <div className="flex w-full max-w-screen-xl px-6 md:px-12 mx-0 items-center">
                <h1
                  className="text-xl font-bold"
                  style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}
                >
                  The Crypto Athletes Club
                </h1>
                <nav className="hidden md:flex gap-8 text-sm font-medium ml-auto justify-end">
                  <Link href="/about" className="hover:text-white transition-colors">
                    À propos
                  </Link>
                  <Link href="/dashboard" className="hover:text-white transition-colors">
                    Dashboard
                  </Link>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </nav>
              </div>
            </header>

            {/* ZONE CENTRALE OPAQUE ALIGNÉE À GAUCHE */}
            <main className="flex-grow flex justify-start items-start pt-24 pb-20 relative">
              <div className="absolute top-0 left-0 h-full bg-[#4a2ea3]/96 z-10 md:px-4 w-full max-w-screen-xl"></div>

              <div className="relative z-20 flex flex-col justify-start items-start w-full h-full px-6 md:px-12 max-w-screen-xl">
                {children}
              </div>
            </main>

            {/* FOOTER MOBILE */}
            <footer className="fixed bottom-0 left-0 w-full bg-[#390494]/95 text-xs text-gray-200 py-2 z-30 backdrop-blur-md block md:hidden border-t border-white/20 pt-4">
              <nav className="flex justify-around items-center">
                <Link href="/" className="flex flex-col items-center gap-1 hover:text-white transition-colors">
                  <span className="text-lg">🏠</span>
                  <span>Home</span>
                </Link>


                <Link href="/dashboard" className="flex flex-col items-center gap-1 hover:text-white transition-colors">
                  <span className="text-lg">📊</span>
                  <span>Dashboard</span>
                </Link>


                <Link href="/wallet" className="flex flex-col items-center gap-1 hover:text-white transition-colors">
                  <span className="text-lg">💰</span>
                  <span>Wallet</span>
                </Link>


                <Link href="/profil" className="flex flex-col items-center gap-1 hover:text-white transition-colors">
                  <span className="text-lg">👤</span>
                  <span>Profil</span>
                </Link>
              </nav>
            </footer>

          </div>
        </div>
      </body>
    </html>
  );
}
