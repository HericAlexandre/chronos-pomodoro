import { PauseIcon, PlayIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContex';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  //Ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleInterruptTask() {
    setState(prevState => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: prevState.tasks.map(task => {
          if (prevState.activeTask && prevState.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    });
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
