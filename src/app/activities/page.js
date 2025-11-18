"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const players = [
    {
      id: 1,
      name: "Alice",
      score: 2500,
      rank: 1,
    },
    {
      id: 2,
      name: "Bob",
      score: 1800,
      rank: 2,
    },
    {
      id: 3,
      name: "Charlie",
      score: 1500,
      rank: 3,
    },
    {
      id: 4,
      name: "David",
      score: 1200,
      rank: 4,
    },
  ];


  return (


    <main className="flex flex-col items-center pt-24 px-6 md:px-16 w-full h-full">
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

      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 w-full">
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
            {players.map((player, idx) => (
              <tr
                key={player.id}
                className={`hover:bg-white/20 transition-colors ${idx % 2 === 0 ? "bg-white/5" : ""}`}
              >
                <td className="py-3 px-4">{player.name}</td>
                <td className="py-3 px-4">{player.score}</td>
                <td className="py-3 px-4">{player.rank}</td>
                <td className="py-3 px-4">x</td>
                <td className="py-3 px-4">x</td>
                <td className="py-3 px-4">x</td>
                <td className="py-3 px-4">x</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>








    </main>
  );
}
