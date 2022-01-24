<script>
  import { REVIEWS } from "../data/reviews.svelte";
  import { DISCORD_URL } from "./Header.svelte";
</script>

<section id="reviews" class="flex flex-col items-center justify-center w-full max-w-5xl py-20 mt-5">
  <h1
    class="max-w-5xl text-3xl font-black text-center sm:text-4xl md:text-5xl lg:text-6xl text-slate-100/90"
  >
    What people are saying
  </h1>

  <p class="max-w-3xl my-5 mb-10 text-base font-medium text-center md:text-xl">
    Here is what people are saying about SnailyCAD.
  </p>

  <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
    {#each REVIEWS as review}
      <div
        class="cursor-default relative p-6 transition-transform rounded-md shadow-lg bg-slate-700 hover:-translate-y-0.5"
      >
        <header class="flex items-center gap-4 mb-4">
          <img
            loading="lazy"
            width={40}
            height={40}
            draggable="false"
            class="rounded-full object-cover"
            src={review.image}
            alt={review.image}
          />
          <h2 class="text-lg font-semibold text-gray-200">{review.name}</h2>
        </header>

        <p>{@html review.text}</p>
      </div>
    {/each}
  </div>

  <a href={DISCORD_URL} class="font-medium underline cursor-pointer mt-7 text-slate-300">
    Join our Discord to post a review.
  </a>
</section>
