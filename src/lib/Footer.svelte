<script lang="ts">
  import { DISCORD_URL, DOCS_URL, GITHUB_URL } from "./Header.svelte";

  const linkProps = {
    class: "underline cursor-pointer",
    target: "_blank",
    rel: "noreferrer",
  };

  const PORTFOLIO_URL = "https://caspertheghost.me";
</script>

<footer
  class="absolute left-0 right-0 p-10 flex justify-center bg-primary border-t-2 border-secondary"
>
  <div class="md:flex justify-between h-full w-full max-w-5xl">
    <ul class="flex flex-col mt-6 gap-y-3">
      <li>
        <a href="/#features" class="font-medium hover:underline transition-colors hover:text-white">
          Top Features
        </a>
      </li>
      <li>
        <a href="/#reviews" class="font-medium hover:underline transition-colors hover:text-white"
          >Reviews</a
        >
      </li>
      <li>
        <a href="/#gallery" class="font-medium hover:underline transition-colors hover:text-white"
          >Gallery</a
        >
      </li>
      <li>
        <a href="/manager" class="font-medium hover:underline transition-colors hover:text-white"
          >SnailyCAD Manager</a
        >
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href={DOCS_URL}
          class="font-medium hover:underline transition-colors hover:text-white">Documentation</a
        >
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href={DISCORD_URL}
          class="font-medium hover:underline transition-colors hover:text-white">Discord</a
        >
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href={GITHUB_URL}
          class="font-medium hover:underline transition-colors hover:text-white">GitHub</a
        >
      </li>
    </ul>

    <p class="mt-7 md:mt-0">
      Created by <a {...linkProps} href={PORTFOLIO_URL}>CasperTheGhost</a> and{" "}
      <a {...linkProps} href={DISCORD_URL}>the amazing community</a>.
    </p>
  </div>
</footer>
