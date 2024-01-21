import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faViber, faWhatsapp, faTelegram, faInstagram, faVk, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import './socialMediaLink.css';

const SocialMediaLink = ()  => {
  return (
    <div>
      <ul className='social-media-link_container'>
      <li>
          <a href='https://web.whatsapp.com/' aria-label='Whatsapp' rel='noopener noreferrer' target='_blank' className='transition'><FontAwesomeIcon icon={faWhatsapp} /></a>
        </li>
        <li>
          <a href='https://www.viber.com/ru/' aria-label='Viber' rel='noopener noreferrer' target='_blank' className='transition'><FontAwesomeIcon icon={faViber} /></a>
        </li>
        <li>
          <a href='https://web.telegram.org/' aria-label='Telegram' rel='noopener noreferrer' target='_blank' className='transition'><FontAwesomeIcon icon={faTelegram} /></a>
        </li>
        <li>
          <a href='https://www.instagram.com/smileclinik_62/' aria-label='Instagram' rel='noopener noreferrer' target='_blank' className='transition'><FontAwesomeIcon icon={faInstagram} /></a>
        </li>
        <li>
          <a href='https://vk.com/' aria-label='VK' rel='noopener noreferrer' target='_blank' className='transition'><FontAwesomeIcon icon={faVk} /></a>
        </li>
        <li>
          <a href='https://www.facebook.com/' aria-label='Facebook' rel='noopener noreferrer' target='_blank' className='transition'><FontAwesomeIcon icon={faFacebookF} /></a>
        </li>
        <li>
          <a href='https://twitter.com/home' aria-label='Twitter' rel='noopener noreferrer' target='_blank' className='transition'><FontAwesomeIcon icon={faTwitter} /></a>
        </li>
      </ul>
    </div>
  )
}

export default SocialMediaLink