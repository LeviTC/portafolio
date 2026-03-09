
import { IExperience } from "@/types/experience";
import { css } from "../../../../../styled-system/css";

export default function ExperienceCard({
  title,
  company,
  startDate,
  endDate,
  description,
}: IExperience) {

  return (
    <div
      className={css({
        width: "100%",
      })}
    >
      <div 
        className={css({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          
        })}
      >
        <div>
          <p className={css({fontSize: "28px", fontWeight: "500"})}>
            {company}
          </p>
          <p className={css({fontSize: "18px", fontWeight: "300", color: "primary"})}>
            {title}
          </p>
        </div>


        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "5px",
          })}
        >
          <p className={css({fontSize: "18px", fontWeight: "400", color: "secondary"})}>
            {startDate} 
          </p>

          <div 
            className={css({
              flex: 1,
              bg: "secondary",
              minW: "20px",
              maxW: "34px",
              height: "1px"
            })} 
          />
          <p className={css({fontSize: "18px", fontWeight: "400", color: "secondary"})}>
            {endDate}
          </p>
        </div>

      </div>

      <p className={css({ mt: 5, fontWeight: "400", color: "secondary"})}>
        {description}
      </p>

      <div 
        className={css({
          flex: 1,
          bg: "secondary",
          height: "1px",
          mt: "70px",
        })} 
      />
    </div>
  )
}