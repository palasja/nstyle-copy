import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faViber, faWhatsapp, faTelegram, faInstagram, faVk, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const SocialMediaLink = ()  => {
  return (
    <div>
      <FontAwesomeIcon icon={faWhatsapp} />
      <FontAwesomeIcon icon={faViber} />
      <FontAwesomeIcon icon={faTelegram} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faVk} />
      <FontAwesomeIcon icon={faFacebookF} />
      <FontAwesomeIcon icon={faTwitter} />
    </div>
  )
}

export default SocialMediaLink