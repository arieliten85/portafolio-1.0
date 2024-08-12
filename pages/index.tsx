import AboutMe from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Presentation } from "@/components/Presentation";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { ButtonHome } from "@/components/buttonHome";

export default function Home() {
  return (
    <>
      <Navigation />
      <ButtonHome />
      <Presentation />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
