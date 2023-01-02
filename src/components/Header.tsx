import styles from './Header.module.css';
import rocketLogo from '../assets/rocket.svg';

export function Header() {
	const { rocket, rocketText, background } = styles;

	return (
		<>
			<div className={background}></div>
			<img
				src={rocketLogo}
				alt='Todo logo'
				className={rocket}
			/>
			<div className={rocketText}>
				<span>to</span>
				<span>do</span>
			</div>
		</>
	);
}
