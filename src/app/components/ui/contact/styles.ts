import { css } from "../../../../../styled-system/css";

const styles = {
  container: css({
    display: "flex",
    mt: "50px",
    gap: "100px",
    color: "white",

    tabletDown: {
      flexDirection: "column",
    },
    "tablet-lgDown": {
      mt: "20px",
      gap: "10px",
      justifyContent: "space-between"
    },
    "tablet-lgOnly": {
      fontSize: "14px"
    }
  }),
  contactItem: css({
    cursor: "pointer",
    transition: "color 0.3s ease",
    position: "relative",
    _hover: { color: "primary" },
  }),
};

export default styles;