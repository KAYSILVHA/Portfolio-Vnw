import React from "react";
import Logo from "../../assets/images/logo.png"
import { HeaderSyled, LogoImage, Links, NavegationLinks } from "./HeaderStyled";
export default function Header() {
  return (
    <HeaderSyled>
      <LogoImage src={Logo} alt="" />
      <nav>
      <Links>
        <li><NavegationLinks href="#about">about</NavegationLinks></li>
        <li><NavegationLinks href="#services">services</NavegationLinks></li>
        <li><NavegationLinks href="#projects">projects</NavegationLinks></li>
        <li><NavegationLinks href="#contacts">contacts</NavegationLinks></li>
      </Links>
    </nav>
    </HeaderSyled>
  );
}
