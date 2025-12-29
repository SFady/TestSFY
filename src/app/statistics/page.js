"use client";

import { useDefitPrice } from "../api/useDefitPrice/useDefitPrice";
import { useEffect, useState } from "react";

export default function Home() {
  const { price: defitPrice } = useDefitPrice();
  const [totals, setTotals] = useState([]);

  const fetchTotals = async () => {
    try {
      const res = await fetch(`/api/get-user-totals?id=0`);
      const data = await res.json();
      setTotals(data || []); // data est déjà un tableau
    } catch (error) {
      console.error("Erreur fetchTotals:", error);
    }
  };

  useEffect(() => {
    fetchTotals(); // récupérer tous les athletes
  }, []);

  return (
    <main className="flex flex-col justify-start w-full max-w-screen-xl mx-auto px-4 md:px-8 pt-4 pb-4 min-h-[calc(100vh-96px)] md:min-h-auto overflow-y-auto">
      {/* Tableau du prix du Defit */}
      <table className="table-auto text-center border-collapse bg-[#5C42A6] shadow-lg overflow-x-auto mx-auto p-4">
        <thead>
          <tr className="text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <th className="py-2 px-3">Cours du Defit</th>
          </tr>
        </thead>
        <tbody className="text-gray-200">
          <tr>
            <td className="py-2 px-3">{defitPrice?.toFixed(4) ?? '...'} $</td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />

      {/* Tableau des totals par utilisateur */}
      <table className="table-auto text-center border-collapse bg-[#5C42A6] shadow-lg overflow-x-auto mx-auto p-4">
        <thead>
          <tr className="text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <th className="py-2 px-3">Athlete</th>
            <th className="py-2 px-3">Km</th>
            <th className="py-2 px-3">Defits ($)</th>
            <th className="py-2 px-3">Boost ($)</th>
            <th className="py-2 px-3">Total ($)</th>
          </tr>
        </thead>
        <tbody className="text-gray-200">
          {totals.length > 0 ? (
            totals.map((row, idx) => {
              const defit = Number(row.defit_amount ?? 0);
              const boost = Number(row.boost ?? 0);
              const total = defit + boost;

              return (
                <tr key={idx}>
                  <td className="py-1 px-2">{row.name}</td>
                  <td className="py-1 px-2">{Number(row.kilometers ?? 0)}</td>
                  <td className="py-1 px-2">{defit.toFixed(2)}</td>
                  <td className="py-1 px-2">{boost.toFixed(2)}</td>
                  <td className="py-1 px-2">{total.toFixed(2)}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5} className="py-2 px-2 text-gray-400">
                Chargement...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
}
