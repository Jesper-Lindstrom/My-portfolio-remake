export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  // image: string;
  link: string; // kanske inte?
}
// make image equal to link!
export const projects: Project[] = [
  {
    id: "1",
    title: "NF camping remake",
    type: "School project (group)",
    description: "We searched for a website and remade it using HTML and CSS.",
    // image: ''
    link: "http://example.com",
  },
  {
    id: "2",
    title: "The Journey",
    type: "School project (solo)",
    description: "text-based game I made using mostly vanilla javascript",
    // image: ''
    link: "http://example.com",
  },
  {
    id: "3",
    title: "Frostbite Frenzy",
    type: "School project (group)",
    description: "We made a multiplayer game using typescript and p5.",
    // image: string,
    link: "http://example.com",
  },
  {
    id: "4",
    title: "Simiflix",
    type: "School project (group)",
    description: "Group project for practicing using API toghether with react.",
    // image: string,
    link: "http://example.com",
  },
  {
    id: "5",
    title: "Portfolio",
    type: "Solo project",
    description:
      "My updated portfolio to showcase my projects. Using typescript and react instead of simply HTML and CSS this time.",
    // image: string,
    link: "http://example.com",
  },
];
