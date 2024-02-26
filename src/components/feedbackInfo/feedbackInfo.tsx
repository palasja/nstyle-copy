import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import './feedbackInfo.css';
import SocialMediaLink from '../socialMediaLink';
import { useTranslation } from 'react-i18next';
const FeedbackInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="feedback_info">
      <SocialMediaLink />
      <div className="adress">
        <div className="adress-mark">
          <a
            href="https://www.google.com/maps/@51.7909876,29.4893485,14.92z?entry=ttu"
            aria-label="Google-map"
            data-testid="map_image"
            rel="noopener noreferrer"
            target="_blank"
            className="transition"
          >
            <FontAwesomeIcon icon={faLocationDot} />
          </a>
        </div>
        <div className="adress-adress">
          <a
            href="https://www.google.com/maps/@51.7909876,29.4893485,14.92z?entry=ttu"
            aria-label="Google-map"
            data-testid="map_string"
            rel="noopener noreferrer"
            target="_blank"
            className="transition"
          >
            {t('feedbackInfo.address')}
          </a>
        </div>
        <div className="adress-palce">{t('feedbackInfo.place')}</div>
      </div>
      <div className="phone">
        <div className="phone_icon">
          <a
            href="tel:+375291786858"
            data-testid="phone_image"
            aria-label="Phone"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faPhoneFlip} />
          </a>
        </div>
        <div className="phone_number">
          <a
            href="tel:+375291786858"
            data-testid="phone_number"
            aria-label="Phone"
            rel="noopener noreferrer"
            target="_blank"
          >
            + 375(29) 178-68-58
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeedbackInfo;
