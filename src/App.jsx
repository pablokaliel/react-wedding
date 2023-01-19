import "./App.css";
import Counter from "./components/Counter/Counter";
import Title from "./components/Title/Title";

import image from "./assets/wallpaper.jpg";
import useCountdown from "./hooks/useCountdown";

function App() {
  const [day, hour, minute, second] = useCountdown("Jul 22, 2023 09:00");
  return (
    <div className="App" style={{ backgroundImage: `url(${image})` }}>
      <div className="container">
        <Title title="Contagem regressiva para nosso casamento:" />
        <div className="countdown-container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
        <div className="container-message">
          <p className="message">
            obs:<span className="message-span">Eu te Amo!</span>
            <span className="icons">❤️❤️</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
