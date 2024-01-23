//import CurrentRoute from '../curentRoute';
//import Navigation from '../navigation';
import './header.css';
import FeedbackInfo from '../feedbackInfo';

const Header = () => {
  return (
    <header className="header">
      <FeedbackInfo />
    </header>
  );
};

export default Header;
/*const Header = () => {
  return (
    <header className="header">
      <h1>
        <a href="/" className="header_logo">
          LOTR API
        </a>
      </h1>
      <Navigation />
      <CurrentRoute />
    </header>
  );
};*/
