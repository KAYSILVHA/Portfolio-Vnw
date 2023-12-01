import React, { useState } from 'react';
import {
  BigCard,
  CardContainerOne,
  CardsContainer,
  LittleCard,
  Paragraph,
  ProjectsContainer,
  Title,
  Text,
} from './ProjectsStyled';

export default function Projects() {

  return (
    <ProjectsContainer id="projects">
      <div>
        <Paragraph>PROJECTS</Paragraph>
        <Title>What I've Already Done</Title>
      </div>
      <div>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum qui cupiditate deserunt quidem ut expedita, sunt fugiat sit quia, minus ipsa, consequatur doloremque</Text>
      </div>
      <CardsContainer>
        <BigCard></BigCard>
        <BigCard></BigCard>
        <CardContainerOne>
          <LittleCard></LittleCard>
          <LittleCard></LittleCard>
          <LittleCard></LittleCard>
        </CardContainerOne>
      </CardsContainer>
    </ProjectsContainer>
  );
}
``