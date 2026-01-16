import { PlayIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';

export function MainForm() {
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          id='task'
          placeholder='Dê um nome para a sua tarefa!'
          labelText='Escreva a sua tarefa:'
          required
          ref={taskNameInput}
        />
      </div>
      <div className='formRow'>
        <p>O próximo intervalo é de: </p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <DefaultButton icon={<PlayIcon />} />
    </form>
  );
}
