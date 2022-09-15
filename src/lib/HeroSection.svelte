<script lang="ts">
  import LiteYouTube from "svelte-lite-youtube-embed";
  import { DOCS_URL } from "./Header.svelte";
  import TrustedBySection from "./TrustedBySection.svelte";

  const WALK_THROUGH_VIDEO = "https://youtube.com/watch?v=z30EmXXmJ_Q";

  import DispatchPageImage from "../images/cad/dispatch.webp";
</script>

<section class="max-h-[85vh] pt-40 bg-primary">
  <div class="max-w-5xl mx-auto flex flex-col items-center w-full gap-y-6">
    <h1
      class="max-w-5xl text-3xl font-black text-center text-gray-100 sm:text-4xl md:text-5xl lg:text-6xl !leading-[1.3]"
    >
      Modern-looking, free and open-source CAD/MDT for FiveM.
    </h1>

    <p class="max-w-3xl text-center text-gray-300/90 mt-4 sm:text-[1.1rem] md:text-[1.4rem]">
      SnailyCAD is a free and open-source CAD/MDT made to feel and look modern with all the wanted
      features to fit your roleplay needs.
    </p>

    <div class="my-9 flex gap-2">
      <a
        target="_blank"
        href={DOCS_URL}
        class="text-lg  p-3 px-5 bg-secondary transition-colors hover:brightness-125 rounded-3xl shadow-sm group"
      >
        Start using SnailyCAD <span
          class="transition-transform group-hover:translate-x-0.5 inline-block"
        >
          ->
        </span>
      </a>

      <a
        target="_blank"
        href={WALK_THROUGH_VIDEO}
        class="text-lg p-3 px-5 hover:bg-secondary transition-colors hover:brightness-125 rounded-3xl shadow-sm group"
      >
        Watch the walk-through video
      </a>
    </div>

    <div class="w-full border-2 border-[#20212C] max-h-[550px] overflow-hidden">
      <!-- <LiteYouTube
        posterQuality="maxresdefault"
        videoId="z30EmXXmJ_Q"
        params="controls=1"
        noCookie={true}
        videoTitle="SnailyCADv4 Quick Walk-through - 2022"
      /> -->

      <img draggable="false" alt="Dispatch Page" src={DispatchPageImage} />
    </div>
  </div>

  <!-- <TrustedBySection /> -->
</section>
