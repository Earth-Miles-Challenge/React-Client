export const Fieldset = props => {
	const {
		legend,
		className = ''
	} = props;

	const classes = 'fieldset ' + className;

	return (
		<fieldset className={classes}>
			<legend>{legend}</legend>
			{props.children}
		</fieldset>
	)
}