import './styles/central.scss';
import ReactDOM from "react-dom/client";
import App from './components/06-app/app/app';
import  Start from './components/05-pages/start/start';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
	<BrowserRouter>
		<App>
			<Routes>
				<Route path="/" exact element={ <Start /> } />
			</Routes>
		</App>
	</BrowserRouter>
)