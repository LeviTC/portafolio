import { css } from "../../../../../styled-system/css";

const styles = {
  root: css({
    position: "relative",
    display: "inline-flex",
    width: "fit-content",
    maxWidth: "100%",
  }),
  trigger: css({
    all: "unset",
    cursor: "pointer",
    transition: "color 0.3s ease",
    _hover: { color: "primary" },
  }),
  menu: (placement: "bottom" | "top" = "bottom") =>
    css({
      position: "absolute",
      ...(placement === "top"
        ? { bottom: "calc(100% + 10px)", top: "auto" }
        : { top: "calc(100% + 10px)", bottom: "auto" }),
      left: 0,
      zIndex: 40,
      minWidth: "180px",
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      padding: "6px",
      backgroundColor: "rgba(17, 17, 17, 0.95)",
      border: "1px solid rgba(255, 255, 255, 0.12)",
      borderRadius: "10px",
      backdropFilter: "blur(10px)",
      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.45)",
    }),
  menuItem: css({
    all: "unset",
    boxSizing: "border-box",
    width: "100%",
    cursor: "pointer",
    borderRadius: "7px",
    padding: "10px 12px",
    fontSize: "14px",
    color: "white",
    transition: "background-color 0.2s ease, color 0.2s ease",
    _hover: {
      backgroundColor: "rgba(255, 255, 255, 0.06)",
      color: "primary",
    },
  }),
};

export default styles;
