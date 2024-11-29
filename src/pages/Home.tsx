import { useEffect } from 'react';
import { socialMedia } from '../data/data';

import ReactGA from 'react-ga4';

import Background from '@/components/Background/Background';
import LinkTree from '@/components/Linktree/LinkTree';

function Home () {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: `${window.location.pathname} + ${window.location.search}`, title: "LinkTree" });
  }, []);
  return (
    <Background>
      <LinkTree data={socialMedia} />
    </Background>
  )
}

export default Home