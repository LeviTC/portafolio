import { EXPERIENCE_DATA } from "@/data/experience";
import ExperienceCard from "../ui/experience-card";
import Section from "../ui/section";
import { css } from "../../../../styled-system/css";



export default function Experience() {

  return (
    <Section title="Experience" id="experience" >

      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "30px"
        })}
      >
        {
          EXPERIENCE_DATA.map(job => (
            <ExperienceCard key={job.title} {...job} />
          ))
        }
      </div>


    </Section>
  )
}