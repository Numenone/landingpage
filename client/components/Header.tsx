import { Menu, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-brech-dark h-16 sm:h-20 lg:h-[88px] flex items-center px-4 sm:px-6 lg:px-20 sticky top-0 z-50 shadow-md">
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="BrechApp Logo" className="h-12 sm:h-14" />
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            <a
              href="/stores"
              className="text-white text-lg lg:text-xl hover:text-primary transition"
            >
              Lojas
            </a>
            <a
              href="/products"
              className="text-white text-lg lg:text-xl hover:text-primary transition"
            >
              Produtos
            </a>
            <a
              href="/how-it-works"
              className="text-white text-lg lg:text-xl hover:text-primary transition whitespace-nowrap"
            >
              Como Funciona
            </a>
            <a
              href="/contact"
              className="text-white text-lg lg:text-xl hover:text-primary transition"
            >
              Contato
            </a>
          </nav>

          <button className="md:hidden p-2 text-white hover:text-primary transition">
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
