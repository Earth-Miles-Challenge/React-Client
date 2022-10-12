import { getAthleteActivities } from 'features/activities';

export const withActivities = async (WrappedComponent) => {
	const _getActivities = async () => {
		const athletes = await getAthleteActivities();
		return athletes || [];
	}

	const activities = _getActivities();

	return (
		<WrappedComponent
			activities={activities}
			{...WrappedComponent.props}
		/>
	);
}