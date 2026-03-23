import { css } from "../../../../../styled-system/css";

const styles = {
  grid: css({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "30px",
    width: "100%",
    "@media (min-width: 1280px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "mobile-xsToTablet-sm": {
      gridTemplateColumns: "1fr",
    },
  }),
  buttonWrapper: css({
    display: "flex",
    justifyContent: "center",
    mt: "30px",
  }),
  button: css({
    width: "200px",
  }),
};

export default styles;
