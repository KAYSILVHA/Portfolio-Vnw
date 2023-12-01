import styled from "styled-components";


export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: auto;
  padding: 100px 100px;
  background: #34353a;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
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
  color: #d5d5d5;
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
  gap: 15px;
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
  height: 16rem;
  padding: 20px;
  color: #d5d5d5;
  font-weight: 600;
  width: 15rem;
`;

export const LittleCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; /* Adicione esta linha para empilhar as imagens verticalmente */
  text-align: center;
  justify-content: space-around;
  gap: 20px;
  align-items: center;
  background-color: #9400d340;
  height: 4.7rem;
  width: 15rem;
  padding: 10px;
  color: #d5d5d5;
  font-weight: 600;
  overflow: hidden;

  img {
    width: 100%;
    height: auto; /* Altere para 'auto' para garantir a altura correta das imagens */
    object-fit: cover;
  }
`;

export const CarouselWrapper = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
`;

export const Carousel = styled.div`
  display: flex;
  width: ${(props) => props.width || "100%"};
  transform: translateX(-${(props) => props.activeIndex * (100 / props.images.length)}%);
  transition: transform 0.5s ease;
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #d5d5d5;
  cursor: pointer;
`;

export const PrevButton = styled(CarouselButton)`
  left: 0;
`;

export const NextButton = styled(CarouselButton)`
  right: 0;
`;