import { style } from "@vanilla-extract/css";
import TransformImage from "../../../assets/desktop/image-transform.jpg";
import StandOutImage from "../../../assets/desktop/image-stand-out.jpg";
import GraphicDesignImage from "../../../assets/desktop/image-graphic-design.jpg";
import PhotographyImage from "../../../assets/desktop/image-photography.jpg";
import { color } from "../../../utils/color.css";

const section = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  boxSizing: "border-box",
});

const flexBox = style({
  display: "flex",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  justifyContent: "space-between",
});

const descBox = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  height: "100%",
  gap: "52px",
  margin: "158px",
  maxWidth: "50%",
  textAlign: "left",
  flex: 1,
});

const descTitle = style({
  fontFamily: "Fraunces",
  fontWeight: 700,
  fontSize: "40px",
  lineHeight: "49px",
  letterSpacing: "0.02em",
  margin: 0,
  color: color.veryDarkDesaturatedBlue,
});

const descText = style({
  fontFamily: "Barlow",
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "30px",
  letterSpacing: "-0.01em",
  margin: "32px 0 48px",
  width: "100%",
  whiteSpace: "pre-wrap",
  textAlign: "left",
  color: color.darkGrayishBlue,
});

const learnMoreText = style({
  fontFamily: "Fraunces",
  fontWeight: 700,
  fontSize: "15px",
  lineHeight: "18px",
  letterSpacing: "0.09em",
});

const bottomBlockBox = style([
  descBox,
  style({
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: "60px",
    gap: "28px",
  }),
]);

const bottomBlockTitle = style({
  fontFamily: "Fraunces",
  fontWeight: 700,
  fontSize: "28px",
  lineHeight: "35px",
  letterSpacing: "0.02em",
  textAlign: "center",
  margin: 0,
});

const bottomBlockText = style({
  fontFamily: "Barlow",
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "26px",
  letterSpacing: "-0.06em",
  textAlign: "center",
  margin: 0,
});

const graphicDesignTitle = style([
  bottomBlockTitle,
  style({ color: color.darkDesaturatedCyan }),
]);

const graphicDesignText = style([
  bottomBlockText,
  style({ color: color.darkDesaturatedCyan }),
]);

const photographyTitle = style([
  bottomBlockTitle,
  style({ color: color.darkBlue }),
]);

const photographyText = style([
  bottomBlockText,
  style({ color: color.darkBlue }),
]);

const image = style({
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  aspectRatio: "1.2 / 1",
  boxSizing: "border-box",
  maxWidth: "720px",
  flex: 1,
});

const transformImage = style([
  image,
  style({
    backgroundImage: `url(${TransformImage})`,
  }),
]);

const standOutImage = style([
  image,
  style({
    backgroundImage: `url(${StandOutImage})`,
  }),
]);

const graphicDesignImage = style([
  image,
  style({
    backgroundImage: `url(${GraphicDesignImage})`,
  }),
]);

const photographyImage = style([
  image,
  style({
    backgroundImage: `url(${PhotographyImage})`,
  }),
]);

export const descriptionSectionStyle = Object.assign(
  {},
  {
    section,
    flexBox,
    descBox,
    descTitle,
    descText,
    learnMoreText,
    transformImage,
    standOutImage,
    graphicDesignImage,
    photographyImage,
    bottomBlockBox,
    graphicDesignTitle,
    graphicDesignText,
    photographyTitle,
    photographyText,
  }
);
