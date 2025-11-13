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
    localStorage.setItem("selectedAthlete", id);
    router.push(`/home?id=${id}`);
  };

  useEffect(() => {
    const stored = localStorage.getItem("selectedAthlete");
    if (stored) setSelected(stored);
  }, []);

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
        <div className="relative flex flex-col min-h-screen text-white overflow-hidden">
          {/* IMAGE DE FOND + DÉGRADÉS GAUCHE ET DROITE */}
          <div className="hidden md:block absolute inset-0 z-0" aria-hidden="true">
            {/* Image */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/images/banner.webp')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>

            {/* Dégradé gauche : transparent → violet plus opaque */}
            <div
              className="hidden md:block absolute inset-y-0 left-0 z-10"
              style={{
                width: "calc((100vw - 1280px)/2)",
                background: "linear-gradient(to right, transparent, rgba(95,61,196,0.25) 100%)",
              }}
            ></div>

            {/* Dégradé droite : violet plus opaque → transparent */}
            <div
              className="hidden md:block absolute inset-y-0 right-0 z-10"
              style={{
                width: "calc((100vw - 1280px)/2)",
                background: "linear-gradient(to left, transparent, rgba(95,61,196,0.25) 100%)",
              }}
            ></div>
          </div>

          {/* CONTENU */}
          <div className="relative flex flex-col flex-1 z-20">
            {/* HEADER FIXE */}
            <header className="fixed top-0 left-0 w-full bg-[#4608ad]/90 p-4 shadow-md z-30 backdrop-blur-md">
              <div
                id="header-inner"
                className="max-w-screen-xl mx-auto flex justify-between items-center px-4"
              >
                <h1
                  className="text-xl font-bold"
                  style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}
                >
                  The Crypto Athletes Club
                </h1>

                <select
                  value={selected}
                  onChange={handleSelect}
                  className="bg-white/10 text-white px-3 py-2 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <option value="1" className="bg-[#8d6bf2] text-[#f3f0ff]">
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

            {/* ZONE CENTRALE */}
            <main className="flex-grow flex justify-center items-center pt-24 pb-20 relative">
              {/* Fond violet légèrement transparent */}
              <div className="absolute top-0 left-0 right-0 h-full bg-[#5f3dc4]/97 z-10 md:mx-auto md:max-w-screen-xl md:px-4"></div>

              {/* Contenu */}
              <div className="relative z-20 flex flex-col justify-center items-center w-full h-full px-6 md:px-12 max-w-screen-xl">
                {children}
              </div>
            </main>

            {/* FOOTER MOBILE */}
            <footer className="fixed bottom-0 left-0 w-full bg-[#4608ad]/90 text-sm text-gray-300 text-center py-3 z-30 backdrop-blur-md block md:hidden">
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
        </div>
      </body>
    </html>
  );
}
