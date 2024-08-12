import React, { useState } from "react";
import styles from "../styles/Skills.module.css";
import { TbBrandJavascript } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import {
  FaReact,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaNode,
  FaJava,
  FaBootstrap,
  FaJira,
  FaBitbucket,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { SiSass, SiMysql, SiMongodb, SiSpring, SiNestjs } from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillProps {
  id: string;
  name: string;
  icon: JSX.Element;
  colorClass: string;
  onClick: (id: string) => void;
  isAnimating: string;
}

const Skill: React.FC<SkillProps> = ({
  id,
  name,
  icon,
  colorClass,
  onClick,
  isAnimating,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={`${styles.skillItem} ${colorClass} ${isAnimating}`}
      onClick={() => onClick(id)}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p className={styles.skillName}>{name}</p>
      {icon}
    </motion.div>
  );
};

export const Skills: React.FC = () => {
  const [animate, setAnimate] = useState<{ [key: string]: string }>({});

  const handleClick = (id: string) => {
    setAnimate((prevState) => ({
      ...prevState,
      [id]: "animate__animated animate__flip",
    }));

    setTimeout(() => {
      setAnimate((prevState) => ({
        ...prevState,
        [id]: "",
      }));
    }, 1000);
  };

  const skills = [
    {
      id: "react",
      name: "React",
      icon: <FaReact className={styles.skillIcon} />,
      colorClass: styles.reactColor,
    },
    {
      id: "js",
      name: "JavaScript",
      icon: <TbBrandJavascript className={styles.skillIcon} />,
      colorClass: styles.jsColor,
    },
    {
      id: "next",
      name: "Next.js",
      icon: <SiNextdotjs className={styles.skillIcon} />,
      colorClass: styles.nextColor,
    },
    {
      id: "ts",
      name: "TypeScript",
      icon: <BiLogoTypescript className={styles.skillIcon} />,
      colorClass: styles.tsColor,
    },
    {
      id: "sass",
      name: "Sass",
      icon: <SiSass className={styles.skillIcon} />,
      colorClass: styles.sassColor,
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      icon: <FaBootstrap className={styles.skillIcon} />,
      colorClass: styles.bootstrapColor,
    },
    {
      id: "node",
      name: "Node.js",
      icon: <FaNode className={styles.skillIcon} />,
      colorClass: styles.nodeColor,
    },
    {
      id: "express",
      name: "Express.js",
      icon: <SiExpress className={styles.skillIcon} />,
      colorClass: styles.expressColor,
    },
    {
      id: "nest",
      name: "Nest.js",
      icon: <SiNestjs className={styles.skillIcon} />,
      colorClass: styles.nestColor,
    },
    {
      id: "java",
      name: "Java",
      icon: <FaJava className={styles.skillIcon} />,
      colorClass: styles.javaColor,
    },
    {
      id: "spring",
      name: "Spring",
      icon: <SiSpring className={styles.skillIcon} />,
      colorClass: styles.springColor,
    },
    {
      id: "docker",
      name: "Docker",
      icon: <FaDocker className={styles.skillIcon} />,
      colorClass: styles.dockerColor,
    },
    {
      id: "mysql",
      name: "MySQL",
      icon: <SiMysql className={styles.skillIcon} />,
      colorClass: styles.mysqlColor,
    },
    {
      id: "mongodb",
      name: "MongoDB",
      icon: <SiMongodb className={styles.skillIcon} />,
      colorClass: styles.mongoColor,
    },
    {
      id: "git",
      name: "Git",
      icon: <FaGitAlt className={styles.skillIcon} />,
      colorClass: styles.gitColor,
    },
    {
      id: "github",
      name: "GitHub",
      icon: <FaGithub className={styles.skillIcon} />,
      colorClass: styles.githubColor,
    },
    {
      id: "jira",
      name: "Jira",
      icon: <FaJira className={styles.skillIcon} />,
      colorClass: styles.jiraColor,
    },
    {
      id: "bitbucket",
      name: "Bitbucket",
      icon: <FaBitbucket className={styles.skillIcon} />,
      colorClass: styles.bitbucketColor,
    },
  ];

  return (
    <section id="skill" className={styles.skill}>
      <h1 className={styles.skillsHeading}>Habilidades</h1>
      <section className={styles.skillsSection}>
        {["Frontend", "Backend", "Gestión"].map((category, idx) => (
          <div key={idx} className={styles.skillCategory}>
            <h2 className={styles.categoryTitle}>{category}</h2>
            <div className={styles.skillList}>
              {skills.slice(idx * 6, (idx + 1) * 6).map((skill) => (
                <Skill
                  key={skill.id}
                  id={skill.id}
                  name={skill.name}
                  icon={skill.icon}
                  colorClass={skill.colorClass}
                  onClick={handleClick}
                  isAnimating={animate[skill.id] || ""}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};
