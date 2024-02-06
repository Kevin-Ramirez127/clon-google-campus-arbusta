// Pages
import Google from './Pages/Google';
// Context
import { TranslateProvider } from './context/TranslateContext';
// Styles
import './App.css';

function App() {
	return (
		<TranslateProvider>
			<Google />
		</TranslateProvider>
	);
}

export default App;

