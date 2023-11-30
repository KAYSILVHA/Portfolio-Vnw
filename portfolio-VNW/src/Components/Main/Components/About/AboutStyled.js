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
`;


export const Title = styled.h2`
  font-size: 2rem;
  color: #d5d5d5;
  margin-bottom: 8px;
`;

export const AboutText = styled.div`
  font-size: 1rem;
  color: #d5d5d5;
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
`;

export const CardContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-around;
  gap: 15px;
`;

export const Card = styled.div`
  width: 20rem;
  height: 18rem;
  background-color: #2E2F34;
`;