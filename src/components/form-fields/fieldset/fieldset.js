export const Fieldset = props => {
	const {
		label,
		className = ''
	} = props;

	const classes = 'fieldset ' + className;

	return (
		<fieldset className={classes}>
			<legend>{label}</legend>
			{props.children}
		</fieldset>
	)
}