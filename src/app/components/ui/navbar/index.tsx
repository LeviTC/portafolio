"use client";

import styles from "./styles";
import { cx } from "../../../../../styled-system/css";
import LinkedinIcon from "../icons/LinkedIn";
import GithubIcon from "../icons/Github";
import Button from "../Button";
import { useEffect, useState } from "react";
import { HERO_SECTIONS } from "@/data/hero-sections";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { getResumeHref } from "@/utils/resume";

export default function Navbar() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [menuOpen]);

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
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setFooterInView(inView);
        if (inView) setMenuOpen(false);
      },
      { threshold: 0, rootMargin: "0px" }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 150;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleIconClick = (url: string) => window.open(url);

  const switchLocale = (nextLocale: (typeof routing.locales)[number]) => {
    if (nextLocale === locale) return;
    const scrollY = window.scrollY;
    sessionStorage.setItem("locale-scroll-y", String(scrollY));
    router.replace(pathname, { locale: nextLocale, scroll: false });
    setMenuOpen(false);
  };

  useEffect(() => {
    const raw = sessionStorage.getItem("locale-scroll-y");
    if (raw == null) return;
    sessionStorage.removeItem("locale-scroll-y");
    const scrollY = Number(raw);
    if (Number.isNaN(scrollY)) return;

    const restore = () => window.scrollTo(0, scrollY);
    restore();
    requestAnimationFrame(restore);
  }, [locale]);

  const resumeHref = getResumeHref(locale);

  const localeSwitcher = (
    <div className={styles.localeSwitcher}>
      {routing.locales.map((item, index) => (
        <span key={item} className={styles.localeSwitcherItem}>
          {index > 0 && <span className={styles.localeDivider}>|</span>}
          <button
            type="button"
            onClick={() => switchLocale(item)}
            className={cx(styles.localeButton(locale === item))}
            aria-current={locale === item ? "true" : undefined}
          >
            {item.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );

  return (
    <>
      <motion.div
        className={styles.navbarContainer}
        initial={false}
        animate={{
          y: footerInView ? "-100%" : 0,
        }}
        transition={{
          duration: 0.35,
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{
          backdropFilter: "blur(10px) saturate(100%)",
          WebkitBackdropFilter: "blur(10px) saturate(100%)",
          pointerEvents: footerInView ? "none" : "auto",
        }}
      >
        <div className={styles.navLinks}>
          {HERO_SECTIONS.map((section) => (
            <div
              key={section}
              onClick={() => scrollTo(section)}
              className={cx(styles.navLinkStyle(activeSection === section))}
            >
              {t(section)}
            </div>
          ))}
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>

        <div className={styles.navActions}>
          {localeSwitcher}
          <GithubIcon
            className={styles.navLinkStyle()}
            onClick={() => handleIconClick("https://github.com/LeviTC")}
          />
          <LinkedinIcon
            className={styles.navLinkStyle()}
            onClick={() =>
              handleIconClick("https://www.linkedin.com/in/erletaco")
            }
          />
          <Button href={resumeHref} size="sm">
            {t("getResume")}
          </Button>
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={styles.mobileMenu}
            onClick={() => setMenuOpen(false)}
            style={{
              backdropFilter: "blur(10px) saturate(100%)",
              WebkitBackdropFilter: "blur(10px) saturate(100%)",
            }}
          >
            {HERO_SECTIONS.map((section) => (
              <div
                key={section}
                onClick={() => scrollTo(section)}
                className={styles.navLinkStyle(activeSection === section)}
              >
                {t(section)}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
