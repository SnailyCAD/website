<script context="module" lang="ts">
  throw new Error(
    "@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)",
  );

  // import FeaturesSection from "$lib/FeaturesSection.svelte";
  // import GallerySection from "$lib/GallerySection.svelte";

  // import HeroSection from "$lib/HeroSection.svelte";
  // import ReviewsSection from "$lib/ReviewsSection.svelte";
  // export const prerender = true;
</script>

<svelte:head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
  <title>SnailyCAD - The Free and open-source CAD/MDT for FiveM</title>

  <link rel="canonical" href="https://snailycad.caspertheghost.me" />
</svelte:head>

<HeroSection />
<FeaturesSection />
<ReviewsSection />
<GallerySection />
