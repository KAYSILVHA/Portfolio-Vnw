import React from "react";
import { AboutContainer, Title, AboutText, Paragraph, Text, CardContainer, Card } from "./AboutStyled";
import Me from "../../../../assets/images/Me.jpeg"
import Family from "../../../../assets/images/family.jpeg"
import Formatura from "../../../../assets/images/formatura.jpeg"
import Cod from "../../../../assets/images/cod.jpeg"
export default function About() {
  return (
    <AboutContainer id="about">
      <AboutText>
        <Paragraph>ABOUT</Paragraph>
        <Title>What About Me</Title>
        <Text>
          I am driven by a constant passion for learning, studying and sharing knowledge. My journey is marked by the incessant desire to explore new frontiers, and I see interaction and teamwork as not just a preference, but a catalyst for success. I'm focused on improving my skills by immersing myself in new programming languages, and I'm committed to following the path that will lead to a successful career. With determination and enthusiasm, I am shaping my future, ready to overcome challenges and inspire others along the way.
        </Text>
      </AboutText>
      <CardContainer>
        <Card backgroundImage={Me}></Card>
        <Card backgroundImage={Family}></Card>
        <Card backgroundImage={Formatura}></Card>
        <Card backgroundImage={Cod}></Card>
      </CardContainer>
    </AboutContainer>
  );
}
