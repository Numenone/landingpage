interface EfficientProps {
  title: string;
  text1: string;
  text2: string;
  personImageUrl: string;
  clothesRackUrl: string;
}

export const Efficient = ({ title, text1, text2, personImageUrl, clothesRackUrl }: EfficientProps) => {
  return (
    <section className="bg-gray-50">
      <div className="w-full overflow-hidden">
        <img src={personImageUrl} alt="Cabide com roupa" className="w-full h-auto object-cover" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-32 lg:mt-[-8rem]">
        <div className="flex justify-center lg:justify-start">
          <div className="text-center lg:text-left lg:w-fit lg:pl-[40%]">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary lg:whitespace-nowrap">
              {title}
            </h2>
            <p className="text-xl sm:text-3xl lg:text-4xl text-brech-gray-text mt-4">
              {text1}
            </p>
            <p className="text-xl sm:text-3xl lg:text-4xl text-brech-gray-text mt-8 lg:mt-16">
              {text2}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <img
          src={clothesRackUrl}
          alt="Varal de Roupas"
          className="w-full h-auto mt-8 lg:mt-[-12rem] object-cover"
        />
      </div>
    </section>
  );
};