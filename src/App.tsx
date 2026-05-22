import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.ezst.app/projects/19f65f9e-5362-4976-9af4-7b9b38e05173/files/421279ee-5060-42d2-9431-3039a30fe71a.jpg";

type Page = "home" | "shop" | "categories" | "cart" | "account";

const categories = [
  { name: "Toys & Games", emoji: "🧸", color: "#FFD60A", bg: "#FFF9D6", count: 284 },
  { name: "Books", emoji: "📚", color: "#4DA6FF", bg: "#EBF5FF", count: 156 },
  { name: "Art & Craft", emoji: "🎨", color: "#FF4D8D", bg: "#FFE8F2", count: 93 },
  { name: "Outdoor Play", emoji: "🚴", color: "#2EC99E", bg: "#E0FAF4", count: 72 },
  { name: "Learning", emoji: "🔬", color: "#9B5DE5", bg: "#F3EBFF", count: 118 },
  { name: "Baby & Toddler", emoji: "🍼", color: "#FF6B2B", bg: "#FFF0EA", count: 201 },
];

const products = [
  { id: 1, name: "Rainbow Building Blocks Set", price: 34.99, schoolPrice: 24.99, category: "Toys & Games", emoji: "🧱", rating: 4.8, reviews: 312, badge: "Bestseller", badgeColor: "#FF6B2B" },
  { id: 2, name: "Little Scientist Kit", price: 42.00, schoolPrice: 29.99, category: "Learning", emoji: "🔬", rating: 4.9, reviews: 198, badge: "New", badgeColor: "#2EC99E" },
  { id: 3, name: "Watercolor Paint Set 36", price: 18.50, schoolPrice: 12.99, category: "Art & Craft", emoji: "🎨", rating: 4.7, reviews: 521, badge: "Popular", badgeColor: "#4DA6FF" },
  { id: 4, name: "Phonics Adventure Books (6-pack)", price: 29.00, schoolPrice: 19.99, category: "Books", emoji: "📖", rating: 4.8, reviews: 88, badge: null, badgeColor: "" },
  { id: 5, name: "Sensory Play Sand Kit", price: 22.99, schoolPrice: 15.99, category: "Baby & Toddler", emoji: "⏳", rating: 4.6, reviews: 145, badge: "Sale", badgeColor: "#FF4D8D" },
  { id: 6, name: "Balance Bike 3–6 Years", price: 89.00, schoolPrice: 65.00, category: "Outdoor Play", emoji: "🚲", rating: 4.9, reviews: 267, badge: null, badgeColor: "" },
];

const cartItems = [
  { id: 1, name: "Rainbow Building Blocks Set", price: 34.99, qty: 2, emoji: "🧱" },
  { id: 3, name: "Watercolor Paint Set 36", price: 18.50, qty: 1, emoji: "🎨" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <span>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} style={{ color: i <= Math.round(rating) ? "#FFD60A" : "#DDD", fontSize: 12 }}>★</span>
      ))}
    </span>
  );
}

function Navbar({ page, setPage, cartCount }: { page: Page; setPage: (p: Page) => void; cartCount: number }) {
  const nav: { id: Page; label: string; icon: string }[] = [
    { id: "home", label: "Home", icon: "Home" },
    { id: "shop", label: "Shop", icon: "ShoppingBag" },
    { id: "categories", label: "Categories", icon: "LayoutGrid" },
    { id: "cart", label: "Cart", icon: "ShoppingCart" },
    { id: "account", label: "Account", icon: "User" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-orange-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <button onClick={() => setPage("home")} className="flex items-center gap-2 btn-bounce">
          <span className="text-2xl">🌈</span>
          <span className="font-fredoka text-2xl font-bold" style={{ color: "#FF6B2B" }}>KidsMart</span>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map(n => (
            <button
              key={n.id}
              onClick={() => setPage(n.id)}
              className={`font-nunito font-semibold text-sm transition-colors duration-200 flex items-center gap-1.5 py-1 ${page === n.id ? "font-bold" : "text-gray-500 hover:text-gray-800"}`}
              style={page === n.id ? { color: "#FF6B2B" } : {}}
            >
              <Icon name={n.icon} size={15} />
              {n.label}
              {n.id === "cart" && cartCount > 0 && (
                <span className="animate-bounce-badge ml-0.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-white text-[10px] font-bold" style={{ background: "#FF4D8D" }}>
                  {cartCount}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={() => setPage("cart")} className="relative p-2 rounded-xl btn-bounce" style={{ background: "#FFF0EA" }}>
            <Icon name="ShoppingCart" size={22} style={{ color: "#FF6B2B" }} />
            {cartCount > 0 && (
              <span className="animate-bounce-badge absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-[11px] font-bold flex items-center justify-center" style={{ background: "#FF4D8D" }}>
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setPage("account")} className="p-2 rounded-xl btn-bounce" style={{ background: "#EBF5FF" }}>
            <Icon name="User" size={22} style={{ color: "#4DA6FF" }} />
          </button>
        </div>
      </div>

      <nav className="md:hidden flex border-t border-orange-100">
        {nav.map(n => (
          <button
            key={n.id}
            onClick={() => setPage(n.id)}
            className={`flex-1 flex flex-col items-center py-2 gap-0.5 text-[10px] font-bold transition-colors duration-200 ${page === n.id ? "text-orange-500" : "text-gray-400"}`}
          >
            <div className="relative">
              <Icon name={n.icon} size={18} />
              {n.id === "cart" && cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full text-white text-[8px] font-bold flex items-center justify-center" style={{ background: "#FF4D8D" }}>
                  {cartCount}
                </span>
              )}
            </div>
            {n.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

function ProductCard({ product }: { product: typeof products[0] }) {
  const [inCart, setInCart] = useState(false);

  return (
    <div className="card-hover bg-white rounded-3xl p-5 border-2 border-gray-100 relative overflow-hidden">
      {product.badge && (
        <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-white text-[11px] font-bold font-nunito animate-bounce-badge" style={{ background: product.badgeColor }}>
          {product.badge}
        </span>
      )}
      <div className="rounded-2xl flex items-center justify-center text-5xl mb-4 py-6" style={{ background: "#F8F6FF" }}>
        {product.emoji}
      </div>
      <div className="mb-1">
        <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "#9B5DE5" }}>{product.category}</span>
      </div>
      <h3 className="font-fredoka text-lg font-semibold leading-snug mb-2" style={{ color: "#2D1B4E" }}>{product.name}</h3>
      <div className="flex items-center gap-1 mb-1">
        <StarRating rating={product.rating} />
        <span className="text-[11px] text-gray-400 font-nunito">({product.reviews})</span>
      </div>
      <div className="flex items-end justify-between mt-3">
        <div>
          <div className="font-fredoka text-2xl font-bold" style={{ color: "#FF6B2B" }}>${product.price.toFixed(2)}</div>
          <div className="text-[11px] font-nunito font-bold" style={{ color: "#9B5DE5" }}>🏫 ${product.schoolPrice.toFixed(2)} school price</div>
        </div>
        <button
          onClick={() => setInCart(true)}
          className="btn-bounce px-4 py-2 rounded-xl font-fredoka font-semibold text-sm text-white"
          style={{ background: inCart ? "#2EC99E" : "#FF6B2B" }}
        >
          {inCart ? "✓ Added" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}

function HomePage({ setPage }: { setPage: (p: Page) => void }) {
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

function ShopPage() {
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

function CategoriesPage({ setPage }: { setPage: (p: Page) => void }) {
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

function CartPage({ setPage }: { setPage: (p: Page) => void }) {
  const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const schoolSavings = subtotal * 0.28;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 min-h-screen confetti-bg">
      <h1 className="font-fredoka text-4xl font-bold mb-6" style={{ color: "#2D1B4E" }}>Your Cart 🛒</h1>
      <div className="space-y-4 mb-6">
        {cartItems.map(item => (
          <div key={item.id} className="bg-white rounded-2xl p-5 flex items-center gap-4 border-2 border-gray-100 card-hover">
            <div className="text-4xl w-16 h-16 flex items-center justify-center rounded-xl flex-shrink-0" style={{ background: "#F8F6FF" }}>
              {item.emoji}
            </div>
            <div className="flex-1">
              <h3 className="font-fredoka font-semibold text-lg leading-tight" style={{ color: "#2D1B4E" }}>{item.name}</h3>
              <p className="font-fredoka text-xl font-bold mt-1" style={{ color: "#FF6B2B" }}>${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
              <button className="text-gray-400 hover:text-gray-600 font-bold text-lg w-6">−</button>
              <span className="font-fredoka font-bold text-lg w-5 text-center">{item.qty}</span>
              <button className="font-bold text-lg w-6" style={{ color: "#FF6B2B" }}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl p-6 border-2 border-gray-100 mb-4">
        <div className="flex justify-between font-nunito text-gray-500 mb-2">
          <span>Subtotal</span>
          <span className="font-bold text-gray-700">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-nunito mb-2 text-sm">
          <span style={{ color: "#9B5DE5" }}>🏫 School discount (35%)</span>
          <span className="font-bold" style={{ color: "#2EC99E" }}>−${schoolSavings.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-nunito text-gray-500 mb-4 text-sm">
          <span>Shipping</span>
          <span className="font-bold text-green-500">Free over $50</span>
        </div>
        <div className="border-t-2 border-dashed border-gray-100 pt-4 flex justify-between">
          <span className="font-fredoka text-xl font-bold" style={{ color: "#2D1B4E" }}>Total</span>
          <span className="font-fredoka text-2xl font-bold" style={{ color: "#FF6B2B" }}>${subtotal.toFixed(2)}</span>
        </div>
      </div>

      <div className="bg-purple-50 rounded-2xl p-4 mb-6 flex items-center gap-3 border-2 border-purple-100">
        <span className="text-2xl">🏫</span>
        <div>
          <p className="font-fredoka font-bold text-sm" style={{ color: "#9B5DE5" }}>Register as a school to save ${schoolSavings.toFixed(2)} on this order!</p>
          <button onClick={() => setPage("account")} className="text-xs font-nunito font-bold underline" style={{ color: "#9B5DE5" }}>Apply for school account →</button>
        </div>
      </div>

      <button className="w-full btn-bounce py-4 rounded-2xl font-fredoka text-xl font-bold text-white shadow-lg" style={{ background: "#FF6B2B" }}>
        Checkout — ${subtotal.toFixed(2)} 🎉
      </button>
    </div>
  );
}

function AccountPage() {
  const [activeTab, setActiveTab] = useState<"personal" | "school">("personal");

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 min-h-screen confetti-bg">
      <h1 className="font-fredoka text-4xl font-bold mb-2" style={{ color: "#2D1B4E" }}>My Account 👤</h1>
      <p className="text-gray-500 font-nunito mb-6">Manage your profile and school discounts</p>

      <div className="flex gap-2 mb-6">
        {(["personal", "school"] as const).map(t => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className="flex-1 py-3 rounded-2xl font-fredoka font-bold text-base btn-bounce border-2 transition-all"
            style={activeTab === t ? { background: "#FF6B2B", color: "white", borderColor: "#FF6B2B" } : { background: "white", color: "#888", borderColor: "#E5E7EB" }}
          >
            {t === "personal" ? "👤 Personal" : "🏫 School Account"}
          </button>
        ))}
      </div>

      {activeTab === "personal" ? (
        <div className="space-y-4">
          <div className="bg-white rounded-3xl p-6 border-2 border-gray-100">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl" style={{ background: "#FFF0EA" }}>👤</div>
              <div>
                <h3 className="font-fredoka text-xl font-bold" style={{ color: "#2D1B4E" }}>Sarah Johnson</h3>
                <p className="font-nunito text-sm text-gray-400">sarah@email.com</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl p-3" style={{ background: "#FFF0EA" }}>
                <div className="font-fredoka text-2xl font-bold" style={{ color: "#FF6B2B" }}>12</div>
                <div className="text-xs font-nunito text-gray-500">Orders</div>
              </div>
              <div className="rounded-xl p-3" style={{ background: "#E0FAF4" }}>
                <div className="font-fredoka text-2xl font-bold" style={{ color: "#2EC99E" }}>$430</div>
                <div className="text-xs font-nunito text-gray-500">Total Saved</div>
              </div>
              <div className="rounded-xl p-3" style={{ background: "#F3EBFF" }}>
                <div className="font-fredoka text-2xl font-bold" style={{ color: "#9B5DE5" }}>4</div>
                <div className="text-xs font-nunito text-gray-500">Wish List</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-6 border-2 border-gray-100">
            <h3 className="font-fredoka text-lg font-bold mb-4" style={{ color: "#2D1B4E" }}>Recent Orders</h3>
            <div className="space-y-3">
              {[
                { date: "May 18", items: "Building Blocks + Paint Set", total: "$53.49", status: "Delivered" },
                { date: "Apr 30", items: "Science Kit", total: "$42.00", status: "Delivered" },
              ].map((o, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                  <div>
                    <p className="font-nunito text-sm font-bold text-gray-700">{o.items}</p>
                    <p className="font-nunito text-xs text-gray-400">{o.date} · {o.total}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold font-nunito" style={{ background: "#E0FAF4", color: "#2EC99E" }}>{o.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="school-gradient rounded-3xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🏫</span>
              <div>
                <h3 className="font-fredoka text-xl font-bold">School & Daycare Program</h3>
                <p className="font-nunito text-sm opacity-80">Save up to 35% on all purchases</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Verified Schools", val: "35% off", icon: "🎓" },
                { label: "Daycare Centers", val: "30% off", icon: "🍼" },
                { label: "Group Orders 10+", val: "20% off", icon: "📦" },
                { label: "Bulk Orders 50+", val: "25% off", icon: "🏷️" },
              ].map(tier => (
                <div key={tier.label} className="bg-white/20 rounded-2xl p-3 text-center">
                  <div className="text-2xl mb-1">{tier.icon}</div>
                  <div className="font-fredoka text-lg font-bold">{tier.val}</div>
                  <div className="text-[11px] font-nunito opacity-80">{tier.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border-2 border-gray-100">
            <h3 className="font-fredoka text-lg font-bold mb-5" style={{ color: "#2D1B4E" }}>Apply for School Pricing</h3>
            <div className="space-y-3">
              <div>
                <label className="font-nunito text-sm font-bold text-gray-600 block mb-1">Institution Name</label>
                <input className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-nunito text-sm focus:outline-none focus:border-orange-300" placeholder="Sunshine Primary School" />
              </div>
              <div>
                <label className="font-nunito text-sm font-bold text-gray-600 block mb-1">Institution Type</label>
                <select className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-nunito text-sm focus:outline-none focus:border-orange-300 bg-white">
                  <option>Primary / Elementary School</option>
                  <option>Daycare / Nursery</option>
                  <option>Kindergarten</option>
                  <option>After School Program</option>
                  <option>Other Educational Institution</option>
                </select>
              </div>
              <div>
                <label className="font-nunito text-sm font-bold text-gray-600 block mb-1">Contact Email</label>
                <input type="email" className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-nunito text-sm focus:outline-none focus:border-orange-300" placeholder="principal@school.edu" />
              </div>
              <div>
                <label className="font-nunito text-sm font-bold text-gray-600 block mb-1">Number of Students</label>
                <select className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-nunito text-sm focus:outline-none focus:border-orange-300 bg-white">
                  <option>Under 50</option>
                  <option>50 – 150</option>
                  <option>150 – 500</option>
                  <option>500+</option>
                </select>
              </div>
              <button className="w-full btn-bounce py-4 rounded-2xl font-fredoka text-lg font-bold text-white shadow-lg mt-2" style={{ background: "#9B5DE5" }}>
                Submit Application 🚀
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--background))" }}>
      <Navbar page={page} setPage={setPage} cartCount={cartCount} />
      {page === "home" && <HomePage setPage={setPage} />}
      {page === "shop" && <ShopPage />}
      {page === "categories" && <CategoriesPage setPage={setPage} />}
      {page === "cart" && <CartPage setPage={setPage} />}
      {page === "account" && <AccountPage />}
    </div>
  );
}