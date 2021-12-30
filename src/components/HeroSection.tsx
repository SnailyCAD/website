export function HeroSection() {
  return (
    <main className="flex flex-col items-center justify-center w-full max-w-5xl mt-20 py-20 gap-y-6">
      <h1 className="font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center max-w-5xl text-gray-100">
        The <span className="text-slate-400">Modern-looking</span>,{" "}
        <span className="text-slate-400">Free</span> and{" "}
        <span className="text-slate-400">Open-Source</span> CAD/MDT for FiveM.
      </h1>

      <p className="mt-7 max-w-3xl text-xl font-medium text-center">
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
