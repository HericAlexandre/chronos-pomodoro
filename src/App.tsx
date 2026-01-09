import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className="form" action="">
          <div className="formRow">
            <label htmlFor="task">Vou trabalhar em:</label>
            <input id="task" type="text" placeholder="Dê um nome para o seu projeto" />
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="formRow">
            <p>CICLOS</p>
            <p>O  O  O  O  O  O  O  O</p>
          </div>
          <div className="formRow">
            <button type="submit">Começar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
