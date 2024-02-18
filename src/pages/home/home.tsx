import './home.css';
import HomeSlider from '../../components/homeSlider';
import ServiceNavigation from '../../components/serviceNavigation';
import ServicesCost from '../../components/servicesCost';
import SocialMediaLink from '../../components/socialMediaLink';

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <ServiceNavigation />
      <ServicesCost />
      <section className='promo-info'>
        <h3 className='promo-info_style'>СЛЕДИ ЗА СТИЛЕМ!</h3>
        <h2 className='promo-info_anonce'>Еженедельные анонсы</h2>
        <p className='promo-info_social'>На сайте и в социальных сетях</p>
        <SocialMediaLink />
      </section>
    </div>
  );
};

export default Home;
