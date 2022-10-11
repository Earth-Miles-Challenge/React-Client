import { getIdFromLabel } from 'utils/form-utils';

export const EmailField = props => {
	const {
		label,
		value,
		name = '',
		id = '',
		className = '',
		onChange
	} = props;

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
				name={htmlName}
				value={value}
				onChange={handleChange}
			/>
		</div>
	)
}