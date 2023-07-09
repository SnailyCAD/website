<script lang="ts">
  import SvelteSeo from "svelte-seo";
  import FeaturesSection from "$lib/manager/FeaturesSection.svelte";
  import ManagerAppPreview from "../../images/features/manager_app_raw.png";

  export let data: import("./+page.server").PageData;

  const DOCS_URL = "https://docs.snailycad.org/docs/installations/methods/manager";
  const PAGE_TITLE = "SnailyCAD Manager - Manager your SnailyCAD instance with ease.";
  const PAGE_URL = "https://snailycad.org/manager";
  const PAGE_DESC =
    "Manage your SnailyCAD instance with ease on Windows and soon other platforms with the SnailyCAD Manager App.";
</script>

<SvelteSeo
  title={PAGE_TITLE}
  description={PAGE_DESC}
  canonical={PAGE_URL}
  keywords="fivem cad, snailycad, snaily cad, snailycad manager, manager app, manager"
  twitter={{
    image: "https://snailycad.org/logos/SnailyCAD_logo.png",
    imageAlt: "SnailyCAD",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    card: "summary",
  }}
  openGraph={{
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: "https://snailycad.org/logos/SnailyCAD_logo.png",
        alt: "SnailyCAD",
        width: 710,
        height: 710,
      },
    ],
  }}
/>

<svelte:head>
  <link rel="canonical" href="https://snailycad.org/manager" />
  <meta
    name="description"
    content="Manage your SnailyCAD instance with ease on Windows and soon other platforms."
  />
</svelte:head>

<section class="h-[1100px] pt-40 bg-primary">
  <div class="max-w-5xl mx-auto w-full gap-y-6">
    <div class="px-4 md:px-0 flex items-center flex-col">
      <h1
        class="max-w-5xl text-3xl font-black text-center text-gray-100 sm:text-4xl md:text-5xl lg:text-6xl !leading-[1.3]"
      >
        SnailyCAD Manager
      </h1>
      <p class="max-w-3xl text-center text-gray-300/90 mt-4 sm:text-[1.1rem] md:text-[1.4rem]">
        Manage your SnailyCAD instance with ease on Windows and soon other platforms.
      </p>

      <div class="my-9 flex flex-col justify-center items-center md:flex-row gap-2">
        <a
          rel="noreferrer"
          target="_blank"
          href={data.downloadUrl}
          class="flex w-fit items-center gap-2 text-lg p-3 px-5 bg-secondary transition-colors hover:brightness-125 rounded-3xl shadow-sm group"
        >
          <span>Download SnailyCAD Manager</span>
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
          rel="noreferrer"
          target="_blank"
          href={DOCS_URL}
          class="text-lg p-3 px-5 hover:bg-secondary transition-colors hover:brightness-125 rounded-3xl shadow-sm group"
        >
          SnailyCAD Documentation
        </a>
      </div>
    </div>

    <div class="flex items-center justify-center w-full h-[750px] overflow-hidden mt-5">
      <div
        class="w-full border-2 border-[#20212C] h-[750px] min-w-[1020px] drop-shadow-xl shadow-[#20212C]"
      >
        <img
          class="h-[1000px] min-w-[1020px]"
          width="1020"
          height="1000"
          draggable="false"
          alt="SnailyCAD Manager App"
          src={ManagerAppPreview}
        />
      </div>
    </div>
  </div>
</section>

<FeaturesSection />
