import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-brech-dark h-16 sm:h-20 lg:h-[88px] flex items-center px-4 sm:px-6 lg:px-20 sticky top-0 z-50 shadow-md">
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="BrechApp Logo" className="h-10 sm:h-12" />
          <span className="text-white text-2xl sm:text-3xl font-bold">BrechApp</span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
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

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-primary transition"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 sm:top-20 left-0 w-full bg-brech-dark md:hidden shadow-lg">
          <nav className="flex flex-col items-center gap-4 py-4">
            <a
              href="/how-it-works"
              className="text-white text-lg hover:text-primary transition"
            >
              Como Funciona
            </a>
            <a
              href="/contact"
              className="text-white text-lg hover:text-primary transition"
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
