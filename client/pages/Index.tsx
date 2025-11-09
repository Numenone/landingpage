import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { DarkCallout } from "@/components/sections/DarkCallout";
import { Efficient } from "@/components/sections/Efficient";
import { Why } from "@/components/sections/Why";
import { QRCodeDisplay } from "@/components/sections/QRCodeDisplay";
import { intro, darkCallout, efficient, why, qrcode } from "@/data/content";

export default function Index() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero />
        
        <Intro
          title={intro.title}
          subtitle={intro.subtitle}
          imageUrl={intro.imageUrl}
        />
        
        <DarkCallout text={darkCallout.text} />
        
        <Efficient
          title={efficient.title}
          text1={efficient.text1}
          text2={efficient.text2}
          personImageUrl={efficient.personImageUrl}
          clothesRackUrl={efficient.clothesRackUrl}
        />
        
        <Why
          title={why.title}
          subtitle={why.subtitle}
          features={why.features}
        />
        
        <QRCodeDisplay
          title={qrcode.title}
          subtitle={qrcode.subtitle}
        />
        <div className="mt-12">
          <img src="/laranja.png" alt="Laranja" className="w-full h-auto" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
