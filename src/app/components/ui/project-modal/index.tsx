import { Project } from "@/types/project";
import Modal from "../modal/Modal";
import { css } from "../../../../../styled-system/css";
import Badge from "../badge";


interface ProjectModal {
  open: boolean;
  onClose: () => void;
  project: Project | null;
}


export default function ProjectModal({ 
  open = false, 
  onClose = () => {}, 
  project 
}: ProjectModal) {

  return (
    <Modal
      show={open}
      onClose={onClose}
    >
      <div 
        className={css({
          display: "flex",
          flexDirection: "column",
        })}>
          <p className={css({ fontSize: "24px", fontWeight: "500", })}>
            {project?.title}
          </p>
          <p className={css({ color: "secondary", })} >
            {project?.description}
          </p>
          {project?.technologies?.length && (
          <div
            className={css({
              display: "flex",
              flexWrap: "wrap",
              gap: "5px",
              mt: "15px",
            })}
          >
            {project?.technologies.map(tech => (
              <Badge key={tech} text={tech} />
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
}