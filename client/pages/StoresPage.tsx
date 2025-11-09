import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StoresPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 w-full">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#171717] font-medium mb-6 sm:mb-8 text-center">Nossas Lojas Parceiras</h1>
        <p className="text-base sm:text-lg text-[#525252] mb-8 sm:mb-12 text-center">
          Explore os brechós mais incríveis perto de você e em todo o Brasil.
        </p>
        <div className="mb-8 sm:mb-12 p-4 sm:p-6 bg-[#F5F5F4] rounded-lg">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Pesquisar Lojas</h2>
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="Buscar por nome da loja..."
              className="flex-1 p-2.5 sm:p-3 text-sm sm:text-base border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select className="p-2.5 sm:p-3 text-sm sm:text-base border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Filtrar por tags</option>
              <option value="mais-vendidos">Mais Vendidos</option>
              <option value="menos-vendidos">Menos Vendidos</option>
              <option value="mais-recentes">Mais Recentes</option>
              <option value="mais-vistos">Mais Vistos</option>
            </select>
            <button className="bg-primary text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-md hover:bg-primary/90 transition">
              Buscar
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {Array(6).fill(0).map((_, index) => (
            <div key={index} className="bg-white rounded-lg border border-[#E5E5E5] overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                <span className="text-[#525252] text-sm sm:text-base">Foto da Loja {index + 1}</span>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl text-[#171717] font-normal mb-2 sm:mb-3">Nome da Loja {index + 1}</h3>
                <p className="text-sm sm:text-base text-[#525252] leading-relaxed mb-3 sm:mb-4">
                  Endereço da Loja {index + 1}, Cidade, Estado
                </p>
                <button className="text-primary text-sm sm:text-base hover:underline transition font-medium">
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
