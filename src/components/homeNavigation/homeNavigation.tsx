import './homeNavigation.css'

const HomeNavigation = () => {
  return(
    <section className='navigation-images'>
      <div>
        <div className='description'>
          <h4 className='description-name'>Услуги студии красоты</h4>
          <h3 className='description-expiriance'>12+ лет опыта</h3>
          <p className='description-coloring'>Более 1000 сложных окрашиваний в год</p>
        </div>
        <a href='' className='nav-link_link'>
          <img src={new URL(`../../assets/images/home/navManicure.jpg`, import.meta.url).href} alt="Ногтевой сервис" loading='lazy' className='nav-link-image'/>
          <span className='nav-link_name'>Ногтевой сервис</span>
        </a>
        <a href='' className='nav-link_link'>
          <img src={new URL(`../../assets/images/home/navCosmetic.jpg`, import.meta.url).href} alt="Косметология" loading='lazy' className='nav-link-image'/>
          <span className='nav-link_name'>Косметология</span>
        </a>
        <a href='' className='nav-link_link'>
          <img src={new URL(`../../assets/images/home/navDepilation.jpg`, import.meta.url).href} alt="Депиляция" loading='lazy' className='nav-link-image'/>
          <span className='nav-link_name'>Депиляция</span>
        </a>
      </div>

      <div>
        <a href='' className='nav-link_link'>
          <img src={new URL(`../../assets/images/home/navHairdress.jpg`, import.meta.url).href} alt="Стрижки мужские/женские" loading='lazy' className='nav-link-image'/>
          <span className='nav-link_name'>Стрижки мужские/женские</span>
        </a>
        <div className='nav-link_subcontainer'>
          <div>
          <a href='' className='nav-link_link'>
          <img src={new URL(`../../assets/images/home/navHairStyling.jpg`, import.meta.url).href} alt="Укладки" loading='lazy' className='nav-link-image'/>
          <span className='nav-link_name'>Укладки</span>
        </a>
        <a href='' className='nav-link_link'>
          <img src={new URL(`../../assets/images/home/navColoring.jpg`, import.meta.url).href} alt="Окрашивание" loading='lazy' className='nav-link-image'/>
          <span className='nav-link_name'>Окрашивание</span>
        </a>
          </div>
          <div>
          <a href='' className='nav-link_link'>
          <img src={new URL(`../../assets/images/home/navHairCare.jpg`, import.meta.url).href} alt="Уход" loading='lazy' className='nav-link-image'/>
          <span className='nav-link_name'>Уход</span>
        </a>
        <a href='' className='nav-link_link'>
          <img src={new URL(`../../assets/images/home/navEyebrows.jpg`, import.meta.url).href} alt="Брови и ресницы" loading='lazy' className='nav-link-image'/>
          <span className='nav-link_name'>Брови и ресницы</span>
        </a>
        <a href='' className='nav-link_link'>
          <img src={new URL(`../../assets/images/home/navMakeup.jpg`, import.meta.url).href} alt="Макияж" loading='lazy' className='nav-link-image'/>
          <span className='nav-link_name'>Макияж</span>
        </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeNavigation