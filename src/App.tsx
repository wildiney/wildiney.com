import React, { Suspense } from 'react';
import './App.css';

import Analytics from '@/components/Analytics';
import Loading from '@/components/Loading';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollToAnchor from '@/libs/ScrollToAnchor';
import Agenda from '@/pages/Agenda/Agenda';
import Home from '@/pages/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';

const BolsaFamilia = React.lazy(() => import('@/pages/Home/components/Portfolio/bolsa-familia'))
const Indra = React.lazy(() => import('@/pages/Home/components/Portfolio/indra'))
const EcommerceSanrio = React.lazy(() => import('@/pages/Home/components/Portfolio/sanrio'))

function App () {
  return (
    <HashRouter>
      <Analytics />
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/globalweb/bolsa-familia" element={<BolsaFamilia />} />
          <Route path="/portfolio/sanrio/ecommerce" element={<EcommerceSanrio />} />
          <Route path="/portfolio/indra" element={<Indra />} />
          <Route path="/agenda" element={<Agenda />} />
        </Routes>
      </Suspense>
      <ScrollToAnchor />
    </HashRouter>
  );
}

export default App;
