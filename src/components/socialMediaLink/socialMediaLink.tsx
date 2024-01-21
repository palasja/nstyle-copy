import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faViber, faWhatsapp, faTelegram, faInstagram, faVk, faFacebook } from '@fortawesome/free-brands-svg-icons'

const SocialMediaLink = ()  => {
  return (
    <div>
      <FontAwesomeIcon icon={faWhatsapp} />
      <FontAwesomeIcon icon={faViber} />
      <FontAwesomeIcon icon={faTelegram} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faVk} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faTwitter} />
    </div>
  )
}

export default SocialMediaLink