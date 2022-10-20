import { useFormContext } from 'react-hook-form';
import { getIdFromLabel } from 'utils/form-utils';

export const EmailField = props => {
	const {
		label,
		value,
		name = '',
		id = '',
		className = '',
		onChange,
		required = false
	} = props;

	const { register, formState: { errors } } = useFormContext();
	const registerOptions = {
		required,
		value,
		onChange: e => onChange(e.target.value),
	}
	const htmlId = id || getIdFromLabel(label)
	const htmlName = name || htmlId;
	const classes = 'form-field form-field-email ' + className;

	return (
		<div className={classes}>
			<label htmlFor={htmlId} key="label">{label}</label>
			<input type="email"
				id={htmlId}
				aria-invalid={errors[htmlId] ? "true" : "false"}
				{...register(htmlName, registerOptions)}
			/>
			{errors[htmlId] && errors[htmlId]}
		</div>
	)
}