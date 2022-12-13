import { TrashSimple } from 'phosphor-react';

import styles from './Task.module.css';

interface TaskModel {
	id: number;
	done: boolean;
	text: string;
}

export function Task({ id, text, done }: TaskModel) {
	return (
		<div className={styles.content}>
			<input
				defaultChecked={done}
				aria-label='Change status selected'
				type='checkbox'
			/>
			{text}
			<button
				aria-label='Delete task button'
				type='button'
				id={id.toString()}
			>
				<TrashSimple />
			</button>
		</div>
	);
}
