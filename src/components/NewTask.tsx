import { Plus } from 'phosphor-react';

import styles from './NewTask.module.css';

export function NewTask() {
	return (
		<>
			<input placeholder='Adicione um nova tarefa' />
			<button
				type='submit'
				aria-label='Criar tarefa'
			>
				Criar
				<Plus />
			</button>
		</>
	);
}
