import { NavLink } from 'react-router-dom';
import './serviceImageLink.css'
import { ServiceImageLinkProps } from '../../type/costType';

const ServiceImageLink = (props: ServiceImageLinkProps) => {
  const {link, img, serviceName} = props;
  return(
    <NavLink className='nav-link_link' to={link}>
      <img src={new URL(`../../assets/images/home/${img}`, import.meta.url).href} alt={serviceName} loading='lazy' className='nav-link-image'/>
      <span className='nav-link_name'>{serviceName}</span>
    </NavLink>
  );
}

export default ServiceImageLink