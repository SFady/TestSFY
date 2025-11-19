"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [defitAmount, setDefitAmount] = useState(null);
  const [selected, setSelected] = useState("1");

  const fetchDefitAmount = async (athleteId) => {
    try {
      const res = await fetch(`/api/get-user-defit-amount?id=${athleteId}`);
      const data = await res.json();
      setDefitAmount(Number(data.result) ?? 0);
    } catch (error) {
      console.error("Erreur fetch DEFIT:", error);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem("selectedAthlete");
    const finalId = stored || "1";
    setSelected(finalId);
    if (!stored) localStorage.setItem("selectedAthlete", finalId);

    fetchDefitAmount(finalId);
  }, []);

  const handleSelect = (e) => {
    const id = e.target.value;
    setSelected(id);
    localStorage.setItem("selectedAthlete", id);
    fetchDefitAmount(id);
  };

  return (
    <main className="flex flex-col items-center justify-start w-full
                     max-w-screen-xl mx-auto px-6 md:px-16
                     pt-6 pb-6 md:pt-0 md:pb-0
                     min-h-[calc(100vh-96px)] md:min-h-auto
                     overflow-y-auto md:overflow-visible">

      {/* Image du profil */}
      <div className="mb-6 rounded-2xl shadow-2xl p-[2px] bg-transparent">
        <div className="relative w-[120px] h-[120px] rounded-2xl shadow-2xl">
          <Image
            src="/images/runner.webp"
            alt="Athlete"
            fill
            className="object-cover rounded-2xl"
            priority
            sizes="(max-width: 768px) 100px, 100px"
          />
        </div>
      </div>

      {/* Sélecteur d’athlète */}
      <select
        value={selected}
        onChange={handleSelect}
        className="bg-white/10 text-white px-3 py-2 rounded-lg border border-white/20 
                   focus:outline-none focus:ring-2 focus:ring-white/30 mb-6"
      >
        <option value="1" className="bg-[#8d6bf2] text-[#f3f0ff]">Usopp</option>
        <option value="3" className="bg-[#8d6bf2] text-[#f3f0ff]">Nico Robin</option>
        <option value="2" className="bg-[#8d6bf2] text-[#f3f0ff]">DTeach</option>
        <option value="4" className="bg-[#8d6bf2] text-[#f3f0ff]">Jinbe</option>
      </select>

      {/* Tableau des stats */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-6 w-full max-w-sm">
        <table className="w-full text-base">
          <tbody>
            <tr className="border-b border-white/20">
              <td className="py-3 px-2">DEFIT</td>
              <td className="py-3 px-2 text-right font-semibold">
                {Number(defitAmount)?.toLocaleString("fr-FR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }) ?? "..."}
              </td>
            </tr>

            <tr className="border-b border-white/20">
              <td className="py-3 px-2">Cours du Defit</td>
              <td className="py-3 px-2 text-right font-semibold">0,45 $</td>
            </tr>

            <tr className="border-b border-white/20">
              <td className="py-3 px-2">Euros</td>
              <td className="py-3 px-2 text-right font-semibold">0</td>
            </tr>

            <tr className="border-b border-white/20">
              <td className="py-3 px-2">Dernière activité</td>
              <td className="py-3 px-2 text-right font-semibold">14/11/2025</td>
            </tr>

            <tr className="text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              <td className="py-3 px-2 font-bold">TOTAL Gains</td>
              <td className="py-3 px-2 text-right font-semibold">
                120,96 €
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
