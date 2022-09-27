const getOptionDetails = option => {
	if (Array.isArray(option)) {
		return option.length === 2 ? option : [ option[0], option[0] ];
	} else {
		return [option, option]
	}
}

export const Select = props => {
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

	return (
		<div className={className}>
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