<script lang="ts">
  import LiteYouTube from "svelte-lite-youtube-embed";
  import { DOCS_URL } from "./Header.svelte";
</script>

<section
  class="flex flex-col items-center justify-center w-full max-w-5xl py-20 pt-7 mt-36 gap-y-6"
>
  <h1
    class="max-w-5xl text-3xl font-black text-center text-gray-100 sm:text-4xl md:text-5xl lg:text-6xl !leading-[1.2]"
  >
    Modern-looking, free and open-source CAD/MDT for FiveM.
  </h1>

  <p class="max-w-3xl text-center text-gray-300/90 mt-2 sm:text-[1.1rem] md:text-[1.4rem]">
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

  <div class="w-full max-w-[700px]">
    <LiteYouTube
      videoId="z30EmXXmJ_Q"
      playLabel="SnailyCADv4 Quick Walk-through - 2022"
      params="controls=1"
    />
  </div>
</section>
