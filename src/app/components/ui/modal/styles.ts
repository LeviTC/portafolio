import { css } from "../../../../../styled-system/css";

const styles = {
  backdrop: css({
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(12px)",
    zIndex: 200,
  }),
  container: css({
    position: "fixed",
    top: "50%",
    left: "50%",
    backgroundColor: "#000",
    border: "1px solid #333",
    borderRadius: "8px",
    padding: "40px",
    zIndex: 201,
    maxWidth: "900px",
    width: "90%",
    maxHeight: "85vh",
    overflowY: "auto",
    "tabletDown": {
      width: "94%",
      padding: "28px 18px 20px 18px",
      maxHeight: "88vh",
    },
  }),
  closeButton: css({
    position: "absolute",
    top: "16px",
    right: "20px",
    background: "none",
    border: "none",
    color: "#aaaaaa",
    fontSize: "24px",
    cursor: "pointer",
    transition: "color 0.2s ease",
    _hover: { color: "white" },
    "tabletDown": {
      top: "10px",
      right: "12px",
      fontSize: "22px",
    },
  }),
};

export default styles;
