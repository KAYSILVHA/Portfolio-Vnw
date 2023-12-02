import React from "react";
import { ContactContainer, Paragraph, Title, Text, GoTop, Link, SocialLinks, Links, ContainerSocial, Img } from "./ContactsStyled";

import Face from "../../../../assets/images/face.png"
import Insta from "../../../../assets/images/insta.png"
import Linkedin from "../../../../assets/images/linkedin.png"
import Tel from "../../../../assets/images/tel.png"
import Mail from "../../../../assets/images/mail.png"


export default function Contacts() {
  return (
    <ContactContainer id="contacts">
      <div>
        <Paragraph>CONTACT ME</Paragraph>
        <Title>Whays To Contact Me</Title>
      </div>
      <Text>
        You can find out more about me and my services by contacting me through one of these links.
        I am available!
      </Text>
      <ContainerSocial>
        <Links>
          <Img src={Mail} alt="Email" />
          <SocialLinks href="mailto:kaysilvha@gmail.com" rel="noopener noreferrer">kaysilvha@gmail.com</SocialLinks>
        </Links>
        <Links>
          <Img src={Tel} alt="CellPhone" />
          <SocialLinks href="tel:+55991270271" target="_blank" rel="noopener noreferrer">+55 44 9 9127-0271</SocialLinks>
        </Links>
        <Links>
          <Img src={Linkedin} alt="Linkedin" />
          <SocialLinks href="https://www.linkedin.com/in/kayrasilvacardoso/" target="_blank" rel="noopener noreferrer">linkedin.com/
          </SocialLinks>
        </Links>
        <Links>
          <Img src={Insta} alt="Instagram" />
          <SocialLinks href="https://www.instagram.com/dev_kay.0/" target="_blank" rel="noopener noreferrer">@kaysilvha</SocialLinks>
        </Links>
        <Links>
          <Img src={Face} alt="Facebook" />
          <SocialLinks href="https://www.facebook.com/profile.php?id=100088539817707" target="_blank" rel="noopener noreferrer">@kayra</SocialLinks>
        </Links>
      </ContainerSocial>
      <GoTop><Link href="#banner">⮝</Link></GoTop>
    </ContactContainer>
  );
}
