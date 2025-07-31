import Header from '@/components/Header';
import { usePageTracking } from '@/hooks/usePageTracking';
import Intro from './sections/intro';
import About from './sections/about';
import Contact from './sections/contact';


function Home () {
  usePageTracking("Home")


  return (
    <>
      <Header />
      <main className='flex w-full flex-col'>
        <Intro />
        <About />
        {/* <div className='w-full h-screen bg-blue-700 p-16' id='portfolio'>
          <h2 className='text-white'>Portfolio</h2>
        </div> */}
        <Contact />
      </main>
    </>
  )
}

export default Home