import { useTranslation } from 'react-i18next';
import { useForm, FormProvider } from 'react-hook-form';
import { TextField, EmailField, Fieldset } from 'components';

export const ProfileForm = props => {
	const formMethods = useForm();
	const { handleSubmit } = formMethods;

	const onSubmit = data => onContinue();
	const { profile = {}, onChange, onContinue } = props;
	const { t } = useTranslation();

	const handleProfileChange = (field, value) => onChange(field, value)

	return (
		<FormProvider {...formMethods}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Fieldset label={t('signup.profile-name-field-label')}>
					<TextField
						label={t('signup.profile-first-name-field-label')}
						onChange={value => handleProfileChange('first_name', value)}
						id="first-name"
						value={profile.first_name}
					/>
					<TextField
						label={t('signup.profile-last-name-field-label')}
						onChange={value => handleProfileChange('last_name', value)}
						id="last-name"
						value={profile.last_name}
					/>
				</Fieldset>
				<EmailField
					label={t('signup.profile-email-field-label')}
					onChange={value => handleProfileChange('email', value)}
					id="email"
					value={profile.email}
					required={t('signup.profile-email-field-required-field')}
				/>
				<input type="submit" value={t('signup.profile-continue-button')} />
			</form>
		</FormProvider>
	)
}

// export default withTranslation('translation')(ProfileForm);