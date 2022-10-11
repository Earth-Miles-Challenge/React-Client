import { getIdFromLabel } from 'utils/form-utils';

export const TextField = props => {
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
	const classes = 'form-field form-field-text ' + className;

	return (
		<div className={classes}>
			<label htmlFor={htmlId} key="label">{label}</label>
			<input type="text"
				id={htmlId}
				name={htmlName}
				value={value}
				onChange={handleChange}
			/>
		</div>
	)
}