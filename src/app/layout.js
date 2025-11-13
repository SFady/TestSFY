"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();

  const handleSelect = (e) => {
    const id = e.target.value;
    setSelected(id);
    localStorage.setItem("selectedAthlete", id);
    router.push(`/home?id=${id}`);
  };

  useEffect(() => {
    const stored = localStorage.getItem("selectedAthlete");
    const activeId = stored || 1;

    if (stored) {
      router.push(`/home?id=${stored}`);
    }

    setSelected(activeId);

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

            {/* Gradient droit : plus net */}
            <div
              className="hidden md:block absolute top-0 h-full right-0 z-10"
              style={{
                width: "calc(100vw - 1280px)",
                background:
                  "linear-gradient(to right, rgba(95,61,196,0.95) 0%, rgba(95,61,196,0.8) 10%, rgba(95,61,196,0) 100%)",
              }}
            ></div>
          </div>

          {/* CONTENU */}
          <div className="relative flex flex-col flex-1 z-20">
            {/* HEADER FIXE ALIGNÉ À LA ZONE CENTRALE */}
            <header className="fixed top-0 left-0 w-full bg-[#4608ad]/90 p-4 shadow-md z-30 backdrop-blur-md">
              <div className="flex w-full max-w-screen-xl px-6 md:px-12 mx-0 items-center">
                <h1
                  className="text-xl font-bold"
                  style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}
                >
                  The Crypto Athletes Club
                </h1>
                <select
                  value={selected}
                  onChange={handleSelect}
                  className="ml-auto bg-white/10 text-white px-3 py-2 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
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

            {/* ZONE CENTRALE OPAQUE ALIGNÉE À GAUCHE */}
            <main className="flex-grow flex justify-start items-start pt-24 pb-20 relative">
              <div className="absolute top-0 left-0 h-full bg-[#5f3dc4]/96 z-10 md:px-4 w-full max-w-screen-xl"></div>

              <div className="relative z-20 flex flex-col justify-start items-start w-full h-full px-6 md:px-12 max-w-screen-xl">
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
