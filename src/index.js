import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { setupStore } from './store';
import { setAuthenticationStatus } from 'features/users';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = setupStore();
store.dispatch(setAuthenticationStatus);
root.render(
	<React.StrictMode>
		<Router>
			<Provider store={store}>
				<I18nextProvider i18n={i18n}>
					<App/>
				</I18nextProvider>
			</Provider>
		</Router>
	</React.StrictMode>
);

// Make store available to Cypress
if (window.Cypress) {
	window.store = store
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
