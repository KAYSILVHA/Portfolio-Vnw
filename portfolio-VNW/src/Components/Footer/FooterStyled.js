import styled from "styled-components";

export const FooterSyled = styled.footer`
   width: 100%;
  text-align: center;
  height: 10vh;
  background-color: #2E2F34;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #9400d3;
  padding: 20px;

  @media screen and (max-width: 410px){
    font-size: 0.9rem;
  }
`;