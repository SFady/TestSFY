"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const router = useRouter();
  const [selected, setSelected] = useState("1");

  const handleSelect = (e) => {
    const id = e.target.value;
    setSelected(id);
    localStorage.setItem("selectedAthlete", id); // store locally
    router.push(`/home?id=${id}`); // 👈 navigates dynamically
  };

  // Load value from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("selectedAthlete");
    if (stored) {
      setSelected(stored);
    }
  }, []);


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
          content="Dashboard de suivi des performances & actifs"
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
                onChange={handleSelect}
                className="bg-white/10 text-white px-3 py-2 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <option value="1"  className="bg-[#8d6bf2] text-[#f3f0ff]">
                  Usopp
                </option>
                <option value="3" className="bg-[#8d6bf2] text-[#f3f0ff]">
                  Nico Robin
                </option>
                <option value="2" className="bg-[#8d6bf2] text-[#f3f0ff]">
                  DTeach
                </option>
                <option value="4" className="bg-[#8d6bf2] text-[#f3f0ff]">
                  Jinbe
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
