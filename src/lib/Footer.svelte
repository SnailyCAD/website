<script lang="ts">
  import { DISCORD_URL } from "./Header.svelte";

  const linkProps = {
    class: "underline cursor-pointer",
    target: "_blank",
    rel: "noreferrer noopener",
  };

  const PORTFOLIO_URL = "https://caspertheghost.me";
</script>

<footer class="py-10">
  <p>
    Created by <a {...linkProps} href={PORTFOLIO_URL}>CasperTheGhost</a> and{" "}
    <a {...linkProps} href={DISCORD_URL}>the amazing community</a>.
  </p>
</footer>
