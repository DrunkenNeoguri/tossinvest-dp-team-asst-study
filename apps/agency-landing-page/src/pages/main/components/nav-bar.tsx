// *MEMO: vanilla-extract로 구현
// https://vanilla-extract.style/documentation/styling/

import { Logo } from "../../../assets/icons";
import { NavBarStyle } from "./nav-bar.css";

export function NavBar() {
  return (
    <header className={NavBarStyle.headerStyle}>
      <div>
        <Logo />
      </div>
      <nav className={NavBarStyle.navStyle}>
        <a>About</a>
        <a>Services</a>
        <a>Projects</a>
        <a>Contact</a>
      </nav>
    </header>
  );
}
