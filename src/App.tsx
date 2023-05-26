import { FC, KeyboardEventHandler, useRef, useState } from "react"

import { ITodo } from './types/data'
import TodoList from "./TodoList"

const App: FC = () => {
	const [value, setValue] = useState('')
	const [todos, setTodos] = useState<ITodo[]>([])
	const inputRef = useRef<HTMLInputElement>(null)
	const addtodo = () => {
		setTodos([...todos, {
			id: Math.floor(Math.random() * (12300 - 20 + 1) + 10),
			title: value,
			complete: false
		}])
		setValue('')
	}
	const handleJeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
		if(e.key === 'Enter'){
			addtodo()
		}
	}

	const removeTodo = (id:number): void =>{
		setTodos(todos.filter(item => item.id !== id))
	} 
	console.log(todos)
	return (
		<div className="body">
			<div className="add">
				<input value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleJeyDown} type="text" />
				<button onClick={addtodo}>Click</button>
			</div>
			<TodoList items={todos} removeTodo={removeTodo}/>
		</div>
	)
}

export default App
