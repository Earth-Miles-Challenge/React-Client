import { useTranslation } from 'react-i18next';
import { StravaConnectButton } from 'features/users';

import './strava.scss';

export const StravaConnect = ({onConnected}) => {
	const { t } = useTranslation();
	return (
		<div className="strava-connect-wrapper">
			<p>{t('signup.start.teaser')}</p>
			<StravaConnectButton onConnected={onConnected} />
		</div>
	);
}

export default StravaConnect;