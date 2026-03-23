import Image from "next/image";
import { css } from "../../../../styled-system/css";
import { Project } from "@/types/project";
import Badge from "./badge";


export default function ProjectCard({
  title,
  shortDescription,
  imagePath,
  technologies,
}: Project) {
  return (
    <div
    className={css({
      position: "relative",
      padding: "16px",
      py: "30px",
      // height: "350px",
      width: "100%",
      maxW: "360px",
      display: "flex",
      flexDirection: "column", 
      justifyContent: "space-between",
      gap: "16px",
      transition: "transform 0.4s ease",
      mx: "auto",
      "tablet-lgDown": {
        maxW: "320px",
        py: "24px",
        padding: "14px",
      },
      "tabletDown": {
        maxW: "300px",
        py: "20px",
        padding: "12px",
      },
  
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
            "tablet-lgDown": {
              height: "180px",
            },
            "tabletDown": {
              height: "160px",
            },
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
        <h4 className={css({
          fontSize: "20px",
          fontWeight: "500",
          "tablet-lgDown": {
            fontSize: "18px",
          },
          "tabletDown": {
            fontSize: "17px",
          },
        })}>
          {title}
        </h4>

        <p
          className={css({
            color: "secondary",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            boxOrient: "vertical",
            overflow: "hidden",
          })}
        >
          {shortDescription}
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
      </div>
    </div>
  );
}