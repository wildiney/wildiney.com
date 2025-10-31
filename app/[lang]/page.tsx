import Header from '@/app/[lang]/components/Header/Header'
import Intro from '@/app/[lang]/components/Intro/Intro'
import About from '@/app/[lang]/components/About/About'
import Portfolio from '@/app/[lang]/components/Portfolio/Portfolio'
import Contact from '@/app/[lang]/components/Contact/Contact'

export default async function Page () {

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
  );
}
