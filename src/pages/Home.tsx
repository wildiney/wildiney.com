import Header from '@/components/Header';
import { usePageTracking } from '@/hooks/usePageTracking';
import Intro from './sections/intro';
import About from './sections/about';
import Contact from './sections/contact';
import Portfolio from './sections/portfolio';


function Home () {
  usePageTracking("Home")


  return (
    <>
      <Header />
      <main className='flex w-full flex-col'>
        <Intro />
        <About />
        <Portfolio />
        <Contact id='contact' topColor={"bg-gray-100"} />
      </main>
    </>
  )
}

export default Home