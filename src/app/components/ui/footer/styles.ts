import contactStyles from "../contact/styles"
import { css, cx } from "../../../../../styled-system/css"

export function sameTablet<T extends Record<string, unknown>>(style: T) {
  return {
    "tablet-lgDown": style,
    "tablet-lgOnly": style,
  } as const
}

const typeSm = { fontSize: "16px" }
const headingSm = { fontSize: "20px" }

export const copyableValueClass = cx(
  contactStyles.contactItem,
  css({
    fontSize: "18px",
    fontWeight: "400",
    color: "secondary",
    wordBreak: "break-word",
    overflowWrap: "anywhere",
    "tablet-lgDown": typeSm,
  })
)

export const headingClass = css({
  fontSize: "22px",
  fontWeight: "500",
  color: "white",
  "tablet-lgDown": headingSm,
})

export const labelClass = css({
  fontSize: "18px",
  fontWeight: "400",
  color: "white",
  mt: "20px",
  "tablet-lgDown": typeSm,
})

export const navLinkClass = css({
  fontSize: "18px",
  fontWeight: "400",
  color: "secondary",
  mt: "20px",
  cursor: "pointer",
  transition: "color 0.3s ease",
  _hover: { color: "primary" },
  "tablet-lgDown": typeSm,
  "mobile-xsToTablet-sm": {
    textAlign: "left",
    width: "100%",
  },
})

const ctaCellTablet = {
  borderRight: "none",
  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
  pr: 0,
  py: "32px",
  pb: "28px",
}

const columnStack = {
  flexDirection: "column" as const,
  alignItems: "stretch",
  gap: "20px",
}

const iconRowCenter = {
  justifyContent: "center",
  gap: "28px",
}

const btnFull = {
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
}

const contactColChild = {
  width: "auto",
  flex: "0 1 auto",
}

const contactMenuOuterTablet = {
  width: "100%",
  margin: "0",
  my: "0",
  py: "32px",
}

export const styles = {
  footer: css({
    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
    ...sameTablet({ borderTop: "none" }),
  }),

  grid: css({
    width: "75%",
    maxWidth: "1500px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)",
    alignItems: "stretch",
    ...sameTablet({
      gridTemplateColumns: "1fr",
      pb: "40px",
      boxSizing: "border-box",
    }),
  }),

  ctaCell: css({
    borderRight: "1px solid rgba(255, 255, 255, 0.2)",
    py: "50px",
    pr: "48px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minWidth: 0,
    ...sameTablet(ctaCellTablet),
    "mobile-xsToTablet-sm": {
      borderBottom: "none",
      pb: "24px",
    },
  }),

  ctaInner: css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
    minWidth: 0,
    ...sameTablet(columnStack),
  }),

  resumeBtn: css({
    flexShrink: 0,
    textAlign: "center",
    whiteSpace: "normal",
    ...sameTablet(btnFull),
  }),

  iconRow: css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "20px",
    ...sameTablet(iconRowCenter),
  }),

  socialIcon: css({
    cursor: "pointer",
    color: "white",
    transition: "color 0.3s ease",
    flexShrink: 0,
    _hover: { color: "primary" },
  }),

  contactMenuOuter: css({
    width: "80%",
    maxWidth: "100%",
    margin: "auto",
    my: "50px",
    minWidth: 0,
    display: "block",
    ...sameTablet(contactMenuOuterTablet),
    "mobile-xsToTablet-sm": {
      py: "28px",
    },
  }),

  contactMenuInner: css({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "200px",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "fit-content",
    maxWidth: "100%",
    margin: "0 auto",
    boxSizing: "border-box",
    ...sameTablet({ gap: "48px" }),
    "mobile-xsToTablet-sm": {
      flexDirection: "column",
      gap: "32px",
      alignItems: "stretch",
      justifyContent: "flex-start",
      textAlign: "left",
      width: "100%",
      margin: "0",
    },
  }),

  flankColumn: css({
    minWidth: 0,
    ...sameTablet(contactColChild),
    "mobile-xsToTablet-sm": {
      width: "100%",
    },
  }),
}
