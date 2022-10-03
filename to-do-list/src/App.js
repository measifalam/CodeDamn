import './App.css'
import { useState, useRef } from 'react'

function App() {
  const [todoList, setTodoList] = useState([])
  const [currentTask, setCurrentTask] = useState('')

  const inputTask = useRef(null)

  const addTask = () => {
    setTodoList([...todoList, { task: currentTask, completed: false }])
    inputTask.current.value = ''
    setCurrentTask('')
  }

  const deleteTask = (taskToDelete) => {
    setTodoList(
      todoList.filter((task) => {
        return task.task !== taskToDelete
      })
    )
  }

  const completeTask = (taskToDelete) => {
    setTodoList(
      todoList.map((task) => {
        return task.task == taskToDelete
          ? { task: taskToDelete, completed: true }
          : { task: task.task, completed: task.completed ? true : false }
      })
    )
  }

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <div>
        <input
          ref={inputTask}
          type='text'
          placeholder='Task...'
          onKeyDown={(event) => {
            if (event.keyCode == 13)
             addTask()
          }}
          onChange={(event) => {
            setCurrentTask(event.target.value)
          }}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <hr />
      <ul>
        {todoList.map((val, key) => {
          return (
            <div id='task'>
              <li key={key}>{val.task}</li>
              <button onClick={() => completeTask(val.task)}>Completed</button>
              <button onClick={() => deleteTask(val.task)}>X</button>
              {val.completed ? (
                <h1>Task Completed</h1>
              ) : (
                <h1>Task Not Completed</h1>
              )}
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default App
