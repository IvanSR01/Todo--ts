import React from 'react'
import { ITodo } from './types/data'

interface ITodoItem extends ITodo {
	removeTodo: (id:number) => void
}

const TodoItem: React.FC<ITodoItem> = ({complete, title, id, removeTodo}) => {
	
	return (
		<div className={`item ${complete ? 'complete' : ''}`}>
			<p>{title}</p>
			<button onClick={() => removeTodo(id)}  >Complete</button>
		</div>
	)
}

export default TodoItem
