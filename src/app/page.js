// src/app/page.js
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">

      {/* Header */}
      <header className="bg-indigo-600 text-white p-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">My Website</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8 w-full">
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            Colonne gauche (1/2)
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
          <div className="bg-white p-4 rounded shadow">
            
              <table>
                <tbody>
                <tr>
                  <td className="text-xs">DEFIT</td>
                  <td className="text-xs">100 000</td>
                </tr>
                <tr>
                  <td className="text-xs">BTC</td>
                  <td className="text-xs">0.1234568</td>
                </tr>
                <tr>
                  <td className="text-xs">EURC</td>
                  <td className="text-xs">3500082</td>
                </tr>
                <tr>
                  <td className="text-xs">BOOST</td>
                  <td className="text-xs">30000</td>
                </tr>
                </tbody>
              </table>
            
            
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="max-w-screen-xl mx-auto text-center">
          &copy; 2025 My Website. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
