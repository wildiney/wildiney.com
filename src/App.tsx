import './App.css';


import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import LinkTree from '@/pages/LinkTree';
import ScrollToAnchor from './ScrollToAnchor';
import BolsaFamilia from './pages/sections/portfolio/bolsa-familia';
import EcommerceSanrio from './pages/sections/portfolio/sanrio';
import Indra from './pages/sections/portfolio/indra';
import ScrollToTop from '@/components/ScrollToTop';

function App () {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/linktree" element={<LinkTree />} />
        <Route path="/portfolio/bolsa-familia" element={<BolsaFamilia />} />
        <Route path="/portfolio/sanrio/ecommerce" element={<EcommerceSanrio />} />
        <Route path="/portfolio/indra" element={<Indra />} />
      </Routes>
      <ScrollToAnchor />
    </HashRouter>
  );
}

export default App;
