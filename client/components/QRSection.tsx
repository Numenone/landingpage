import { Smartphone } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function QRSection() {
  return (
    <section id="qr-section" className="bg-white py-16 scroll-mt-16">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 rounded-full bg-[#FF6200] flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-[42px] text-[#171717] font-medium mb-4">
              Baixe o BrechApp
            </h2>
            <p className="text-[24px] text-[#525252] mb-8">
              Escaneie o QR Code abaixo para baixar nosso aplicativo e começar a
              explorar os melhores brechós locais
            </p>
          </div>

          <div className="bg-white border-4 border-[#FF6200] rounded-2xl p-10 inline-block mb-8 shadow-lg">
            <div className="w-80 h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 border-8 border-[#171717] rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#171717]">QR</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xl text-[#525252]">
              Disponível para iOS e Android
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-black text-white px-8 py-4 rounded-lg flex items-center gap-4 hover:bg-gray-800 transition">
                <FaApple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-sm">Baixar na</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </button>
              <button className="bg-black text-white px-8 py-4 rounded-lg flex items-center gap-4 hover:bg-gray-800 transition">
                <FaGooglePlay className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-sm">Baixar no</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}