import './styles/central.scss';
import ReactDOM from "react-dom/client";
import App from './components/06-app/app/app';
import  Start from './components/05-pages/start/start';
import  Learn from './components/05-pages/learn/learn';
import  Create from './components/05-pages/create/create';
import  Explore from './components/05-pages/explore/explore';
import  Audit from './components/05-pages/audit/audit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
	<BrowserRouter>
			<App>
				<Routes>
					<Route path="/" exact element={ <Start /> } />
					<Route path="/learn" exact element={ <Learn /> } />
					<Route path="/create" exact element={ <Create /> } />
					<Route path="/explore" exact element={ <Explore /> } />
					<Route path="/audit" exact element={ <Audit /> } />
				</Routes>
			</App>
		</BrowserRouter>
)