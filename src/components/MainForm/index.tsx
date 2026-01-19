import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContex';
import type { TaskModel } from '../../models/TaskModel';
import { PauseIcon, PlayIcon } from 'lucide-react';

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCyleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCyleType],
      type: nextCyleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  function handleInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          disabled={!!state.activeTask}
          id='task'
          placeholder='Dê um nome para a sua tarefa!'
          labelText='Escreva a sua tarefa:'
          required
          ref={taskNameInput}
          onInvalid={() =>
            alert(
              'Ocorreu um erro ao carregar sua tarefa. Verifique se o campo foi preenchido corretamente.',
            )
          }
        />
      </div>

      <div className='formRow'>
        <p>O próximo intervalo é de: </p>
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}
      {!state.activeTask ? (
        <DefaultButton
          type='submit'
          aria-label='Iniciar nova tarefa'
          title='Iniciar'
          icon={<PlayIcon />}
          key='botãoEnviar1'
        />
      ) : (
        <DefaultButton
          type='button'
          aria-label='Interromper tarefa ativa'
          title='Parar'
          color='red'
          icon={<PauseIcon />}
          onClick={handleInterruptTask}
          key='botãoParar1'
        />
      )}
    </form>
  );
}
