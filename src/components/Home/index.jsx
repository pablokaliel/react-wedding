import "./styles.js";
import Counter from "../Counter";
import Title from "../Title";

import useCountdown from "../../hooks/useCountdown";

import {
  AppContainer,
  Container,
  CountDownContainer,
  ContainerMessage,
  Message,
} from "./styles";

function App() {
  const [day, hour, minute, second] = useCountdown("Jul 22, 2023 09:00");

  return (
    <AppContainer>
      <Container>
        <Title title="Contagem regressiva para nosso casamento:" />
        <CountDownContainer>
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </CountDownContainer>
        <ContainerMessage>
          <Message>
            obs:<span>Eu te Amo!</span>
            <span className="icons">❤️❤️</span>
          </Message>
        </ContainerMessage>
      </Container>
    </AppContainer>
  );
}

export default App;
