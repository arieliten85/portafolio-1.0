import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaDownload } from "react-icons/fa";
import styles from "../styles/About.module.css";

export default function AboutMe() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Animar solo una vez cuando el componente entra en vista
    threshold: 0.1, // Porcentaje de visibilidad necesario para activar la animación
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 100 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className={styles.about}
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className={styles.skillsHeading}>Sobre mí</h1>

      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <span className={styles.span}>Quíen soy</span>
          <h2 className={styles.title}> Desarrollador Web</h2>
          <button className={styles.btn}>
            Descarga CV
            <FaDownload />
          </button>
        </div>
        <div className={styles.aboutData}>
          <p className={styles.text}>
            Soy un desarrollador web entusiasta con experiencia en tecnologías
            como JavaScript, React y TypeScript. Me especializo en crear
            aplicaciones escalables y eficientes, con un enfoque en la calidad y
            la usabilidad. Estoy buscando oportunidades desafiantes que me
            permitan seguir aprendiendo y contribuyendo con soluciones
            innovadoras. Mi objetivo es aportar valor a proyectos diversos y
            seguir creciendo en el campo del desarrollo web.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
