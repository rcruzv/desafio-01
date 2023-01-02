import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface NewTaskModel {
	createNew: (newTaskText: string) => void;
}

export function NewTask({ createNew }: NewTaskModel) {
	const { newTaskForm, newTask, newTaskButton, newTaskButtonIcon } = styles;

	const [task, setTask] = useState('');

	function handleCreateNewTask(event: FormEvent) {
		event.preventDefault();
		createNew(task);
		setTask('');
	}

	function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
		setTask(event.target.value);
	}

	return (
		<form
			onSubmit={handleCreateNewTask}
			className={newTaskForm}
		>
			<input
				type='text'
				aria-label='Adicionar tarefa'
				className={newTask}
				placeholder='Adicione uma nova tarefa'
				required
				onChange={handleNewTaskChange}
				value={task}
			/>
			<button
				type='submit'
				aria-label='Botão de adicionar tarefa '
				className={newTaskButton}
			>
				<span>Criar</span>
				<PlusCircle className={newTaskButtonIcon} />
			</button>
		</form>
	);
}
