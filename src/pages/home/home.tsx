import './home.css';
import HomeSlider from '../../components/homeSlider';
import ServiceNavigation from '../../components/serviceNavigation';
import ServicesCost from '../../components/servicesCost';
import SocialMediaLink from '../../components/socialMediaLink';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <HomeSlider />
      <ServiceNavigation />
      <ServicesCost />
      <section className="promo-info">
        <h3 className="promo-info_style">{t('home.style')}</h3>
        <h2 className="promo-info_anonce">{t('home.anonce')}</h2>
        <p className="promo-info_social">{t('home.social')}</p>
        <SocialMediaLink />
      </section>
    </div>
  );
};

export default Home;
