import { style } from "@vanilla-extract/css";
import EmilyProfileImage from "../../../assets/image-emily.jpg";
import ThomasProfileImage from "../../../assets/image-thomas.jpg";
import JennieProfileImage from "../../../assets/image-jennie.jpg";

const section = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  boxSizing: "border-box",
  gap: "80px",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
});

const title = style({
  fontFamily: "Fraunces",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "25px",
  letterSpacing: "0.28em",
});

const flexBox = style({
  display: "flex",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  gap: "46px",
});

const feedbackBox = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  flex: 1,
  textAlign: "center",
});

const profileImage = style({
  width: "72px",
  height: "72px",
  borderRadius: "50%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
});

const feedbackText = style({
  fontFamily: "Barlow",
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "32px",
  letterSpacing: "-0.01em",
  margin: "56px 0",
  whiteSpace: "pre-wrap",
  textAlign: "center",
});

const feedbackName = style({
  fontFamily: "Fraunces",
  fontWeight: 700,
  fontSize: "19px",
  lineHeight: "23px",
  margin: "12px 0",
});

const feebackJob = style({
  fontFamily: "Barlow",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "17px",
  letterSpacing: "-0.01em",
});

const emilyProfileImage = style([
  profileImage,
  style({
    backgroundImage: `url(${EmilyProfileImage})`,
  }),
]);

const thomasProfileImage = style([
  profileImage,
  style({
    backgroundImage: `url(${ThomasProfileImage})`,
  }),
]);

const jennieProfileImage = style([
  profileImage,
  style({
    backgroundImage: `url(${JennieProfileImage})`,
  }),
]);

export const feedbackSectionStyle = Object.assign(
  {},
  {
    section,
    flexBox,
    title,
    feedbackBox,
    profileImage,
    feedbackText,
    feedbackName,
    feebackJob,
    emilyProfileImage,
    thomasProfileImage,
    jennieProfileImage,
  }
);
