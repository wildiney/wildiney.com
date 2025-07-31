// import Logo from '@/assets/logo.svg'

import Navigation from '@/components/Navigation';
import { MdMenu } from "react-icons/md";
import { useState } from 'react';
import MobileMenu from '@/components/Navigation/MobileMenu';


function Header () {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className='fixed flex flex-row justify-between bg-gray-50/30 backdrop-blur-md  px-8 gap-8 sm:flex-row w-full sm:justify-between sm:px-16 py-4 z-20 shadow'>
        <div className='flex whitespace-nowrap gap-4  text-2xl mx-0 sm:text-3xl font-semibold text-primary'>
          Wildiney Di Masi
        </div>
        <Navigation />
        <button
          id='menu'
          className='flex justify-center items-center lg:hidden border rounded w-8 h-8 cursor-pointer aspect-square'
          onClick={() => setMenuOpen(true)}
          aria-label='Abrir menu'
        >
          <MdMenu />
        </button>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Navigation mobile onNavigate={() => setMenuOpen(false)} />
      </MobileMenu>
    </>
  );
}

export default Header