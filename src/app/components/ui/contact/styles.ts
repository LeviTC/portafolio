import { css } from "../../../../../styled-system/css";

const styles = {
  container: css({
    display: "flex",
    mt: "50px",
    gap: "100px",
    color: "white",

    "tablet-lgDown": {
      flexDirection: "column",
      mt: "0px",
      mb: "10px",
      gap: "10px",

    },
  }),
  contactItem: css({
    cursor: "pointer",
    transition: "color 0.3s ease",
    position: "relative",
    _hover: { color: "primary" },
  }),
};

export default styles;