import { useEffect, useState } from 'react';
import { EmissionsByActivitySummary, getAthleteActivities } from 'features/activities';

export const Emissions = () => {
	const [ activities, setActivities ] = useState([]);

	useEffect(() => {
		(async () => {
			const activities = await getAthleteActivities();
			setActivities(activities);
		})();
	}, []);

	return (
		<div className="emissions-savings-wrapper">
			<EmissionsByActivitySummary
				activities={activities}
			/>
		</div>
	)
}

export default Emissions;