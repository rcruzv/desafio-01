import './global.css';
import styles from './App.module.css';

import clipboardIcon from './assets/Clipboard.svg';

import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Task } from './components/Task';
import { useState } from 'react';

interface TaskModel {
	id: number;
	text: string;
	done: boolean;
}

const {
	tasksContainer,
	tasksInfo,
	created,
	done,
	counter,
	taskListEmpty,
	clipboard,
	taskList,
} = styles;

function App() {
	const [tasks, setTasks] = useState<TaskModel[]>([]);
	const [createdTasks, setCreatedTasks] = useState(0);
	const [doneTasks, setDoneTasks] = useState(0);

	function handleCreateNewTask(newTaskText: string) {
		const newTask = {
			id: tasks.length + 1,
			text: newTaskText,
			done: false,
		} as TaskModel;
		setTasks([...tasks, newTask]);
		setCreatedTasks((created) => created + 1);
	}

	function handleDeleteTask(id: number, done: boolean) {
		const tasksWithoutDeleted = tasks.filter((task: TaskModel) => {
			return task.id != id;
		});

		setTasks(tasksWithoutDeleted);
		if (done) {
			setDoneTasks((done) => done - 1);
		} else {
			setCreatedTasks((created) => created - 1);
		}
	}

	function handleUpdateTask(id: number, done: boolean) {
		const updatedTaskList = tasks.map((task: TaskModel) => {
			if (task.id === id) {
				task.done = done;
			}
			return task;
		});

		setTasks(updatedTaskList);
		if (done) {
			setDoneTasks((done) => done + 1);
			setCreatedTasks((created) => created - 1);
		} else {
			setDoneTasks((done) => done - 1);
			setCreatedTasks((created) => created + 1);
		}
	}

	return (
		<>
			<Header />
			<NewTask createNew={handleCreateNewTask} />
			<div className={tasksContainer}>
				<div className={tasksInfo}>
					<div className={created}>
						Tarefas criadas
						<span className={counter}>{createdTasks}</span>
					</div>
					<div className={done}>
						Concluídas
						<span className={counter}>{doneTasks}</span>
					</div>
				</div>
				{tasks.length === 0 ? (
					<div className={taskListEmpty}>
						<img
							src={clipboardIcon}
							alt='empty clipboard'
							className={clipboard}
						/>
						<div>
							<p>Você ainda não tem tarefas cadastradas</p>
							<p>Crie tarefas e organize seus itens a fazer</p>
						</div>
					</div>
				) : (
					<div className={taskList}>
						{tasks.map((task: TaskModel) => (
							<Task
								key={task.id}
								id={task.id}
								text={task.text}
								done={task.done}
								deleteTask={handleDeleteTask}
								updateTask={handleUpdateTask}
							/>
						))}
					</div>
				)}
			</div>
		</>
	);
}

export default App;

