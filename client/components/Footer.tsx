import { Instagram, Facebook, Twitter, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#333] text-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#FF6200] p-2 rounded">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
              </div>
              <span className="text-lg font-semibold">BrechApp</span>
            </div>
            <p className="text-[#A3A3A3] text-base mb-4">
              Conectando você aos melhores brechós locais do Brasil
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-[#A3A3A3] hover:text-[#FF6200] transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-[#A3A3A3] hover:text-[#FF6200] transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-[#A3A3A3] hover:text-[#FF6200] transition"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-base font-normal mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#A3A3A3] text-base hover:text-[#FF6200] transition"
                >
                  Lojas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#A3A3A3] text-base hover:text-[#FF6200] transition"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#A3A3A3] text-base hover:text-[#FF6200] transition"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#A3A3A3] text-base hover:text-[#FF6200] transition"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-base font-normal mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#A3A3A3] text-base hover:text-[#FF6200] transition"
                >
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#A3A3A3] text-base hover:text-[#FF6200] transition"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#A3A3A3] text-base hover:text-[#FF6200] transition"
                >
                  Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#A3A3A3] text-base hover:text-[#FF6200] transition"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-base font-normal mb-4">
              Newsletter
            </h3>
            <p className="text-[#A3A3A3] text-base mb-4">
              Receba novidades e ofertas especiais
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 bg-[#262626] border border-[#404040] rounded-l-lg px-3 py-2.5 text-[#ADAEBC] text-base focus:outline-none focus:border-[#FF6200]"
              />
              <button className="bg-white text-[#171717] px-4 py-2.5 rounded-r-lg hover:bg-gray-100 transition">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#262626] pt-8 text-center">
          <p className="text-[#A3A3A3] text-base">
            © 2025 BrechApp. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
