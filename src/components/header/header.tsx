import './header.css';
import FeedbackInfo from '../feedbackInfo';

const Header = () => {
  return (
    <header className="header" data-testid="header">
      <FeedbackInfo />
    </header>
  );
};

export default Header;
