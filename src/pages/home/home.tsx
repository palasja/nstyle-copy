import TopPanel from '../../components/topPanel';
import './home.css';

const Home = () => {
  return (
    <section className="home-top-panel">
      <div className="home-top_text text">
        <h2 className='text_service-name'>Парикхмахерские услуги</h2>
        <h1 className='text_company-name'>New Style</h1>
        <a href='' className='text_cost-link'>Услуги и Цены</a>
      </div>
      <img src={new URL(`../../assets/images/pattran.png`, import.meta.url).href} alt="pattran" />
    </section>
  );
};

export default Home;
