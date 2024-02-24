import './error.css';
import { useTranslation } from 'react-i18next';

const Error = () => {
  const { t } = useTranslation();
  // console.log(t('label'))
  return (
    <div className='error-message'>
      <h2> {t('errorMesage')}</h2>
    </div>
  );
};

export default Error;
