import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { FormField } from 'components';
import { useLoginMutation } from 'store/server-api';

export const LoginForm = () => {
	const { t } = useTranslation();
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [ login ] = useLoginMutation();

	const displayErrors = (errors, field) => {
		const MESSAGES = {
			'email': t("loginPage.loginForm.notices.emailRequired"),
			'password': t("loginPage.loginForm.notices.passwordRequired")
		}

		return errors[field] && <p className="error">{MESSAGES[field][errors[field].type] || MESSAGES[field]}</p>;
	}

	return (
		<form onSubmit={handleSubmit(login)}>
			<FormField label={t('loginPage.loginForm.fieldLabels.email')} id="email">
				<input type="email"
					id="email"
					{...register('email', {
						pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						required: true
					} ) }
					aria-invalid={errors.email ? true : false}
				/>
				{displayErrors(errors, 'email')}
			</FormField>
			<FormField label={t('loginPage.loginForm.fieldLabels.password')} id="password">
				<input type="password"
					id="password"
					{...register('password', {
						required: true,
					} ) }
					aria-invalid={errors.password ? true : false}
				/>
				{displayErrors(errors, 'password')}
			</FormField>
			<input type="submit" value={t('loginPage.loginForm.button')} />
		</form>
	)
}
