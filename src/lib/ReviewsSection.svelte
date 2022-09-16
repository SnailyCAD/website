<script lang="ts">
  import { REVIEWS } from "../data/reviews.svelte";
  import { DISCORD_URL } from "./Header.svelte";
  import classNames from "classnames";

  const half = Math.floor(REVIEWS.length / 2);
  const COLUMNS = [REVIEWS.slice(0, half), REVIEWS.slice(half, REVIEWS.length)];

  let isShowingMore = false;
  let containerDiv: HTMLDivElement;

  function handleShowMoreClick() {
    containerDiv.classList.toggle("max-h-[55rem]");
    isShowingMore = !isShowingMore;
  }
</script>

<section
  id="reviews"
  class="flex flex-col items-center justify-center w-full max-w-5xl py-20 mt-5 mx-auto"
>
  <h1
    class="max-w-5xl text-3xl font-black text-center sm:text-4xl md:text-5xl lg:text-6xl text-primary"
  >
    Adored by many
  </h1>

  <p class="max-w-3xl my-8 mb-10 text-base font-medium text-center md:text-xl text-secondary">
    Here is what people say about SnailyCADv4.
  </p>

  <div
    bind:this={containerDiv}
    class="relative overflow-hidden grid grid-cols-1 gap-3 row-auto md:grid-cols-2 max-h-[55rem]"
  >
    {#each COLUMNS as column}
      <ul class="flex flex-col gap-4">
        {#each column as review}
          <li
            class="cursor-default relative p-6 transition-transform rounded-xl shadow-lg bg-primary hover:-translate-y-0.5 h-fit"
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
          </li>
        {/each}
      </ul>
    {/each}

    <div class="inset-x-0 flex justify-center pt-32 pb-8 pointer-events-none absolute bottom-0">
      <button
        on:click={handleShowMoreClick}
        type="button"
        class={classNames(
          "text-white text-sm font-medium py-3.5 px-6 rounded-3xl bg-secondary hover:brightness-150 pointer-events-auto drop-shadow-lg",
          isShowingMore ? "fixed bottom-10 z-10" : "",
        )}>{isShowingMore ? "Okay, SnailyCAD is awesome!" : "Show all reviews"}</button
      >
    </div>
  </div>

  <a href={DISCORD_URL} class="font-medium underline cursor-pointer mt-7 text-secondary">
    Join our Discord to post a review.
  </a>
</section>
