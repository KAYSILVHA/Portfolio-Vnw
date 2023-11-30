import React from "react";
import { AboutContainer, Title, AboutText, Paragraph, Text, CardContainer, Card } from "./AboutStyled";

export default function About() {
  return (
    <AboutContainer>
      <AboutText>
        <Paragraph>ABOUT</Paragraph>
        <Title>What About Me</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ut cumque sint eum asperiores impedit. Soluta esse assumenda nesciunt recusandae ad deleniti, aspernatur minima excepturi provident quibusdam, explicabo saepe! In nobis placeat voluptatum unde accusamus adipisci incidunt amet sit, mollitia tempora ipsum corporis ducimus eos fugiat repellat totam, eaque, praesentium ab perspiciatis ratione molestias at non. Ex iure mollitia nihil. Dolorum atque, voluptatum explicabo facere nemo suscipit, corporis quasi laboriosam quidem consectetur esse quo ipsa sunt aliquid corrupti, maxime possimus dolores est tempore dignissimos? Incidunt cum temporibus delectus deserunt quod quos ipsa quaerat cupiditate dolorum, inventore deleniti aut nesciunt aspernatur?
        </Text>
      </AboutText>
      <CardContainer>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardContainer>
    </AboutContainer>
  );
}
