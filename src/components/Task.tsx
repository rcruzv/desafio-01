import styles from './Task.module.css';
import trashIcon from '../assets/trash.svg';
import { Trash } from 'phosphor-react';

interface TaskModel {
	id: number;
	text: string;
	done: boolean;
	deleteTask: (id: number, done: boolean) => void;
	updateTask: (id: number, done: boolean) => void;
}

export function Task({ id, text, done, deleteTask, updateTask }: TaskModel) {
	const { task, trash } = styles;

	function _updateTask() {
		updateTask(id, !done);
	}

	function _deleteTask() {
		deleteTask(id, done);
	}

	return (
		<>
			<div className={task}>
				<input
					type='checkbox'
					aria-label='task 01'
					defaultChecked={done}
					onChange={_updateTask}
				/>
				<p>{text}</p>
				<div className={trash}>
					<Trash
						onClick={_deleteTask}
						size={15}
					/>
				</div>
			</div>
		</>
	);
}
