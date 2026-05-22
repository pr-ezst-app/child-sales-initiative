import { useState } from "react";
import { Page, cartItems } from "@/data/store";

export function CartPage({ setPage }: { setPage: (p: Page) => void }) {
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

export function AccountPage() {
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
