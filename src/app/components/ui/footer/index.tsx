"use client"

import { useState } from "react"
import LinkedinIcon from "../icons/LinkedIn"
import GithubIcon from "../icons/Github"
import Button from "../Button"
import Notification from "../Notification"
import { HERO_SECTIONS } from "@/data/hero-sections"
import copyToClipboard from "@/utils/copy-to-clipboard"
import {
  copyableValueClass,
  headingClass,
  labelClass,
  navLinkClass,
  styles,
} from "./styles"

export const Footer = () => {
  const [showCopyNotice, setShowCopyNotice] = useState(false)

  const handleCopy = (text: string) => {
    copyToClipboard(text)
    setShowCopyNotice(true)
    setTimeout(() => setShowCopyNotice(false), 2000)
  }

  const handleIconClick = (url: string) => window.open(url)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const offset = 150
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <footer id="footer" className={styles.footer}>
      <Notification show={showCopyNotice} />
      <div className={styles.grid}>
        <div className={styles.ctaCell}>
          <div className={styles.ctaInner}>
            <Button
              href="/ERICK_TAMARIZ_FRONTEND_DEVELOPER_EN_compressed.pdf"
              size="lg"
              className={styles.resumeBtn}
            >
              Get resume
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
        </div>

        <div className={styles.contactMenuOuter}>
          <div className={styles.contactMenuInner}>
            <div className={styles.flankColumn}>
              <h3 className={headingClass}>Contact</h3>
              <p className={labelClass}>Phone:</p>
              <p
                className={copyableValueClass}
                onClick={() => handleCopy("+522227448864")}
              >
                (+52) 222 744 8864
              </p>
              <p className={labelClass}>Email:</p>
              <p
                className={copyableValueClass}
                onClick={() => handleCopy("erletaco@outlook.com")}
              >
                erletaco@outlook.com
              </p>
            </div>

            <div className={styles.flankColumn}>
              <h3 className={headingClass}>Menu</h3>
              {HERO_SECTIONS.map((section) => (
                <p
                  key={section}
                  onClick={() => scrollTo(section)}
                  className={navLinkClass}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
