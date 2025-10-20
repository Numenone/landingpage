import { Leaf, Store, Gem } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Leaf,
      title: "Sustentável",
      description:
        "Contribua para um mundo mais sustentável dando nova vida às roupas",
    },
    {
      icon: Store,
      title: "Local",
      description:
        "Apoie pequenos negócios e fortaleça a economia da sua comunidade",
    },
    {
      icon: Gem,
      title: "Único",
      description:
        "Encontre peças exclusivas que não estão disponíveis em lojas convencionais",
    },
  ];

  return (
    <section className="bg-[#F5F5F4] py-16">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-[30px] text-[#171717] font-normal mb-4">
            Por que escolher o Brechap?
          </h2>
          <p className="text-[18px] text-[#525252]">
            Faça parte de uma comunidade que valoriza a sustentabilidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#F5F5F5] flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-[#404040]" />
                </div>
                <h3 className="text-[20px] text-[#171717] font-normal mb-3">
                  {benefit.title}
                </h3>
                <p className="text-base text-[#525252] leading-relaxed max-w-sm mx-auto">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
