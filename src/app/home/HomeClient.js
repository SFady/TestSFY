"use client"; // Must be first line

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [defitAmount, setDefitAmount] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/get-user-defit-amount?id=${id}`)
        .then((res) => res.json())
        .then((data) => setDefitAmount(Number(data.result) ?? 0))
        .catch(console.error);
    }
  }, [id]);

  return (
    <main className="flex flex-col items-center px-6">
      <div className="mb-6 rounded-2xl shadow-2xl p-[2px] bg-transparent">
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
              <td className="py-3 text-right font-semibold">{defitAmount ?? "..."}</td>
            </tr>
            <tr className="border-b border-white/20">
              <td className="py-3">BTC</td>
              <td className="py-3 text-right font-semibold">0.1234568</td>
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
              <td className="py-3"><b>TOTAL</b></td>
              <td className="py-3 text-right font-semibold">0.1234568</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
