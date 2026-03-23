import { EXPERIENCE_DATA } from "@/data/experience";
import Section from "../../ui/section";
import ExperienceCard from "../../ui/experience-card";
import styles from "./styles";



export default function Experience() {

  return (
    <Section title="Experience" id="experience" >

      <div
        className={styles.grid}
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