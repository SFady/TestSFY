"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [defitAmount, setDefitAmount] = useState(null);
  const [selected, setSelected] = useState("1"); // valeur stable par défaut

  // ----------------------------------------------------
  // 📌 Récupération du montant DEFIT pour un athlète
  // ----------------------------------------------------
  const fetchDefitAmount = async (athleteId) => {
    try {
      const res = await fetch(`/api/get-user-defit-amount?id=${athleteId}`);
      const data = await res.json();
      setDefitAmount(Number(data.result) ?? 0);
    } catch (error) {
      console.error("Erreur fetch DEFIT:", error);
    }
  };

  // ----------------------------------------------------
  // 📌 Chargement initial : lecture du localStorage
  // ----------------------------------------------------
  useEffect(() => {
    const stored = localStorage.getItem("selectedAthlete");

    const athleteId = stored || "1"; // fallback robuste
    setSelected(athleteId);
    fetchDefitAmount(athleteId);

    if (!stored) {
      localStorage.setItem("selectedAthlete", "1");
    }
  }, []);

  // ----------------------------------------------------
  // 📌 Lors d'un changement dans le <select>
  // ----------------------------------------------------
  const handleSelect = (e) => {
    const id = e.target.value;
    setSelected(id);
    localStorage.setItem("selectedAthlete", id);
    fetchDefitAmount(id);
  };

  // ----------------------------------------------------
  // 🎨 Styles couleurs pour les options (compatibilité totale)
  // ----------------------------------------------------
  const optionStyle = {
    backgroundColor: "#8d6bf2",
    color: "#f3f0ff",
  };

  return (
    <main className="flex flex-col items-center pt-24 px-6 md:px-16 w-full h-full">

      {/* Image */}
      <div className="mb-6 rounded-2xl shadow-2xl p-[2px] bg-transparent">
        <div className="relative w-[120px] h-[120px] rounded-2xl shadow-2xl">
          <Image
            src="/images/runner.webp"
            alt="Ichiro"
            fill
            className="object-cover rounded-2xl"
            priority
            sizes="(max-width: 768px) 100px, 100px"
          />
        </div>
      </div>

      {/* Select Athlete */}
      <select
        value={selected}
        onChange={handleSelect}
        className="
          bg-white/10 text-white 
          px-3 py-2 rounded-lg border border-white/20 
          focus:outline-none focus:ring-2 focus:ring-white/30
          appearance-none
        "
      >
        <option value="1" style={optionStyle}>Usopp</option>
        <option value="3" style={optionStyle}>Nico Robin</option>
        <option value="2" style={optionStyle}>DTeach</option>
        <option value="4" style={optionStyle}>Jinbe</option>
      </select>

      <br />

      {/* Stats Table */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-24 w-full max-w-sm">
        <table className="w-full text-base">
          <tbody>

            {/* DEFIT */}
            <tr className="border-b border-white/20">
              <td className="py-3">DEFIT</td>
              <td className="py-3 text-right font-semibold">
                {defitAmount !== null
                  ? defitAmount.toLocaleString("fr-FR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                  : "..."}
              </td>
            </tr>

            {/* Prix */}
            <tr className="border-b border-white/20">
              <td className="py-3">Cours du Defit</td>
              <td className="py-3 text-right font-semibold">0,45 $</td>
            </tr>

            {/* Euros */}
            <tr className="border-b border-white/20">
              <td className="py-3">Euros</td>
              <td className="py-3 text-right font-semibold">0</td>
            </tr>

            {/* Last Activity */}
            <tr className="border-b border-white/20">
              <td className="py-3">Dernière activité</td>
              <td className="py-3 text-right font-semibold">14/11/2025</td>
            </tr>

            {/* TOTAL */}
            <tr>
              <td className="py-3 font-bold text-[#f6d860]">TOTAL Gains</td>
              <td className="py-3 text-right font-bold text-[#f6d860]">120,96 €</td>
            </tr>

          </tbody>
        </table>
      </div>
    </main>
  );
}
