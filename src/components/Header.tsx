import { CheckSquareOffset } from 'phosphor-react';
import styles from './Header.module.css';

export function Header() {
	return (
		<header className={styles.header}>
			<CheckSquareOffset
				size={40}
				className={styles.logo}
			/>
			<div className={styles.title}>
				<strong>to</strong>
				<strong>do</strong>
			</div>
		</header>
	);
}
