"use client"
import { css } from "../../../../styled-system/css";
import LinkedinIcon from "./icons/LinkedIn";
import GithubIcon from "./icons/Github";
import Button from "./Button";
import { useEffect, useState } from "react";
import { cx } from "../../../../styled-system/css";

const navLinkStyle = css({
  cursor: "pointer",
  color: "white",
  transition: "color 0.3s ease",
  _hover: { color: "#EB4A4A" },
})

const activeLinkStyle = css({
  color: "#EB4A4A",
})

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "experience"];
      
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
  
    // ejecutar al inicio para setear la sección correcta
    handleScroll();
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    
    const offset = 150; // altura del navbar + espacio extra
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
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
        {["hero", "projects", "experience"].map((section) => (
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
        <GithubIcon className={navLinkStyle} size={20} />
        <LinkedinIcon className={navLinkStyle} size={20} />
        <Button size="sm">Download CV</Button>
      </div>
    </div>
  )
}