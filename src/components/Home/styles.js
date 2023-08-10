import styled from "styled-components";
import background from "../../assets/wallpaper.jpg";

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  min-height: 100vh;
  
  background-size: cover;
  background-position: center;
  background-image: url(${background});
  
  @media (max-width: 600px) {
    display: grid;
    place-content: center;
  
    width: 100%;
    height: 100%;
    margin: 0 auto;
  

  }
`;

export const Container = styled.div`
  min-width: 50%;
  min-height: 300px;
  position: relative;
  
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 1rem;

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;

    padding:1rem;
  }
`;

export const CountDownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 200px;
  gap: 2rem;
  
  @media (max-width: 600px) {
    display: flex;

    justify-content: flex-start;
    width: 100%;
    gap: 0.6rem;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  position: absolute;
  bottom: -150px;
  
  width: 100%;

  @media (max-width: 600px) {
    width:initial;
    left:130px;
  }

  span {
    color: #f00;
    font-weight: bold;
    font-size: 17px;
    margin-left: 5px;
  }
  .icons {
    font-size: 18px;
  }

  
`;

export const Message = styled.span`
  font-size: 12px;
`;
