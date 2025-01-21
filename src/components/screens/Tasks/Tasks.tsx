import React, { useState } from 'react'
import { TodoItem } from './TodoItem'

interface Task {
	text: string
	completed: boolean
}

export const Tasks: React.FC = () => {
	const [tasks, setTasks] = useState<Task[]>([])
	const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

	const addTask = (taskText: string) => {
		const newTask = { text: taskText, completed: false }
		setTasks(prev => [...prev, newTask])
	}

	const toggleTask = (index: number) => {
		setTasks(prev =>
			prev.map((task, i) =>
				i === index ? { ...task, completed: !task.completed } : task
			)
		)
	}

	const filteredTasks = tasks.filter(task =>
		filter === 'all'
			? true
			: filter === 'active'
			? !task.completed
			: task.completed
	)

	return (
		<div className='container'>
			<header className='header'>todos</header>
			<div className='input-container'>
				<input
					type='text'
					placeholder='What needs to be done?'
					onKeyDown={e => {
						if (e.key === 'Enter' && e.currentTarget.value.trim()) {
							addTask(e.currentTarget.value.trim())
							e.currentTarget.value = ''
						}
					}}
				/>
			</div>
			<ul className='todo-list'>
				{filteredTasks.map((task, index) => (
					<TodoItem
						key={index}
						task={task}
						toggleTask={() => toggleTask(index)}
					/>
				))}
			</ul>
			<footer className='footer'>
				<span>{tasks.filter(task => !task.completed).length} items left</span>
				<div className='filter-buttons'>
					<button
						className={filter === 'all' ? 'active' : ''}
						onClick={() => setFilter('all')}
					>
						All
					</button>
					<button
						className={filter === 'active' ? 'active' : ''}
						onClick={() => setFilter('active')}
					>
						Active
					</button>
					<button
						className={filter === 'completed' ? 'active' : ''}
						onClick={() => setFilter('completed')}
					>
						Completed
					</button>
				</div>
				<button onClick={() => setTasks(tasks.filter(t => !t.completed))}>
					Clear completed
				</button>
			</footer>
		</div>
	)
}
