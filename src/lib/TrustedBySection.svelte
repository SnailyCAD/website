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

<div class="flex flex-col mt-40 items-center w-full max-w-8xl gap-y-6 mx-auto pb-20">
  <h2 class="max-w-5xl text-2xl font-semibold text-center text-gray-100 mb-7">
    Trusted by top communities
  </h2>

  <div class="flex justify-center gap-7 flex-wrap">
    {#each communities as community}
      <a
        href={community.discordUrl}
        class="flex flex-col items-center justify-center gap-y-6 bg-slate-700 hover:bg-slate-600 transition-colors p-6 rounded-xl"
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
