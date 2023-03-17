import { useTranslation } from 'react-i18next';

export const dashboardPage = () => {
	// const { t } = useTranslation();
	return (
		<>
			<div className="banner-container">
				<h1>{t('dashboardPage.header')}</h1>
			</div>
		</>
	)
}