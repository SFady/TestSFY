import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <div className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">

        <header className="bg-indigo-600 text-white p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">My Website</h1>
            <nav className="space-x-4">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Contact</a>
            </nav>
          </div>
        </header>

        <main className="flex-1 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Welcome</h2>
            <p className="text-gray-700">
              This is a simple responsive page using Tailwind CSS. Resize your browser to see how it adapts.
            </p>
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">Box 1</div>
            <div className="bg-white p-4 rounded shadow">Box 2</div>
            <div className="bg-white p-4 rounded shadow">Box 3</div>
            <div className="bg-white p-4 rounded shadow">Box 4</div>
            <div className="bg-white p-4 rounded shadow">Box 5</div>
            <div className="bg-white p-4 rounded shadow">Box 6</div>
          </section>
        </main>
        
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="max-w-7xl mx-auto text-center">
            &copy; 2025 My Website. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
