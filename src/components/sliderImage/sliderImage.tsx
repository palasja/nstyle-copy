import { NavLink } from 'react-router-dom';
import './sliderImage.css';
import { SliderImageProps } from '../../type/costType';
import { useTranslation } from 'react-i18next';

const SliderImage = (props: SliderImageProps) => {
  const { link, serviceName, img } = props;
  const { t } = useTranslation();
  console.log(img);
  return (
    <section
      className="slider-panel"
      data-testid="slider-panel"
      style={{
        backgroundImage: `url(${new URL(`../../assets/images/home/${img}`, import.meta.url).href})`,
      }}
    >
      <div className="slider_text text">
        <h2 className="text_service-name" data-testid="text_service-name">
          {serviceName}
        </h2>
        <h1 className="text_company-name">New Style</h1>
        <NavLink to={link} className={'text_cost-link'}>
          {t('sliderImage.serviceAndCost')}
        </NavLink>
      </div>
      <img src={new URL(`../../assets/images/pattran.png`, import.meta.url).href} alt="pattran" />
    </section>
  );
};

export default SliderImage;
