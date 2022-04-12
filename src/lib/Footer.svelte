<script lang="ts">
  import { DISCORD_URL, DOCS_URL, GITHUB_URL } from "./Header.svelte";

  const linkProps = {
    class: "underline cursor-pointer",
    target: "_blank",
    rel: "noreferrer noopener",
  };

  const PORTFOLIO_URL = "https://caspertheghost.me";
</script>

<footer class="py-10 flex flex-col md:flex-row justify-between">
  <ul class="flex flex-col mt-6 gap-y-2 ">
    <li>
      <a href="#features" class="font-medium transition-colors hover:text-white"> Top Features </a>
    </li>
    <li>
      <a href="#reviews" class="font-medium transition-colors hover:text-white">Reviews</a>
    </li>
    <li>
      <a href="#gallery" class="font-medium transition-colors hover:text-white">Gallery</a>
    </li>
    <li>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href={DOCS_URL}
        class="font-medium transition-colors hover:text-white">Documentation</a
      >
    </li>
    <li>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href={DISCORD_URL}
        class="font-medium transition-colors hover:text-white">Discord</a
      >
    </li>
    <li>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href={GITHUB_URL}
        class="font-medium transition-colors hover:text-white">GitHub</a
      >
    </li>
  </ul>

  <p>
    Created by <a {...linkProps} href={PORTFOLIO_URL}>CasperTheGhost</a> and{" "}
    <a {...linkProps} href={DISCORD_URL}>the amazing community</a>.
  </p>
</footer>
