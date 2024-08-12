import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "../styles/Buttonhome.module.css";

export const ButtonHome = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 4000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {showButton && (
        <Link href="#top" className={styles.button}>
          <FaArrowUp />
        </Link>
      )}
    </div>
  );
};
