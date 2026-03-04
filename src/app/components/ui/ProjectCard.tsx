import { css } from "../../../../styled-system/css";

interface ProjectCardProps {
  title?: string;
  description?: string;
  imagePath?: string;
  technologies?: string[];
}

export default function ProjectCard({
  title,
  description,
  imagePath,
  technologies,
}: ProjectCardProps) {


  return (
    <div
      className={css({
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "white",
        borderRadius: "12px",
      })}
    >
      
      {title}
      {description}
      {imagePath}

    </div>
  )
}