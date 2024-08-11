import AboutMe from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Presentation } from "@/components/Presentation";
import { Skills } from "@/components/Skills";
import Works from "@/components/Works";

export default function Home() {
  return (
    <>
      <Navigation />
      <Presentation />
      <AboutMe />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}
