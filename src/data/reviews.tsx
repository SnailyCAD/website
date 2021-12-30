import * as React from "react";

interface Review {
  name: string;
  text: React.ReactNode | string;
  imageURL: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Mr. Game Eagle",
    text: (
      <>
        <span>
          {
            "I started using SnailyCAD a few months ago after searching for a few months for a different cad that wasn't used on Bubble. I downloaded the cad and joined the discord to find that this was a very easy install and the developer behind it cares about the project."
          }
        </span>
        <span className="block w-full my-3" />
        <span>
          {
            "With ideas I had about features I wanted to see in the cad I wasn't sure if they were possible. I compiled about a page full of features and they were done in less then a few days. This shows real dedication and I feel this is a really nice cad for being open source and free. I would recommend it to anyone looking for one."
          }
        </span>
      </>
    ),
    imageURL:
      "https://cdn.discordapp.com/avatars/528317411053797386/8f216ebcb1ad7c9ef315cdd58955d6ad.webp?size=128",
  },
  {
    name: "jxck",
    text: (
      <>
        <span>
          {
            "This is the only CAD you'll ever need. It's clean design and ease of use makes it incredibly accessible for your whole community. Couldn't be happier with the level of support and the speed at which bugs, feature releases and general updates are pushed."
          }
        </span>
        <span className="block w-full my-3" />
        <span>
          {
            "Casper engages with all the contributions (bug reports/feature requests) extremely quickly and always asks the right questions. The turnaround for some of the things I've submitted has been nothing short of incredible."
          }
        </span>
        <span className="block w-full my-3" />
        <span>Would highly recommend using SnailyCAD!</span>
      </>
    ),
    imageURL:
      "https://cdn.discordapp.com/avatars/323231395981819904/a_edeaf26508ab76083ca891f643154ba6.webp?size=128",
  },
  {
    name: "Cobra |Strike-Modifications|",
    text: "I started using SnailyCAD about 6 or 7 months ago I'm very impressed with the layout and how everything works and the support. When people ask about a cad I have started to send them here because this is worth it more then a lot of other cads I have seen",
    imageURL:
      "https://cdn.discordapp.com/avatars/739721556145733685/d3bf1aeb6e2eb2893a80850c4da3a9d9.webp?size=128",
  },
  {
    name: "Andy",
    text: "This is the best cad out there, it's free, it looks good, it has very good feature, and reported bugs are fixed very quickly.",
    imageURL:
      "https://cdn.discordapp.com/avatars/243440367066677251/69541bc6f3ed949f9afe50610e112085.webp?size=128",
  },
  {
    name: "Tovade",
    text: "Great site! Smooth to use and easy to setup! I definitely recommend this to other users!!",
    imageURL:
      "https://cdn.discordapp.com/avatars/556218750337286145/4926ee5bead64b5148b2e002b1d6515d.webp?size=128",
  },
];
