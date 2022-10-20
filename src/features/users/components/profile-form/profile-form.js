import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { FormField, Fieldset } from 'components';

export const ProfileForm = props => {
	const { profile = {}, onChange, onContinue } = props;
	const { t } = useTranslation();
	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = data => onContinue();
	const handleChange = (field, event) => onChange(field, event.target.value);

	const displayErrors = (errors, field) => {
		const MESSAGES = {
			'firstName': t("signup.profile.notices.firstNameRequired"),
			'lastName': t("signup.profile.notices.lastNameRequired"),
			'email': {
				'required': t("signup.profile.notices.emailRequired"),
				'pattern': t("signup.profile.notices.emailInvalid")
			}
		}

		return errors[field] && <p className="error">{MESSAGES[field][errors[field].type] || MESSAGES[field]}</p>;
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Fieldset legend={t('signup.profile.fieldLabels.name')}>
				<FormField label={t('signup.profile.fieldLabels.firstName')} id="firstName">
					<input type="text"
						id="firstName"
						{...register('firstName', {
							required: true,
							value: profile.first_name,
							onChange: event => handleChange('first_name', event)
						} ) }
						aria-invalid={errors.firstName ? true : false}
					/>
					{displayErrors(errors, 'firstName')}
				</FormField>
				<FormField label={t('signup.profile.fieldLabels.lastName')} id="lastName">
					<input type="text"
						id="lastName"
						{...register('lastName', {
							required: true,
							value: profile.last_name,
							onChange: event => handleChange('last_name', event)
						} ) }
						aria-invalid={errors.lastName ? true : false}
					/>
					{displayErrors(errors, 'lastName')}
				</FormField>
			</Fieldset>
			<FormField label={t('signup.profile.fieldLabels.email')} id="email">
				<input type="email"
					id="email"
					{...register('email', {
						required: true,
						pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						value: profile.email,
						onChange: event => handleChange('email', event)
					} ) }
					aria-invalid={errors.email ? true : false}
				/>
				{displayErrors(errors, 'email')}
			</FormField>
			<input type="submit" value={t('signup.profile.continueButton')} />
		</form>
	)
}
