interface QRCodeDisplayProps {
  title: string;
  subtitle: string;
}

export const QRCodeDisplay = ({ title, subtitle }: QRCodeDisplayProps) => {
  const expoLink = 'https://expo.dev/accounts/munzzz/projects/BrechApp/builds/63404182-1fa0-4ab9-868c-b5ec173dcf7e';
  const playStoreLink = import.meta.env.VITE_PLAYSTORE_LINK || 'https://play.google.com/store';

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=512x512&data=${encodeURIComponent(
    expoLink
  )}`;

  return (
    <section className="py-12 sm:py-16 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <div className="border-4 border-dashed border-primary bg-white p-4 sm:p-6">
              <img
                src={qrCodeUrl}
                alt="QR Code para baixar o BrechApp"
                className="w-40 h-40 sm:w-48 sm:h-48 lg:w-80 lg:h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">{title}</h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-primary font-bold mb-4">{subtitle}</p>
              <a
                href={playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png"
                  alt="Disponível no Google Play"
                  className="h-14 sm:h-16 lg:h-20 w-auto hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
