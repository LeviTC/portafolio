import { css } from "../../styled-system/css";
import Experience from "./components/sections/experience";
import Hero from "./components/sections/hero";
import Projects from "./components/sections/projects/index";
import Navbar from "./components/ui/navbar";

export default function Page() {
  return (
    <main
      className={css({
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#000000",
        color: "white",
        mb: "50px",
        gap: "200px",
        // overflowX: "hidden",
        // width: "100%",
        
        "tablet-lgDown": {
          gap: "150px"
        }
      })}
    >
      <Navbar />

      <Hero />

      <Experience />

      <Projects />
    </main>
  );
}
