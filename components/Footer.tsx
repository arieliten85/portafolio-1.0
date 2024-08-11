import styles from "../styles/Footer.module.css";

import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md"; // Icono de copiar
import { FaGithub, FaLinkedin, FaFileAlt, FaCheck } from "react-icons/fa"; // Íconos de GitHub, LinkedIn y CV

const Footer = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ariel.feren.info@gmail.com");
    setCopySuccess(true);

    setTimeout(() => {
      setCopySuccess(false);
    }, 8000);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          <span className={styles.email}>ariel.feren.info@gmail.com</span>
          <button onClick={handleCopyEmail} className={styles.copyButton}>
            {copySuccess ? <FaCheck size={20} /> : <MdContentCopy size={20} />}
          </button>
        </p>

        <div className={styles.socialIcons}>
          <a
            href="https://github.com/tu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/tu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="/path-to-your-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaFileAlt size={20} />
          </a>
        </div>
      </div>

      <p className={styles.copyright}>
        © {new Date().getFullYear()} AriDev. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
