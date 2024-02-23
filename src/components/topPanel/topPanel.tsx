import { useEffect, useState } from 'react';
import './topPanel.css';
import { pathDictionary } from '../../assets/items';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const TopPanel = () => {
  const [currentRoute, setCurrentRoute] = useState('');

  const getTopPanelText = (): string => {
    const mainPath = currentRoute.split(new RegExp('\\?'))[0];
    const path = mainPath.split(new RegExp('/')).pop() as string;
    return pathDictionary[path];
  };
  useEffect(() => {
    setCurrentRoute(window.location.pathname);
    document.title = getTopPanelText();
  }, [currentRoute, setCurrentRoute]);

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
            <NavLink className="top-panel_link" key={i} to={'/' + p}>{pathDictionary[p]}</NavLink>
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
        <h3>{getTopPanelText()}</h3>
      </div>
      <img src={new URL(`../../assets/images/pattran.png`, import.meta.url).href} alt="pattran" />
    </section>
  );
};

export default TopPanel;
