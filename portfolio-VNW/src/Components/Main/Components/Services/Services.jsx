import React from "react";
import { Paragraph, ServicesContainer, Text, Title, CardsContainer, CardContainerOne, BigCard, LittleCard } from "./ServicesStyled";


export default function Services() {
  return (
    <ServicesContainer id="services">
      <div>
        <Paragraph>Services</Paragraph>
        <Title>What I Can DO</Title>
      </div>
      <div>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum qui cupiditate deserunt quidem ut expedita, sunt fugiat sit quia, minus ipsa, consequatur doloremque</Text>
      </div>
      <CardsContainer>
        <CardContainerOne>
          <LittleCard>UX/UI</LittleCard>
          <LittleCard>DATA ANALYTICS</LittleCard>
        </CardContainerOne>
        <BigCard>FRONT-END</BigCard>
        <BigCard>BACK-END</BigCard>
      </CardsContainer>
    </ServicesContainer>
  );
}
