import { style } from "@vanilla-extract/css";
import MilkBottlesImage from "../../../assets/desktop/image-gallery-milkbottles.jpg";
import OrangeImage from "../../../assets/desktop/image-gallery-orange.jpg";
import ConeImage from "../../../assets/desktop/image-gallery-cone.jpg";
import SugarCubesImage from "../../../assets/desktop/image-gallery-sugarcubes.jpg";

const section = style({
  display: "flex",
  width: "100%",
  boxSizing: "border-box",
});

const image = style({
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  aspectRatio: "0.8 / 1",
  boxSizing: "border-box",
  flex: 1,
});

const milkbottlesImage = style([
  image,
  style({
    backgroundImage: `url(${MilkBottlesImage})`,
  }),
]);

const orangeImage = style([
  image,
  style({
    backgroundImage: `url(${OrangeImage})`,
  }),
]);

const coneImage = style([
  image,
  style({
    backgroundImage: `url(${ConeImage})`,
  }),
]);

const sugarCubesImage = style([
  image,
  style({
    backgroundImage: `url(${SugarCubesImage})`,
  }),
]);

export const imageSectionStyle = Object.assign(
  {},
  {
    section,
    milkbottlesImage,
    orangeImage,
    coneImage,
    sugarCubesImage,
  }
);
