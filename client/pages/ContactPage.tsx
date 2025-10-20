import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  // Placeholder for Google Maps API Key. In a real application, this would be loaded from environment variables.
  const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY"; 
  const UNISENAC_PELOTAS_LAT = -31.7669; // Approximate latitude for UniSenac Pelotas
  const UNISENAC_PELOTAS_LNG = -52.3415; // Approximate longitude for UniSenac Pelotas

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1440px] mx-auto px-8 lg:px-20 py-16">
        <div className="text-center mb-12">
          <h1 className="text-[36px] text-[#171717] font-medium mb-4">
            Entre em Contato
          </h1>
          <p className="text-[18px] text-[#525252]">
            Estamos aqui para ajudar! Fale conosco.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-[#F5F5F4] p-8 rounded-lg shadow-sm flex flex-col justify-center">
            <h2 className="text-[28px] text-[#171717] font-medium mb-6">
              Informações de Contato
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-[#525252]">
                <strong>E-mail:</strong> brechapp@gmail.com
              </p>
              <p className="text-lg text-[#525252]">
                <strong>Telefone:</strong> 53 99989-2980
              </p>
              <p className="text-lg text-[#525252]">
                <strong>Endereço:</strong> Faculdade UniSenac, Pelotas - RS
              </p>
            </div>
          </div>

          {/* Google Maps StreetView */}
          <div className="bg-[#F5F5F4] p-4 rounded-lg shadow-sm">
            <h2 className="text-[28px] text-[#171717] font-medium mb-4 text-center">
              Nossa Localização
            </h2>
            <div className="relative w-full h-96 rounded-md overflow-hidden">
              {/* Using an iframe for Google Street View. Replace YOUR_GOOGLE_MAPS_API_KEY with a real key. */}
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/streetview?key=${GOOGLE_MAPS_API_KEY}&location=${UNISENAC_PELOTAS_LAT},${UNISENAC_PELOTAS_LNG}&heading=210&pitch=10&fov=35`}
                title="Google Street View of UniSenac Pelotas"
              ></iframe>
              {GOOGLE_MAPS_API_KEY === "YOUR_GOOGLE_MAPS_API_KEY" && (
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white text-center p-4">
                  <p>
                    Para ver o StreetView, você precisa substituir "YOUR_GOOGLE_MAPS_API_KEY"
                    no arquivo `client/pages/ContactPage.tsx` por uma chave de API válida do Google Maps.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}