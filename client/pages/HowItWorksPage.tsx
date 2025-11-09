import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, ShoppingBag, TrendingUp } from "lucide-react";

export default function HowItWorksPage() {
  const sections = [
    {
      icon: Users,
      title: "Para Clientes",
      description:
        "Aqui você poderá encontrar diversos brechós espalhados pela sua localidade, com diversos preços e roupas que fazem a sua cara. Descubra peças únicas, apoie a moda sustentável e encontre tesouros escondidos com facilidade.",
    },
    {
      icon: ShoppingBag,
      title: "Para Vendedores",
      description:
        "Aqui você poderá encontrar a plataforma perfeita para seu brechó, tendo a facilidade e o suporte para auxiliar na hora de colocar seus produtos ao público! Aumente sua visibilidade, alcance novos clientes em todo o Brasil e gerencie suas vendas de forma eficiente.",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#171717] font-medium mb-3 sm:mb-4">
            Como o BrechApp Funciona?
          </h1>
          <p className="text-base sm:text-lg text-[#525252]">
            Um sistema para brechós locais se tornarem nacionais, com mais visibilidade e maior rentabilidade,
            ajudando tanto o vendedor como o cliente!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="bg-[#F5F5F4] p-6 sm:p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary mx-auto mb-4 sm:mb-6">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#171717] font-medium mb-3 sm:mb-4 text-center">
                  {section.title}
                </h2>
                <p className="text-base sm:text-lg text-[#525252] leading-relaxed text-center">
                  {section.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary mx-auto mb-4 sm:mb-6">
            <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#171717] font-medium mb-3 sm:mb-4">
            Nossa Missão
          </h2>
          <p className="text-base sm:text-lg text-[#525252] leading-relaxed max-w-3xl mx-auto px-4">
            O BrechApp visa revolucionar o mercado de brechós, conectando pequenos negócios a um público maior e promovendo a economia circular. Junte-se a nós e faça parte dessa transformação!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
