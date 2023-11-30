import styled from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 56.5vh;
  padding: 20px 100px;
  gap: 15px;
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

export const GoTop = styled.div`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9400d3;
  font-weight: bolder;
  font-size: 1.5rem;
  border: 2px solid #9400d3;
`;