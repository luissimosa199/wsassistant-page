import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <div className="flex flex-col h-screen bg-gray-100/40 dark:bg-gray-800/40 justify-center items-center">
        <div className="border dark:border-gray-800 rounded-lg p-8 bg-white dark:bg-gray-900 shadow-lg w-full max-w-md">
          <h2 className="font-semibold text-lg text-center mb-6">Bienvenido</h2>
          <div className="flex flex-col space-y-4">
            <Link href="/panel/pizzeria">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full">
                Panel Pizzeria
              </button>
            </Link>
            <Link href="/panel/chipas">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full">
                Panel Chipas
              </button>
            </Link>
            <Link href="/chat/pizzeria">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full">
                Chat Pizzeria
              </button>
            </Link>
            <Link href="/chat/chipas">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full">
                Chat Chipas
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
