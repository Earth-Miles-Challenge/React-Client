import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { FormField, Fieldset } from 'components';

export const RegistrationForm = props => {
	const { onSubmit } = props;
	const { t } = useTranslation();
	const { register, handleSubmit, formState: { errors }, getValues, setError, clearErrors } = useForm();
	const [ checkPasswordMatch, setCheckPasswordMatch ] = useState(false);

	const handlePasswordChange = (e) => {
		if (!checkPasswordMatch && e.target.name === 'passwordRepeat') setCheckPasswordMatch(true);
		if (checkPasswordMatch) {
			if (getValues('password') !== getValues('passwordRepeat')) {
				setError('passwordRepeat', { type: 'mismatch' })
			} else {
				clearErrors('passwordRepeat');
			}
		}
	}

	const displayErrors = (errors, field) => {
		const MESSAGES = {
			'firstName': t("registrationPage.registrationForm.notices.firstNameRequired"),
			'lastName': t("registrationPage.registrationForm.notices.lastNameRequired"),
			'email': {
				'required': t("registrationPage.registrationForm.notices.emailRequired"),
				'pattern': t("registrationPage.registrationForm.notices.emailInvalid")
			},
			'password': {
				'required': t("registrationPage.registrationForm.notices.passwordRequired")
			},
			'passwordRepeat': {
				'mismatch': t("registrationPage.registrationForm.notices.passwordMismatch")
			}
		}

		return errors[field] && <p className="error">{MESSAGES[field][errors[field].type] || MESSAGES[field]}</p>;
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Fieldset legend={t('registrationPage.registrationForm.fieldLabels.name')}>
				<FormField label={t('registrationPage.registrationForm.fieldLabels.firstName')} id="firstName">
					<input type="text"
						id="firstName"
						{...register('firstName', {
							required: true,
						} ) }
						aria-invalid={errors.firstName ? true : false}
					/>
					{displayErrors(errors, 'firstName')}
				</FormField>
				<FormField label={t('registrationPage.registrationForm.fieldLabels.lastName')} id="lastName">
					<input type="text"
						id="lastName"
						{...register('lastName', {
							required: true,
						} ) }
						aria-invalid={errors.lastName ? true : false}
					/>
					{displayErrors(errors, 'lastName')}
				</FormField>
			</Fieldset>
			<FormField label={t('registrationPage.registrationForm.fieldLabels.email')} id="email">
				<input type="email"
					id="email"
					{...register('email', {
						pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						required: true,
					} ) }
					aria-invalid={errors.email ? true : false}
				/>
				{displayErrors(errors, 'email')}
			</FormField>
			<FormField label={t('registrationPage.registrationForm.fieldLabels.password')} id="password">
				<input type="password"
					id="password"
					{...register('password', {
						required: true,
						onChange: handlePasswordChange
					} ) }
					aria-invalid={errors.password ? true : false}
				/>
				{displayErrors(errors, 'password')}
			</FormField>
			<FormField label={t('registrationPage.registrationForm.fieldLabels.passwordRepeat')} id="password">
				<input type="password"
					id="passwordRepeat"
					{...register('passwordRepeat', {
						required: true,
						onChange: handlePasswordChange
					} ) }
					aria-invalid={errors.passwordRepeat ? true : false}
				/>
				{displayErrors(errors, 'passwordRepeat')}
			</FormField>
			<input type="submit" value={t('registrationPage.registrationForm.button')} />
		</form>
	)
}
