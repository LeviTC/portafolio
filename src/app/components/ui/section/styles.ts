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
  }),
  title: css({
    fontSize: "40px",
    mb: "80px",

    "tablet-lgDown": {
      fontSize: "30px"
    },
  }),
};

export default styles;