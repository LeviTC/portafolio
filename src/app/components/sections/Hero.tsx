import { css } from "../../../../styled-system/css";
import Contact from "../ui/contact";


export default function Hero() {
  
  return (
    <section
      id="hero"
      className={css({
        width: "75%",
        maxWidth: "1500px",
        display: "flex",
        margin: "auto",
        mt: "200px",
        gap: "30px",
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
            fontSize: "50px",
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
              fontWeight: "300",
              textAlign: "start",
              mt: 1,
              color: "#eb4a4a"
            })}
          >
            Software Developer
          </h2>
        </div>
      </div>

      <div
        className={css({
          width: "60%",
          mt: "10px",
          color: "#969696",
          lineHeight: "1.8",
        })}
      >
        <p>
          With 4+ years of experience building e-commerce, ERP, and warehouse mobile applications. I specialize in React, React Native, Next.js, and TypeScript, and I enjoy creating scalable and efficient user-focused solutions.
        </p>

        <Contact />

      </div>
    </section>
  );
}