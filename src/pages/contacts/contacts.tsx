import {
  YMaps,
  Map,
  ZoomControl,
  TrafficControl,
  RulerControl,
  GeolocationControl,
  Placemark,
} from '@pbe/react-yandex-maps';
import TopPanel from '../../components/topPanel';
import './contacts.css';
import SocialMediaLink from '../../components/socialMediaLink';
import ContactPlace from '../../components/contactPlace';
import ContactPhone from '../../components/contactPhone';
import { useTranslation } from 'react-i18next';
import FeedbackForm from '../../components/feedbackForm';
const Contacts = () => {
  const { t } = useTranslation();
  return (
    <>
      <TopPanel />
      <section className="info">
        <div className="info-map">
          <YMaps>
            <Map
              defaultState={{ center: [53.951786, 27.681514], zoom: 14, controls: [] }}
              width={'100%'}
              height={400}
            >
              <RulerControl options={{ position: { top: 10, right: 100 }, scaleLine: false }} />
              <TrafficControl />
              <ZoomControl options={{ position: { top: 100, right: 10 }, size: 'small' }} />
              <GeolocationControl options={{ position: { top: 170, right: 10 } }} />
              <Placemark geometry={[53.951786, 27.681514]} />
            </Map>
          </YMaps>
        </div>
        <div className="info-contacts">
          <h4 className="info-contacts_title">{t('contacts.contactsTitle')}</h4>
          <ContactPhone phoneNumber="+375291786858" />
          <ContactPhone phoneNumber="+375173734007" />
          <ContactPhone phoneNumber="+375297620007" />
          <ContactPlace />
          <SocialMediaLink />
        </div>
      </section>
      <section>
        <FeedbackForm />
      </section>
    </>
  );
};

export default Contacts;
