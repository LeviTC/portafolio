import { Project } from "@/types/project";
import Modal from "../modal/Modal";
import { css } from "../../../../../styled-system/css";
import Badge from "../badge";
import Button from "../Button";
import PlayStoreIcon from "../icons/PlayStoreIcon";
import AppStoreIcon from "../icons/AppStoreIcon";


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
          gap: "30px"
        })}>
          <p className={css({ fontSize: "24px", fontWeight: "500", })}>
            {project?.title}
          </p>

          <p className={css({ color: "secondary", fontSize: "18px" })} >
            {project?.description}
          </p>

          <div
            className={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "15px",
            })}
          >
            <div className={css({ display: "flex", flexWrap: "wrap", gap: "5px" })}>
              {project?.technologies.map(tech => (
                <Badge key={tech} text={tech} />
              ))}
            </div>

            <div className={css({ display: "flex", gap: "10px" })} >
              {project?.urlSite && (
                <Button variant="primary" href={project?.urlSite}>
                  Visit
                </Button>
              )}

              {project?.playUrl && (
                <Button variant="ghost" href={project?.playUrl}>
                  <PlayStoreIcon />
                </Button>
              )}

              {project?.playUrl && (
                <Button variant="ghost" href={project?.iosUrl}>
                  <AppStoreIcon />
                </Button>
              )}
            </div>
            
          </div>
      </div>
    </Modal>
  );
}