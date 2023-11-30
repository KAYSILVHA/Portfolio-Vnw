import styled from "styled-components"

export const BannerContainer = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 55vh;
  padding: 20px 0;
  position: relative;
`;

export const NameSection = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 30px;
`;

export const NameLogo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Name = styled.h1`
  font-size: 3rem;
  color: #d5d5d5;
`;

export const Description = styled.div`
  margin-top: 5px;
  color: #d5d5d5;
`;

export const Line = styled.div`
  width: 40px;
  height: 2px;
  background-color: #9400d3;
`;

export const ButtonContact = styled.div`
  width: 200px;
  border: 1px solid #9400d3;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #9400d3;
  font-weight: bold;
`;

export const ApresentationContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 10px;
  gap: 15px;
`;

export const Paragraph = styled.p`
  color: #9400d3;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Occupation = styled.h2`
  font-size: 1.5rem;
  color: #d5d5d5;
`;

export const Apresentation = styled.p`
  font-size: 1rem;
  color: #d5d5d5;
  line-height: 1.5rem;
`;

export const PhotoContainer = styled.section`
  margin-top: 50px;
  width: 20rem;
  height: 400px;
  background-color: #9400d3;
  position: absolute;
  bottom: 0;
`;