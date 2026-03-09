import { css } from "../../../../../styled-system/css";

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
}

export default function Section({children, title, id}: SectionProps) {

  return (
    <section
      id={id || ""}
      className={css({
        width: "75%",
        maxWidth: "1500px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
      })}
    >

      <div className={css({display: "flex", justifyContent: "center"})}>
        <h3 className={css({ fontSize: "40px", mb: "80px" })} >
          {title}
        </h3>
      </div>

      {children}
    </section>
  )
}