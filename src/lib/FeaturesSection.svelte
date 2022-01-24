<script lang="ts">
  const FEATURES = [
    {
      name: "Localization",
      text: "Easily translate SnailyCAD into different languages, add or overwrite languages.",
    },
    {
      name: "Customization",
      text: "Easily customize SnailyCAD to your likings by disabling or enabling features.",
    },
    {
      name: "Realtime",
      text: "Almost everything syncs in realtime to all clients such as incoming calls, status updates, etc.",
    },
    {
      name: "Great Support",
      text: "We try to help as much as we can. Bugs and feature requests are handled with care and speed.",
    },
    {
      name: "Constant updates",
      text: "SnailyCAD receives tons of updates to make sure it stays functional and fast.",
    },
    {
      name: "Light and dark UI",
      text: "Choose between a dark or light themed UI. Your choice.",
    },
  ];
</script>

<section
  id="features"
  class="flex flex-col items-center justify-center w-full max-w-5xl py-20 mt-5"
>
  <h1
    class="max-w-5xl text-3xl font-black text-center text-slate-100/90 sm:text-4xl md:text-5xl lg:text-6xl"
  >
    Top Features
  </h1>

  <div class="grid grid-cols-1 gap-3 mt-10 md:grid-cols-2">
    {#each FEATURES as feature}
      <div
        class="cursor-default relative p-6 transition-transform rounded-md shadow-lg bg-slate-700 hover:scale-[1.010]"
      >
        <header class="flex items-center gap-4 mb-4">
          <h2 class="text-lg font-semibold text-gray-200">{feature.name}</h2>
        </header>

        <p>{feature.text}</p>
      </div>
    {/each}
  </div>
</section>
