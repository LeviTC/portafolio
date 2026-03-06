import { css } from "../../../../../styled-system/css";

interface BadgeProps {
  text: string;
}
export default function Badge({text}: BadgeProps) {

  return (
    <div
      className={css({
        backgroundColor: "tertiary",
        color: "white",
        fontSize: "14px",
        fontWeight: "300",
        padding: "5px 20px",
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        width: "fit-content",
      })}
    >
      {text}
    </div>
  )
}