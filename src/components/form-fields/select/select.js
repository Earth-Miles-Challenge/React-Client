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
		options = []
	} = props;

	const htmlId = id || label.toLowerCase().replace(' ', '-');

	return (
		<div className={className}>
			<label htmlFor={htmlId} key="label">{label}</label>
			<select id={htmlId} key="select">
				{options.map((option) => {
					const { optionValue, optionLabel } = getOptionDetails(option);
					const selectedAttribute = optionValue === value ? 'selected' : '';
					return (
						<option key={value} value={value} {...selectedAttribute}>{optionLabel}</option>
					)
				})}
			</select>
		</div>
	)
}