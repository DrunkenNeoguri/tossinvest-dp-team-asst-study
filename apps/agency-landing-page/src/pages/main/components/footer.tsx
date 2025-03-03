import {
  FacebookIcon,
  InstagramIcon,
  LogoCyan,
  PinterestIcon,
  TwitterIcon,
} from "../../../assets/icons";
import { footerStyle } from "./footer.css";

export function Footer() {
  return (
    <footer className={footerStyle.footer}>
      <LogoCyan />
      <div className={footerStyle.navBox}>
        <a className={footerStyle.navText}>Services</a>
        <a className={footerStyle.navText}>Projects</a>
        <a className={footerStyle.navText}>Contact</a>
      </div>
      <div className={footerStyle.buttonBox}>
        <a className={footerStyle.navbutton}>
          <FacebookIcon />
        </a>
        <a className={footerStyle.navbutton}>
          <InstagramIcon />
        </a>
        <a className={footerStyle.navbutton}>
          <TwitterIcon />
        </a>
        <a className={footerStyle.navbutton}>
          <PinterestIcon />
        </a>
      </div>

      <div>
        <div style={{ fontSize: "11px", textAlign: "center" }}>
          Challenge by
          <a
            style={{ color: "hsl(228, 45%, 44%)" }}
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a style={{ color: "hsl(228, 45%, 44%)" }} href="#">
            @DrunkenNeoguri
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
