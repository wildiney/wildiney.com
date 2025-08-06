import Header from '@/components/Header';
import About from './sections/about';
import Contact from './sections/contact';
import Intro from './sections/intro';
import Portfolio from './sections/portfolio';


function Home () {


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