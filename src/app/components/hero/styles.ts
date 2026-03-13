import { css } from "../../../../styled-system/css";

const styles = {
  section: css({
    width: "75%",
    maxWidth: "1500px",
    display: "flex",
    margin: "auto",
    mt: "200px",
    gap: "30px",

    "tablet-lgDown": {
      flexDirection: "column",
      mt: "150px",
      gap: "0px",
    },
    "tabletDown":{ 
      mt: "100px",
    }
  }),
  br: css({
    "tabletToTablet-lg":{ 
      display: "none"
    }
  }),
  leftCol: css({
    display: "flex",
    flexDirection: "column",
    width: "40%",

    "tablet-lgDown": {
      width: "100%",
    },
  }),
  name: css({
    fontSize: "50px",
    fontWeight: "500",
    textAlign: "start",
    
    
    "tablet-lgDown": {
      fontSize: "28px",
    },
    "tablet-lgOnly": {
      fontSize: "40px"
    },
  }),
  role: css({
    fontSize: "20px",
    fontWeight: "300",
    textAlign: "start",
    mt: 1,
    color: "primary",

    "tablet-lgOnly": {
      fontSize: "24px"
    },
  }),
  rightCol: css({
    width: "60%",
    mt: "10px",
    color: "secondary",
    // lineHeight: "1.8",

    "tablet-lgDown": {
      width: "100%",
      display: "flex",
      flexDirection: "column"
    },
  }),
};

export default styles;