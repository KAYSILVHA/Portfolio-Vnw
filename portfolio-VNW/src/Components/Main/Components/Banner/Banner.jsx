import React from "react";
import {
  BannerContainer,
  NameLogo,
  NameSection,
  Line,
  Name,
  Description,
  ButtonContact,
  ApresentationContainer,
  Paragraph,
  Occupation,
  Apresentation,
  Link,
  Button
} from './BannerStyled';

export default function Banner() {
  return (
    <BannerContainer id="banner">
      <NameSection>
        <NameLogo>
          <Name>Kayra Silva.</Name>
          <Line></Line>
          <Description>
            <p>Full Stack Developer | UX/UI Designer</p>
          </Description>
        </NameLogo>
        <ButtonContact>
          <Link href="#contacts">
            <p>CONTACT ME</p>
          </Link>
        </ButtonContact>
        <ButtonContact>
          <Link target="_blank" href="../../../../assets/Curriculo/curriculo-vnw.pdf" download="Curriculo.pdf">
            <Button>
              <p>DOWNLOAD CV</p>
            </Button>
          </Link>
        </ButtonContact>
      </NameSection>

      <ApresentationContainer>
        <div>
          <Paragraph>
            INTRODUCTION
          </Paragraph>
          <Occupation>
            UI/UX Designer, Full Stack Developer
          </Occupation>
        </div>
        <Apresentation>
          Fullstack developer with skills in client-side and server-side development. I have experience in languages ​​such as JavaScript, HTML and CSS, as well as popular frameworks and libraries. Additionally, specialist in user experience (UX) and user interface (UI) design, capable of creating complete and attractive digital solutions.
        </Apresentation>
      </ApresentationContainer>
    </BannerContainer>
  );
}
