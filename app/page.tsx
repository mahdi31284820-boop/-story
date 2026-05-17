export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-10">
        Epic Store & Admin Portal
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-zinc-900 p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">🛒 Store</h2>
          <p>بيع منتجاتك وخدماتك بتصميم احترافي.</p>
          <button className="w-full mt-4 bg-white text-black py-2 rounded-xl">
            Browse Products
          </button>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">🛡️ Admin Application</h2>
          <input className="w-full p-2 mb-3 rounded text-black" placeholder="Name" />
          <input className="w-full p-2 mb-3 rounded text-black" placeholder="Age" />
          <input className="w-full p-2 mb-3 rounded text-black" placeholder="Experience" />
          <button className="w-full bg-white text-black py-2 rounded-xl">
            Submit Application
          </button>
        </div>
      </div>
    </main>
  );
}