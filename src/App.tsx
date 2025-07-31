import './App.css';


import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import LinkTree from '@/pages/LinkTree';
import ScrollToAnchor from './ScrollToAnchor';

function App () {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/linktree" element={<LinkTree />} />
      </Routes>
      <ScrollToAnchor />
    </HashRouter>
  );
}

export default App;
