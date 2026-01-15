import { PlayIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useState } from 'react';

export function MainForm() {
  const [taskName, setTaskName] = useState('');

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
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
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
