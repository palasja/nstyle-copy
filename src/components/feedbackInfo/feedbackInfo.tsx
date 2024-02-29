import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import './feedbackInfo.css';
import SocialMediaLink from '../socialMediaLink';

import ContactPlace from '../contactPlace';
import ContactPhone from '../contactPhone';
const FeedbackInfo = () => {
  return (
    <div className="feedback_info">
      <SocialMediaLink />
      <ContactPlace />
      <ContactPhone phoneNumber='+375291786858'/>
    </div>
  );
};

export default FeedbackInfo;
