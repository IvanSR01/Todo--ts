import React from 'react'
import TodoItem from './TodoItem'
import { ITodo } from './types/data'
interface ITodoList {
	items: ITodo[];
	removeTodo: (id:number) => void
}

const TodoList: React.FC<ITodoList> = ({items, removeTodo}) => {
	return (
		<div className="items">
				<h2>{items.length === 0 ? 'Not todos' : 'Todos'}</h2>
				{items.map((item, i) => (
					<TodoItem key={i} {...item} removeTodo={removeTodo}/>
				))}
			</div>
	)
}

export default TodoList
