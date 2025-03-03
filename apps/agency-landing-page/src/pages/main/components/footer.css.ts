import { style } from "@vanilla-extract/css";
import { color } from "../../../utils/color.css";

const footer = style({
  background: color.moderateModerateCyan,
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "80px",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  padding: "72px 0",
  boxSizing: "border-box",
});

const navBox = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "56px",
  boxSizing: "border-box",
});

const navText = style({
  fontFamily: "Barlow",
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "22px",
  letterSpacing: "-0.01em",
  color: color.darkModerateCyan,
});

const buttonBox = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "28px",
});

const navbutton = style({
  width: "28px",
  height: "28px",
  background: "transparent",
  outline: "none",
  border: "none",
  cursor: "pointer",
});

export const footerStyle = Object.assign(
  {},
  {
    footer,
    navBox,
    navText,
    buttonBox,
    navbutton,
  }
);
