import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contactPlace.css'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
const ContactPlace = () =>{
  const { t } = useTranslation();
  return (
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
  );
}

export default ContactPlace