import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/Store';

ReactDOM.render(
	<div>
		<Provider store={store}>
			<App />
		</Provider>
	</div>,

	document.getElementById('root'),
);
