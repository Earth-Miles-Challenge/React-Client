import { useTranslation } from 'react-i18next';

import './commutes.scss';

export const CommutesFeature = (props) => {
	const { t } = useTranslation();
	return (
		<section className="commutes-intro feature">
			<h2>{t('homePage.commutesFeature.header')}</h2>
			<div className="feature-part">
				<h3><span className="step-number">1</span> {t('homePage.commutesFeature.step1')}</h3>
				<p>{t('homePage.commutesFeature.step1Details')}</p>
			</div>
			<div className="feature-part">
				<h3><span className="step-number">2</span> {t('homePage.commutesFeature.step2')}</h3>
				<p>{t('homePage.commutesFeature.step2Details')}</p>
			</div>
			<div className="feature-part">
				<h3><span className="step-number">3</span> {t('homePage.commutesFeature.step3')}</h3>
				<p>{t('homePage.commutesFeature.step3Details')}</p>
			</div>
		</section>
	)
}