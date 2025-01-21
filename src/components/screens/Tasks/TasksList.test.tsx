import { fireEvent, render, screen } from '@testing-library/react'
import { Tasks } from './Tasks'

describe('Tasks component', () => {
	test('adds a new task', () => {
		render(<Tasks />)

		const input = screen.getByPlaceholderText('What needs to be done?')
		fireEvent.change(input, { target: { value: 'New Task' } })
		fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

		expect(screen.getByText('New Task')).toBeInTheDocument()
	})

	test('toggles task completion status', () => {
		render(<Tasks />)

		const input = screen.getByPlaceholderText('What needs to be done?')
		fireEvent.change(input, { target: { value: 'Toggle Task' } })
		fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

		const checkbox = screen.getByRole('checkbox')
		expect(checkbox).not.toBeChecked()

		fireEvent.click(checkbox)
		expect(checkbox).toBeChecked()

		fireEvent.click(checkbox)
		expect(checkbox).not.toBeChecked()
	})

	test('filters tasks (all, active, completed)', () => {
		render(<Tasks />)

		const input = screen.getByPlaceholderText('What needs to be done?')

		// Add two tasks
		fireEvent.change(input, { target: { value: 'Task 1' } })
		fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

		fireEvent.change(input, { target: { value: 'Task 2' } })
		fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

		// Complete the first task
		const firstCheckbox = screen.getAllByRole('checkbox')[0]
		fireEvent.click(firstCheckbox)

		// All tasks
		fireEvent.click(screen.getByText('All'))
		expect(screen.getByText('Task 1')).toBeInTheDocument()
		expect(screen.getByText('Task 2')).toBeInTheDocument()

		// Active tasks
		fireEvent.click(screen.getByText('Active'))
		expect(screen.queryByText('Task 1')).not.toBeInTheDocument()
		expect(screen.getByText('Task 2')).toBeInTheDocument()

		// Completed tasks
		fireEvent.click(screen.getByText('Completed'))
		expect(screen.getByText('Task 1')).toBeInTheDocument()
		expect(screen.queryByText('Task 2')).not.toBeInTheDocument()
	})

	test('clears completed tasks', () => {
		render(<Tasks />)

		const input = screen.getByPlaceholderText('What needs to be done?')

		// Add two tasks
		fireEvent.change(input, { target: { value: 'Task 1' } })
		fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

		fireEvent.change(input, { target: { value: 'Task 2' } })
		fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

		// Complete the first task
		const firstCheckbox = screen.getAllByRole('checkbox')[0]
		fireEvent.click(firstCheckbox)

		// Clear completed tasks
		fireEvent.click(screen.getByText('Clear completed'))
		expect(screen.queryByText('Task 1')).not.toBeInTheDocument()
		expect(screen.getByText('Task 2')).toBeInTheDocument()
	})
})
