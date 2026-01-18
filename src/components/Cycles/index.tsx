import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContex';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Cycles() {
  const { state } = useTaskContext();

  const cycleSteps = Array.from({ length: state.currentCycle });

  const cycleStepsDescription = {
    workTime: 'foco',
    shortBreakTime: 'descanso curto',
    longBreakTime: 'descanso longo',
  };

  return (
    <div className={styles.cycles}>
      <span className={styles.titulo}>Ciclos:</span>
      <div className={styles.cyclesDotsContainer}>
        {cycleSteps.map((_, index) => {
          const nextCyle = getNextCycle(index);
          const nextCyleType = getNextCycleType(nextCyle);
          const isLast = index === cycleSteps.length - 1;

          return (
            <span
              key={`${nextCyleType}_${nextCyle}`}
              className={`${styles.cyclesDots} ${styles[nextCyleType]} ${
                isLast ? styles.newCycle : ''
              }`}
              aria-label={`Indicador de ciclo de ${cycleStepsDescription[nextCyleType]}`}
              title={`Ciclo de ${cycleStepsDescription[nextCyleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
