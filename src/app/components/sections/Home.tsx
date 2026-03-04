import { css } from "../../../../styled-system/css";
import ProjectCard from "../ui/ProjectCard";


export default function Home() {
  
  return (
    <main
      className={css({
        minH: "screen",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#000000",
        color: "white",
      })}
    >
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          backgroundColor: "rgba(17, 17, 17, 0.6)",
          backdropFilter: "blur(10px)", 
          padding: "20px",
          borderRadius: "10px",
        })}
      >
        <div>About</div>
        <div>Projects</div>
        <div>Contact</div>

      </div>

      <section
        className={css({
          padding: "50px",
          width: "70%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          margin: "auto",
          gap: "30px"
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            width: "40%"
          })}
        >

          <div>
            <h1 className={css({
              fontSize: "44px",
              fontWeight: "500",
              textAlign: "start",
            })}>
              Erick Leví 
              <br />
              Tamaríz Cortés
            </h1>
            <h2 
              className={css({
                fontSize: "20px",
                fontWeight: "200",
                textAlign: "start",
                mt: 1,
                pl: 1
              })}
            >
              Software Developer.
            </h2>
          </div>
        </div>

        <div
          className={css({
            width: "60%",
            mt: "10px",
            color: "gray",
            lineHeight: "1.8"
          })}
        >
          <p>
            With 4+ years of experience building e-commerce, ERP, and warehouse mobile applications. I specialize in React, React Native, Next.js, and TypeScript, and I enjoy creating scalable and efficient user-focused solutions.
          </p>
        </div>
      </section>

      <div>
      <ProjectCard
        title="Blife ERP"
        description="With 4+ years of experience building e-commerce, ERP, and warehouse mobile applications. I specialize in React, React Native, Next.js, and TypeScript, and I enjoy creating scalable and efficient user-focused solutions."
      />
      </div>

    </main>
  );
}