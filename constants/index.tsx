import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

import { Youtube, Linkedin, Github } from "lucide-react";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Jest JS",
    Image: "/Jest.png",
    width: 80,
    height: 80,
  },
  {
    name: "SQL",
    Image: "/SQL.png",
    width: 80,
    height: 80,
  },
  {
    name: "Vite",
    Image: "/vite.png",
    width: 100,
    height: 100,
  },
];

export const socialNetworks = [
  {
    id: 1,
    logo: <Youtube size={50} strokeWidth={1} color="white" />,
    src: "https://www.youtube.com/channel/UCje1wNLBlE5no1y0sz59cig",
  },
  {
    id: 2,
    logo: <Linkedin size={50} strokeWidth={1} color="white" />,
    src: "https://www.linkedin.com/in/julian-florentin-04a515169/",
  },
  {
    id: 5,
    logo: <Github size={50} strokeWidth={1} color="white" />,
    src: "https://github.com/FlorentinJulian?tab=repositories",
  },
];
export const Projects = [
  {
    id: 1,
    title: "Disney+Clone",
    text: "Un clon responsivo de la famosa plataforma de streaming",
    src: "/Disney.png",
    urlDemo: "https://disneyfolio.netlify.app/",
  },
  {
    id: 2,
    title: "Reproductor Musical",
    text: "Un Reproductor musical con la opción de poder cambiar de fondo y con 5 canciones incluidas",
    src: "/Reproductor.png",
    urlDemo: "https://musicaplayertesting.netlify.app/",
  },
  {
    id: 3,
    title: "Pokedex",
    text: "Pokedex 100% responsiva con un modal personalizado en mobile",
    src: "/Pokedex.png",
    urlDemo: "https://pokedexfolio.netlify.app/",
  },
  {
    id: 4,
    title: "Sitio de comidas",
    text: "Un sitio de compra de variados alimentos con un carrito de compras",
    src: "/Shop.png",
    urlDemo: "https://shopfolio.netlify.app/",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];
