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
      <h1 className="text-3xl font-bold mb-2 text-center tracking-wide">
        Jinbe {id ?? "—"}
      </h1>

      {/* Subtitle */}
      <p className="text-base text-gray-200 text-center mb-6">
        Suivi des performances & actifs
      </p>

      {/* Stats Table (cadre réappliqué) */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-24 w-full max-w-sm">
        <table className="w-full text-base">
          <tbody>
            <tr className="border-b border-white/20">
              <td className="py-3">DEFIT</td>
              <td className="py-3 text-right font-semibold">
                {defitAmount ?? "..."}
              </td>
            </tr>

            <tr className="border-b border-white/20">
              <td className="py-3 flex items-center gap-2 whitespace-nowrap">
                BTC
                <span className="w-3 h-3 flex items-center justify-center rounded-full bg-white text-black text-[10px] font-bold">
                  ?
                </span>
              </td>
              <td className="py-3 text-right font-semibold whitespace-nowrap">
                0.1234568
              </td>
            </tr>

            <tr className="border-b border-white/20">
              <td className="py-3">BOOST (€)</td>
              <td className="py-3 text-right font-semibold">30 0000</td>
            </tr>

            <tr className="border-b border-white/20">
              <td className="py-3">PARTICIPATION</td>
              <td className="py-3 text-right font-semibold">50%</td>
            </tr>

            <tr>
              <td className="py-3">
                <b>TOTAL</b>
              </td>
              <td className="py-3 text-right font-semibold">0.1234568</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
