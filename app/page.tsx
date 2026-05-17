"use client";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("home");

  const ranks = [
    {
      name: "💠 VIP",
      color: "from-cyan-500 to-blue-600",
      price: "$3",
      perks: ["روم خاص", "لون مميز", "أوامر إضافية", "Kit: Iron Armor"],
    },
    {
      name: "👑 VIP+",
      color: "from-purple-500 to-pink-600",
      price: "$5",
      perks: ["كل مميزات VIP", "أولوية دعم", "Kit: Diamond Set"],
    },
    {
      name: "💎 ELITE",
      color: "from-sky-400 to-cyan-600",
      price: "$8",
      perks: ["رومات حصرية", "إيموجيات خاصة", "Kit: Totem + Diamond"],
    },
    {
      name: "🔥 LEGEND",
      color: "from-orange-500 to-red-600",
      price: "$12",
      perks: ["منشن خاص", "أولوية فعاليات", "Kit: Elytra + Netherite"],
    },
    {
      name: "⚡ MASTER",
      color: "from-yellow-400 to-amber-600",
      price: "$18",
      perks: ["صلاحيات متقدمة", "ستايل اسم", "Kit: Potions + Netherite"],
    },
    {
      name: "🌟 ROYAL",
      color: "from-pink-500 to-rose-600",
      price: "$22",
      perks: ["تاج فاخر", "مزايا مخصصة", "Royal Chest"],
    },
    {
      name: "🪐 GALAXY",
      color: "from-indigo-500 to-fuchsia-700",
      price: "$27",
      perks: ["تأثيرات حصرية", "مميزات كاملة", "Galaxy Set"],
    },
    {
      name: "🏆 IMMORTAL",
      color: "from-yellow-300 to-yellow-600",
      price: "$30",
      perks: ["جميع المميزات", "أعلى رتبة", "Immortal Loot"],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-6xl font-extrabold text-center mb-10">
        ⚔️ STORY SERVER
      </h1>

      {page === "home" && (
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-20">
          <button
            onClick={() => setPage("shop")}
            className="bg-purple-600 hover:bg-purple-700 px-12 py-6 rounded-2xl text-2xl font-bold shadow-2xl"
          >
            🛒 Story Shop
          </button>

          <button
            onClick={() => setPage("apply")}
            className="bg-cyan-600 hover:bg-cyan-700 px-12 py-6 rounded-2xl text-2xl font-bold shadow-2xl"
          >
            🛡️ Apply
          </button>
        </div>
      )}

      {page === "shop" && (
        <>
          <button
            onClick={() => setPage("home")}
            className="mb-8 bg-zinc-800 px-6 py-2 rounded-xl"
          >
            ← Back
          </button>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {ranks.map((rank, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${rank.color} p-[2px] rounded-3xl shadow-2xl`}
              >
                <div className="bg-zinc-950 rounded-3xl p-6 h-full">
                  <h2 className="text-2xl font-bold mb-2">{rank.name}</h2>
                  <p className="text-3xl font-bold mb-4">{rank.price}</p>

                  <ul className="space-y-2 text-sm">
                    {rank.perks.map((perk, i) => (
                      <li key={i}>✓ {perk}</li>
                    ))}
                  </ul>

                  <button className="mt-5 w-full bg-white text-black py-3 rounded-xl font-bold">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {page === "apply" && (
        <div className="max-w-xl mx-auto bg-zinc-900 p-8 rounded-3xl shadow-2xl">
          <button
            onClick={() => setPage("home")}
            className="mb-6 bg-zinc-800 px-6 py-2 rounded-xl"
          >
            ← Back
          </button>

          <h2 className="text-3xl font-bold mb-6">Admin Application</h2>

          <input
            className="w-full p-3 rounded text-black mb-4"
            placeholder="Discord Name"
          />
          <input
            className="w-full p-3 rounded text-black mb-4"
            placeholder="Age"
          />
          <textarea
            className="w-full p-3 rounded text-black mb-4"
            placeholder="Why should we accept you?"
          />

          <button className="w-full bg-cyan-500 text-black py-3 rounded-xl font-bold">
            Submit Application
          </button>
        </div>
      )}
    </main>
  );
}