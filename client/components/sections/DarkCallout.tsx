interface DarkCalloutProps {
  text: string;
}

export const DarkCallout = ({ text }: DarkCalloutProps) => {
  return (
    <section className="bg-brech-dark py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <p className="text-white text-center text-base sm:text-lg lg:text-2xl max-w-4xl mx-auto leading-relaxed">
          {text}
        </p>
      </div>
    </section>
  );
};
