import { css } from "../../../../../styled-system/css";

const styles = {
  card: css({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    cursor: "default",
    _hover: {
      "& [data-experience-fill]": {
        transform: "scaleY(1)",
      },
    },
  }),
  content: css({
    position: "relative",
    isolation: "isolate",
    overflow: "hidden",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    px: "18px",
    pt: "16px",
    pb: "0",
  }),
  fill: css({
    position: "absolute",
    inset: 0,
    zIndex: -1,
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    transform: "scaleY(0)",
    transformOrigin: "bottom",
    transition: "transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)",
    pointerEvents: "none",
  }),
  topRow: css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
    "tabletDown": {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "10px",
    },
  }),
  company: css({
    fontSize: "28px",
    fontWeight: "500",
    "tablet-lgDown": {
      fontSize: "24px",
    },
    "tabletDown": {
      fontSize: "20px",
    },
  }),
  title: css({
    fontSize: "18px",
    fontWeight: "300",
    color: "primary",
    "tabletDown": {
      fontSize: "16px",
    },
  }),
  dates: css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "5px",
    "tabletDown": {
      width: "100%",
    },
  }),
  dateText: css({
    fontSize: "18px",
    fontWeight: "400",
    color: "secondary",
    whiteSpace: "nowrap",
    "tabletDown": {
      fontSize: "15px",
    },
  }),
  dateLine: css({
    flex: 1,
    bg: "secondary",
    minW: "20px",
    maxW: "34px",
    height: "1px",
  }),
  description: css({
    mt: 5,
    mb: "22px",
    fontWeight: "400",
    color: "secondary",
    fontSize: "16px",
    lineHeight: "1.6",
    "tabletDown": {
      mb: "16px",
      lineHeight: "1.5",
    },
  }),
  bottomLineWrapper: css({
    mt: "auto",
    px: "18px",
  }),
  bottomLine: css({
    bg: "secondary",
    height: "1px",
  }),
};

export default styles;
