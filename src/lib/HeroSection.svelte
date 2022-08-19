<script lang="ts">
  import LiteYouTube from "svelte-lite-youtube-embed";
  import { DOCS_URL } from "./Header.svelte";
</script>

<section class="flex flex-col items-center w-full max-w-5xl gap-y-6 mx-auto min-h-[94vh] mt-52">
  <h1
    class="max-w-5xl text-3xl font-black text-center text-gray-100 sm:text-4xl md:text-5xl lg:text-6xl !leading-[1.3]"
  >
    Modern-looking, free and open-source CAD/MDT for FiveM.
  </h1>

  <p class="max-w-3xl text-center text-gray-300/90 mt-4 sm:text-[1.1rem] md:text-[1.4rem]">
    SnailyCAD is a free and open-source CAD/MDT made to feel and look modern with all the wanted
    features to fit your roleplay needs.
  </p>

  <a
    target="_blank"
    href={DOCS_URL}
    class="text-xl my-9 p-3 px-5 bg-slate-600 transition-colors hover:bg-slate-600/80 rounded-3xl shadow-sm"
  >
    Start using SnailyCAD ->
  </a>

  <div class="w-full max-w-[700px] mt-20">
    <LiteYouTube
      posterQuality="maxresdefault"
      videoId="z30EmXXmJ_Q"
      params="controls=1"
      noCookie={true}
      videoTitle="SnailyCADv4 Quick Walk-through - 2022"
    />
  </div>
</section>
