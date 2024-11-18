import { EmptyList } from './EmptyList'
import styles from './TodoList.module.css'

export function TodoList() {
  return (
    <div className={styles.todoList}>
      <EmptyList />

    </div>
  )
}