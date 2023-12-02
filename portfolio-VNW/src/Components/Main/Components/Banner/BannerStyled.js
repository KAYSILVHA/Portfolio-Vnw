import styled from "styled-components"

export const BannerContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 60vh;
  padding: 20px 0;
  position: relative;

  @media screen and (max-width: 762px){
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    gap: 20px;
  }
`;

export const NameSection = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 30px;

  @media screen and (max-width: 762px){
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NameLogo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 762px){
    justify-content: center;
    align-items: center;
  }
`;

export const Name = styled.h1`
  font-size: 3rem;
  color: #d5d5d5;
  @media screen and (max-width: 762px){
    text-align: center;
    font-size: 5rem;
  }
`;

export const Description = styled.div`
  margin-top: 5px;
  color: #d5d5d5;

  @media screen and (max-width: 762px){
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const Line = styled.div`
  width: 40px;
  height: 2px;
  background-color: #9400d3;

  @media screen and (max-width: 762px){
    width: 90%;
    height: 5px;
  }
`;

export const ButtonContact = styled.div`
  width: 200px;
  border: 1px solid #9400d3;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const ApresentationContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 10px;
  gap: 15px;

  @media screen and (max-width: 762px){
    width: 80%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    gap: 20px;
    margin-top: 40px;
    text-align: center;
  }
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
  text-align: justify;
`;

export const PhotoContainer = styled.section`
  width: 30rem;
  height: 60vh;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Link = styled.a`
  color: #9400d3;
  font-weight: bold;
  text-decoration: none;
  font-size: 1rem;
`;

export const Button = styled.button`
  color: #9400d3;
  font-weight: bold;
  background: transparent;
  border: none;
  font-size: 1rem;

  &:hover{
    cursor: pointer;
  }
`;