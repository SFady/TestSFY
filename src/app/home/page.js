"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useDefitPrice } from "../api/useDefitPrice/useDefitPrice";

export default function Home() {

  const [defitAmount, setDefitAmount] = useState(0);
  const [dollarAmount, setDollarAmount] = useState(0);
  const [user_liquidity, setUserLiquidity] = useState(0);

  const [selected, setSelected] = useState("1");

  const { price: defitPrice, error } = useDefitPrice();

  const fetchDefitAmount = async (athleteId) => {
    try {
      const res = await fetch(`/api/get-user-defit-amount?id=${athleteId}`);
      const data = await res.json();
      setDefitAmount(Number(data.defits) ?? 0);
      setDollarAmount(Number(data.dollars) ?? 0);
      setUserLiquidity(Number(data.user_liquidity) ?? 0);
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
    <main className="relative w-full max-w-screen-xl mx-auto px-6 md:px-16 pt-6 pb-6 md:pt-0 md:pb-0 min-h-[calc(100vh-96px)] overflow-y-auto md:overflow-visible">

      {/* Sélecteur d’athlète centré au-dessus de l’image */}
      <div className="flex justify-center mb-4 mt-2 md:mt-10">
        <select
          value={selected}
          onChange={handleSelect}
          className="bg-white/10 text-white px-3 py-2 rounded-lg border border-white/20 
               focus:outline-none focus:ring-2 focus:ring-white/30
               md:px-4 md:py-2 md:text-base"
        >
          <option value="1" className="bg-[#8d6bf2] text-[#f3f0ff]">Usopp</option>
          <option value="3" className="bg-[#8d6bf2] text-[#f3f0ff]">Nico Robin</option>
          <option value="2" className="bg-[#8d6bf2] text-[#f3f0ff]">DTeach</option>
          <option value="4" className="bg-[#8d6bf2] text-[#f3f0ff]">Jinbe</option>
        </select>
      </div>


      <div className="flex justify-center items-start gap-2 mb-4">

        {/* IMAGE À GAUCHE avec position relative */}
        <div className="rounded-2xl inline-block relative">
          <Image
            src="/images/runner_init2.png"
            alt="Athlete"
            width={200}
            height={400}
            loading="eager"
          />

          {/* TRAIT partant du milieu horizontal de la tête */}
          <div
            className="absolute bg-gray-600 h-px"
            style={{
              top: "20px",       // milieu de la tête
              left: "50%",       // milieu horizontal de l'image
              width: "80px"      // longueur du trait vers le texte
            }}
          />
        </div>

        {/* TEXTE À DROITE, encore plus proche du trait */}
        <div className="ml-0 flex flex-col justify-start" style={{ marginTop: "8px" }}>
          <h2 className="text-sm font-semibold leading-snug">Classe A / Niveau 0</h2>
        </div>

      </div>

      {/* Tableau des stats */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-6 w-full max-w-sm mx-auto">
        <table className="w-full text-base">
          <tbody>
            <tr className="border-b border-white/20">
              <td className="py-3 px-2">DEFIT</td>
              <td className="py-3 px-2 text-right font-semibold">
                {Number(defitAmount * defitPrice)?.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }) + " $" ?? "..."}
              </td>
            </tr>
            <tr className="border-b border-white/20">
              <td className="py-3 px-2">Améliorations</td>
              <td className="py-3 px-2 text-right font-semibold">
                 {Number(user_liquidity)?.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }) + " $" ?? "..."}
              </td>
            </tr>
            <tr className="border-b border-white/20">
              <td className="py-3 px-2">Disponible</td>
              <td className="py-3 px-2 text-right font-semibold">
               {Number(dollarAmount)?.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }) + " $" ?? "..."}
              </td>
            </tr>
            <tr className="border-t-4 border-transparent text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              <td className="py-2 px-2 font-bold">TOTAL Gains</td>
              <td className="py-2 px-2 text-right font-semibold">
                 {Number((defitAmount * defitPrice) + dollarAmount)?.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }) + " $" ?? "..."}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
