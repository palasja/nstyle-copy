import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import './feedbackInfo.css';
import SocialMediaLink from '../socialMediaLink';

const FeedbackInfo = () => {
  return(
    <div className='feedback_info'>
      <SocialMediaLink/>
      <div className='adress'>
        <FontAwesomeIcon icon={faLocationDot} />
        <p>г. Минск, ул. Ложинская, 22</p>
        <p>ТЦ "Дмитриев Кирмаш" (2 этаж)</p>
      </div>
      <div className='phone'>
        <FontAwesomeIcon icon={faPhone} />
        <p>+ 375(29) 178-68-58</p>
      </div>
    </div>
    
  )
}

export default FeedbackInfo