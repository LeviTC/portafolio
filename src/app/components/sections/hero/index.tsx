import styles from "./styles";
import Contact from "../../ui/contact";

export default function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <div className={styles.leftCol}>
        <div>
          <h1 className={styles.name}>
            {`Erick Leví `}
            <br className={styles.br} />
            Tamaríz Cortés
          </h1>
          <h2 className={styles.role}>
            Front-End Developer
          </h2>
        </div>
      </div>

      <div className={styles.rightCol}>
        <p>
          With <b>4+</b> years of experience building e-commerce platforms, ERP systems, and warehouse mobile applications.
          <br /><br />
          I specialize in React, React Native, Next.js, and TypeScript, creating scalable interfaces and tools that help businesses manage inventory, orders, and operations more efficiently.
        </p>
        <Contact />
      </div>
    </section>
  );
}