import React from "react";
import { FooterSyled } from './FooterStyled';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSyled>
      <p>&copy; {currentYear} KaySilvha | Todos os direitos reservados.</p>
    </FooterSyled>
  );
}
