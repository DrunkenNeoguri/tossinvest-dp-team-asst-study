import { ArrowDownIcon } from "../../../assets/icons";
import { mainSectionStyle } from "./main-section.css";
import { NavBar } from "./nav-bar";

export function MainSection() {
  return (
    <section className={mainSectionStyle.sectionStyle}>
      <NavBar />
      <div className={mainSectionStyle.titleBoxStyle}>
        <h1 className={mainSectionStyle.headStyle}>WE ARE CREATIVES</h1>
        <ArrowDownIcon />
      </div>
    </section>
  );
}
