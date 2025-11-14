"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const [id, setId] = useState(null);
  const [defitAmount, setDefitAmount] = useState(null);

  useEffect(() => {

    const queryId = searchParams.get("id");
    const activeId = queryId || 1;
    const selectedAthlete = localStorage.getItem("selectedAthlete");

    if (!queryId) {
      // Only redirect if URL has no id
      if (selectedAthlete) {
        window.location.replace(`/home?id=${encodeURIComponent(selectedAthlete)}`);
      }
      return; // stop further code
    }

    // if (selectedAthlete != queryId) {
    //   router.push(`/home?id=${queryId}`);
    // }

    if (activeId) {
      setId(activeId);

      fetch(`/api/get-user-defit-amount?id=${activeId}`)
        .then((res) => res.json())
        .then((data) => setDefitAmount(Number(data.result) ?? 0))
        .catch(console.error);
    }
  }, [searchParams]);

  if (!id) return <p>Loading...</p>;

  return (
    <main className="flex flex-col items-center pt-24 px-6 md:px-16 w-full h-full">
      {/* Image Card */}
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

      {/* Name */}
      {/* <h1 className="text-3xl font-bold mb-2 text-center tracking-wide"> */}
      <select
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
      {/* </h1> */}

      {/* Subtitle */}
      {/* <p className="text-base text-gray-200 text-center mb-6">
        Suivi des performances & actifs
      </p> */}

      <br></br>

      {/* Stats Table (cadre réappliqué) */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-24 w-full max-w-sm">
        <table className="w-full text-base">
          <tbody>
            <tr className="border-b border-white/20">
              <td className="py-3">DEFIT</td>
              <td className="py-3 text-right font-semibold">
                {Number(defitAmount)?.toLocaleString("fr-FR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }) ?? "..."}
              </td>
            </tr>

            <tr className="border-b border-white/20">
              <td className="py-3">Cours du Defit</td>
              <td className="py-3 text-right font-semibold">0,45 $</td>
            </tr>

            <tr className="border-b border-white/20">
              <td className="py-3">Euros</td>
              <td className="py-3 text-right font-semibold">0</td>
            </tr>

            <tr className="border-b border-white/20">
              <td className="py-3">Dernière activité</td>
              <td className="py-3 text-right font-semibold">14/11/2025</td>
            </tr>

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
