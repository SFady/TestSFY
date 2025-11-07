"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [selected, setSelected] = useState("Option 1");

  return (
    <html lang="fr">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>The Crypto Athletes Club</title>
        <meta
          name="description"
          content="Dashboard de suivi des performances & actifs DEFIT2"
        />
        <meta charSet="UTF-8" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col h-screen bg-[#5f3dc4] text-white overflow-hidden">
          {/* HEADER FIXE */}
          <header className="fixed top-0 left-0 w-full bg-[#4608ad] p-4 shadow-md z-30">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
              <h1 className="text-xl font-bold">The Crypto Athletes Club</h1>

              {/* DROPDOWN SIMPLE */}
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="bg-white/10 text-white px-3 py-2 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <option value="Option 1" className="text-black">
                  Option 1
                </option>
                <option value="Option 2" className="text-black">
                  Option 2
                </option>
                <option value="Option 3" className="text-black">
                  Option 3
                </option>
              </select>
            </div>
          </header>

          {/* CONTENU SCROLLABLE */}
          <div className="flex-1 overflow-auto -webkit-overflow-scrolling-touch pt-24 pb-20">
            {children}
          </div>

          {/* FOOTER FIXE */}
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
