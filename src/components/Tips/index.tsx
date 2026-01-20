import { useTaskContext } from '../../contexts/TaskContext/useTaskContex';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCyleType = getNextCycleType(nextCycle);

  // Tips
  const tipsForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime}min</span>,
    shortBreakTime: <span>Descanse por {state.config.shortBreakTime}min</span>,
    longBreakTime: <span>Descanse bastante!</span>,
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo é de foco por <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo ciclo é de descanso por {state.config.shortBreakTime}min
      </span>
    ),
    longBreakTime: <span>Próximo ciclo de descanso será longo</span>,
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCyleType]}
    </>
  );
}
