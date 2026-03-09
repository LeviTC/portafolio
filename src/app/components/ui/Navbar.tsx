"use client"
import { css } from "../../../../styled-system/css";
import LinkedinIcon from "./icons/LinkedIn";
import GithubIcon from "./icons/Github";
import Button from "./Button";
import { useEffect, useState } from "react";
import { cx } from "../../../../styled-system/css";
import { HERO_SECTIONS } from "@/data/hero-sections";

const navLinkStyle = css({
  cursor: "pointer",
  color: "white",
  transition: "color 0.3s ease",
  _hover: { color: "primary" },
})

const activeLinkStyle = css({
  color: "primary",
})

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

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
  }

  const handleIconClick = (url: string) => {
    window.open(url);
  }

  return (
    <div
      className={css({
        display: "flex",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        backgroundColor: "rgba(17, 17, 17, 0.4)",
        backdropFilter: "blur(10px)",
        fontSize: "20px",
        py: "32px",
        px: "80px",
        alignItems: "center",
        justifyContent: "space-between",
      })}
    >
      <div className={css({ display: "flex", gap: "30px" })}>
        {HERO_SECTIONS.map((section) => (
          <div
            key={section}
            onClick={() => scrollTo(section)}
            className={cx(navLinkStyle, activeSection === section ? activeLinkStyle : "")}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </div>
        ))}
      </div>

      <div className={css({ display: "flex", gap: "20px", alignItems: "center" })}>
        <GithubIcon 
          className={navLinkStyle} 
          onClick={() => handleIconClick("https://github.com/LeviTC")}
        />
        <LinkedinIcon
          className={navLinkStyle} 
          onClick={() => handleIconClick("https://www.linkedin.com/in/erletaco")}  
        />
        <Button 
          href="/erick_tamariz_frontend_developer-cv-es.pdf" 
          size="sm"
        >
          Download CV
        </Button>
      </div>
    </div>
  )
}