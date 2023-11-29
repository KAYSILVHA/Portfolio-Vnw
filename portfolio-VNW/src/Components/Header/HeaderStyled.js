import styled from "styled-components";

export const HeaderSyled = styled.header`
  width: 100%;
  text-align: center;
  height: 12vh;
  background-color: #2E2F34;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px solid #9400d3;

  @media screen and (max-width: 410px){
    height: auto;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }
`;

export const LogoImage = styled.img`
  width: 5rem;
  height: 3rem;
`;

export const Links = styled.ul`
  width: 30vw;
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  color: white;
  gap: 20px;
  font-size: 1.2rem;

  @media screen and (max-width: 410px){
    width: 90vw;
    font-size: 1rem;
  }

`;