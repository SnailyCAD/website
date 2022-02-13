<script lang="ts">
  import LiteYouTube from "svelte-lite-youtube-embed";
  import { DISCORD_URL, DOCS_URL } from "./Header.svelte";
</script>

<section class="flex flex-col items-center justify-center w-full max-w-5xl py-20 mt-36 gap-y-6">
  <h1
    class="max-w-5xl text-3xl font-black text-center text-gray-100 sm:text-4xl md:text-5xl lg:text-6xl"
  >
    Modern-looking, Free and Open-Source CAD/MDT for FiveM.
  </h1>

  <p class="max-w-3xl text-base text-center mt-7 md:text-xl">
    SnailyCAD is a free and open-source CAD/MDT made to feel and look modern with all the wanted
    features to fit your roleplay needs.
  </p>

  <div class="w-full max-w-[700px]">
    <LiteYouTube
      videoId="z30EmXXmJ_Q"
      playLabel="SnailyCADv4 Quick Walk-through - 2022"
      params="controls=1"
    />
  </div>

  <div class="flex gap-3">
    <a
      target="_blank"
      class="hover:bg-slate-700/80 transition-colors bg-slate-700 shadow-md text-[1.1em] font-medium p-2.5 px-5 rounded-md"
      href={DOCS_URL}
    >
      Documentation
    </a>
    <a
      target="_blank"
      class="hover:bg-slate-700/80 bg-slate-700 shadow-md transition-colors text-[1.1em] font-medium p-2.5 px-5 rounded-md"
      href={DISCORD_URL}
    >
      Discord
    </a>
  </div>
</section>
