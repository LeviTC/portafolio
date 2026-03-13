"use client"
import styles from "./styles";
import { cx } from "../../../../../styled-system/css";
import LinkedinIcon from "../icons/LinkedIn";
import GithubIcon from "../icons/Github";
import Button from "../Button";
import { useEffect, useState } from "react";
import { HERO_SECTIONS } from "@/data/hero-sections";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = HERO_SECTIONS;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= 150 && bottom >= 150) {
          setActiveSection(id);
          break;
        }
      }
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 150;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setMenuOpen(false);  // cerrar menu al navegar
  }

  const handleIconClick = (url: string) => window.open(url);

  return (
    <>
      <div className={styles.navbarContainer}>
        {/* links desktop */}
        <div className={styles.navLinks}>
          {HERO_SECTIONS.map((section) => (
            <div
              key={section}
              onClick={() => scrollTo(section)}
              className={cx(styles.navLinkStyle(activeSection === section))}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </div>
          ))}
        </div>        

        {/* hamburguesa mobile */}
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>

        {/* acciones desktop */}
        <div className={styles.navActions}>
          <GithubIcon className={styles.navLinkStyle()} onClick={() => handleIconClick("https://github.com/LeviTC")} />
          <LinkedinIcon className={styles.navLinkStyle()} onClick={() => handleIconClick("https://www.linkedin.com/in/erletaco")} />
          <Button href="/erick_tamariz_frontend_developer-cv-es.pdf" size="sm">Get resume</Button>
        </div>
      </div>

      {/* menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={styles.mobileMenu}
          >

            {HERO_SECTIONS.map((section) => (
              <div
                key={section}
                onClick={() => scrollTo(section)}
                className={styles.navLinkStyle(activeSection === section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </div>
            ))}

            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}