import Page from 'components/04-layouts/page/page';
import { store } from 'redux/store';
import { Provider } from 'react-redux';

const App = ({ children }) => {


	return (
		<Provider store={ store }>
			<Page>
				{ children }
			</Page>
		</Provider>
	);

};

export default App;