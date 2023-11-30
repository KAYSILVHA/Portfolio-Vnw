import React from "react";
import { ContactContainer, Paragraph, Title, Text, GoTop } from "./ContactsStyled";

export default function Contacts() {
  return (
    <ContactContainer>
      <div>
        <Paragraph>CONTACT ME</Paragraph>
        <Title>Whays To Contact Me</Title>
      </div>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum qui cupiditate deserunt quidem ut expedita, sunt fugiat sit quia, minus ipsa, consequatur doloremque</Text>
      <div>
        <div>
          <img src="" alt="" />
          <a href="mailto:kaysilvha@gmail.com" rel="noopener noreferrer">kaysilvha@gmail.com</a>
        </div>
        <div>
          <img src="" alt="" />
          <a href="tel:+55991270271" target="_blank" rel="noopener noreferrer">+55 44 9 9127-0271</a>
        </div>
        <div>
          <img src="" alt="" />
          <a href="https://www.linkedin.com/in/kayrasilvacardoso/" target="_blank" rel="noopener noreferrer">linkedin.com/
          </a>
        </div>
        <div>
          <img src="" alt="" />
          <a href="https://www.instagram.com/dev_kay.0/" target="_blank" rel="noopener noreferrer">@kaysilvha</a>
        </div>
        <div>
          <img src="" alt="" />
          <a href="https://www.facebook.com/profile.php?id=100088539817707" target="_blank" rel="noopener noreferrer">@kayra</a>
        </div>
      </div>
      <GoTop>⮝</GoTop>
    </ContactContainer>
  );
}
