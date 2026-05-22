import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Page, HERO_IMG, categories, products } from "@/data/store";

export function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div className="min-h-screen confetti-bg">
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-5 animate-bounce-badge" style={{ background: "#FFF9D6", color: "#B8860B", border: "2px solid #FFD60A" }}>
            ✨ Trusted by 2,000+ families & schools
          </div>
          <h1 className="font-fredoka text-5xl md:text-6xl font-bold leading-tight mb-4" style={{ color: "#2D1B4E" }}>
            The Best Toys<br />
            <span style={{ color: "#FF6B2B" }}>& Learning</span><br />
            for Every Kid 🎉
          </h1>
          <p className="text-lg text-gray-500 font-nunito mb-6 leading-relaxed">
            Quality educational toys, books, and supplies — with <strong style={{ color: "#9B5DE5" }}>special pricing for schools & daycares.</strong>
          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => setPage("shop")} className="btn-bounce px-7 py-3.5 rounded-2xl font-fredoka text-lg font-semibold text-white shadow-lg" style={{ background: "#FF6B2B" }}>
              Shop Now 🛍️
            </button>
            <button onClick={() => setPage("account")} className="btn-bounce px-7 py-3.5 rounded-2xl font-fredoka text-lg font-semibold shadow-lg" style={{ background: "#F3EBFF", color: "#9B5DE5" }}>
              School Account 🏫
            </button>
          </div>
        </div>
        <div className="animate-float hidden md:block">
          <img src={HERO_IMG} alt="Kids products" className="rounded-3xl shadow-2xl w-full object-cover" style={{ maxHeight: 420, border: "4px solid white" }} />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="school-gradient rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{ boxShadow: "0 8px 32px rgba(155,93,229,0.25)" }}>
          <div className="text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-3xl">🏫</span>
              <span className="font-fredoka text-2xl font-bold">School & Daycare Pricing</span>
            </div>
            <p className="font-nunito opacity-90 text-sm">Up to 35% off for registered educational institutions & group orders over 10 items</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="bg-white/20 rounded-2xl px-5 py-3 text-center text-white">
              <div className="font-fredoka text-3xl font-bold">35%</div>
              <div className="text-xs font-nunito opacity-80">Schools & Daycare</div>
            </div>
            <div className="bg-white/20 rounded-2xl px-5 py-3 text-center text-white">
              <div className="font-fredoka text-3xl font-bold">20%</div>
              <div className="text-xs font-nunito opacity-80">Group 10+ items</div>
            </div>
            <button onClick={() => setPage("account")} className="btn-bounce px-6 py-3 rounded-2xl font-fredoka font-semibold text-base self-center" style={{ background: "#FFD60A", color: "#2D1B4E" }}>
              Apply Now →
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-fredoka text-3xl font-bold" style={{ color: "#2D1B4E" }}>Shop by Category</h2>
          <button onClick={() => setPage("categories")} className="text-sm font-bold font-nunito" style={{ color: "#FF6B2B" }}>See all →</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setPage("categories")}
              className="card-hover rounded-2xl p-4 flex flex-col items-center gap-2 border-2 font-nunito text-center"
              style={{ background: cat.bg, borderColor: cat.color + "55" }}
            >
              <span className="text-3xl">{cat.emoji}</span>
              <span className="text-xs font-bold leading-tight" style={{ color: cat.color }}>{cat.name}</span>
              <span className="text-[10px] text-gray-400">{cat.count} items</span>
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-4 pb-16">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-fredoka text-3xl font-bold" style={{ color: "#2D1B4E" }}>Featured Products</h2>
          <button onClick={() => setPage("shop")} className="text-sm font-bold font-nunito" style={{ color: "#FF6B2B" }}>View all →</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {products.slice(0, 3).map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

export function ShopPage() {
  const [filter, setFilter] = useState("All");
  const allCats = ["All", ...categories.map(c => c.name)];
  const filtered = filter === "All" ? products : products.filter(p => p.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 confetti-bg min-h-screen">
      <h1 className="font-fredoka text-4xl font-bold mb-2" style={{ color: "#2D1B4E" }}>All Products</h1>
      <p className="text-gray-500 font-nunito mb-6">Discover amazing items for your little ones</p>
      <div className="flex gap-2 flex-wrap mb-8">
        {allCats.map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className="px-4 py-2 rounded-xl font-nunito font-bold text-sm btn-bounce border-2 transition-all"
            style={filter === c ? { background: "#FF6B2B", color: "white", borderColor: "#FF6B2B" } : { background: "white", color: "#555", borderColor: "#E5E7EB" }}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pb-16">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}

export function CategoriesPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 confetti-bg min-h-screen">
      <h1 className="font-fredoka text-4xl font-bold mb-2" style={{ color: "#2D1B4E" }}>Categories</h1>
      <p className="text-gray-500 font-nunito mb-8">Explore everything we have for your kids</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pb-16">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setPage("shop")}
            className="card-hover rounded-3xl p-7 flex items-center gap-5 border-2 text-left"
            style={{ background: cat.bg, borderColor: cat.color + "66" }}
          >
            <span className="text-5xl flex-shrink-0">{cat.emoji}</span>
            <div>
              <h3 className="font-fredoka text-xl font-bold mb-1" style={{ color: cat.color }}>{cat.name}</h3>
              <p className="text-sm font-nunito text-gray-500">{cat.count} products available</p>
              <p className="text-[11px] font-nunito font-bold mt-1" style={{ color: "#9B5DE5" }}>🏫 School discounts available</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
