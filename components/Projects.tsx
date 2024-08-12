import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import styles from "../styles/Projects.module.css";
import { items } from "@/pages/api/works/apiWorks";
import Link from "next/link";

export const Projects = () => {
  const [flipped, setFlipped] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true, // Permitir múltiples activaciones
    threshold: 0.25, // Activar cuando esté al menos al 25% visible
  });

  const handleClick = (index: number) => {
    setFlipped(flipped === index ? null : index);
  };

  return (
    <motion.div
      id="projects"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }} // Animar opacidad basado en visibilidad
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className={styles.skillsHeading}>Proyectos</h1>
      <div className={styles.worksContent}>
        {items.map((item, index) => {
          // Generar posiciones iniciales aleatorias
          const randomX = Math.random() * 200 - 100; // Entre -100 y 100
          const randomY = Math.random() * 200 - 100; // Entre -100 y 100

          return (
            <motion.div
              key={index}
              className={styles.worksItem}
              initial={{
                opacity: 0,
                x: randomX,
                y: randomY,
                scale: 0.8, // Empezar más pequeño
                rotate: Math.random() * 20 - 10, // Rotación aleatoria
              }}
              animate={{
                opacity: inView ? 1 : 0,
                x: inView ? 0 : randomX,
                y: inView ? 0 : randomY,
                scale: inView ? 1 : 0.8, // Tamaño final
                rotate: inView ? 0 : Math.random() * 20 - 10, // Rotación final
              }}
              transition={{
                delay: index * 0.1, // Retraso incremental para cada ítem
                duration: 0.6,
                ease: "easeOut",
                type: "spring",
                damping: 8, // Damping para el rebote
                stiffness: 100, // Rigidez del resorte
              }}
            >
              <div
                className={`${styles.ImageWrapper} ${
                  flipped === index ? styles.flipped : ""
                }`}
                onClick={() => handleClick(index)}
              >
                <motion.div
                  className={`${styles.front} ${
                    flipped === index ? styles.hidden : ""
                  }`}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: flipped === index ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={item.image}
                    alt={`foto_perfil_${index}`}
                    priority
                    layout="fill"
                    objectFit="cover"
                  />
                  <div
                    className={`${styles.indicator} ${
                      flipped === index ? styles.hidden : ""
                    }`}
                  >
                    Toca para girar
                  </div>
                </motion.div>
                <motion.div
                  className={`${styles.back} ${
                    flipped === index ? styles.visible : ""
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: flipped === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.backText}>{item.text}</div>
                </motion.div>
              </div>
              <div className={styles.dataContent}>
                <div className={styles.tags}>
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      onClick={(e) => e.stopPropagation()} // Evita que el clic en el botón active el flip
                      className={`${styles.tag} ${
                        styles[`${tag.toLowerCase().trim()}-tag`]
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.linkContent}>
                  <Link
                    href={item.web}
                    target="_blank"
                    className={styles.webButton}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Web
                  </Link>

                  <Link
                    href={item.repo}
                    target="_blank"
                    className={styles.codeButton}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Repo
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
