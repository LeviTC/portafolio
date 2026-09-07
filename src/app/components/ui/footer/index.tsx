"use client"

import { useLocale, useTranslations } from "next-intl"
import LinkedinIcon from "../icons/LinkedIn"
import GithubIcon from "../icons/Github"
import Button from "../Button"
import ContactActionTrigger from "../contact-action"
import { HERO_SECTIONS } from "@/data/hero-sections"
import { getResumeHref } from "@/utils/resume"
import Reveal from "../reveal"
import {
  copyableValueClass,
  headingClass,
  labelClass,
  navLinkClass,
  styles,
} from "./styles"

const PHONE_VALUE = "+522227448864"
const EMAIL_VALUE = "erletaco@outlook.com"

export const Footer = () => {
  const t = useTranslations("Footer")
  const tNav = useTranslations("Nav")
  const locale = useLocale()

  const handleIconClick = (url: string) => window.open(url)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const offset = 150
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: "smooth" })
  }

  const resumeHref = getResumeHref(locale)

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.grid}>
        <Reveal className={styles.ctaCell} y={64}>
          <div className={styles.ctaInner}>
            <Button
              href={resumeHref}
              size="lg"
              className={styles.resumeBtn}
            >
              {t("getResume")}
            </Button>
            <div className={styles.iconRow}>
              <GithubIcon
                size={21}
                className={styles.socialIcon}
                onClick={() => handleIconClick("https://github.com/LeviTC")}
              />
              <LinkedinIcon
                size={21}
                className={styles.socialIcon}
                onClick={() => handleIconClick("https://www.linkedin.com/in/erletaco")}
              />
            </div>
          </div>
        </Reveal>

        <Reveal className={styles.contactMenuOuter} y={64} delay={0.15}>
          <div className={styles.contactMenuInner}>
            <div className={styles.flankColumn}>
              <h3 className={headingClass}>{t("contact")}</h3>
              <p className={labelClass}>{t("phone")}</p>
              <ContactActionTrigger
                kind="phone"
                value={PHONE_VALUE}
                label="(+52) 222 744 8864"
                className={copyableValueClass}
                placement="top"
              />
              <p className={labelClass}>{t("email")}</p>
              <ContactActionTrigger
                kind="email"
                value={EMAIL_VALUE}
                label="erletaco@outlook.com"
                className={copyableValueClass}
                placement="top"
              />
            </div>

            <div className={styles.flankColumn}>
              <h3 className={headingClass}>{t("menu")}</h3>
              {HERO_SECTIONS.map((section) => (
                <p
                  key={section}
                  onClick={() => scrollTo(section)}
                  className={navLinkClass}
                >
                  {tNav(section)}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
