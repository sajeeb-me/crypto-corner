import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Coins from './components/Coins/Coins'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'
import CoinDetails from './components/CoinDetails/CoinDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/coinDetails/:coinID' element={<CoinDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
