import { ShoppingCart, Plus } from "lucide-react";

export default function FeaturedProducts() {
  const scrollToQR = () => {
    document
      .getElementById("qr-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const products = [
    { name: "Jaqueta Jeans Vintage", store: "Vintage & Cia", price: "89,90" },
    { name: "Vestido Floral", store: "Eco Brechó", price: "65,00" },
    { name: "Tênis Retrô", store: "Retro Store", price: "120,00" },
    { name: "Bolsa de Couro", store: "Vintage & Cia", price: "95,50" },
    { name: "Camisa Xadrez", store: "Eco Brechó", price: "45,00" },
    { name: "Calça Mom Jeans", store: "Retro Store", price: "79,90" },
    { name: "Óculos de Sol Redondo", store: "Vintage & Cia", price: "55,00" },
    { name: "Saia Midi Plissada", store: "Eco Brechó", price: "70,00" },
    { name: "Bota Coturno", store: "Retro Store", price: "150,00" },
    { name: "Macacão Jeans", store: "Vintage & Cia", price: "110,00" },
    { name: "Blusa de Crochê", store: "Eco Brechó", price: "59,90" },
    { name: "Chapéu Bucket", store: "Retro Store", price: "35,00" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-[36px] text-[#171717] font-normal mb-4">
            Produtos em Alta
          </h2>
          <p className="text-[22px] text-[#525252]">
            Descubra as peças mais procuradas
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-[#E5E5E5] overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-[#525252] text-base">
                  Produto {index + 1}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg text-[#171717] font-normal mb-2 truncate">
                  {product.name}
                </h3>
                <p className="text-base text-[#525252] mb-4">{product.store}</p>

                <div className="flex items-center justify-between">
                  <span className="text-[22px] text-[#171717] font-normal">
                    R$ {product.price}
                  </span>
                  <button
                    onClick={scrollToQR}
                    className="bg-[#FF6200] text-white p-2 rounded hover:bg-[#ff7519] transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={scrollToQR}
            className="border border-black bg-white text-black px-12 py-4 rounded-lg text-lg hover:bg-black hover:text-white transition"
          >
            Faça Login para ver mais
          </button>
        </div>
      </div>
    </section>
  );
}
