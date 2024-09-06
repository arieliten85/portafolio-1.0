import image1 from "../../../assets/works/tdm_img.jpg";
import image2 from "../../../assets/works/test_authorizer_img.jpg";
import image3 from "../../../assets/works/moovSee_image.jpg";
import image4 from "../../../assets/works/paumac_img.jpg";
import image5 from "../../../assets/works/thePerfectMentor_img.jpg";

import image6 from "../../../assets/works/lauraLopez_img.jpg";

import { StaticImageData } from "next/image";

interface ProyectsProps {
  name: string;
  image: StaticImageData;
  text: string;
  tags: string[];
  repo: string;
  web: string;
}

export const Proyects: ProyectsProps[] = [
  {
    name: "Laura Lopez",
    image: image6,
    text: "Página web de sesiones fotográficas, capturando esos momentos únicos e irrepetibles, en diferentes etapas de la vida.(EN PROSESO)",
    tags: ["React", "Typescript", "Node", "css", "MySql"],
    repo: "https://github.com/arieliten85/Laura-lopez-Photo",
    web: "https://laura-lopez-studio.netlify.app",
  },
  {
    name: "Todo dulce mary",
    image: image1,
    text: "Aplicación enfocada en una panadería, donde los usuarios pueden explorar y comprar una amplia variedad de productos clasificados por tipo. Las compras se coordinan exclusivamente con los vendedores a través de WhatsApp.",
    tags: ["React", "Typescript", "Node", "Sass", "MySql"],
    repo: "https://github.com/arieliten85/tdm_monorepo",
    web: "https://tododulcemary.netlify.app",
  },
  {
    name: "Test Authorizer",
    image: image2,
    text: "Los usuarios pueden registrarse proporcionando un nombre de usuario, contraseña y rol. Una vez registrados, pueden iniciar sesión y, dependiendo de su rol, tienen acceso a diferentes funciones a través de cuatro botones para verificar los permisos correspondientes.",
    tags: ["Next", "Typescript", "Java", "Springboot", "JWT", "Docker"],
    repo: "https://github.com/arieliten85/TestRoleAccessAuth_API-SPRING",
    web: "https://test-role-access-authority.vercel.app",
  },
  {
    name: "MooveSee",
    image: image3,
    text: "Es una plataforma informativa con un gran catálogo de películas y series, donde te podrás registrar e iniciar sesión para crear tu lista de contenido de favoritos.",
    tags: ["React", "Node", "CSS", "PostgreSQL", "Passport", "Bcrypt"],
    repo: "https://github.com/arieliten85/MoovSee",
    web: "https://moovsee.netlify.app/",
  },
  {
    name: "Paumac",
    image: image4,
    text: "Página web destinada a la venta de sesiones fotográficas, capturando esos momentos únicos e irrepetibles, en diferentes etapas de la vida.",
    tags: ["React", "Sass", "Firebase"],
    repo: "https://github.com/arieliten85/Paumac_-Netlify",
    web: "https://paula-mac.netlify.app",
  },
  {
    name: "The perfect mentor",
    image: image5,
    text: "THE PERFECT MENTOR Globant Encuentra a tu mentor ideal. Según tu rol, elige a la persona de tu interés de una lista y envíale una invitación. Si acepta, se genera un match que habilita información y herramientas para contactarlo",
    tags: ["React", "Node", "Express", "Sass", "JWT", "MongoDB", "Socket"],
    repo: "https://github.com/arieliten85/ThePerfectMentor",
    web: "https://www.youtube.com/watch?v=64nkuvO35tc&ab_channel=ArielFerencak",
  },
];
