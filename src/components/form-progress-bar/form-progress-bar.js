import { FormProgressBarItem } from "./form-progress-bar-item";

import './form-progress-bar.css';

export const FormProgressBar = (props) => {
	const {steps, activeStep} = props;
	const getStepKey = step => step.toLowerCase().replace(' ', '-');
	return (
		<ol className="form-progress-bar">
			{steps.map((step, index) => <FormProgressBarItem key={getStepKey(step)} label={step} activeStep={activeStep === step} />)}
		</ol>
	);
}