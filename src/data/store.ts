export type Page = "home" | "shop" | "categories" | "cart" | "account";

export const HERO_IMG = "https://cdn.ezst.app/projects/19f65f9e-5362-4976-9af4-7b9b38e05173/files/421279ee-5060-42d2-9431-3039a30fe71a.jpg";

export const categories = [
  { name: "Toys & Games", emoji: "🧸", color: "#FFD60A", bg: "#FFF9D6", count: 284 },
  { name: "Books", emoji: "📚", color: "#4DA6FF", bg: "#EBF5FF", count: 156 },
  { name: "Art & Craft", emoji: "🎨", color: "#FF4D8D", bg: "#FFE8F2", count: 93 },
  { name: "Outdoor Play", emoji: "🚴", color: "#2EC99E", bg: "#E0FAF4", count: 72 },
  { name: "Learning", emoji: "🔬", color: "#9B5DE5", bg: "#F3EBFF", count: 118 },
  { name: "Baby & Toddler", emoji: "🍼", color: "#FF6B2B", bg: "#FFF0EA", count: 201 },
];

export const products = [
  { id: 1, name: "Rainbow Building Blocks Set", price: 34.99, schoolPrice: 24.99, category: "Toys & Games", emoji: "🧱", rating: 4.8, reviews: 312, badge: "Bestseller", badgeColor: "#FF6B2B" },
  { id: 2, name: "Little Scientist Kit", price: 42.00, schoolPrice: 29.99, category: "Learning", emoji: "🔬", rating: 4.9, reviews: 198, badge: "New", badgeColor: "#2EC99E" },
  { id: 3, name: "Watercolor Paint Set 36", price: 18.50, schoolPrice: 12.99, category: "Art & Craft", emoji: "🎨", rating: 4.7, reviews: 521, badge: "Popular", badgeColor: "#4DA6FF" },
  { id: 4, name: "Phonics Adventure Books (6-pack)", price: 29.00, schoolPrice: 19.99, category: "Books", emoji: "📖", rating: 4.8, reviews: 88, badge: null, badgeColor: "" },
  { id: 5, name: "Sensory Play Sand Kit", price: 22.99, schoolPrice: 15.99, category: "Baby & Toddler", emoji: "⏳", rating: 4.6, reviews: 145, badge: "Sale", badgeColor: "#FF4D8D" },
  { id: 6, name: "Balance Bike 3–6 Years", price: 89.00, schoolPrice: 65.00, category: "Outdoor Play", emoji: "🚲", rating: 4.9, reviews: 267, badge: null, badgeColor: "" },
];

export const cartItems = [
  { id: 1, name: "Rainbow Building Blocks Set", price: 34.99, qty: 2, emoji: "🧱" },
  { id: 3, name: "Watercolor Paint Set 36", price: 18.50, qty: 1, emoji: "🎨" },
];
