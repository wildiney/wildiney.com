import { ReactNode } from 'react'
import bgMovie from '../../assets/background.mp4'
import bgMovieDesktop from '../../assets/background1280fast.mp4'
import bgMovieMobile from '../../assets/background640fast.mp4'

export default function Background ({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full h-screen">
      <video autoPlay muted loop className="fixed top-0 left-0 object-cover w-full h-full">
        <source src={bgMovieMobile} media='(max-width: 640px)' type="video/mp4" />
        <source src={bgMovieDesktop} media='(min-width: 641px) and (max-width: 1280px)' type="video/mp4" />
        <source src={bgMovie} media='(min-width: 1281px)' type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
      <div className="fixed top-0 left-0 w-full h-full bg-black/70" />
      <div className="relative z-10 flex flex-col items-center h-full overflow-y-auto text-white">
        {children}
      </div>
    </div >
  )
}