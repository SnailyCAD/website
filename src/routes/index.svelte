<script context="module" lang="ts">
  import FeaturesSection from "$lib/FeaturesSection.svelte";
  import GallerySection from "$lib/GallerySection.svelte";

  import HeroSection from "$lib/HeroSection.svelte";
  import ReviewsSection from "$lib/ReviewsSection.svelte";
  export const prerender = true;
</script>

<svelte:head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
  <title>SnailyCAD - The Free and open-source CAD/MDT for FiveM</title>
  <meta
    name="description"
    content="SnailyCAD is a free and open-source CAD/MDT made to feel and look modern with all the wanted features to fit your roleplay needs."
  />
  <meta
    name="keywords"
    content="CAD, MDT, fivem, leo, open source, roleplay, law enforcement, fire department, ems, bleeter, free, customizable"
  />
  <link rel="canonical" href="https://snailycad.caspertheghost.me" />
</svelte:head>

<HeroSection />
<FeaturesSection />
<ReviewsSection />
<GallerySection />
