<script lang="ts">
  const FEATURES = [
    {
      name: "Easy to use",
      text: "SnailyCAD Manager is easy to use which allows many server owners to easily manage their SnailyCAD instance.",
    },
    {
      name: "Remote Access",
      text: "Access SnailyCAD Manager from anywhere, anytime. You can also access it from your phone via your web browser.",
    },
    {
      name: "GUI Experience",
      text: "Experience everything in an interface, no need to use the command line. Update SnailyCAD, change ENV variables, and more with ease.",
    },
    {
      name: "Live Logs",
      text: "See everything that is going on in the back-end by viewing the live logs. This can also be used to get support when things just are not working.",
    },
  ];
</script>

<section id="features" class="w-full px-4 pb-20 pt-44 md:px-0">
  <div class="mx-auto max-w-5xl flex flex-col items-center justify-center">
    <h1
      class="max-w-5xl text-3xl font-black text-center text-primary sm:text-4xl md:text-5xl lg:text-6xl"
    >
      Features
    </h1>

    <div class="grid grid-cols-1 gap-5 mt-20 sm:grid-cols-2">
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
