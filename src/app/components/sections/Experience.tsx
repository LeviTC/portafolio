import { css } from "../../../../styled-system/css";
import ProjectCard from "../ui/ProjectCard";



export default function Experience() {

  return (
    <section
      className={css({
        width: "70%",
        margin: "auto",
      })}
    >

      <h3 
        className={css({
          fontSize: "28px"
        })}
      >
        My Experience
      </h3>
    </section>
  )
}