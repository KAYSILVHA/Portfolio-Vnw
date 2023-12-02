import styled from "styled-components"

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: auto;
  padding: 100px 100px;
  background: #34353A;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 50px;

  @media screen and (max-width: 539px){
    padding: 100px 0;
    justify-content: center;
  }
`;


export const Title = styled.h2`
  font-size: 2rem;
  color: #d5d5d5;
  margin-bottom: 8px;
`;

export const AboutText = styled.div`
  font-size: 1rem;
  color: #d5d5d5;

  @media screen and (max-width: 900px){
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Paragraph = styled.p`
  color: #9400d3;
  font-weight: bold;
  margin-bottom: 2px;
`;

export const Text = styled.p`
  width: 50rem;
  font-size: 1rem;
  text-align: justify;
  line-height: 1.5rem;

  @media screen and (max-width: 900px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-around;
  gap: 15px;

  @media screen and (max-width: 1295px){
    width: 100%;
  }

  @media screen and (max-width: 1085px){
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 20rem;
  height: 18rem;
  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 1085px){
    width:90%;
  }
`;