import { getIdFromLabel } from 'utils/form-utils';

export const NumberField = props => {
	const {
		label,
		value,
		min = null,
		max = null,
		step = null,
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
	const classes = 'form-field form-field-number ' + className;

	return (
		<div className={classes}>
			<label htmlFor={htmlId} key="label">{label}</label>
			<input type="number"
				id={htmlId}
				name={htmlName}
				value={value}
				onChange={handleChange}
				min={min}
				max={max}
				step={step}
			/>
		</div>
	)
}