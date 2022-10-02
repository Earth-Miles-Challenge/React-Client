import { getOptionDetails, getIdFromLabel } from 'utils/form-utils';

import './radio.css';

export const RadioField = props => {
	const {
		label,
		value,
		name = '',
		id = '',
		className = '',
		options = [],
		onChange
	} = props;

	const htmlId = id || getIdFromLabel(label)
	const handleChange = e => e.target.checked && onChange(e.target.value);
	const htmlName = name || htmlId;
	const classes = 'radio-list ' + className;

	return (
		<fieldset className={classes} role="radiogroup">
			<legend>{label}</legend>
			<ul>
				{options.map(option => {
					const [ optionValue, optionLabel ] = getOptionDetails(option);
					const optionId = getIdFromLabel(optionValue);
					return (
						<li key={optionValue}>
							<input type="radio"
								key={optionId}
								name={htmlName}
								id={optionId}
								value={optionValue}
								checked={optionValue === value}
								onChange={handleChange}
							/>
							<label htmlFor={optionId}>{optionLabel}</label>
						</li>
					)
				})}
			</ul>
		</fieldset>
	)
}