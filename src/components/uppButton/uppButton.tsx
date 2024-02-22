import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './uppButton.css'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
const UppButton = () => {
  const [addedClass, setAddedClass] = useState('');
  
  const togleAddedClass = () => {
    var y = window.scrollY;
    if (y >= 200) {
      setAddedClass('show');
    } else {
      setAddedClass('');
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", togleAddedClass);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", togleAddedClass);
    };

  }, )

  return(
    <a href='#' className={addedClass + ' upp-button'} data-testid="upp-button" >
      <FontAwesomeIcon icon={faAngleUp} />
    </a>
  )
}

export default UppButton;