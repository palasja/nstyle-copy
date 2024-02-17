import { NavLink } from 'react-router-dom';
import './sliderImage.css';
import { SliderImageProps } from '../../type/costType';

const SliderImage = (props: SliderImageProps) => {
  const { link, serviceName, img } = props;
  return (
    <section
      className="slider-panel"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="slider_text text">
        <h2 className="text_service-name">{serviceName}</h2>
        <h1 className="text_company-name">New Style</h1>
        <NavLink to={link} className={'text_cost-link'}>
          Услуги и Цены
        </NavLink>
      </div>
      <img src={new URL(`../../assets/images/pattran.png`, import.meta.url).href} alt="pattran" />
    </section>
  );
};

export default SliderImage;
