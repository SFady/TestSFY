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

// Fonction pour générer VYYYYMMDD_HHmm
function getVersionString() {
  const year = "2025";
  const month = "11";
  const day = "21";
  const hours = "11";
  const minutes = "42";
  return `(V${year}${month}${day}_${hours}${minutes})`;
}

export default function RootLayout({ children }) {
  const centralWidth = 1280;
  const version = getVersionString();

  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Crypto Athletes Club</title>
        <meta name="description" content="Dashboard de suivi des performances & actifs" />
        <meta charSet="UTF-8" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="relative flex flex-col min-h-screen text-white">

          {/* IMAGE DE FOND FIXE */}
          <div
            className="fixed inset-0 bg-center bg-cover z-0"
            style={{ backgroundImage: "url('/images/banner.webp')" }}
          ></div>

          {/* OVERLAY VIOLET FULL SCREEN */}
          <div
            className="fixed inset-0 z-10"
            style={{
              background: `
                linear-gradient(
                  to right,
                  rgba(74,46,163,0) 0%, 
                  rgba(74,46,163,0.95) calc((100% - ${centralWidth}px)/2), 
                  rgba(74,46,163,0.95) calc((100% + ${centralWidth}px)/2), 
                  rgba(74,46,163,0) 100%
                )
              `,
            }}
          ></div>

          {/* HEADER FIXE */}
          <header className="fixed top-0 left-0 w-full bg-[#390494]/90 p-4 shadow-md z-30 backdrop-blur-md">
            <div className="flex w-full max-w-screen-xl px-6 md:px-12 mx-auto items-center justify-between">
              <div className="flex items-baseline w-full">
                <h1 className="text-xl font-bold" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}>
                  The Crypto Athletes Club
                </h1>
                <span className="text-[10px] md:text-xs text-gray-400 ml-2">{version}</span>
              </div>

              {/* Nav desktop */}
              <nav className="hidden md:flex gap-8 text-sm font-medium justify-end ml-auto">
                <Link href="/home" className="hover:text-white transition-colors">Dashboard</Link>
                <Link href="/activities" className="hover:text-white transition-colors">Activités</Link>
                <Link href="/rankings" className="hover:text-white transition-colors">Classements</Link>
              </nav>
            </div>
          </header>

          {/* ZONE CENTRALE - scroll global */}
          <main className="relative flex flex-col pt-24 pb-20 min-h-screen overflow-y-auto">
            <div className="relative z-20 flex flex-col w-full px-6 md:px-12 max-w-screen-xl mx-auto">

              {/* Contenu injecté */}
              {children}

              {/* Exemple tableau */}
              <div className="bg-[#5C42A6] rounded-2xl shadow-lg p-6 mb-6 w-full overflow-x-auto">
                <table className="min-w-max text-left border-collapse">
                  <thead>
                    <tr className="text-white bg-[#5339A0]">
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Athlete</th>
                      <th className="py-3 px-4">Activité</th>
                      <th className="py-3 px-4">Gain brut (Defit)</th>
                      <th className="py-3 px-4">Participation</th>
                      <th className="py-3 px-4">Gain net (Defit)</th>
                      <th className="py-3 px-4">Gain net (€)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-200">
                    {/* Remplace par rows.map */}
                    <tr className="hover:bg-[#5339A0]/90 transition-colors">
                      <td className="text-white py-3 px-4">19/11/2025</td>
                      <td className="text-white py-3 px-4">Alice</td>
                      <td className="text-white py-3 px-4">Running</td>
                      <td className="text-white py-3 px-4">2500</td>
                      <td className="text-white py-3 px-4">80%</td>
                      <td className="text-white py-3 px-4">2000.00</td>
                      <td className="text-white py-3 px-4">€2000.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </main>

          {/* FOOTER MOBILE */}
          <footer className="fixed bottom-0 left-0 w-full bg-[#390494]/95 text-xs text-gray-200 py-2 z-30 backdrop-blur-md block md:hidden border-t border-white/20 pt-4">
            <nav className="flex justify-around items-center">
              <Link href="/home" className="flex flex-col items-center gap-1 hover:text-white transition-colors">
                <span className="text-lg">🏠</span>
                <span>Dashboard</span>
              </Link>
              <Link href="/activities" className="flex flex-col items-center gap-1 hover:text-white transition-colors">
                <span className="text-lg">📊</span>
                <span>Activités</span>
              </Link>
              <Link href="/rankings" className="flex flex-col items-center gap-1 hover:text-white transition-colors">
                <span className="text-lg">👤</span>
                <span>Classements</span>
              </Link>
            </nav>
          </footer>

        </div>
      </body>
    </html>
  );
}
