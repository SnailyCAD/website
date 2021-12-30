export function HeroSection() {
  return (
    <main className="flex flex-col items-center justify-center w-full max-w-5xl py-20 mt-20 gap-y-6">
      <h1 className="max-w-5xl text-2xl font-black text-center text-gray-100 sm:text-4xl md:text-5xl lg:text-6xl">
        The Modern-looking, <span className="text-emerald-400">Free</span> and{" "}
        <span className="text-emerald-400">Open-Source</span> CAD/MDT for FiveM.
      </h1>

      <p className="max-w-3xl text-base text-center mt-7 md:text-xl">
        SnailyCAD is a free and open-source CAD/MDT made to feel and look modern with all the wanted
        features to fit your roleplay needs.
      </p>

      <iframe
        className="aspect-video mt-7"
        width="75%"
        src="https://www.youtube-nocookie.com/embed/z30EmXXmJ_Q?controls=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </main>
  );
}
