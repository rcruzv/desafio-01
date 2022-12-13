import { ClipboardText } from 'phosphor-react';
import { Task } from './Task';
import styles from './Tasks.module.css';

interface TaskModel {
	id: number;
	done: boolean;
	text: string;
}

const tasks: TaskModel[] = [
	{
		id: 1,
		done: false,
		text: 'Aqui a tarefa que preciso realizar',
	},
	{
		id: 2,
		done: true,
		text: 'Aqui a tarefa que preciso realizar',
	},
	{
		id: 3,
		done: false,
		text: 'Aqui a tarefa que preciso realizar',
	},
];

export function Tasks() {
	return (
		<div className={styles.tasks}>
			<div className={styles.info}>
				<div className={styles.created}>
					Tarefas criadas <span className={styles.count}> 1000 </span>
				</div>
				<div className={styles.done}>
					Concluídas <span className={styles.count}> 25 de 500 </span>
				</div>
			</div>
			{tasks.length == 0 && (
				<div className={styles.empty}>
					<ClipboardText size={80} />
					<p>
						<strong>Você ainda não tem tarefas cadastradas</strong>
						<p>Crie tarefas e organize seus itens a fazer</p>
					</p>
				</div>
			)}
			<div className={styles.list}>
				{tasks.map((task) => {
					return (
						<Task
							key={task.id}
							id={task.id}
							done={task.done}
							text={task.text}
						/>
					);
				})}
			</div>
		</div>
	);
}
