import styles from "../styles/Navigation.module.css";

import { useState, useEffect, useRef } from "react";
import { gsap, Expo } from "gsap";
import Link from "next/link";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const getVpdr = () => {
    if (!circleRef.current) return 1;
    const html = document.documentElement;
    const vph = Math.pow(html.offsetHeight, 2); // Height
    const vpw = Math.pow(html.offsetWidth, 2); // Width
    const vpd = Math.sqrt(vph + vpw); // Diagonal
    return (vpd * 2) / circleRef.current.clientWidth; // Circle radius
  };

  const openNavbar = () => {
    if (!circleRef.current || !navbarRef.current) return;

    const timeline = gsap.timeline();
    timeline.to(navbarRef.current, { duration: 0, css: { display: "flex" } });
    timeline.to(circleRef.current, {
      duration: 1.5,
      scale: getVpdr(),
      ease: Expo.easeInOut,
    });
    timeline.fromTo(
      `.${styles.navbar} ul li`,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1 }
    );
  };

  const closeNavbar = () => {
    if (!circleRef.current || !navbarRef.current) return;

    const timeline = gsap.timeline();
    timeline.to(`.${styles.navbar} ul li`, {
      y: 25,
      opacity: 0,
      stagger: -0.1,
      delay: 0.5,
    });
    timeline.to(circleRef.current, {
      duration: 1,
      scale: 0,
      ease: Expo.easeInOut,
      delay: -0.5,
    });
    timeline.to(navbarRef.current, { duration: 0, css: { display: "none" } });
  };

  useEffect(() => {
    const handleResize = () => {
      if (isOpen && circleRef.current) {
        gsap.to(circleRef.current, {
          duration: 1,
          scale: getVpdr(),
          ease: Expo.easeInOut,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const handleToggle = () => {
    if (toggleRef.current) {
      if (isOpen) {
        toggleRef.current.classList.remove(styles.active);
        closeNavbar();
      } else {
        toggleRef.current.classList.add(styles.active);
        openNavbar();
      }
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <div id={styles.nav}>
        <div className={styles.navbarHeader}>
          <h2 className={styles.logo}>AriDev</h2>
          <button
            className={styles.navbarToggle}
            id={styles.toggle}
            type="button"
            onClick={handleToggle}
            ref={toggleRef}
            aria-expanded={isOpen}
            aria-controls={styles.navbar}
          >
            <svg viewBox="0 0 100 100" width="50">
              <path
                className={`${styles.line} ${styles.top}`}
                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
              />
              <path
                className={`${styles.line} ${styles.middle}`}
                d="m 30,50 h 40"
              />
              <path
                className={`${styles.line} ${styles.bottom}`}
                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
              />
            </svg>
          </button>
        </div>
      </div>

      <div id={styles.wrapper}>
        <div className={styles.navbar} id={styles.navbar} ref={navbarRef}>
          <ul>
            <li>
              <Link href={"/"}>Inicio</Link>
            </li>
            <li>
              <Link href={"/"}>Sobre mí</Link>
            </li>
            <li>
              <Link href={"/"}>Proyectos</Link>
            </li>
            <li>
              <Link href={"/"}>Contacto</Link>
            </li>
          </ul>
        </div>
        <div
          id={styles.bgCircle}
          className={styles.bgCircle}
          ref={circleRef}
        ></div>
      </div>
    </>
  );
};
