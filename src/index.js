import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { setupStore } from 'store';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { getProfile } from 'features/users';

const root = ReactDOM.createRoot(document.getElementById('root'));

const profile = getProfile();
const preloadedState = profile.length
	? {
		currentUser: {
			profile: {
				first_name: profile.first_name || '',
				last_name: profile.last_name || '',
				email: profile.email || '',
				picture: profile.picture || '',
				strava_id: profile.strava_id || '',
			}
		}
	}
	: {};

const store = setupStore(preloadedState);
// const store = setupStore();

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
