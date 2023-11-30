import React from "react";
import { BannerContainer, NameLogo, NameSection, Line, Name, Description, ButtonContact, ApresentationContainer, Paragraph, Occupation, Apresentation, PhotoContainer } from './BannerStyled';

export default function Banner() {
  return (
    <BannerContainer>
      <NameSection>
        <NameLogo>
          <Name>Kayra Silva.</Name>
          <Line></Line>
          <Description>
            <p>Full Stack Developer | UX/UI Designer</p>
          </Description>
        </NameLogo>
        <ButtonContact>
          <p>CONTACT ME</p>
        </ButtonContact>
      </NameSection>
      <PhotoContainer>
        <img src="" alt="" />
      </PhotoContainer>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non quas aspernatur quisquam aperiam minus, fuga dolor odit quaerat ex repudiandae voluptates. Cupiditate itaque fuga commodi
        </Apresentation>
      </ApresentationContainer>
    </BannerContainer>
  );
}
