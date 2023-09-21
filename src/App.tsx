import { useState } from 'react'
import { Todos } from './components/Todos'
const mocTodos = [
  {
    id: '1',
    title: 'todo1',
    completed: true
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mocTodos)
  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  return (
    <div className='todoapp'>
      <Todos todos={todos} onRemoveTodo={handleRemove}/>
    </div>
  )
}

export default App
