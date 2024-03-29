<script context="module" lang="ts">
  export const DOCS_URL = "https://docs.snailycad.org/docs/getting-started";
  export const GITHUB_URL = "https://github.com/snailycad/snaily-cadv4";
  export const DISCORD_URL = "https://discord.gg/eGnrPqEH7U";
</script>

<script lang="ts">
  import { onMount } from "svelte";

  let nav: HTMLElement;
  let mobileNav: HTMLElement;

  onMount(() => {
    handleScroll();
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  function handleToggleMobileNav() {
    mobileNav.classList.toggle("hidden");
  }

  function handleScroll() {
    const offset = nav?.offsetTop;
    nav.classList.toggle("bg-primary", window.pageYOffset > offset);
  }
</script>

<header class="fixed left-0 right-0 top-0 z-50 h-20">
  <nav bind:this={nav} class="px-5 lg:px-0 flex items-center justify-center w-full h-full">
    <div class="flex items-center justify-between h-full w-full max-w-5xl">
      <h1 class="text-2xl font-bold text-white">
        <a href="/">SnailyCAD</a>
      </h1>

      <button on:click={handleToggleMobileNav} class="block md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>

      <ul class="hidden gap-x-6 md:flex">
        <li>
          <a
            href="/#features"
            class="text-gray-300 hover:underline font-medium transition-colors hover:text-white"
          >
            Top Features
          </a>
        </li>
        <li>
          <a
            href="/#reviews"
            class="text-gray-300 hover:underline font-medium transition-colors hover:text-white"
            >Reviews</a
          >
        </li>
        <li>
          <a
            href="/#gallery"
            class="text-gray-300 hover:underline font-medium transition-colors hover:text-white"
            >Gallery</a
          >
        </li>
        <li>
          <a
            href="/manager"
            class="text-gray-300 hover:underline font-medium transition-colors hover:text-white"
            >Manager</a
          >
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href={DOCS_URL}
            class="text-gray-300 hover:underline font-medium transition-colors hover:text-white"
            >Documentation</a
          >
        </li>
      </ul>

      <ul class="items-center gap-x-3 hidden md:flex">
        <li>
          <a href={GITHUB_URL} class="font-medium transition-colors hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="GitHub Repository"
              width={20}
              height={20}
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href={DISCORD_URL} class="font-medium transition-colors hover:text-white">
            <svg
              aria-label="Discord Server"
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-discord"
              viewBox="0 0 16 16"
            >
              <path
                d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
              />
            </svg>
          </a>
        </li>
      </ul>

      <!-- mobile navigation -->
      <div
        bind:this={mobileNav}
        class="absolute hidden md:hidden top-20 right-0 px-5 pb-5 bg-primary shadow-2xl w-full animate-fade-in-down"
      >
        <ul class="flex flex-col gap-y-3">
          <li>
            <a
              on:click={handleToggleMobileNav}
              href="/#features"
              class="text-gray-300 font-medium transition-colors hover:text-white"
            >
              Top Features
            </a>
          </li>
          <li>
            <a
              on:click={handleToggleMobileNav}
              href="/#reviews"
              class="text-gray-300 font-medium transition-colors hover:text-white">Reviews</a
            >
          </li>
          <li>
            <a
              on:click={handleToggleMobileNav}
              href="/#gallery"
              class="text-gray-300 font-medium transition-colors hover:text-white">Gallery</a
            >
          </li>
          <li>
            <a
              on:click={handleToggleMobileNav}
              href="/manager"
              class="text-gray-300 font-medium transition-colors hover:text-white">Manager</a
            >
          </li>
          <li>
            <a
              on:click={handleToggleMobileNav}
              target="_blank"
              rel="noreferrer"
              href={DOCS_URL}
              class="text-gray-300 font-medium transition-colors hover:text-white">Documentation</a
            >
          </li>
        </ul>

        <ul class="flex gap-x-5 mt-5">
          <li>
            <a href={GITHUB_URL} class="font-medium block transition-colors hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="GitHub Repository"
                width={20}
                height={20}
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href={DISCORD_URL} class="font-medium transition-colors hover:text-white">
              <svg
                aria-label="Discord Server"
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-discord"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

<style>
  .animate-fade-in-down {
    animation: animate-fade-in-down 0.15s ease-out;
  }

  @keyframes animate-fade-in-down {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
