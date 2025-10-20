import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedStores from "@/components/FeaturedStores";
import FeaturedProducts from "@/components/FeaturedProducts";
import BenefitsSection from "@/components/BenefitsSection";
import QRSection from "@/components/QRSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturedCategories />
      <FeaturedStores />
      <FeaturedProducts />
      <BenefitsSection />
      <QRSection />
      <Footer />
    </div>
  );
}
