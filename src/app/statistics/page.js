"use client";

import { useDefitPrice } from "../api/useDefitPrice/useDefitPrice";

export default function Home() {

  const { price: defitPrice } = useDefitPrice();

  return (
    <main className="flex flex-col justify-start w-full max-w-screen-xl mx-auto px-4 md:px-8 pt-4 pb-4 min-h-[calc(100vh-96px)] md:min-h-auto overflow-y-auto">

      <table className="table-auto text-center border-collapse text-sm bg-[#5C42A6] shadow-lg overflow-x-auto mx-auto p-4">
        <thead>
          <tr className="text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-sm">
            <th className="py-2 px-3">Cours du Defit</th>
          </tr>
        </thead>
        <tbody className="text-gray-200 text-sm">
          <tr>
            <td className="py-2 px-3">{defitPrice?.toFixed(4) ?? '...'} $</td>
          </tr>
        </tbody>
      </table>

      <br></br>

      <table className="table-auto text-center border-collapse text-sm bg-[#5C42A6] shadow-lg overflow-x-auto mx-auto p-4">
        <thead>
          <tr className="text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-sm">
            <th className="py-2 px-3">Athlete</th>
            <th className="py-2 px-3">Km</th>
            <th className="py-2 px-3">Defits ($)</th>
            <th className="py-2 px-3">Boost ($)</th>
            <th className="py-2 px-3">Total ($)</th>
          </tr>
        </thead>
        <tbody className="text-gray-200 text-sm">
          <tr>
            <td className="py-1 px-2">Nico Robin</td>
            <td className="py-1 px-2">1000</td>
            <td className="py-1 px-2">1000.00</td>
            <td className="py-1 px-2">1000.00</td>
            <td className="py-1 px-2">1000.00</td>
          </tr>
        </tbody>
      </table>

     

    </main>
  );
}
