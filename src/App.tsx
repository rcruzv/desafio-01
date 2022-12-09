import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import './global.css';

function App() {
	return (
		<>
			<Header />

			<main>
				<NewTask />
			</main>
		</>
	);
}

export default App;

