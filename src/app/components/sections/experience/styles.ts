import { css } from "../../../../../styled-system/css";

const styles = {
  grid: css({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "40px",
    gridAutoRows: "1fr",
    alignItems: "stretch",
    "tablet-lgDown": {
      gridTemplateColumns: "1fr",
      gap: "20px",
      gridAutoRows: "auto",
    },
  }),
};

export default styles;
