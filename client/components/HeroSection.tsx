export default function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden border-t border-[#171717] shadow-[inset_2px_4px_4px_rgba(0,0,0,0.25)]">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-orange-50 to-orange-100"></div>

      {/* Content Container */}
      <div className="relative max-w-[1440px] mx-auto h-full px-8 lg:px-20 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Text Content */}
          <div className="space-y-6 max-w-[603px]">
            <h1
              className="text-[45px] leading-tight font-medium text-[#171717]"
              style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}
            >
              Conectando você aos melhores brechós locais
            </h1>
            <p
              className="text-[20px] text-[#525252] leading-relaxed"
              style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}
            >
              Descubra peças únicas e sustentáveis enquanto apoia pequenos
              negócios em sua comunidade
            </p>

            {/* Carousel Indicators */}
            <div className="flex gap-3 pt-4">
              <div className="w-2 h-2 rounded-full bg-[#FF8C42] opacity-90 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]"></div>
              <div className="w-2 h-2 rounded-full bg-[#E2E2E2] opacity-90 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]"></div>
              <div className="w-2 h-2 rounded-full bg-[#E2E2E2] opacity-90 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]"></div>
              <div className="w-2 h-2 rounded-full bg-[#E2E2E2] opacity-90 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]"></div>
              <div className="w-2 h-2 rounded-full bg-[#E2E2E2] opacity-90 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]"></div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative drop-shadow-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d1be4f159a88cc90aad7011ef7c00346ae59a738?width=1514"
                alt="Pessoas comprando em brechó"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
