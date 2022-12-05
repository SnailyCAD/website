<script lang="ts">
  const FEATURES = [
    {
      name: "Self-hosted",
      text: "SnailyCAD is a CAD/MDT that you can host yourself, giving you complete control over where and how it is hosted.",
    },
    {
      name: "Localization",
      text: "Easily translate SnailyCAD into different languages, add or use existing languages.",
    },
    {
      name: "Customization",
      text: "Easily customize SnailyCAD to your liking by managing the CAD-Settings and disabling or enabling features.",
    },
    {
      name: "Realtime",
      text: "Almost everything syncs in realtime to all clients, such as incoming calls, status updates, active incidents, etc.",
    },
    {
      name: "Great Support & Constant updates",
      text: "We try to help as much as possible. We handle bugs and feature requests with care and speed.",
    },
    {
      name: "Great Integrations",
      text: "SnailyCAD has many great integrations, including Discord Roles Sync, Discord Webhooks, and FiveM integrations.",
    },
  ];
</script>

<section id="features" class="w-full mt-[200px] px-4 md:px-0">
  <div class="mx-auto max-w-5xl flex flex-col items-center justify-center">
    <h1
      class="max-w-5xl text-3xl font-black text-center text-primary sm:text-4xl md:text-5xl lg:text-6xl"
    >
      Top features
    </h1>

    <div class="grid grid-cols-1 gap-5 mt-20 sm:grid-cols-2 md:grid-cols-3">
      {#each FEATURES as feature}
        <div
          class="cursor-default relative p-8 transition-transform rounded-xl shadow-lg bg-primary hover:scale-[1.010]"
        >
          <h2 class="text-xl font-[600] text-gray-200 mb-3">{feature.name}</h2>

          <p class="text-lg font-[400]">{feature.text}</p>
        </div>
      {/each}
    </div>

    <a
      target="_blank"
      rel="noreferrer"
      href="https://cad-docs.caspertheghost.me/docs/features"
      class="italic font-medium mt-10 underline text-primary">And many, many more features!</a
    >
  </div>
</section>
