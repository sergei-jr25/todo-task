// src/components/TaskFilter.tsx

interface TaskFilterProps {
	onFilterChange: (filter: 'all' | 'completed' | 'active') => void
	allTasks: number
}

const TaskFilter = ({ onFilterChange, allTasks }: TaskFilterProps) => {
	return (
		<div className='task-filter '>
			<span> {allTasks} items</span>
			<button onClick={() => onFilterChange('all')}>Все</button>
			<button onClick={() => onFilterChange('active')}>Активные</button>
			<button onClick={() => onFilterChange('completed')}>Выполненные</button>
		</div>
	)
}

export default TaskFilter
