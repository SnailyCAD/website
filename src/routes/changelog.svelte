<script context="module">
  export async function load({ fetch }) {
    const posts = await fetch(`/changelog.json`).then((r) => r.json());

    return {
      props: { changelogs: posts ?? [] },
    };
  }
</script>

<script>
  export let changelogs;
  console.log({ changelogs });
</script>

{#each changelogs as changelog}
  <div class="prose prose-invert">
    {@html changelog.html}
  </div>
{/each}
