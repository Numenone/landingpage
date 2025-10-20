import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StoresPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1440px] mx-auto px-8 lg:px-20 py-16">
        <h1 className="text-[36px] text-[#171717] font-medium mb-8 text-center">Nossas Lojas Parceiras</h1>
        <p className="text-[18px] text-[#525252] mb-12 text-center">
          Explore os brechós mais incríveis perto de você e em todo o Brasil.
        </p>

        {/* Placeholder for Search and Filter */}
        <div className="mb-12 p-6 bg-[#F5F5F4] rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Pesquisar Lojas</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Buscar por nome da loja..."
              className="flex-1 p-3 border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6200]"
            />
            <select className="p-3 border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6200]">
              <option value="">Filtrar por tags</option>
              <option value="mais-vendidos">Mais Vendidos</option>
              <option value="menos-vendidos">Menos Vendidos</option>
              <option value="mais-recentes">Mais Recentes</option>
              <option value="mais-vistos">Mais Vistos</option>
            </select>
            <button className="bg-[#FF6200] text-white px-6 py-3 rounded-md hover:bg-[#ff7519] transition">
              Buscar
            </button>
          </div>
        </div>

        {/* Placeholder for Store Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array(6).fill(0).map((_, index) => (
            <div key={index} className="bg-white rounded-lg border border-[#E5E5E5] overflow-hidden shadow-sm">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                <span className="text-[#525252] text-base">Foto da Loja {index + 1}</span>
              </div>
              <div className="p-6">
                <h3 className="text-[20px] text-[#171717] font-normal mb-3">Nome da Loja {index + 1}</h3>
                <p className="text-base text-[#525252] leading-relaxed mb-4">
                  Endereço da Loja {index + 1}, Cidade, Estado
                </p>
                <button className="text-[#FF6200] text-base hover:underline transition font-medium">
                  Ver Loja
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}