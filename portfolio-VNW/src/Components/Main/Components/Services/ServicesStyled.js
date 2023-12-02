import styled from "styled-components";

export const ServicesContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: auto;
  padding: 70px 100px;
  gap: 20px;
  align-items: center;

  @media screen and (max-width: 539px){
    padding: 70px 0;
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

export const Text = styled.p`
  width: 30rem;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5rem;
  color: #d5d5d5;

  @media screen and (max-width: 539px){
    width: 100%;
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

  @media screen and (max-width: 539px){
    flex-direction: column;
    width: 80%;
  }
`;

export const CardContainerOne = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  gap: 10px;
  align-items: center;

  @media screen and (max-width: 539px){
    flex-direction: column;
    gap: 20px;
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
  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;
  height: 10rem;
  color: #d5d5d5;
  font-weight: 600;

  @media screen and (max-width: 539px){
    width: 100%;
  }
`;

export const LittleCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  gap: 20px;
  align-items: center;
  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;
  height: 4.7rem;
  width: 10rem;
  color: #d5d5d5;
  

  @media screen and (max-width: 539px) {
    width: 100%;
    height: 10rem;
  }
`;

export const ParagraphCard = styled.p`
  z-index: 2;
  color: #fff;
  background-color: #2E2F34;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0 5px;
`;