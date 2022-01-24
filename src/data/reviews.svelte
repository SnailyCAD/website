<script context="module" lang="ts">

  import AndyImage from "../images/reviews/andy.webp";
  import WhitigolImage from "../images/reviews/whitigol.webp";
  import CobraImage from "../images/reviews/cobra.webp";
  import JxckImage from "../images/reviews/jxck.webp";
  import MrGameEagleImage from "../images/reviews/mr_game_eagle.webp";
  import TovadeImage from "../images/reviews/tovade.webp";

  export const REVIEWS: { name: string; text: string; image: string }[] = [
    {
      name: "Mr. Game Eagle",
      text: `
          <p>
            I started using SnailyCAD a few months ago after searching for a few months for a different cad that wasn't used on Bubble. I downloaded the cad and joined the discord to find that this was a very easy install and the developer behind it cares about the project.
          </p>
          <br className="block w-full my-1" />
          <p>
              With ideas I had about features I wanted to see in the cad I wasn't sure if they were possible. I compiled about a page full of features and they were done in less then a few days. This shows real dedication and I feel this is a really nice cad for being open source and free. I would recommend it to anyone looking for one.
          </p>`,
      image: MrGameEagleImage,
    },
    {
      name: "jxck",
      text: `
          <p>
              This is the only CAD you'll ever need. It's clean design and ease of use makes it incredibly accessible for your whole community. Couldn't be happier with the level of support and the speed at which bugs, feature releases and general updates are pushed.
          </p>
          <br className="block w-full my-1" />
          <p>
              Casper engages with all the contributions (bug reports/feature requests) extremely quickly and always asks the right questions. The turnaround for some of the things I've submitted has been nothing short of incredible.
          </p>
          <br className="block w-full my-1" />
          <p>Would highly recommend using SnailyCAD!</p>`,
      image: JxckImage,
    },
    {
      name: "Whitigol",
      text: `<p>
            SnailyCAD has truly transformed my online CAD/MDT experience. Being free, open-source, well documented, and self-hosted, makes it the perfect tool to use.
          </p>
          <br className="block w-full my-1" />
          <p>
            The system is easy to use, fairly simple to setup, and the community is phenomenal at providing support to get you the help you need. Bugs are quickly handled as soon as they are reported, and it's constantly being improved, with new features added, and bug's patched.
          </p>
          <br className="block w-full my-1" />
          <p>
            With it's engaging User Interface, and all-around great features. I would definitely recommend using SnailyCAD!
          </p>`,
      image: WhitigolImage,
    },
    {
      name: "Cobra |Strike-Modifications|",
      text: "I started using SnailyCAD about 6 or 7 months ago I'm very impressed with the layout and how everything works and the support. When people ask about a cad I have started to send them here because this is worth it more then a lot of other cads I have seen",
      image: CobraImage,
    },
    {
      name: "Andy",
      text: "This is the best cad out there, it's free, it looks good, it has very good feature, and reported bugs are fixed very quickly.",
      image: AndyImage,
    },
    {
      name: "Tovade",
      text: "Great site! Smooth to use and easy to setup! I definitely recommend this to other users!!",
      image: TovadeImage,
    },
  ];
</script>
