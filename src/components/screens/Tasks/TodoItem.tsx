import React from 'react'

interface TodoItemProps {
	task: { text: string; completed: boolean }
	toggleTask: () => void
}

export const TodoItem: React.FC<TodoItemProps> = ({ task, toggleTask }) => {
	return (
		<li className={`todo-item ${task.completed ? 'completed' : ''}`}>
			<input type='checkbox' checked={task.completed} onChange={toggleTask} />
			<span>{task.text}</span>
		</li>
	)
}
