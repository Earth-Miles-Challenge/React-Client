import { LoginForm } from 'features/users';
import { useTranslation } from 'react-i18next';

import './start-page.scss';

export const StartPage = () => {
	const { t } = useTranslation();
	return (
		<>
			<div className="form-container">
				<h1>{t('startPage.header')}</h1>
				<p>{t('startPage.teaser')}</p>
			</div>
			<div className="login-container">
				<h2>{t('startPage.loginForm.header')}</h2>
				<p>{t('startPage.loginForm.teaser')}</p>
				<LoginForm />
			</div>
			<div className="connect-container">
				<h2>{t('startPage.connectForm.header')}</h2>
				<p>{t('startPage.connectForm.teaser')}</p>
			</div>
		</>
	)
}