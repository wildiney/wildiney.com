import Header from '@/components/Header';
import About from '@/pages/Home/components/About'
import Contact from '@/pages/Home/components/Contact';
import Intro from '@/pages/Home/components/Intro';
import Portfolio from '@/pages/Home/components/Portfolio';


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