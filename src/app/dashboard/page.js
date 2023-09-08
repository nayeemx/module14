"use client";

import { useRouter } from "next/navigation";

const page = async () => {
    const router = useRouter();
    const Logout = async () => {
        const response = await fetch("/api/verify");
        const json = await response.json();
        if (json["status"] === true) {
            router.replace("/");
        }
    };
    return (
      <div className="bg-orange-200 min-h-screen flex">
  {/* Sidebar */}
  <aside className="bg-purple-500 w-64 p-4">
    <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
    <ul className="space-y-2">
      <li className="hover:text-yellow-500 cursor-pointer">Dashboard</li>
      <li className="hover:text-yellow-500 cursor-pointer">Analytics</li>
      <li className="hover:text-yellow-500 cursor-pointer">Settings</li>
    </ul>
  </aside>

  {/* Main Content */}
  <main className="flex-grow p-8">
    <h1 className="text-2xl font-bold mb-4 text-emerald-600">Welcome to the Dashboard</h1>
    {/* Your dashboard content goes here */}
    {/* ...

         ... */}
    
    {/* Logout Button */}
    <button
      onClick={Logout}
      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300">
      Logout
    </button>
  </main>
</div>

    );
};

export default page;