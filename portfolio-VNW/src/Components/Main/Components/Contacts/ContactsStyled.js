import styled from "styled-components";

export const ContactContainer = styled.section`
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

export const GoTop = styled.div`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9400d3;
  font-weight: bolder;
  font-size: 1.5rem;
  border: 2px solid #9400d3;
  margin-top: 100px;
`;

export const Link = styled.a`
  text-decoration: none;
  &:hover {
    text-shadow: 0 0 10px rgba(148, 87, 235, 0.5);
  }
`;
export const ContainerSocial = styled.section`
  width: 35rem;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  margin-top: 30px;
`;

export const SocialLinks = styled.a`
  text-decoration: none;
  color: #9400d3;
`;

export const Links = styled.div`
  background-color: #34353A;
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;
`;