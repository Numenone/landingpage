export default function FeaturedCategories() {
  const scrollToQR = () => {
    document
      .getElementById("qr-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const categories = Array(9).fill("Destaque 1");

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
        <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={scrollToQR}
              className="flex flex-col items-center gap-3 flex-shrink-0 group"
            >
              <div className="w-[100px] h-[100px] rounded-full bg-[#D9D9D9] flex items-center justify-center overflow-hidden group-hover:ring-4 group-hover:ring-[#FF6200] group-hover:ring-opacity-50 transition">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
              </div>
              <span className="text-[20px] text-black text-center">
                {category}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
