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
  ContainerText,
  ContentLittleCard,
  Img,
  BigImg,
  Link
} from './ProjectsStyled';

import GitHub from "../../../../assets/images/github.png"
import Spider from "../../../../assets/images/spider.png"
import X from "../../../../assets/images/x-men.png"
import Coffee from "../../../../assets/images/coffee.png"
import Candy from "../../../../assets/images/candy.png"

export default function Projects() {

  return (
    <ProjectsContainer id="projects">
      <div>
        <Paragraph>PROJECTS</Paragraph>
        <Title>What I've Already Done</Title>
      </div>
      <ContainerText>
        <Text>
          These are some of my most recent projects, click on the link and learn more about my work and see a little more of my projects. There are some really cool ones that are fun to play with. So, have a good adventure!
        </Text>
      </ContainerText>
      <CardsContainer>
        <Link target="_blank" href="https://kaysilvha.github.io/cardapioElasNaTech-ohayoConfeitaria/">
          <BigCard>
            Ohayo Confeitaria
            <BigImg src={Candy} alt="Candy" />
          </BigCard>
        </Link>
        <Link target="_blank" href="https://kaysilvha.github.io/get.coffee/">
          <BigCard>
            Get Coffee
            <BigImg src={Coffee} alt="Coffee" />
          </BigCard>
        </Link>
        <CardContainerOne>
          <Link target="_blank" href="https://kaysilvha.github.io/DevEmDobro-XMEN/">
            <LittleCard>
              <ContentLittleCard>
                <Img src={X} alt="X-Men" />
                X-Men
              </ContentLittleCard>
            </LittleCard>
          </Link>
          <Link target="_blank" href="https://kaysilvha.github.io/spiderMan/">
            <LittleCard>
              <ContentLittleCard>
                <Img src={Spider} alt="Spider" />
                SpiderMan
              </ContentLittleCard>
            </LittleCard>
          </Link>
          <Link target="_blank" href="https://github.com/KAYSILVHA">
            <LittleCard>
              <ContentLittleCard>
                <Img src={GitHub} alt="GitHub" />
                @KaySilvha  →
              </ContentLittleCard>
            </LittleCard>
          </Link>
        </CardContainerOne>
      </CardsContainer>
    </ProjectsContainer>
  );
}