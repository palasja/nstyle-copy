import './serviceNavigation.css';
import ServiceImageLink from '../serviceImageLink';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const ServiceNavigation = () => {
  const { t } = useTranslation();
  return (
    <section className="navigation-images">
      <div>
        <div className="description">
          <h4 className="description-name">{t('services.name')}</h4>
          <h3 className="description-expiriance">{t('services.expiriance')}</h3>
          <p className="description-coloring">{t('services.count')}</p>
        </div>
        <ServiceImageLink
          link={'/Services/Manicure'}
          serviceName={t('services.manicure')}
          img={'navManicure.jpg'}
        />
        <ServiceImageLink
          link={'/Services/Cosmetic'}
          serviceName={t('services.cosmetic')}
          img={'navCosmetic.jpg'}
        />
        <ServiceImageLink
          link={'/Services/Cosmetic'}
          serviceName={t('services.depilation')}
          img={'navDepilation.jpg'}
        />
      </div>

      <div>
        <ServiceImageLink
          link={'/Services/Haidress'}
          serviceName={t('services.haidress')}
          img={'navHairdress.jpg'}
        />
        <div className="nav-link_subcontainer">
          <div>
            <ServiceImageLink
              link={'/Services/Haidress'}
              serviceName={t('services.hairStyles')}
              img={'navHairStyling.jpg'}
            />
            <ServiceImageLink
              link={'/Services/Haidress'}
              serviceName={t('services.coloring')}
              img={'navColoring.jpg'}
            />
          </div>
          <div>
            <ServiceImageLink
              link={'/Services/Haidress'}
              serviceName={t('services.haircare')}
              img={'navHairCare.jpg'}
            />
            <ServiceImageLink
              link={'/Services/Eyebrows'}
              serviceName={t('services.eyebrowsEyelashes')}
              img={'navEyebrows.jpg'}
            />
            <ServiceImageLink
              link={'/Services/Eyebrows'}
              serviceName={t('services.makeup')}
              img={'navMakeup.jpg'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceNavigation;
