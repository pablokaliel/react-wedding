import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
`;

export const CounterNumber = styled.div`
  min-width: 80px;

  background-color: #000;
  color: #fff;

  padding: 1rem;
  border-radius: 0.7rem;

  font-size: 4rem;
  font-weight: bold;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.5rem;
    min-width: 60px;
  }
`;

export const CounterText = styled.div``;
