import Head from "next/head";
import { HeroSection } from "../components/HeroSection";
import { Nav } from "../components/Nav";
import { ReviewsSection } from "../components/ReviewsSection";

export default function Home() {
  return (
    <div className="antialiased">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center h-full w-full px-3 md:p-0">
        <div className="w-full max-w-5xl">
          <Nav />

          <HeroSection />
          <ReviewsSection />
        </div>
      </div>
    </div>
  );
}
