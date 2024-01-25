import './App.css'
import Header from './components/header';
import Footer from './components/footer';
import Navigation from './components/navigation';
import { Router } from './router';
function App() {
  return (
    <>
      <div className="content">
        <Header />
        <Navigation />
        <Router />
      </div>
      <Footer />
    </>
  );
}
export default App;

