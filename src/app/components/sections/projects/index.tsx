"use client";

import { PROFESSIONAL_PROJECTS } from "@/data/porfessional-projects";
import ProjectCard from "../../ui/ProjectCard";
import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import ProjectModal from "../../ui/project-modal";
import { Project } from "@/types/project";
import Section from "../../ui/section";
import styles from "./styles";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 767px)").matches
      : false
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const onChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", onChange);
    return () => {
      mediaQuery.removeEventListener("change", onChange);
    };
  }, []);

  const initialCardsCount = isMobile ? 3 : 6;
  const projectsToDisplay = showAll
    ? PROFESSIONAL_PROJECTS
    : PROFESSIONAL_PROJECTS.slice(0, initialCardsCount);

  const handleToggle = () => {
    if (showAll) {
      const el = document.getElementById("projects");
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setShowAll(!showAll);
  };

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Section id="projects" title="Professional projects">
        <div className={styles.grid}>
          <AnimatePresence initial={false}>
            {projectsToDisplay.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div onClick={() => handleOpenModal(project)}>
                  <ProjectCard {...project} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className={styles.buttonWrapper}>
          <Button className={styles.button} onClick={handleToggle}>
            {showAll ? "Show less" : "View all"}
          </Button>
        </div>
      </Section>

      <ProjectModal
        open={openModal}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}
