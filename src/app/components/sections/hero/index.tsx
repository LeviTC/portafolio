"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import styles from "./styles";
import Contact from "../../ui/contact";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className={styles.section}>
      <motion.div
        className={styles.leftCol}
        initial={{ opacity: 0, y: 56, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, ease }}
      >
        <div>
          <h1 className={styles.name}>
            {`Erick Leví `}
            <br className={styles.br} />
            Tamaríz Cortés
          </h1>
          <motion.h2
            className={styles.role}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
          >
            {t("role")}
          </motion.h2>
        </div>
      </motion.div>

      <motion.div
        className={styles.rightCol}
        initial={{ opacity: 0, y: 56, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, ease, delay: 0.25 }}
      >
        <p>
          {t.rich("bioLead", {
            years: (chunks) => <b>{chunks}</b>,
          })}
          <br />
          <br />
          {t("bioSpecialty")}
        </p>
        <Contact />
      </motion.div>
    </section>
  );
}
