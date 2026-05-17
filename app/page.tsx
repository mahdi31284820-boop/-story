export default function Home() {
  const ranks = [
    {
      name: "💠 VIP",
      color: "from-cyan-500 to-blue-600",
      price: "$5",
      perks: [
        "روم خاص",
        "لون مميز",
        "أوامر إضافية",
        "Kit: Iron Armor + Diamond Sword",
        "64x Golden Apples",
      ],
    },
    {
      name: "👑 VIP+",
      color: "from-purple-500 to-pink-600",
      price: "$10",
      perks: [
        "كل مميزات VIP",
        "أولوية دعم",
        "إرسال صور وملفات",
        "Kit: Diamond Armor + Enchanted Bow",
        "Spawner Key",
      ],
    },
    {
      name: "💎 ELITE",
      color: "from-sky-400 to-cyan-600",
      price: "$15",
      perks: [
        "رومات حصرية",
        "إيموجيات خاصة",
        "مميزات ترفيهية",
        "Kit: Full Diamond + Totem",
        "2x Crate Keys",
      ],
    },
    {
      name: "🔥 LEGEND",
      color: "from-orange-500 to-red-600",
      price: "$25",
      perks: [
        "منشن خاص",
        "أولوية فعاليات",
        "ظهور مميز",
        "Kit: Netherite Sword + Elytra",
        "Legend Crate",
      ],
    },
    {
      name: "⚡ MASTER",
      color: "from-yellow-400 to-amber-600",
      price: "$35",
      perks: [
        "إنشاء روم مؤقت",
        "صلاحيات متقدمة",
        "ستايل اسم مميز",
        "Kit: Full Netherite + Potions",
        "Fly Access",
      ],
    },
    {
      name: "🌟 ROYAL",
      color: "from-pink-500 to-rose-600",
      price: "$50",
      perks: [
        "تاج فاخر",
        "مزايا مخصصة",
        "دخول جميع الرومات الخاصة",
        "Kit: Royal Chest + OP Tools",
        "Royal Key Bundle",
      ],
    },
    {
      name: "🪐 GALAXY",
      color: "from-indigo-500 to-fuchsia-700",
      price: "$75",
      perks: [
        "تأثيرات حصرية",
        "أعلى ظهور",
        "مميزات كاملة",
        "Kit: Galaxy Set + Custom Particles",
        "Unlimited Homes",
      ],
    },
    {
      name: "🏆 IMMORTAL",
      color: "from-yellow-300 to-yellow-600",
      price: "$100",
      perks: [
        "جميع المميزات",
        "امتيازات حصرية",
        "أعلى رتبة",
        "Kit: Immortal Crate + Admin Loot",
        "Exclusive Title",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-6xl font-extrabold text-center mb-4">
        ⚔️ Epic Rank Shop
      </h1>

      <p className="text-center text-zinc-400 mb-12 text-lg">
        Buy premium ranks, kits, and exclusive server perks
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {ranks.map((rank, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${rank.color} p-[2px] rounded-3xl shadow-2xl hover:scale-105 transition duration-300`}
          >
            <div className="bg-zinc-950 rounded-3xl p-6 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">{rank.name}</h2>
                <p className="text-3xl font-extrabold mb-5">{rank.price}</p>

                <ul className="space-y-2 text-sm text-zinc-200">
                  {rank.perks.map((perk, i) => (
                    <li key={i}>✓ {perk}</li>
                  ))}
                </ul>
              </div>

              <button className="mt-6 w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-zinc-200 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}