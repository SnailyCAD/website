import Head from "next/head";
import { OGP } from "react-ogp";
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
        <meta
          name="description"
          content="SnailyCAD is a free and open-source CAD/MDT made to feel and look modern with all the wanted features to fit your roleplay needs."
        />
        <OGP
          url="https://snailycad.caspertheghost.me"
          title="SnailyCAD - The Free and open-source CAD/MDT for FiveM"
          description="SnailyCAD is a free and open-source CAD/MDT made to feel and look modern with all the wanted features to fit your roleplay needs."
          siteName="snailycad.caspertheghost.me"
          image="http://example.com/cover.jpg"
        />
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
