import './App.css';

import ScrollToTop from '@/components/ScrollToTop';
import ScrollToAnchor from '@/libs/ScrollToAnchor';
import Home from '@/pages/Home';
import BolsaFamilia from '@/pages/sections/portfolio/bolsa-familia';
import Indra from '@/pages/sections/portfolio/indra';
import EcommerceSanrio from '@/pages/sections/portfolio/sanrio';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App () {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/globalweb/bolsa-familia" element={<BolsaFamilia />} />
        <Route path="/portfolio/sanrio/ecommerce" element={<EcommerceSanrio />} />
        <Route path="/portfolio/indra" element={<Indra />} />
      </Routes>
      <ScrollToAnchor />
    </HashRouter>
  );
}

export default App;
