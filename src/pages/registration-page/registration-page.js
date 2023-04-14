import { useTranslation, Trans } from 'react-i18next';
import { RegistrationForm } from 'features/users';


export const RegistrationPage = () => {
	const { t } = useTranslation();
	const handleRegistration = (data) => {
		console.log(data);
	}

	return (
		<>
			<div className="banner-container">
				<h1>{t('registrationPage.header')}</h1>
				<p>{t('registrationPage.teaser')}</p>
			</div>
			<section className="main-container">
				<div className="registration-container form-container">
					<h2>{t('registrationPage.registrationForm.header')}</h2>
					<p>
						<Trans i18nKey="registrationPage.registrationForm.teaser">
							Signed up already? <a href="/login">Log in instead.</a>
						</Trans>
					</p>
					<RegistrationForm onSubmit={handleRegistration} />
				</div>
			</section>
		</>
	)
}