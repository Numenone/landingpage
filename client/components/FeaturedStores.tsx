import { MapPin } from "lucide-react";

export default function FeaturedStores() {
  const scrollToQR = () => {
    document
      .getElementById("qr-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const stores = [
    {
      name: "Vintage & Cia",
      description:
        "Especializada em peças vintage dos anos 80 e 90. Localizada no centro de São Paulo.",
      location: "São Paulo, SP",
    },
    {
      name: "Eco Brechó",
      description:
        "Foco em moda sustentável e consciente. Peças selecionadas com carinho.",
      location: "Rio de Janeiro, RJ",
    },
    {
      name: "Retro Store",
      description:
        "Ampla variedade de roupas e acessórios para todos os estilos e idades.",
      location: "Belo Horizonte, MG",
    },
  ];

  return (
    <section className="bg-[#F5F5F4] py-16">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-[36px] text-[#171717] font-normal mb-4">
            Brechós em Destaque
          </h2>
          <p className="text-[22px] text-[#525252]">
            Conheça alguns dos nossos parceiros locais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stores.map((store, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-[#E5E5E5] overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                <span className="text-[#525252] text-base">Foto da Loja</span>
              </div>
              <div className="p-6">
                <h3 className="text-[22px] text-[#171717] font-normal mb-3">
                  {store.name}
                </h3>
                <p className="text-lg text-[#525252] leading-relaxed mb-4">
                  {store.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#737373]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-base">{store.location}</span>
                  </div>
                  <button
                    onClick={scrollToQR}
                    className="text-[#171717] text-lg hover:text-[#FF6200] transition font-medium"
                  >
                    Ver Loja
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
