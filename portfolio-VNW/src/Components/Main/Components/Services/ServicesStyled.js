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

export const Text = styled.p`
  width: 30rem;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5rem;
  color: #d5d5d5
`;

export const CardsContainer = styled.section`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 50rem;
  height: auto;
  gap: 20px;
  align-items: flex-end;
`;

export const CardContainerOne = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  gap: 10px;
  align-items: center;
`;

export const BigCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  gap: 20px;
  align-items: center;
  background-color: #9400d340;
  height: 10rem;
  padding: 20px;
  color: #d5d5d5;
  font-weight: 600;
`;

export const LittleCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  gap: 20px;
  align-items: center;
  background-color: #9400d340;
  height: 4.7rem;
  width: 10rem;
  padding: 10px;
  color: #d5d5d5;
  font-weight: 600;
`;