import { Project } from "@/types/project";
import Modal from "../modal/Modal";
import Badge from "../badge";
import Button from "../Button";
import PlayStoreIcon from "../icons/PlayStoreIcon";
import AppStoreIcon from "../icons/AppStoreIcon";
import styles from "./styles";


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
      <div className={styles.content}>
          <p className={styles.title}>
            {project?.title ?? ""}
          </p>

          <p className={styles.description}>
            {project?.description ?? ""}
          </p>

          <div className={styles.footer}>
            <div className={styles.techList}>
              {project?.technologies?.map(tech => (
                <Badge key={tech} text={tech} />
              ))}
            </div>

            <div className={styles.actions}>
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

              {project?.iosUrl && (
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