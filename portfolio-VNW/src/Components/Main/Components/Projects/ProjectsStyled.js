import styled from "styled-components";


export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 100px 100px;
  background: #34353a;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;

  @media screen and (max-width: 800px){
    padding: 50px 10px;
  }
`;

export const Paragraph = styled.p`
  color: #9400d3;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #d5d5d5;
  margin-bottom: 8px;

  @media screen and (max-width: 621px){
    padding: 10px;
  }
`;

export const Text = styled.p`
  width: 30rem;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5rem;
  color: #d5d5d5;

  @media screen and (max-width: 621px){
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerText = styled.p`
  width: 30rem;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5rem;
  color: #d5d5d5;

  @media screen and (max-width: 621px){
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const CardsContainer = styled.section`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 50rem;
  height: auto;
  gap: 20px;
  align-items: flex-end;

  @media screen and (max-width: 800px){
    align-items: center;
    flex-direction: column;
    width: 100vw;
  }
`;

export const CardContainerOne = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  gap: 15px;
  align-items: center;

  @media screen and (max-width: 800px){
    width: 100%;
  }

`;

export const BigCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  gap: 20px;
  align-items: center;
  background-color: #9400d340;
  height: 16rem;
  padding: 20px;
  color: #d5d5d5;
  font-weight: 600;
  width: 15rem;

  @media screen and (max-width: 800px){
    width: 350px;
    height: 7rem;
    flex-direction: row-reverse;
  }

  @media screen and (max-width: 414px){
    width: 20rem;
  }

  @media screen and (max-width: 348px){
    width: 15rem;
  }
`;

export const LittleCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  gap: 20px;
  align-items: center;
  background-color: #9400d340;
  height: 4.7rem;
  width: 15rem;
  padding: 10px;
  color: #d5d5d5;
  font-weight: 600;

  @media screen and (max-width: 800px){
    width: 350px;
    height: 7rem;
  }

  @media screen and (max-width: 414px){
    width: 20rem;
  }

  @media screen and (max-width: 348px){
    width: 15rem;
  }
`;


export const ContentLittleCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;

`;
export const Img = styled.img`
  width: 4rem;
`;

export const BigImg = styled.img`
  width: 7rem;

  @media screen and (max-width: 800px){
    width: 4rem;
  }
`;

export const Link = styled.a`
  color: #d5d5d5;
  text-decoration: none;
  font-weight: 600;

`;