import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Define a type for banner data
interface Banner {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  bgColor: string; // Tailwind background color class
  textColor: string; // Tailwind text color class
}

export default function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const banners: Banner[] = [
    {
      title: "Conectando você aos melhores brechós locais",
      description: "Descubra peças únicas e sustentáveis enquanto apoia pequenos negócios em sua comunidade",
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/d1be4f159a88cc90aad7011ef7c00346ae59a738?width=1514",
      altText: "Pessoas comprando em brechó",
      bgColor: "bg-gradient-to-r from-white via-orange-50 to-orange-100",
      textColor: "text-[#171717]",
    },
    {
      title: "Moda Sustentável ao Seu Alcance",
      description: "Renove seu guarda-roupa com estilo e consciência ambiental. Peças selecionadas para você!",
      imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa607037dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Roupas vintage em um brechó",
      bgColor: "bg-gradient-to-r from-green-50 via-green-100 to-green-200",
      textColor: "text-green-900",
    },
    {
      title: "Encontre Tesouros Escondidos",
      description: "Cada peça tem uma história. Descubra a sua próxima favorita entre milhares de opções.",
      imageUrl: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Detalhe de roupas em um brechó",
      bgColor: "bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200",
      textColor: "text-blue-900",
    },
    {
      title: "Apoie o Comércio Local",
      description: "Compre de pequenos brechós e ajude a fortalecer a economia da sua comunidade.",
      imageUrl: "https://images.unsplash.com/photo-1523381294911-8d3cead1858b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Pessoas em uma loja de roupas",
      bgColor: "bg-gradient-to-r from-purple-50 via-purple-100 to-purple-200",
      textColor: "text-purple-900",
    },
    {
      title: "Seu Estilo, Sua Escolha",
      description: "Liberdade para expressar quem você é com peças que contam uma história.",
      imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c23b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Mulher escolhendo roupas",
      bgColor: "bg-gradient-to-r from-pink-50 via-pink-100 to-pink-200",
      textColor: "text-pink-900",
    },
  ];

  return (
    <section className="relative h-[600px] overflow-hidden border-t border-[#171717] shadow-[inset_2px_4px_4px_rgba(0,0,0,0.25)]">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        opts={{ loop: true }}
      >
        <CarouselContent className="h-full">
          {banners.map((banner, index) => (
            <CarouselItem key={index} className="h-full">
              <div className={`absolute inset-0 ${banner.bgColor}`}></div>
              <div className="relative max-w-[1440px] mx-auto h-full px-8 lg:px-20 flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
                  {/* Text Content */}
                  <div className="space-y-6 max-w-[603px]">
                    <h1
                      className={`text-[45px] leading-tight font-medium ${banner.textColor}`}
                      style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}
                    >
                      {banner.title}
                    </h1>
                    <p
                      className={`text-[20px] ${banner.textColor} leading-relaxed`}
                      style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}
                    >
                      {banner.description}
                    </p>
                  </div>

                  {/* Hero Image */}
                  <div className="relative hidden lg:block">
                    <div className="relative drop-shadow-lg">
                      <img
                        src={banner.imageUrl}
                        alt={banner.altText}
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20" />
        {/* Custom indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {banners.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-[#E2E2E2] opacity-90 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] data-[active=true]:bg-[#FF8C42]"
              // This data-attribute will be managed by the carousel's internal state,
              // but for a simple visual representation, we can simulate it.
              // A more robust solution would involve using the carousel API to get the current slide index.
              data-active={index === 0 ? "true" : "false"} // Placeholder, actual logic needs carousel API
            ></div>
          ))}
        </div>
      </Carousel>
    </section>
  );
}