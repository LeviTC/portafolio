import { useTranslations } from "next-intl";
import styles from "./styles";
import Contact from "../../ui/contact";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className={styles.section}>
      <div className={styles.leftCol}>
        <div>
          <h1 className={styles.name}>
            {`Erick Leví `}
            <br className={styles.br} />
            Tamaríz Cortés
          </h1>
          <h2 className={styles.role}>{t("role")}</h2>
        </div>
      </div>

      <div className={styles.rightCol}>
        <p>
          {t.rich("bioLead", {
            years: (chunks) => <b>{chunks}</b>,
          })}
          <br />
          <br />
          {t("bioSpecialty")}
        </p>
        <Contact />
      </div>
    </section>
  );
}
