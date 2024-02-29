import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contactPhone.css'

const ContactPhone = (props : {phoneNumber: string}) =>{
  const {phoneNumber} = props;
  const phoneToString = (): string => {
    return `${phoneNumber.substring(0,1)} ${phoneNumber.substring(1,4)}(${phoneNumber.substring(4,6)}) ${phoneNumber.substring(6,9)}-${phoneNumber.substring(9,11)}-${phoneNumber.substring(11,13)}`
  }
  return (
    <div className="phone">
    <div className="phone_icon">
      <a
        href={`tel:${phoneNumber}`}
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
        href={`tel:${phoneNumber}`}
        data-testid="phone_number"
        aria-label="Phone"
        rel="noopener noreferrer"
        target="_blank"
      >
        {phoneToString()};
      </a>
    </div>
  </div>
  );
}

export default ContactPhone