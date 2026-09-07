import { useTranslations } from "next-intl";
import Section from "../../ui/section";
import ExperienceCard from "../../ui/experience-card";
import styles from "./styles";
import { IExperience } from "@/types/experience";

export default function Experience() {
  const t = useTranslations("Experience");
  const items = t.raw("items") as IExperience[];

  return (
    <Section title={t("title")} id="experience">
      <div className={styles.grid}>
        {items.map((job) => (
          <ExperienceCard key={`${job.company}-${job.title}`} {...job} />
        ))}
      </div>
    </Section>
  );
}
