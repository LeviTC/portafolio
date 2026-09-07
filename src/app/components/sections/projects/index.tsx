"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Project } from "@/types/project";
import ProjectCard from "../../ui/ProjectCard";
import Button from "../../ui/Button";
import ProjectModal from "../../ui/project-modal";
import Section from "../../ui/section";
import Reveal, { RevealItem } from "../../ui/reveal";
import styles from "./styles";

export default function Projects() {
  const t = useTranslations("Projects");
  const projects = t.raw("items") as Project[];
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
    ? projects
    : projects.slice(0, initialCardsCount);

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
      <Section id="projects" title={t("title")}>
        <div className={styles.grid}>
          <AnimatePresence initial={false} mode="popLayout">
            {projectsToDisplay.map((project, index) => (
              <RevealItem
                key={project.title}
                delay={Math.min(index * 0.06, 0.3)}
              >
                <div
                  onClick={() => handleOpenModal(project)}
                  style={{ cursor: "pointer" }}
                >
                  <ProjectCard {...project} />
                </div>
              </RevealItem>
            ))}
          </AnimatePresence>
        </div>

        <Reveal y={48} delay={0.05} className={styles.buttonWrapper}>
          <Button className={styles.button} onClick={handleToggle}>
            {showAll ? t("showLess") : t("viewAll")}
          </Button>
        </Reveal>
      </Section>

      <ProjectModal
        open={openModal}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}
