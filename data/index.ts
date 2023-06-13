export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  image: string;
  link: string; // kanske inte?
}
// make image equal to link!
export const projects: Project[] = [
  {
    id: "1",
    title: "NF camping remake",
    type: "School project (group)",
    description:
      "We searched for a website in desperate need for an update and remade it using HTML and CSS.",
    image: "/norrfallsviken-remake.png",
    link: "https://jesper-lindstrom.github.io/Norrfallsvikens-camping-remake/",
  },
  {
    id: "2",
    title: "The Journey",
    type: "School project (solo)",
    description: "A text-based game I made using vanilla javascript",
    image: "/thejourneyimg.png",
    link: "https://jesper-lindstrom.github.io/Mitt-spelprojekt/",
  },
  {
    id: "3",
    title: "Frostbite Frenzy",
    type: "School project (group)",
    description:
      "We made a multiplayer game using typescript and p5. This was the last project of javascript intro course.",
    image: "/frostbite-frenzy.png",
    link: "https://main--stellular-brioche-80ac61.netlify.app/",
  },
  {
    id: "4",
    title: "Simiflix",
    type: "School project (group)",
    description: "Group project for practicing using API toghether with react.",
    image: "/simiflix.png",
    link: "https://resonant-tapioca-18b934.netlify.app/",
  },
  {
    id: "5",
    title: "Portfolio",
    type: "Solo project",
    description:
      "My updated portfolio to showcase my projects. Using typescript and react instead of simply HTML and CSS this time.",
    image: "/portfolio.png",
    link: "https://jesper-lindstrom.github.io/projects",
  },
  {
    id: "6",
    title: "The Friend Zone",
    type: "Group project",
    description:
      "A 'twitter clone' where we also built backend using express, mongoDB, with both front- and backend validation. (link to github repo)",
    image: "/thefriendzone.png",
    link: "https://github.com/plugga-tech/react-express-user-content-ts-thefriendzone",
  },
];
