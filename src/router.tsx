import { Route, Routes } from 'react-router-dom';
import Blog from './pages/blog';
import Contacts from './pages/contacts';
import Discount from './pages/discount';
import Services from './pages/services';
import Team from './pages/team';
import Error from './pages/error';
import Eyebrows from './pages/eyebrows';
import Vacancies from './pages/vacancies/vacancies';
import Haidress from './pages/haidress';
import Cosmetic from './pages/cosmetic';
import Manicure from './pages/manicure';
import Home from './pages/home';

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
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
  );
};