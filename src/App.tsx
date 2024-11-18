import styles from "./App.module.css"

import "./globals.css"

import { Header } from "./components/Header"
import { CreateTodo } from "./components/CreateTodo"
import { TodoList } from "./components/TodoList"
import { TasksCounter } from "./components/TasksCounter"

export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <CreateTodo />
        <TasksCounter />
        <TodoList />
      </div>
    </>
  )
}