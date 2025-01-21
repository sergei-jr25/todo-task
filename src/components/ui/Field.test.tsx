 
import { fireEvent, render, screen } from '@testing-library/react'
import Field from './Field'

it('отображает поле ввода и кнопку', () => {
	render(<Field onAddTask={() => {}} />)
 
	const inputElement = screen.getByPlaceholderText(/введите новую задачу/i)
	expect(inputElement).toBeInTheDocument()

	const buttonElement = screen.getByRole('button', { name: /добавить/i })
	expect(buttonElement).toBeInTheDocument()
})

it('добавляет задачу при нажатии кнопки', () => {
	const onAddTask = jest.fn()
	render(<Field onAddTask={onAddTask} />)

	const inputElement = screen.getByPlaceholderText(/введите новую задачу/i)
	fireEvent.change(inputElement, { target: { value: 'Новая задача' } })

	const buttonElement = screen.getByRole('button', { name: /добавить/i })
	fireEvent.click(buttonElement)

	expect(onAddTask).toHaveBeenCalledWith('Новая задача')
})
