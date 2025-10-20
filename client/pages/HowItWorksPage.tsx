import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, ShoppingBag, TrendingUp } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1440px] mx-auto px-8 lg:px-20 py-16">
        <div className="text-center mb-12">
          <h1 className="text-[36px] text-[#171717] font-medium mb-4">
            Como o BrechApp Funciona?
          </h1>
          <p className="text-[18px] text-[#525252]">
            Um sistema para brechós locais se tornarem nacionais, com mais visibilidade e maior rentabilidade,
            ajudando tanto o vendedor como o cliente!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Para Clientes */}
          <div className="bg-[#F5F5F4] p-8 rounded-lg shadow-sm">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FF6200] mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-[28px] text-[#171717] font-medium mb-4 text-center">
              Para Clientes
            </h2>
            <p className="text-lg text-[#525252] leading-relaxed text-center">
              Aqui você poderá encontrar diversos brechós espalhados pela sua localidade,
              com diversos preços e roupas que fazem a sua cara. Descubra peças únicas,
              apoie a moda sustentável e encontre tesouros escondidos com facilidade.
            </p>
          </div>

          {/* Para Vendedores */}
          <div className="bg-[#F5F5F4] p-8 rounded-lg shadow-sm">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FF6200] mx-auto mb-6">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-[28px] text-[#171717] font-medium mb-4 text-center">
              Para Vendedores
            </h2>
            <p className="text-lg text-[#525252] leading-relaxed text-center">
              Aqui você poderá encontrar a plataforma perfeita para seu brechó,
              tendo a facilidade e o suporte para auxiliar na hora de colocar seus produtos ao público!
              Aumente sua visibilidade, alcance novos clientes em todo o Brasil e gerencie suas vendas de forma eficiente.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FF6200] mx-auto mb-6">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-[28px] text-[#171717] font-medium mb-4">
            Nossa Missão
          </h2>
          <p className="text-lg text-[#525252] leading-relaxed max-w-3xl mx-auto">
            O BrechApp visa revolucionar o mercado de brechós, conectando pequenos negócios a um público maior e promovendo a economia circular. Junte-se a nós e faça parte dessa transformação!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}