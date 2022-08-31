import Page from 'components/04-layouts/page/page';
import { AppProvider } from 'context/app-context';

const App = ({ children }) => {


	return (
		<AppProvider>
			<Page>
				{ children }
			</Page>
		</AppProvider>
	);

};

export default App;