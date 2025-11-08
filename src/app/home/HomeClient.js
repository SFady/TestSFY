"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const [id, setId] = useState(null); // initially null
  const [defitAmount, setDefitAmount] = useState(null);

  useEffect(() => {
    // This runs only in the browser
    const queryId = searchParams.get("id");
    const storedId = localStorage.getItem("selectedAthlete");
    const activeId = queryId || storedId || 1;

    if (activeId) {
      setId(activeId);

      fetch(`/api/get-user-defit-amount?id=${activeId}`)
        .then((res) => res.json())
        .then((data) => setDefitAmount(Number(data.result) ?? 0))
        .catch(console.error);
    }
  }, [searchParams]);

  if (!id) return <p>Loading...</p>; // Optional loading state

  return (
    <main className="flex flex-col items-center px-6">
      <div className="mb-6 rounded-2xl shadow-2xl p-[2px] bg-transparent">
        <div className="relative w-[120px] h-[120px] rounded-2xl shadow-2xl">
          <Image
            src="/images/test.png"
            alt="Ichiro"
            fill
            className="object-cover rounded-2xl"
            priority
            sizes="(max-width: 768px) 100px, 100px"
          />
        </div>
      </div>
      {/* <br/>   */}
      <h1 className="text-3xl font-bold mb-2 text-center tracking-wide">
        Jinbe {id ?? "—"}
      </h1>

      <p className="text-base text-gray-200 text-center mb-6">
        Suivi des performances & actifs
      </p>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg w-full max-w-sm p-6 mb-24">
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
    {/* Question mark with tooltip */}
    <span className="relative group cursor-pointer flex-shrink-0">
      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-yellow-400 text-black text-xs font-bold">
        ?
      </span>
      <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-44 max-w-xs rounded-md bg-gray-800 text-white text-xs text-center px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
        Bitcoin holdings for this athlete
      </span>
    </span>
  </td>
  <td className="py-3 text-right font-semibold whitespace-nowrap">0.1234568</td>
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
