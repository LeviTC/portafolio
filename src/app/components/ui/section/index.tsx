import styles from "./styles";
import { cx } from "../../../../../styled-system/css";

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, title, id, className }: SectionProps) {
  return (
    <section id={id || ""} className={cx(styles.section, className)}>
      <div className={styles.titleContainer}>
        {title && (
          <h3 className={styles.title}>
            {title}
          </h3>
        )}
      </div>
      {children}
    </section>
  )
}