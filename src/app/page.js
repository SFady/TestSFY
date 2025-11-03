"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#5f3dc4] flex flex-col items-center justify-center text-white px-4 py-8">
      
      {/* Logo / Image avec container et ombre */}
      <div className="w-[100px] h-[100px] rounded-xl shadow-lg overflow-hidden flex items-center justify-center mb-6 bg-[#4608ad]">
        <Image
          src="/images/ichiro.png"
          alt="Ichiro"
          width={100}
          height={100}
          className="object-contain"
          priority
        />
      </div>

      {/* Titre */}
      <h1 className="text-2xl font-bold mb-2 text-center tracking-wide">
        Ichiro Dashboard
      </h1>

      {/* Sous-titre */}
      <p className="text-sm text-gray-200 text-center mb-6">
        Suivi des performances & actifs DEFIT
      </p>

      {/* Tableau stylisé */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg w-full max-w-xs p-4">
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b border-white/20">
              <td className="py-2">DEFIT</td>
              <td className="py-2 text-right font-semibold">100 000</td>
            </tr>
            <tr className="border-b border-white/20">
              <td className="py-2">BTC</td>
              <td className="py-2 text-right font-semibold">0.1234568</td>
            </tr>
            <tr className="border-b border-white/20">
              <td className="py-2">EURC</td>
              <td className="py-2 text-right font-semibold">3 500 082</td>
            </tr>
            <tr>
              <td className="py-2">BOOST</td>
              <td className="py-2 text-right font-semibold">30 000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-xs text-gray-300 text-center">
        &copy; 2025 Ichiro Labs — Tous droits réservés
      </footer>
    </div>
  );
}
