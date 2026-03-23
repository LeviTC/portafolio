
import { IExperience } from "@/types/experience";
import styles from "@/app/components/ui/experience-card/styles";

export default function ExperienceCard({
  title,
  company,
  startDate,
  endDate,
  description,
}: IExperience) {

  return (
    <div
      className={styles.card}
    >
      <div 
        className={styles.topRow}
      >
        <div>
          <p className={styles.company}>
            {company}
          </p>
          <p className={styles.title}>
            {title}
          </p>
        </div>


        <div
          className={styles.dates}
        >
          <p className={styles.dateText}>
            {startDate} 
          </p>

          <div 
            className={styles.dateLine} 
          />
          <p className={styles.dateText}>
            {endDate}
          </p>
        </div>

      </div>

      <p className={styles.description}>
        {description}
      </p>

      <div
        className={styles.bottomLineWrapper}
      >
        <div
          className={styles.bottomLine}
        />
      </div>
    </div>
  )
}