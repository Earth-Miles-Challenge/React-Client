import { useTranslation, Trans } from 'react-i18next';
import { RegistrationForm } from 'features/users';
import { useCreateUserMutation } from 'store/server-api';

export const RegistrationPage = () => {
	const { t } = useTranslation();
	const [ createUser ] = useCreateUserMutation();

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
					<RegistrationForm onSubmit={createUser} />
				</div>
			</section>
		</>
	)
}