// // src/components/TaskList.tsx

// import { Task } from '@/shared/type/tasks'
// import { TodoItem } from './TodoItem'

// interface TaskListProps {
// 	tasks: Task[]
// 	onToggleTask: () => void
// 	onDeleteTask: (id: number) => void
// }

// const TaskList = ({ tasks, onToggleTask, onDeleteTask }: TaskListProps) => {
// 	return (
// 		<div>
// 			{tasks.map(task => (
// 				<TodoItem key={task.id} task={task} toggleTask={onToggleTask} />
// 			))}
// 		</div>
// 	)
// }

// export default TaskList
const TasksList: React.FC<{
	tasks: { completed: boolean; text: string }[]
	renderTask: (
		task: { completed: boolean; text: string },
		index: number
	) => React.ReactNode
}> = ({ tasks, renderTask }) => {
	return <ul>{tasks.map((task, index) => renderTask(task, index))}</ul>
}
export default TasksList
