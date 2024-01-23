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

function App() {
  return (
    <>
      <div className="content">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Eyebrows />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Discount" element={<Discount />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Team" element={<Team />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
export default App;

//<FontAwesomeIcon icon="fa-brands fa-twitter" />
/**
         <div className="width_screen">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
 */
