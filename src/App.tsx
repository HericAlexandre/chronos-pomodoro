import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
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
            <DefaultInput
              id="task"
              placeholder="Dê um nome para a sua tarefa!"
              labelText="Escreva a sua tarefa:"
              required
            />
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="formRow">
          </div>
          <div className="formRow">
            <button type="submit">Começar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
