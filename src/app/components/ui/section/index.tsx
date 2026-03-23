import styles from "./styles";

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
}

export default function Section({ children, title, id }: SectionProps) {
  return (
    <section id={id || ""} className={styles.section}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>
          {title}
        </h3>
      </div>
      {children}
    </section>
  )
}