<script lang="ts">
  import FeaturesSection from "$lib/FeaturesSection.svelte";
  import GallerySection from "$lib/GallerySection.svelte";

  import HeroSection from "$lib/HeroSection.svelte";
  import ReviewsSection from "$lib/ReviewsSection.svelte";
  import TrustedBySection from "$lib/TrustedBySection.svelte";
</script>

<svelte:head>
  <title>SnailyCAD - The Free and open-source CAD/MDT for FiveM</title>

  <link rel="canonical" href="https://snailycad.caspertheghost.me" />
</svelte:head>

<HeroSection />
<FeaturesSection />
<TrustedBySection />
<ReviewsSection />
<GallerySection />
