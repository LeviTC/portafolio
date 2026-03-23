import { css } from "../../../../../styled-system/css";

const styles = {
  section: css({
    width: "75%",
    maxWidth: "1500px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
  }),
  titleContainer: css({
    display: "flex",
    justifyContent: "center",
    "tablet-lgDown": {
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      mb: "34px",
    },
  }),
  title: css({
    fontSize: "40px",
    mb: "80px",

    "tablet-lgDown": {
      fontSize: "30px",
      textAlign: "center",
      lineHeight: "1.25",
      mb: "18px",
    },
  }),
};

export default styles;