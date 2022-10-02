export const TextareaField = (props) => {
	const {
		label,
		value,
		id = '',
		name = '',
		className = '',
		onChange
	} = props;

	const htmlId = id || label.toLowerCase().replace(' ', '-');
	const htmlName = name || htmlId;
	const handleChange = e => onChange(e.target.value);

	return (
		<div className={className}>
			<label htmlFor={htmlId} key="label">{label}</label>
			<textarea
				id={htmlId}
				name={htmlName}
				onChange={handleChange}
				value={value}
			/>
		</div>
	)
}