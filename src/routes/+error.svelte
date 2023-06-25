<script context="module">
  import { page } from "$app/stores";
</script>

<section class="h-[1000px] pt-40 bg-primary">
  <div class="max-w-5xl mx-auto w-full gap-y-6">
    <div class="px-4 md:px-0 flex items-center flex-col">
      <h1
        class="max-w-5xl text-3xl font-black text-center text-gray-100 sm:text-4xl md:text-5xl lg:text-6xl !leading-[1.3]"
      >
        {$page.status}: {$page.error.message}
      </h1>

      <div class="my-9 flex flex-col justify-center items-center md:flex-row gap-2">
        <a
          href="/"
          class="flex w-fit items-center gap-2 text-lg p-3 px-5 bg-secondary transition-colors hover:brightness-125 rounded-3xl shadow-sm group"
        >
          <span>Return home</span>
          <span class="transition-transform group-hover:translate-x-0.5 mt-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  </div>
</section>
