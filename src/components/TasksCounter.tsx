import styles from './TasksCounter.module.css'

export function TasksCounter() {
  return (
    <div className={styles.tasksCounter}>
      <div className={styles.createdTasks}>
        <p>Tarefas Criadas</p>
        <span>0</span>
      </div>
      <div className={styles.completedTasks}>
        <p>Concluídas</p>
        <span>0</span>
      </div>
    </div>
  )
}