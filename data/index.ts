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
    description: "We searched for a website and remade it using HTML and CSS.",
    image: "/public/images/norrfallsviken-remake.png",
    link: "https://jesper-lindstrom.github.io/Norrfallsvikens-camping-remake/",
  },
  {
    id: "2",
    title: "The Journey",
    type: "School project (solo)",
    description: "text-based game I made using mostly vanilla javascript",
    image: "/public/images/thejourneyimg.png",
    link: "https://jesper-lindstrom.github.io/Mitt-spelprojekt/",
  },
  {
    id: "3",
    title: "Frostbite Frenzy",
    type: "School project (group)",
    description: "We made a multiplayer game using typescript and p5.",
    image: "/public/images/frostbite-frenzy.png",
    link: "https://main--stellular-brioche-80ac61.netlify.app/",
  },
  {
    id: "4",
    title: "Simiflix",
    type: "School project (group)",
    description: "Group project for practicing using API toghether with react.",
    image: "/public/images/simiflix.png",
    link: "https://resonant-tapioca-18b934.netlify.app/",
  },
  {
    id: "5",
    title: "Portfolio",
    type: "Solo project",
    description:
      "My updated portfolio to showcase my projects. Using typescript and react instead of simply HTML and CSS this time.",
    image: "/public/images/portfolio.png",
    link: "https://jesper-lindstrom.github.io/projects",
  },
];
