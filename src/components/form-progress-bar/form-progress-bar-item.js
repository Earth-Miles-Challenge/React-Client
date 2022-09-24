import './form-progress-bar-item.css';

export const FormProgressBarItem = (props) => {
	const {label, activeStep} = props;
	const getClassName = (isActive) => isActive ? 'form-progress-bar-item form-progress-bar-item--active' : 'form-progress-bar-item';

	return (
		<li className={getClassName(activeStep)}>{label}</li>
	)
}