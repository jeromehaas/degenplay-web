import './styles/central.scss';
import ReactDOM from "react-dom/client";
import App from './components/06-app/app/app';
import  Start from './components/05-pages/start/start';
import  Learn from './components/05-pages/learn/learn';
import  Create from './components/05-pages/create/create';
import  Explore from './components/05-pages/explore/explore';
import Login from 'components/05-pages/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoutes from 'utils/PrivateRoutes';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
	<BrowserRouter>
		<App>
			<Routes>
				<Route element={<PrivateRoutes />}>
					<Route path="/" exact element={ <Start /> } />
					<Route path="/learn" exact element={ <Learn /> } />
					<Route path="/create" exact element={ <Create /> } />
					<Route path="/explore" exact element={ <Explore /> } />
				</Route>
				<Route path="/login" exact element={ <Login /> } />
			</Routes>
		</App>
	</BrowserRouter>
);