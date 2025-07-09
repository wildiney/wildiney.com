import { socialMedia } from '../data/data';
import { usePageTracking } from '@/hooks/usePageTracking';

import Background from '@/components/Background/Background';
import LinkTree from '@/components/Linktree/LinkTree';

function Home () {
  usePageTracking("LinkTree")

  return (
    <Background>
      <LinkTree data={socialMedia} />
    </Background>
  )
}

export default Home