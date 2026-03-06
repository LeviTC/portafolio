import Image from "next/image";
import { css } from "../../../../styled-system/css";
import { Project } from "@/types/project";
import Button from "./Button";
import Badge from "./badge";


export default function ProjectCard({
  title,
  description,
  imagePath,
  technologies,
  bullets,
  urlSite,
}: Project) {
  return (
    <div
    className={css({
      position: "relative",
      padding: "16px",
      py: "30px",
      // height: "350px",
      width: "360px",
      display: "flex",
      flexDirection: "column", 
      justifyContent: "space-between",
      gap: "16px",
      transition: "transform 0.4s ease",
  
      // esquina superior izquierda
      _before: {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "250px",
        height: "80px",
        borderTopWidth: "1px",
        borderLeftWidth: "1px",
        borderStyle: "solid",
        borderColor: "#555555",
      },
  
      // esquina inferior derecha
      _after: {
        content: '""',
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "250px",
        height: "80px",
        borderBottomWidth: "1px",
        borderRightWidth: "1px",
        borderStyle: "solid",
        borderColor: "#555555",
      },
      _hover: {
        transform: "scale(0.97)",
        transition: "transform 0.3s ease",
        cursor: "pointer",
      },
    })}
    >
      {imagePath && (
        <div
          className={css({
            position: "relative",
            // width: "20%",
            height: "200px",
            overflow: "hidden",
            borderRadius: "3px",
          })}
        >
          <Image
            src={imagePath}
            alt={title || "Project image"}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        })}
      >
        <h4 className={css({ fontSize: "20px", fontWeight: "500", })}>
          {title}
        </h4>

        <p className={css({ color: "secondary", })} >
          {description}
        </p>
        
        {technologies?.length && (
          <div
            className={css({
              display: "flex",
              flexWrap: "wrap",
              gap: "5px",
              mt: "15px",
            })}
          >
            {technologies.map(tech => (
              <Badge key={tech} text={tech} />
            ))}
          </div>
        )}
        {/* {urlSite && (
            <Button 
              variant="outline" 
              size="sm"
              href={urlSite}
            >
              Visit
            </Button>
          )} */}

        {/* {bullets?.length && (
          <ul className={css({ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" })}>
            {bullets.map((item, index) => (
              <li key={index} className={css({ listStyleType: "disc", color: "secondary" })}>
                {item}
              </li>
            ))}
          </ul>
        )} */}
      </div>
    </div>
  );
}