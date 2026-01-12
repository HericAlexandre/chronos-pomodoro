import { PlayIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm(){
  return (
            <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              id='task'
              placeholder='Dê um nome para a sua tarefa!'
              labelText='Escreva a sua tarefa:'
              required
            />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className='formRow'>
            <Cycles />
          </div>
          <DefaultButton icon={<PlayIcon />} />
        </form>
  )
}