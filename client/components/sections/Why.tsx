import { Leaf, MapPin, Star } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface WhyProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

const FeatureIcon = ({ index }: { index: number }) => {
  const icons = [
    <Leaf className="w-12 h-12" />,
    <MapPin className="w-12 h-12" />,
    <Star className="w-12 h-12" />
  ];
  
  return (
    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-brech-dark mb-6">
      {icons[index]}
    </div>
  );
};

export const Why = ({ title, subtitle, features }: WhyProps) => {
  return (
    <section className="py-12 sm:py-16 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">{title}</h2>
          <p className="text-base sm:text-lg text-brech-gray-text">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-16">
          {features.map((feature, index) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <FeatureIcon index={index} />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-brech-gray-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
