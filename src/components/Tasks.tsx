import { ClipboardText } from 'phosphor-react';
import styles from './Tasks.module.css';

export function Tasks() {
	return (
		<div className={styles.tasks}>
			<div className={styles.count}>
				<div>
					Tarefas criadas <span> 0 </span>
				</div>
				<div>
					Concluídas <span> 2 de 5 </span>
				</div>
			</div>
			<div className={styles.empty}>
				<ClipboardText size={80} />
				<p>
					<strong>Você ainda não tem tarefas cadastradas</strong>
					<p>Crie tarefas e organize seus itens a fazer</p>
				</p>
			</div>
		</div>
	);
}
