import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './components/Routes';
import { Container } from 'react-bootstrap';

function App() {
	return (
		<Container fluid className='App'>
			<Routes />
		</Container>
	);
}

export default App;
