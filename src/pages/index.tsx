import Head from "next/head";
import { Footer } from "src/components/Footer";
import { FeaturesSection } from "../components/FeaturesSection";
import { Gallery } from "../components/Gallery";
import { HeroSection } from "../components/HeroSection";
import { Nav } from "../components/Nav";
import { ReviewsSection } from "../components/ReviewsSection";

export default function Home() {
  return (
    <div className="antialiased">
      <Head>
        <title>SnailyCAD - The Free and open-source CAD/MDT for FiveM</title>
      </Head>

      <div className="flex flex-col items-center justify-center w-full h-full px-3 md:p-0">
        <div className="w-full max-w-5xl">
          <Nav />

          <HeroSection />
          <FeaturesSection />
          <ReviewsSection />
          <Gallery />

          <Footer />
        </div>
      </div>
    </div>
  );
}
