import LinkTree from '@/components/Linktree/LinkTree';
import './App.css';
import { socialMedia } from './data/data';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';


function App () {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: `${window.location.pathname} + ${window.location.search}`, title: "LinkTree" });
  }, []);

  return (
    <>
      <LinkTree data={socialMedia} />
    </>
  )
}

export default App
