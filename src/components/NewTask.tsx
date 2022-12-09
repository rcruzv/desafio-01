import { PlusCircle } from 'phosphor-react';

import styles from './NewTask.module.css';

export function NewTask() {
	return (
		<form className={styles.form}>
			<input placeholder='Adicione um nova tarefa' />
			<button
				type='submit'
				aria-label='Criar tarefa'
			>
				Criar
				<PlusCircle />
			</button>
		</form>
	);
}
