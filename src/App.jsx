import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import CategoryPage from './pages/CategoryPage';
import ItemPage from './pages/ItemPage';
import JewerlyPage from './pages/JewerlyPage';
import LandingPage from './pages/LandingPage';
import MacramePage from './pages/MacramePage';
import NotFoundPage from './pages/NotFoundPage';
import SewingPage from './pages/SewingPage';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/jewerly" element={<JewerlyPage />}></Route>
        <Route path="/sewing" element={<SewingPage />}></Route>
        <Route path="/macrame" element={<MacramePage />}></Route>
        <Route path="/item/:id" element={<ItemPage />}></Route>
        <Route path="/category/:categoryId" element={<CategoryPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
