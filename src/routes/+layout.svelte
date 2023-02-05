<script lang="ts">
  import Footer from "$lib/Footer.svelte";

  import Header from "$lib/Header.svelte";
  import "../app.css";
</script>

<svelte:head>
  <link rel="icon" href="/logo.svg" />
</svelte:head>

<Header />

<main class="w-full">
  <slot />
</main>

<Footer />
