<script lang="ts">
  import SvelteSeo from "svelte-seo";
  import Footer from "$lib/Footer.svelte";

  import Header from "$lib/Header.svelte";
  import "../app.css";

  const PAGE_TITLE = "SnailyCAD - The Free and open-source CAD/MDT for FiveM";
  const PAGE_URL = "https://snailycad.caspertheghost.me";
  const PAGE_DESC =
    "SnailyCAD is a free and open-source CAD/MDT made to feel and look modern with all the wanted features to fit your roleplay needs.";
</script>

<SvelteSeo
  title={PAGE_TITLE}
  description={PAGE_DESC}
  canonical={PAGE_URL}
  keywords="CAD, MDT, fivem, leo, open source, roleplay, law enforcement, fire department, ems, bleeter, free, customizable"
  twitter={{
    site: "@casper124578",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    card: "summary",
  }}
  openGraph={{
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: PAGE_URL,
    type: "website",
  }}
/>

<Header />

<main>
  <slot />
</main>

<Footer />
