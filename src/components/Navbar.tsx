import Icon from "@/components/ui/icon";
import { Page } from "@/data/store";

interface NavbarProps {
  page: Page;
  setPage: (p: Page) => void;
  cartCount: number;
}

export default function Navbar({ page, setPage, cartCount }: NavbarProps) {
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
