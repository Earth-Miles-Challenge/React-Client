import { useTranslation } from 'react-i18next';
import { TextField, EmailField, Fieldset } from 'components';

export const ProfileForm = props => {
	const { profile = {}, onChange, onContinue } = props;
	const { t } = useTranslation();

	const handleProfileChange = (field, value) => onChange(field, value)
	const handleContinueClick = () => {
		if (['first_name', 'last_name', 'email'].filter(field => profile[field] === '').length === 0) {
			onContinue();
		}
	}

	return (
		<>
			<Fieldset label={t('signup.profile-name-field-label')}>
				<TextField
					label={t('signup.profile-first-name-field-label')}
					onChange={value => handleProfileChange('first_name', value)}
					value={profile.first_name}
				/>
				<TextField
					label={t('signup.profile-last-name-field-label')}
					onChange={value => handleProfileChange('last_name', value)}
					value={profile.last_name}
				/>
			</Fieldset>
			<EmailField
				label={t('signup.profile-email-field-label')}
				onChange={value => handleProfileChange('email', value)}
				value={profile.email}
			/>
			<input type="submit" value={t('signup.profile-continue-button')} onClick={handleContinueClick} />
		</>
	)
}

// export default withTranslation('translation')(ProfileForm);