<script lang="ts">
  import EotsImage from "../images/communities/eots.webp";
  import Exia from "../images/communities/exia.webp";
  import LadojRP from "../images/communities/ladojrp.webp";
  import LblRP from "../images/communities/lblrp.webp";
  import MuricaRP from "../images/communities/muricarp.webp";
  import NeonCityRP from "../images/communities/neoncityrp.webp";

  interface Community {
    name: string;
    discordUrl: string;
    userCount: number;
    image: any;
  }

  const communities: Community[] = [
    {
      name: "Enemy Of the State RP",
      discordUrl: "https://discord.gg/eots",
      image: EotsImage,
      userCount: 2400,
    },
    {
      name: "ExiaRP™",
      discordUrl: "https://discord.gg/sZAawBp",
      image: Exia,
      userCount: 50_000,
    },
    {
      name: "LBL RP",
      discordUrl: "https://discord.gg/lblrp",
      image: LblRP,
      userCount: 230,
    },
    {
      name: "Los Angeles DOJRP",
      discordUrl: "https://discord.gg/ladojrp",
      image: LadojRP,
      userCount: 6800,
    },
    {
      name: "Neon City RP",
      discordUrl: "https://discord.gg/neoncityrp",
      image: NeonCityRP,
      userCount: 130,
    },
    {
      name: "Murica RP",
      discordUrl: "https://discord.com/invite/7uVZAY49th",
      image: MuricaRP,
      userCount: 170,
    },
  ];

  const sponsors = [
    {
      name: "JxckUK",
      url: "https://github.com/jxckUK",
    },
    {
      name: "Creizy",
      url: "https://github.com/Creizy",
    },
    {
      name: "Northern524",
      url: "https://github.com/northern524",
    },
    {
      name: "subtosharki",
      url: "https://github.com/subtosharki",
    },
  ];
</script>

<div class="relative">
  <div class="bg-primary w-full h-full absolute top-0 left-0 -skew-y-2 -z-[1]" />

  <div class="flex flex-col mt-40 items-center gap-y-6 mx-auto w-full h-full py-40 overflow-hidden">
    <h1 class="max-w-5xl text-3xl font-black text-center sm:text-4xl md:text-5xl lg:text-6xl">
      Trusted by top communities
    </h1>
    <div class="flex justify-center gap-7 max-w-8xl mt-14">
      {#each communities as community}
        <a
          rel="noreferrer"
          target="_blank"
          href={community.discordUrl}
          class="flex flex-col items-center justify-center gap-y-6 bg-secondary hover:brightness-125 transition p-6 rounded-xl"
        >
          <img
            width="160"
            height="160"
            src={community.image}
            alt={community.name}
            class="w-40 max-w-5xl rounded-lg drop-shadow-lg"
          />
          <h2 class="text-base font-semibold text-center text-gray-100">
            {community.name}
          </h2>
        </a>
      {/each}
    </div>

    <p class="text-gray-300 font-medium italic">And many more communities!</p>
    <h2 class="text-3xl font-bold mt-3">Proud Sponsors</h2>

    <a class="mt-1" href="https://gamefocal.com?ref=snailycad">
      <img
        alt="GameFocal"
        width="150"
        src="https://gamefocal.com/assets/dash/images/brand/logo.png"
      />
    </a>
    <ul class="flex flex-wrap gap-2">
      {#each sponsors as sponsor}
        <li>
          <a
            href={sponsor.url}
            class="bg-secondary p-2 px-3 transition-all rounded-lg hover:brightness-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              class="inline fill-[#db61a2] mr-1"
            >
              <path
                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
              />
            </svg>

            {sponsor.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
