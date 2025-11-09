import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Banner {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  bgColor: string;
  textColor: string;
}

export default function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const banners: Banner[] = [
    {
      title: "Conectando você aos melhores brechós locais",
      description: "Descubra peças únicas e sustentáveis enquanto apoia pequenos negócios em sua comunidade",
      imageUrl: "/mbanner.png",
      altText: "Banner image",
      bgColor: "bg-gradient-to-r from-white via-orange-50 to-orange-100",
      textColor: "text-[#171717]",
    },
    {
      title: "Moda Sustentável ao Seu Alcance",
      description: "Renove seu guarda-roupa com estilo e consciência ambiental. Peças selecionadas para você!",
      imageUrl: "/mbanner.png",
      altText: "Banner image",
      bgColor: "bg-gradient-to-r from-green-50 via-green-100 to-green-200",
      textColor: "text-green-900",
    },
    {
      title: "Encontre Tesouros Escondidos",
      description: "Cada peça tem uma história. Descubra a sua próxima favorita entre milhares de opções.",
      imageUrl: "/mbanner.png",
      altText: "Banner image",
      bgColor: "bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200",
      textColor: "text-blue-900",
    },
    {
      title: "Apoie o Comércio Local",
      description: "Compre de pequenos brechós e ajude a fortalecer a economia da sua comunidade.",
      imageUrl: "/mbanner.png",
      altText: "Banner image",
      bgColor: "bg-gradient-to-r from-purple-50 via-purple-100 to-purple-200",
      textColor: "text-purple-900",
    },
    {
      title: "Seu Estilo, Sua Escolha",
      description: "Liberdade para expressar quem você é com com peças que contam uma história.",
      imageUrl: "/mbanner.png",
      altText: "Banner image",
      bgColor: "bg-gradient-to-r from-pink-50 via-pink-100 to-pink-200",
      textColor: "text-pink-900",
    },
  ];

  return (
    <section className="relative h-[700px] overflow-hidden border-t border-[#171717] shadow-[inset_2px_4px_4px_rgba(0,0,0,0.25)]">
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
                  <div className="space-y-6 max-w-[603px]">
                    <h1
                      className={`text-[52px] leading-tight font-medium ${banner.textColor}`}
                      style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}
                    >
                      {banner.title}
                    </h1>
                    <p
                      className={`text-[24px] ${banner.textColor} leading-relaxed`}
                      style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}
                    >
                      {banner.description}
                    </p>
                  </div>
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {banners.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-[#E2E2E2] opacity-90 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] data-[active=true]:bg-[#FF8C42]"
              data-active={index === 0 ? "true" : "false"}
            ></div>
          ))}
        </div>
      </Carousel>
    </section>
  );
}