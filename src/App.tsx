import { PlayIcon } from "lucide-react";
import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { DefaultInput } from "./components/DefaultInput";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

import "./styles/global.css";
import "./styles/theme.css";
import { Footer } from "./components/Footer";

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
            <Cycles />
          </div>
          <DefaultButton icon={<PlayIcon />} />
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
