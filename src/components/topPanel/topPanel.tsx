import { useEffect, useState } from 'react';
import './topPanel.css';
import { pathDictionary } from '../../assets/items';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';

const TopPanel = () => {
  const [currentRoute, setCurrentRoute] = useState('');
  useEffect(() => {
    setCurrentRoute(window.location.pathname);
  }, [setCurrentRoute]);

  const getCurrentPathLink = (): JSX.Element[] => {
    let res: JSX.Element[] = [];
    if (currentRoute.length === 1) {
      res = [];
    } else {
      const mainPath = currentRoute.split(new RegExp('\\?'))[0];
      mainPath.split(new RegExp('/')).map((p, i, arr) => {
        if (i === arr.length - 1) {
          res.push(
            <span className="top-panel_current-link" key={i}>
              {pathDictionary[p]}
            </span>
          );
        } else {
          res.push(
            <a className="top-panel_link" key={i} href={'/' + p}>
              {pathDictionary[p]}
            </a>
          );
        }
      });
    }
    return res;
  };
  return (
    <section className="top-panel">
      <div className="top-panel_text">
        <div className="top-panel_link-row">
          {currentRoute.length > 1 ? (
            <span>
              <FontAwesomeIcon icon={faLocationCrosshairs} />{' '}
            </span>
          ) : (
            ''
          )}
          {currentRoute.length > 1 ? getCurrentPathLink().map((el) => el) : ''}
        </div>
        <h3>Брови | Ресницы | Макияж</h3>
      </div>
      <img src={new URL(`../../assets/images/pattran.png`, import.meta.url).href} alt="pattran" />
    </section>
  );
};

export default TopPanel;
