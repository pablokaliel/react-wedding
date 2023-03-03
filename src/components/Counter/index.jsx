import React from "react";

import { Container, CounterNumber, CounterText } from "./styles";

function Counter({ title, number }) {
  return (
    <Container>
      <CounterNumber>{number}</CounterNumber>
      <CounterText>{title}</CounterText>
    </Container>
  );
}

export default Counter;
