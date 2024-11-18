import { PlusCircle } from 'phosphor-react'

import styles from './CreateTodo.module.css'

export function CreateTodo() {
  return (
    <div className={styles.createTodo}>
      <input
        type="text"
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.button}>
        Criar
        <PlusCircle className={styles.icon} size={20} />
      </button>
    </div>
  )
}