<script lang="ts">
  import SvelteSeo from "svelte-seo";
  import Footer from "$lib/Footer.svelte";

  import Header from "$lib/Header.svelte";
  import "../app.css";

  const PAGE_TITLE = "SnailyCAD - Free and open-source CAD/MDT for FiveM";
  const PAGE_URL = "https://snailycad.org";
  const PAGE_DESC =
    "SnailyCAD is a free and open-source CAD/MDT system with all the wanted features to fit your roleplay needs.";
</script>

<SvelteSeo
  title={PAGE_TITLE}
  description={PAGE_DESC}
  canonical={PAGE_URL}
  keywords="CAD/MDT system, fivem cad/mdt, open source, roleplay, law enforcement, free CAD/MDT, dispatching "
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
  <link rel="icon" href="/logo.svg" />
</svelte:head>

<Header />

<main class="w-full">
  <slot />
</main>

<Footer />
