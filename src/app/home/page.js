"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#5f3dc4] flex flex-col items-center text-white">
      
      {/* Header */}
      <header className="bg-[#4608ad] text-white w-full p-4 shadow-md">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">The Crypto Athletes Club</h1>
          {/* <nav className="space-x-4">
            <a href="#" className="hover:underline">Accueil</a>
            <a href="#" className="hover:underline">Dashboard</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav> */}
        </div>
      </header>

      {/* Contenu principal */}
      <main className="flex flex-col items-center justify-center flex-grow px-6 py-10">
        
        {/* Logo / Image avec ombre visible */}
        <div className="mb-8 rounded-2xl shadow-2xl p-[2px] bg-transparent">
          <div className="relative w-[120px] h-[120px] rounded-2xl overflow-hidden bg-[#4608ad]">
            <Image
              src="/images/ichiro.png"
              alt="Ichiro"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 120px, 120px"
            />
          </div>
        </div>

        {/* Titre */}
        <h1 className="text-3xl font-bold mb-3 text-center tracking-wide">
          Dashboard
        </h1>

        {/* Sous-titre */}
        <p className="text-base text-gray-200 text-center mb-8">
          Suivi des performances & actifs DEFIT
        </p>

        {/* Tableau stylisé */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg w-full max-w-sm p-6">
          <table className="w-full text-base">
            <tbody>
              <tr className="border-b border-white/20">
                <td className="py-3">DEFIT</td>
                <td className="py-3 text-right font-semibold">100 000</td>
              </tr>
              <tr className="border-b border-white/20">
                <td className="py-3">BTC</td>
                <td className="py-3 text-right font-semibold">0.1234568</td>
              </tr>
              <tr className="border-b border-white/20">
                <td className="py-3">EURC</td>
                <td className="py-3 text-right font-semibold">3 500 082</td>
              </tr>
              <tr>
                <td className="py-3">BOOST</td>
                <td className="py-3 text-right font-semibold">30 000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 text-sm text-gray-300 text-center py-4">
        &copy; 2025 Ichiro Labs — Tous droits réservés
      </footer>
      
    </div>
  );
}
