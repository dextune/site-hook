import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-7xl font-extrabold text-gray-800 dark:text-white">Hello Everyone !!</h1>
        <h2 className="text-3xl font-bold text-gray-600 dark:text-gray-300">Site Hook powered by Dextune with Next.js</h2>
        <p className="text-gray-500 text-center sm:text-left">This project is a RESTful API designed to retrieve information from various websites.</p>
      </main>
    </div>
  );
}
