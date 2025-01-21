// src/components/InputField.tsx

import { useState } from 'react'

interface InputFieldProps {
	onAddTask: (text: string) => void
}

const InputField = ({ onAddTask }: InputFieldProps) => {
	const [taskText, setTaskText] = useState('')

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTaskText(e.target.value)
	}

	const handleAddTask = () => {
		if (taskText.trim()) {
			onAddTask(taskText)
			setTaskText('')
		}
	}

	return (
		<div className='input-field'>
			<input
				type='text'
				value={taskText}
				onChange={handleInputChange}
				placeholder='Введите новую задачу'
			/>
			<button onClick={handleAddTask}>Добавить</button>
		</div>
	)
}

export default InputField
