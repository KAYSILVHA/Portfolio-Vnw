import React from "react";
import {
  Paragraph,
  ServicesContainer,
  Text,
  Title,
  CardsContainer,
  CardContainerOne,
  BigCard,
  LittleCard,
  ContainerText,
  ParagraphCard
} from "./ServicesStyled";
import UxUi from "../../../../assets/images/uxUi.jpg"
import Data from "../../../../assets/images/data.jpg"
import Front from "../../../../assets/images/front.jpg"
import Back from "../../../../assets/images/back.jpg"

export default function Services() {
  return (
    <ServicesContainer id="services">
      <div>
        <Paragraph>Services</Paragraph>
        <Title>What I Can DO</Title>
      </div>
      <ContainerText>
        <Text>
          Versatile professional with experience in backend and frontend, specialized in API development, interface design (UX/UI), and basic knowledge in data analytics. My comprehensive and efficient approach allows me to address challenges at all layers of an application. I'm excited to contribute to projects that require a complete, user-oriented vision.
        </Text>
      </ContainerText>
      <CardsContainer>
        <CardContainerOne>
          <LittleCard backgroundImage={UxUi}><ParagraphCard>UX/UI</ParagraphCard></LittleCard>
          <LittleCard backgroundImage={Data}><ParagraphCard>DATA ANALYTICS</ParagraphCard></LittleCard>
        </CardContainerOne>
        <BigCard backgroundImage={Front}><ParagraphCard>FRONT-END</ParagraphCard></BigCard>
        <BigCard backgroundImage={Back}><ParagraphCard>BACK-END</ParagraphCard></BigCard>
      </CardsContainer>
    </ServicesContainer>
  );
}
