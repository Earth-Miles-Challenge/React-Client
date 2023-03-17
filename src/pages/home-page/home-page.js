import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CommutesFeature } from './commutes';

import './home-page.scss';

export const HomePage = () => {
	const { t } = useTranslation();
	return (
		<>
			<div className="banner-container">
				<h1>{t('homePage.header')}</h1>
				<Link to="/register" className="button">{t('homePage.button')}</Link>
			</div>
			<CommutesFeature />
		</>
	)
}