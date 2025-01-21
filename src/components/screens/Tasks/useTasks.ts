// src/hooks/useTasks.ts

import { Task } from '@/shared/type/tasks'
import { useState } from 'react'

export const useTasks = () => {
	const [tasks, setTasks] = useState<Task[]>([])

	const addTask = (text: string) => {
		const newTask: Task = {
			id: Date.now(),
			text,
			completed: false,
		}
		setTasks(prevTasks => [...prevTasks, newTask])
	}

	const deleteTask = (id: number) => {
		setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
	}

	const toggleTaskCompletion = (id: number) => {
		setTasks(prevTasks =>
			prevTasks.map(task =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		)
	}

	const getFilteredTasks = (filter: 'all' | 'completed' | 'active') => {
		if (filter === 'all') return tasks
		if (filter === 'completed') return tasks.filter(task => task.completed)
		return tasks.filter(task => !task.completed)
	}

	return { tasks, addTask, deleteTask, toggleTaskCompletion, getFilteredTasks }
}
