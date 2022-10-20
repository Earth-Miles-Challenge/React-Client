export const FormField = props => {
	const {
		children,
		label,
		id,
		className = '',
	} = props;

	const classes = 'form-field ' + className;

	return (
		<div className={classes}>
			<label htmlFor={id} key="label">{label}</label>
			{children}
		</div>
	)
}