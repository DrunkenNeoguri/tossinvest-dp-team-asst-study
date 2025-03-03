import { style } from "@vanilla-extract/css";
import { color } from "../../../utils/color.css";

const headerStyle = style({
  background: "transparent",
  display: "flex",
  width: "100%",
  padding: "48px 32px",
  justifyContent: "space-between",
  alignItems: "center",
  boxSizing: "border-box",
  position: "absolute",
  zIndex: 10,
  top: 0,
});

const navStyle = style({
  display: "flex",
  width: "100%",
  fontFamily: "barlow",
  fontWeight: 600,
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "32px",
  boxSizing: "border-box",
  color: color.white,
});

export const NavBarStyle = Object.assign({}, { headerStyle, navStyle });
