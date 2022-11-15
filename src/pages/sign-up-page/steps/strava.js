import { StravaConnectButton } from 'features/users';

export const StravaConnect = ({onConnected}) => {

	return (
		<div className="strava-connect-wrapper">
			<StravaConnectButton onConnected={onConnected} />
		</div>
	);
}

export default StravaConnect;