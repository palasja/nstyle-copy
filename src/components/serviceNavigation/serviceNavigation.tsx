import './serviceNavigation.css'
import ServiceImageLink from '../serviceImageLink';

const HomeNavigation = () => {
  return(
    <section className='navigation-images'>
      <div>
        <div className='description'>
          <h4 className='description-name'>Услуги студии красоты</h4>
          <h3 className='description-expiriance'>12+ лет опыта</h3>
          <p className='description-coloring'>Более 1000 сложных окрашиваний в год</p>
        </div>
        <ServiceImageLink link={'/Services/Manicure'} serviceName={'Ногтевой сервис'} img={'navManicure.jpg'} />
        <ServiceImageLink link={'/Services/Cosmetic'} serviceName={'Косметология'} img={'navCosmetic.jpg'} />
        <ServiceImageLink link={'/Services/Cosmetic'} serviceName={'Депиляция'} img={'navDepilation.jpg'} />
      </div>

      <div>
        <ServiceImageLink link={'/Services/Haidress'} serviceName={'Стрижки мужские/женские'} img={'navHairdress.jpg'} />
        <div className='nav-link_subcontainer'>
          <div>
          <ServiceImageLink link={'/Services/Haidress'} serviceName={'Укладки'} img={'navHairStyling.jpg'} />
          <ServiceImageLink link={'/Services/Haidress'} serviceName={'Окрашивание'} img={'navColoring.jpg'} />
          </div>
          <div>
          <ServiceImageLink link={'/Services/Haidress'} serviceName={'Уход'} img={'navHairCare.jpg'} />
          <ServiceImageLink link={'/Services/Eyebrows'} serviceName={'Брови и ресницы'} img={'navEyebrows.jpg'} />
          <ServiceImageLink link={'/Services/Eyebrows'} serviceName={'Макияж'} img={'navMakeup.jpg'} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeNavigation