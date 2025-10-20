import { Heart, ShoppingCart } from "lucide-react";

export default function Header() {
  const scrollToQR = () => {
    document
      .getElementById("qr-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-[#333] h-[88px] flex items-center px-8 lg:px-12">
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-[#FF6200] p-2 rounded">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </svg>
          </div>
          <span className="text-white text-xl font-semibold">BrechApp</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={scrollToQR}
            className="text-white text-[17px] hover:text-[#FF6200] transition"
          >
            Lojas
          </button>
          <button
            onClick={scrollToQR}
            className="text-white text-[17px] hover:text-[#FF6200] transition"
          >
            Produtos
          </button>
          <a
            href="#"
            className="text-white text-[17px] hover:text-[#FF6200] transition"
          >
            Como Funciona
          </a>
          <a
            href="#"
            className="text-white text-[17px] hover:text-[#FF6200] transition"
          >
            Contato
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-white hover:text-[#FF6200] transition">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-2 text-white hover:text-[#FF6200] transition">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button className="bg-[#FF6200] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#ff7519] transition">
            Entrar
          </button>
        </div>
      </div>
    </header>
  );
}
