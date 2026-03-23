import { css } from "../../../../../styled-system/css";

const styles = {
  content: css({
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    "tabletDown": {
      gap: "20px",
    },
  }),
  title: css({
    fontSize: "24px",
    fontWeight: "500",
    lineHeight: "1.25",
    "tablet-lgDown": {
      fontSize: "22px",
    },
    "tabletDown": {
      fontSize: "20px",
    },
  }),
  description: css({
    color: "secondary",
    fontSize: "18px",
    lineHeight: "1.65",
    "tablet-lgDown": {
      fontSize: "17px",
    },
    "tabletDown": {
      fontSize: "16px",
      lineHeight: "1.55",
    },
  }),
  footer: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
    mt: "15px",
    "tabletDown": {
      flexDirection: "column",
      alignItems: "flex-start",
      mt: "8px",
    },
  }),
  techList: css({
    display: "flex",
    flexWrap: "wrap",
    gap: "5px",
    "tabletDown": {
      width: "100%",
    },
  }),
  actions: css({
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    "tabletDown": {
      width: "100%",
    },
  }),
};

export default styles;
