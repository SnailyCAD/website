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
  </div>
</div>
