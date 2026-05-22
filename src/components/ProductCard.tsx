import { useState } from "react";
import { products } from "@/data/store";

function StarRating({ rating }: { rating: number }) {
  return (
    <span>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} style={{ color: i <= Math.round(rating) ? "#FFD60A" : "#DDD", fontSize: 12 }}>★</span>
      ))}
    </span>
  );
}

export default function ProductCard({ product }: { product: typeof products[0] }) {
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
