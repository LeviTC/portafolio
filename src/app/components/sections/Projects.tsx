"use client"
import { PROFESSIONAL_PROJECTS } from "@/data/porfessional-projects";
import { css } from "../../../../styled-system/css";
import ProjectCard from "../ui/ProjectCard";
import { useRef, useState } from "react";
import Button from "../ui/Button";
import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projectsToDisplay = showAll 
    ? PROFESSIONAL_PROJECTS 
    : PROFESSIONAL_PROJECTS.slice(0, 6);

    const handleToggle = () => {
      if (showAll) {
        const el = sectionRef.current;
        if (!el) return;
        
        const offset = 150;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setShowAll(!showAll);
    }

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={css({
        width: "75%",
        maxWidth: "1500px",
        margin: "auto",
        mt: "200px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        alignItems: "center",
      })}
    >
      <h3 className={css({ fontSize: "28px" })}>
        Professional projects
      </h3>

      <div
        className={css({
          mt: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          width: "100%",
        })}
      >
        <AnimatePresence initial={false}>
          {projectsToDisplay.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Button
        className={css({ width: "200px" })}
        onClick={handleToggle}
      >
        {showAll ? "Show less" : "View all"}
      </Button>
    </section>
  )
}