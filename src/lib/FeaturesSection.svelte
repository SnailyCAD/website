<script lang="ts">
  const FEATURES = [
    {
      name: "Self-hosted",
      text: "SnailyCAD is a self-hosted CAD/MDT. Host SnailyCAD wherever and whenever to your hosting needs.",
    },
    {
      name: "Localization",
      text: "Easily translate SnailyCAD into different languages, add or use existing languages.",
    },
    {
      name: "Customization",
      text: "Easily customize SnailyCAD to your likings by managing the CAD-Settings and disabling or enabling features.",
    },
    {
      name: "Realtime",
      text: "Almost everything syncs in realtime to all clients such as incoming calls, status updates, active incidents, etc.",
    },
    {
      name: "Great Support & Constant updates",
      text: "We try to help as much as we can. Bugs and feature requests are handled with care and speed.",
    },
    {
      name: "Great Integrations",
      text: "SnailyCAD has many integrations such as Discord Roles Sync, Discord Webhooks and FiveM integrations.",
    },
  ];
</script>

<section id="features" class="w-full py-32 bg-slate-700">
  <div class="mx-auto max-w-5xl flex flex-col items-center justify-center">
    <h1
      class="max-w-5xl text-3xl font-black text-center text-slate-100/90 sm:text-4xl md:text-5xl lg:text-6xl"
    >
      Top features
    </h1>

    <div class="grid grid-cols-1 gap-5 mt-20 sm:grid-cols-2 md:grid-cols-3">
      {#each FEATURES as feature}
        <div
          class="cursor-default relative p-8 transition-transform rounded-xl shadow-lg bg-slate-800 hover:scale-[1.010]"
        >
          <h2 class="text-xl font-medium text-gray-200 mb-3">{feature.name}</h2>

          <p class="text-lg">{feature.text}</p>
        </div>
      {/each}
    </div>

    <a
      target="_blank"
      rel="noreferer noopener"
      href="https://cad-docs.caspertheghost.me/docs/features"
      class="italic font-medium mt-10 underline">And many, many more features!</a
    >
  </div>
</section>
