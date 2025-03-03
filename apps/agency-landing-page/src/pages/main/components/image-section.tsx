import { imageSectionStyle } from "./image-section.css";

export function ImageSection() {
  return (
    <section className={imageSectionStyle.section}>
      <div className={imageSectionStyle.milkbottlesImage} />
      <div className={imageSectionStyle.orangeImage} />
      <div className={imageSectionStyle.coneImage} />
      <div className={imageSectionStyle.sugarCubesImage} />
    </section>
  );
}
