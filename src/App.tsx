import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
import Blog from './pages/blog';
import Contacts from './pages/contacts';
import Discount from './pages/discount';
import Services from './pages/services';
import Team from './pages/team';
import Error from './pages/error';
import Navigation from './components/navigation';
import Eyebrows from './pages/eyebrows';
import Vacancies from './pages/vacancies/vacancies';
import Haidress from './pages/haidress';
import Cosmetic from './pages/cosmetic';
import Home from './pages/home';
import Manicure from './pages/manicure';
import UppButton from './components/uppButton';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback="loading">
      <div className="content">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Discount" element={<Discount />} />
          <Route path="/Services/Eyebrows" element={<Eyebrows />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Services/Haidress" element={<Haidress />} />
          <Route path="/Services/Cosmetic" element={<Cosmetic />} />
          <Route path="/Services/Manicure" element={<Manicure />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Vacancies" element={<Vacancies />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
      <UppButton />
    </Suspense>
  );
}
export default App;
