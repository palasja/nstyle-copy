import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../../assets/items';
import './langSwitcher.css'

const LangSwitcher = () => {
  const { i18n, t } = useTranslation()

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const lang_code = e.target.value;
      i18n.changeLanguage(lang_code);
      e.target.blur();
  }

    return (
      <select defaultValue={i18n.language} onChange={onChangeLang} className='lang-switcher' >
      {
          LANGUAGES.map(({ code, label }) => (
              <option
                  key={code}
                  value={code}
              >{label}</option>
          ))
      }
    </select>
    )
}

export default LangSwitcher