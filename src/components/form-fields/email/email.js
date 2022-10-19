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

	const { register, formState: { errors } } = useFormContext;

	const htmlId = id || getIdFromLabel(label)
	const handleChange = e => {
		onChange(e.target.value);
	}
	const htmlName = name || htmlId;
	const classes = 'form-field form-field-email ' + className;

	return (
		<div className={classes}>
			<label htmlFor={htmlId} key="label">{label}</label>
			<input type="email"
				id={htmlId}
				{...register(htmlName, {
					required: required,
					onChange: handleChange,
					value: value
				})}
			/>
			{errors[htmlId] && <span className="error">This field is required.</span>}
		</div>
	)
}