import { style } from "@vanilla-extract/css";
import Background from "../../../assets/desktop/image-header.jpg";

const sectionStyle = style({
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  aspectRatio: "1.8 / 1",
  boxSizing: "border-box",
});

const headStyle = style({
  fontFamily: "fraunces",
  fontWeight: 700,
  fontSize: "56px",
  letterSpacing: "0.19em",
  color: "white",
  margin: 0,
});

const titleBoxStyle = style({
  background: "transparent",
  display: "flex",
  width: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "104px",
  boxSizing: "border-box",
  position: "absolute",
  zIndex: 10,
  top: 240,
  margin: "0 auto",
});

export const mainSectionStyle = Object.assign(
  {},
  { sectionStyle, headStyle, titleBoxStyle }
);
