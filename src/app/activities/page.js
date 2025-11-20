"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/get-users-activities"); // ← update route
      const data = await res.json();
      setRows(data.result);
    }
    load();
  }, []);

  return (


    <main
      className={`
    flex flex-col items-center justify-start w-full
    max-w-screen-xl mx-auto px-6 md:px-16
    pt-6 pb-6 md:pt-0 md:pb-0
    min-h-[calc(100vh-96px)] md:min-h-auto
    overflow-y-auto md:overflow-visible
  `}
    >


      {/* <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-24 w-full max-w-sm">
        Activités
      </div>
       */}
      {/* <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-24 w-full">
        Contenu ici
      </div> */}

      {/* <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-24 w-full"> */}
      {/* Tableau desktop */}
      {/* <table className="hidden md:table w-full text-left">
          <thead>
            <tr>
              <th className="p-2">Nom</th>
              <th className="p-2">Âge</th>
              <th className="p-2">Ville</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Alice</td>
              <td className="p-2">25</td>
              <td className="p-2">Paris</td>
            </tr>
            <tr>
              <td className="p-2">Bob</td>
              <td className="p-2">30</td>
              <td className="p-2">Lyon</td>
            </tr>
          </tbody>
        </table> */}

      {/* Tableau mobile */}
      {/* <div className="md:hidden w-full">
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="p-2">Nom</th>
                <th className="p-2">Âge</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Alice</td>
                <td className="p-2">25</td>
              </tr>
              <tr>
                <td className="p-2">Bob</td>
                <td className="p-2">30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}

      <div className="bg-[#5339A0] backdrop-blur-md rounded-2xl shadow-lg p-6 mb-6 w-full ">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Athlete</th>
              <th className="py-3 px-4">Activité</th>
              <th className="py-3 px-4">Gain brut (Defit)</th>
              <th className="py-3 px-4">Participation</th>
              <th className="py-3 px-4">Gain net (Defit)</th>
              <th className="py-3 px-4">Gain net (€)</th>
            </tr>
          </thead>
          <tbody className="text-gray-200">
            {rows.map((row, idx) => (
              <tr
                key={row.id}
                className={`hover:bg-white/100 transition-colors ${idx % 2 === 0 ? "bg-white/3" : ""}`}
              >
                <td className="py-3 px-4">{new Date(row.date_claimed).toLocaleDateString("fr-FR")}</td>
                <td className="py-3 px-4">{row.user_name}</td>
                <td className="py-3 px-4">{row.activity_name}</td>
                <td className="py-3 px-4">{row.defit_amount}</td>
                <td className="py-3 px-4">{Math.floor(row.participation_percentage)}%</td>
                <td className="py-3 px-4">{(row.defit_amount * row.participation_percentage / 100).toFixed(2)}</td>
                <td className="py-3 px-4">x</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>








    </main>
  );
}
