import React from "react";
import styles from "../styles/Presentation.module.css";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import perfil from "../assets/perfil01.jpeg";

export const Presentation = () => {
  return (
    <div id={styles.home} className={styles.container}>
      <div className={styles.homeContent}>
        <Image
          className={`${styles.perfil} animate__animated animate__rotateIn animate__fast`}
          src={perfil}
          alt="foto_perfil"
          width={55}
          height={52}
          priority
        />
        <div className={styles.homeText}>
          <p
            className={`${styles.greeting} animate__animated animate__bounceInRight animate__delay-0.5s`}
          >
            Hola
          </p>
          <h2
            className={`animate__animated animate__bounceInLeft animate__delay-0.5s`}
          >
            <span className={styles.span}>Soy</span> Ariel Ferencak
          </h2>
          <h3
            className={`animate__animated animate__bounceInUp animate__delay-1.5s`}
          >
            Soy un <span className={styles.resalt}>desarrollador web</span> con
            gran pasión por el desarrollo de aplicaciones y la experiencia de
            usuario. Aquí {""}
            encontrarás un poco más{" "}
            <span className={styles.resalt}>sobre mí</span>
          </h3>

          <div className={styles.social}>
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
