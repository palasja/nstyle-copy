import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './uppButton.css';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
const UppButton = () => {
  const [addedClass, setAddedClass] = useState('');
  const TrackGoogleAnalyticsEvent = (
    category: string,
    event_name: string,
    data: {scrollUp_from: number}
) => {
    // console.log("GA event:", category, ":", event_name, ":", );

    let event_params = {
        category,
        ...data
    };
    // Send GA4 Event
    ReactGA.event(event_name, event_params);
};

  const togleAddedClass = () => {
    const y = window.scrollY;
    y >= 200 ? setAddedClass('show') : setAddedClass('');
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', togleAddedClass);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', togleAddedClass);
    };
  },[]);

  return (
    <a href="#" className={addedClass + ' upp-button'} data-testid="upp-button" onClick={() => {
      let currentScroll = Math.round(window.scrollY / document.getElementsByTagName('html')[0].scrollHeight *100);
      TrackGoogleAnalyticsEvent(
        "event",
        "scroll_up",
        { scrollUp_from: currentScroll}
      );
    }}>
      <FontAwesomeIcon icon={faAngleUp} />
    </a>
  );
};

export default UppButton;
