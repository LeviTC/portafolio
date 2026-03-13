"use client"
import { PROFESSIONAL_PROJECTS } from "@/data/porfessional-projects";
import { css } from "../../../../styled-system/css";
import ProjectCard from "../ui/ProjectCard";
import { useState } from "react";
import Button from "../ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import ProjectModal from "../ui/project-modal";
import { Project } from "@/types/project";
import Section from "../ui/section";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [openModal, setOpenModal] = useState(false);


  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projectsToDisplay = showAll 
    ? PROFESSIONAL_PROJECTS 
    : PROFESSIONAL_PROJECTS.slice(0, 6);

  const handleToggle = () => {
    if (showAll) {
      const el = document.getElementById("projects");
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setShowAll(!showAll);
  }

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  return (
    <>
      <Section id="projects" title="Professional projects" >
        <div
          className={css({
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
                <div onClick={() => handleOpenModal(project)} >
                  <ProjectCard {...project} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className={css({display: "flex", justifyContent: "center", mt: "30px"})}>
          <Button
            className={css({ width: "200px" })}
            onClick={handleToggle}
          >
            {showAll ? "Show less" : "View all"}
          </Button>
        </div>
      </Section>

      <ProjectModal open={openModal} onClose={handleCloseModal} project={selectedProject}/>
    </>
  )
}