import { BsArrowDownCircle } from "react-icons/bs"

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Intro () {
  const { t } = useTranslation();
  return (
    <section id="intro" className="flex flex-col justify-center w-full h-screen min-h-96 relative sm:justify-end">
      <div className="flex flex-col sm:flex-row w-full p-16 gap-16 sm:gap-0 sm:items-end sm:justify-between justify-evenly">
        <div className="relative inline-block text-primary text-5xl sm:text-[3.5rem] md:text-[5.4rem] lg:text-9xl text-center sm:text-left">
          <span className="opacity-60 z-20 block">Product</span>
          <span className="relative sm:-mt-4 md:-mt-8 lg:-mt-11 sm:left-[0.65rem] md:left-[1rem] lg:left-[1.35rem] block">Designer</span>
        </div>
        <p className="text-primary text-lg lg:text-2xl text-center sm:text-left whitespace-pre-line">
          {t('intro.hello')}
        </p>
      </div>
      <Link
        to="#about"
        aria-label="Ir para a seção About"
        className="block sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <BsArrowDownCircle size={32} color="lightgray" className="animate-bounce-squish" />
      </Link>
    </section>
  );
}

export default Intro