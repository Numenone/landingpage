import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck } from "lucide-react";
import StoreCardSkeleton from "@/components/StoreCardSkeleton";

interface VendedorData {
  id: string;
  nome: string;
  foto: string;
  status: boolean;
}

export default function StoresPage() {
  const [vendedores, setVendedores] = useState<VendedorData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showOnlyActive, setShowOnlyActive] = useState(false);

  useEffect(() => {
    const fetchVendedores = async () => {
      try {
        const response = await fetch(`/api/vendedores`);
        if (!response.ok) {
          throw new Error(`Erro ${response.status}: Não foi possível buscar os dados dos vendedores.`);
        }

        const data = await response.json();
        setVendedores(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Ocorreu um erro desconhecido.");
      } finally {
        setLoading(false);
      }
    };

    fetchVendedores();
  }, []);

  const filteredVendedores = showOnlyActive
    ? vendedores.filter((vendedor) => vendedor.status)
    : vendedores;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#171717] font-medium mb-3 sm:mb-4">
            Lojas Parceiras
          </h1>
          <p className="text-base sm:text-lg text-[#525252]">
            Descubra os melhores brechós perto de você.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {Array(6).fill(0).map((_, index) => <StoreCardSkeleton key={index} />)}
          </div>
        ) : error ? (
          <p className="text-center text-lg text-red-600">{error}</p>
        ) : (
          <>
            {vendedores.length > 0 && (
              <div className="flex justify-end mb-6">
                <label className="flex items-center gap-2 cursor-pointer text-base text-[#525252] hover:text-primary transition">
                  <input
                    type="checkbox"
                    checked={showOnlyActive}
                    onChange={() => setShowOnlyActive(!showOnlyActive)}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  Mostrar apenas ativos
                </label>
              </div>
            )}
            {filteredVendedores.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredVendedores.map((vendedor) => (
                  <div key={vendedor.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden group">
                    <img src={vendedor.foto} alt={`Foto de ${vendedor.nome}`} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="p-4 sm:p-5">
                      <h2 className="text-lg sm:text-xl font-bold text-primary truncate">{vendedor.nome}</h2>
                      <p className={`text-sm sm:text-base mt-1 flex items-center gap-2 ${vendedor.status ? 'text-green-600' : 'text-red-600'}`}>
                        <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                        <span className="capitalize">{vendedor.status ? 'Ativo' : 'Inativo'}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-lg text-gray-500 py-16">Nenhum vendedor encontrado.</p>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}