import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Banner {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  bgColor: string;
  textColor: string;
}

export const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 30000, stopOnInteraction: false })
  );

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const banners: Banner[] = [
    {
      title: "Conectando você aos melhores brechós locais",
      description: "Descubra peças únicas e sustentáveis enquanto apoia pequenos negócios em sua comunidade",
      imageUrl: "/mbanner.png",
      altText: "Banner image",
      bgColor: "bg-primary",
      textColor: "text-white",
    },
    {
      title: "Moda Sustentável ao Seu Alcance",
      description: "Renove seu guarda-roupa com estilo e consciência ambiental. Peças selecionadas para você!",
      imageUrl: "/mbanner.png",
      altText: "Banner image",
      bgColor: "bg-gradient-to-r from-green-600 to-green-700",
      textColor: "text-white",
    },
    {
      title: "Encontre Tesouros Escondidos",
      description: "Cada peça tem uma história. Descubra a sua próxima favorita entre milhares de opções.",
      imageUrl: "/mbanner.png",
      altText: "Banner image",
      bgColor: "bg-gradient-to-r from-blue-600 to-blue-700",
      textColor: "text-white",
    },
    {
      title: "Apoie o Comércio Local",
      description: "Compre de pequenos brechós e ajude a fortalecer a economia da sua comunidade.",
      imageUrl: "/mbanner.png",
      altText: "Banner image",
      bgColor: "bg-gradient-to-r from-purple-600 to-purple-700",
      textColor: "text-white",
    },
    {
      title: "Seu Estilo, Sua Escolha",
      description: "Liberdade para expressar quem você é com peças que contam uma história.",
      imageUrl: "/mbanner.png",
      altText: "Banner image",
      bgColor: "bg-gradient-to-r from-pink-600 to-pink-700",
      textColor: "text-white",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{ loop: true }}
        setApi={(api) => {
          api?.on("select", () => {
            setCurrentIndex(api.selectedScrollSnap());
          });
        }}
      >
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index}>
              <div className={`relative ${banner.bgColor} overflow-hidden`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-20 pt-12 sm:pt-16 pb-24 sm:pb-32 lg:pb-40">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className={`${banner.textColor} space-y-4 sm:space-y-6`}>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                        {banner.title}
                      </h1>
                      <p className="text-lg sm:text-xl lg:text-2xl opacity-90">
                        {banner.description}
                      </p>
                      <div className="flex gap-2 pt-2 sm:pt-4">
                        {banners.map((_, i) => (
                          <div
                            key={i}
                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                              i === currentIndex ? "bg-white scale-110" : "bg-white/50"
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="relative mt-6 lg:mt-0">
                      <img
                        src={banner.imageUrl}
                        alt={banner.altText}
                        className="w-full h-auto object-cover rounded-tl-[100px] sm:rounded-tl-[150px] lg:rounded-tl-[200px] shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 lg:h-20 bg-white"
                     style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }}>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
