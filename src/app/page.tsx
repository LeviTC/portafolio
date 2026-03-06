import { css } from "../../styled-system/css";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Navbar from "./components/ui/Navbar";

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
      })}
    >
      <Navbar />

      <Hero />

      <Projects />
      {/* <Experience /> */}

    </main>
  );
}
