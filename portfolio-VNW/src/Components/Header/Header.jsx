import React from "react";
import Logo from "../../assets/images/logo.png"
import { HeaderSyled, LogoImage, Links } from "./HeaderStyled";
export default function Header() {
  return (
    <HeaderSyled>
      <LogoImage src={Logo} alt="" />
      <nav>
      <Links>
        <li>about</li>
        <li>projects</li>
        <li>contacts</li>
      </Links>
    </nav>
    </HeaderSyled>
  );
}
