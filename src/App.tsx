import { useState } from "react";
import { Page, cartItems } from "@/data/store";
import Navbar from "@/components/Navbar";
import { HomePage, ShopPage, CategoriesPage } from "@/pages/MainPages";
import { CartPage, AccountPage } from "@/pages/CartAccountPages";

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
