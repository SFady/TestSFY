"use client";

import { useEffect, useState } from "react";
import { useDefitPrice } from "../api/useDefitPrice/useDefitPrice";

export default function Home() {
  const [rows, setRows] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const { price: defitPrice, error } = useDefitPrice();

  useEffect(() => {
    setIsClient(true);
    async function load() {
      const res = await fetch("/api/get-users-activities");
      const data = await res.json();
      setRows(data.result);
    }
    load();
  }, []);

  return (
    <main className="flex flex-col items-center justify-start w-full max-w-screen-xl mx-auto px-6 md:px-16 pt-6 pb-6 md:pt-0 md:pb-0 min-h-[calc(100vh-96px)] md:min-h-auto overflow-y-auto">
      <div className="bg-[#5C42A6] rounded-2xl shadow-lg p-6 mb-6 w-full overflow-x-auto">
        <table className="w-full table-auto text-left border-collapse">
          <thead>
            <tr className="text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Athlete</th>
              <th className="py-3 px-4">Activité</th>
              <th className="py-3 px-4">Gain brut (Defit)</th>
              <th className="py-3 px-4">Gain net (Defit)</th>
              <th className="py-3 px-4">Boost (€)</th>
              <th className="py-3 px-4">Gain net (€)</th>
            </tr>
          </thead>
          <tbody className="text-gray-200">
            {rows.map((row, idx) => {
              const rowClass = `hover:bg-white/10 transition-colors ${idx % 2 === 0 ? "bg-[#5C42A6]/80" : "bg-[#5C42A6]/80"} border-b border-white/20`;
              return (
                <tr key={row.id} className={rowClass}>
                  <td className="text-white py-3 px-4">
                    {isClient ? new Date(row.date_claimed).toLocaleDateString("fr-FR") : row.date_claimed}
                  </td>
                  <td className="text-white py-3 px-4">{row.user_name}</td>
                  <td className="text-white py-3 px-4">{row.activity_name}</td>
                  <td className="text-white py-3 px-4">{row.defit_amount}</td>
                  <td className="text-white py-3 px-4">{(row.defit_amount * row.participation_percentage / 100).toFixed(2)}</td>
                  <td className="text-white py-3 px-4">{(0).toFixed(2)}</td>
                  <td className="text-white py-3 px-4">{(row.defit_amount * row.participation_percentage * defitPrice / 100).toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
