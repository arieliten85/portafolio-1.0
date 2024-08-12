import React from "react";
import styles from "../styles/Presentation.module.css";
import Image from "next/image";
import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"; // Importa Framer Motion

import perfil from "../assets/perfil_image2.svg";
import Link from "next/link";

export const Presentation = () => {
  return (
    <motion.div
      id="home"
      className={styles.container}
      initial={{ opacity: 0 }} // Estado inicial
      animate={{ opacity: 1 }} // Animación cuando el componente se monta
      transition={{ duration: 1.5 }} // Duración de la animación
    >
      <div className={styles.homeContent}>
        <motion.div
          className={styles.perfil}
          initial={{ rotate: -180 }} // Rotación inicial
          animate={{ rotate: 0 }} // Rotación al montarse
          transition={{ duration: 1, ease: "easeOut" }} // Duración y tipo de animación
        >
          <Image
            className={styles.image}
            src={perfil}
            alt="foto_perfil"
            priority
          />
        </motion.div>

        <div className={styles.homeText}>
          <motion.p
            className={styles.greeting}
            initial={{ x: -100, opacity: 0 }} // Posición inicial
            animate={{ x: 0, opacity: 1 }} // Animación cuando el componente se monta
            transition={{ delay: 0.5, duration: 1 }} // Retraso y duración de la animación
          >
            Hola
          </motion.p>

          <motion.h2
            initial={{ x: 100, opacity: 0 }} // Posición inicial
            animate={{ x: 0, opacity: 1 }} // Animación cuando el componente se monta
            transition={{ delay: 0.5, duration: 1 }} // Retraso y duración de la animación
          >
            <span className={styles.span}>Soy</span> Ariel Ferencak
          </motion.h2>

          <motion.h3
            initial={{ y: 100, opacity: 0 }} // Posición inicial
            animate={{ y: 0, opacity: 1 }} // Animación cuando el componente se monta
            transition={{ delay: 1.5, duration: 1 }} // Retraso y duración de la animación
          >
            Soy un <span className={styles.resalt}>desarrollador web</span> con
            gran pasión por el desarrollo de aplicaciones y la experiencia de
            usuario. Aquí encontrarás un poco más{" "}
            <span className={styles.resalt}>sobre mí</span>
          </motion.h3>

          <div className={styles.social}>
            <Link
              href="https://github.com/arieliten85"
              target="_blank"
              className={styles.icon}
            >
              <FaGithub />
            </Link>

            <Link
              href="https://www.linkedin.com/in/arielferencak"
              target="_blank"
              className={styles.icon}
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
