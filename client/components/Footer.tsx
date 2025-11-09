import { Instagram, Facebook, Twitter, Send, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#333] text-white overflow-hidden">


      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <img src="/logo.png" alt="BrechApp Logo" className="h-10 sm:h-12" />
            </div>
            <p className="text-[#A3A3A3] text-base sm:text-lg mb-3 sm:mb-4">
              Conectando você aos melhores brechós locais do Brasil
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                className="text-[#A3A3A3] hover:text-primary transition"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="#"
                className="text-[#A3A3A3] hover:text-primary transition"
              >
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="#"
                className="text-[#A3A3A3] hover:text-primary transition"
              >
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-base sm:text-lg font-normal mb-3 sm:mb-4">Navegação</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a
                  href="/stores"
                  className="text-[#A3A3A3] text-base sm:text-lg hover:text-primary transition"
                >
                  Lojas
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-[#A3A3A3] text-base sm:text-lg hover:text-primary transition"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="/how-it-works"
                  className="text-[#A3A3A3] text-base sm:text-lg hover:text-primary transition"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-[#A3A3A3] text-base sm:text-lg hover:text-primary transition"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-base sm:text-lg font-normal mb-3 sm:mb-4">
              Newsletter
            </h3>
            <p className="text-[#A3A3A3] text-base sm:text-lg mb-3 sm:mb-4">
              Receba novidades e ofertas especiais
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 bg-[#262626] border border-[#404040] rounded-l-lg px-2 sm:px-3 py-2 sm:py-2.5 text-[#ADAEBC] text-base sm:text-lg focus:outline-none focus:border-primary"
              />
              <button className="bg-white text-[#171717] px-3 sm:px-4 py-2 sm:py-2.5 rounded-r-lg hover:bg-gray-100 transition">
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#262626] pt-6 sm:pt-8 text-center">
          <p className="text-[#A3A3A3] text-sm sm:text-base lg:text-lg">
            © 2025 BrechApp. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
