interface IntroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export const Intro = ({ title, subtitle, imageUrl }: IntroProps) => {
  return (
    <section className="py-12 sm:py-16 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <img
              src={imageUrl}
              alt="App Screenshots"
              className="max-w-[100%] sm:max-w-[100%] w-full h-auto"
            />
          </div>
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">
              {title}
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-brech-gray-text">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
