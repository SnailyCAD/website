<script lang="ts">
  import { DOCS_URL } from "./Header.svelte";

  const WALK_THROUGH_VIDEO = "https://youtube.com/watch?v=z30EmXXmJ_Q";

  import DispatchPageImage from "../images/cad/dispatch.webp";
</script>

<section class="h-[1000px] pt-40 bg-primary">
  <div class="max-w-5xl mx-auto w-full gap-y-6">
    <div class="px-4 md:px-0 flex items-center flex-col">
      <h1
        class="max-w-5xl text-3xl font-black text-center text-gray-100 sm:text-4xl md:text-5xl lg:text-6xl !leading-[1.3]"
      >
        Modern-looking, free and open-source CAD/MDT for FiveM.
      </h1>
      <p class="max-w-3xl text-center text-gray-300/90 mt-4 sm:text-[1.1rem] md:text-[1.4rem]">
        SnailyCAD is a free and open-source CAD/MDT made to feel and look modern with all the needed
        features to fit your roleplay needs.
      </p>

      <div class="my-9 flex flex-col justify-center items-center md:flex-row gap-2">
        <a
          target="_blank"
          href={DOCS_URL}
          class="flex w-fit items-center gap-2 text-lg p-3 px-5 bg-secondary transition-colors hover:brightness-125 rounded-3xl shadow-sm group "
        >
          <span>Start using SnailyCAD</span>
          <span class="transition-transform group-hover:translate-x-0.5 mt-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
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
    </div>

    <div class="flex items-center justify-center w-full h-[550px] overflow-hidden mt-5">
      <div
        class="w-full border-2 border-[#20212C] h-[550px] min-w-[1020px] drop-shadow-xl shadow-[#20212C]"
      >
        <!-- <LiteYouTube
          posterQuality="maxresdefault"
          videoId="z30EmXXmJ_Q"
          params="controls=1"
          noCookie={true}
          videoTitle="SnailyCADv4 Quick Walk-through - 2022"
        /> -->
        <img
          class="h-[794px] min-w-[1020px] "
          width="1020"
          height="794"
          draggable="false"
          alt="Dispatch Page"
          src={DispatchPageImage}
        />
      </div>
    </div>
  </div>

  <!-- <TrustedBySection /> -->
</section>
