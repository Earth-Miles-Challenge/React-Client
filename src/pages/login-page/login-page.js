import { LoginForm } from 'features/users';
import { useTranslation } from 'react-i18next';
import { StravaConnectButton } from 'features/users';

import './login-page.scss';

export const LoginPage = () => {
	const { t } = useTranslation();
	return (
		<>
			<div className="banner-container">
				<h1>{t('loginPage.header')}</h1>
				<p>{t('loginPage.teaser')}</p>
			</div>
			<section className="authenticate-container column-container two">
				<div className="login-container form-container">
					<h2>{t('loginPage.loginForm.header')}</h2>
					<p>{t('loginPage.loginForm.teaser')}</p>
					<LoginForm />
				</div>
				<div className="connect-container">
					<h2>{t('loginPage.connectForm.header')}</h2>
					<p>{t('loginPage.connectForm.teaser')}</p>
					<StravaConnectButton />
				</div>
			</section>
		</>
	)
}