import { LoginForm } from 'features/users';
import { useTranslation, Trans } from 'react-i18next';

export const LoginPage = () => {
	const { t } = useTranslation();
	return (
		<>
			<div className="banner-container">
				<h1>{t('loginPage.header')}</h1>
				<p>{t('loginPage.teaser')}</p>
			</div>
			<section className="login-container form-container main-container">
				<h2>{t('loginPage.loginForm.header')}</h2>
				<p>
					<Trans i18nKey="loginPage.loginForm.teaser">
						New here? <a href="/register">Click here to register a new account.</a>
					</Trans>
				</p>
				<LoginForm />
			</section>
		</>
	)
}