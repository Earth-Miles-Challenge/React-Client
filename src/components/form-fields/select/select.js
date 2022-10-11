import { getOptionDetails } from 'utils/form-utils';

export const SelectField = props => {
	const {
		label,
		value,
		id = '',
		className = '',
		options = [],
		onChange
	} = props;

	const htmlId = id || label.toLowerCase().replace(' ', '-');
	const handleChange = e => onChange(e.target.value);
	const classes = 'form-field form-field-select ' + className;

	return (
		<div className={classes}>
			<label htmlFor={htmlId} key="label">{label}</label>
			<select id={htmlId} key="select" value={value} onChange={handleChange}>
				{options.map(option => {
					const [ optionValue, optionLabel ] = getOptionDetails(option);
					return (
						<option key={optionValue} value={optionValue}>{optionLabel}</option>
					)
				})}
			</select>
		</div>
	)
}