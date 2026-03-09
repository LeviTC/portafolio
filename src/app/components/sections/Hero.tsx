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
              fontSize: "24px",
              fontWeight: "300",
              textAlign: "start",
              mt: 1,
              color: "primary"
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
          color: "secondary",
          lineHeight: "1.8",
        })}
      >
        <p>
          Frontend developer with <b>4+</b> years of experience building e-commerce platforms, ERP systems, and warehouse mobile applications.
          <br></br>
          <br></br>
          I specialize in React, React Native, Next.js, and TypeScript, creating scalable interfaces and tools that help businesses manage inventory, orders, and operations more efficiently.
        </p>

        <Contact />

      </div>
    </section>
  );
}