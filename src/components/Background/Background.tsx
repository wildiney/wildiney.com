import { ReactNode } from 'react'
import bgMovie from '../../assets/background.mp4'

export default function Background ({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full h-screen">
      <video autoPlay muted loop className="fixed top-0 left-0 object-cover w-full h-full">
        <source src={bgMovie} type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
      <div className="fixed top-0 left-0 w-full h-full bg-black/70" />
      <div className="relative z-10 flex flex-col items-center h-full overflow-y-auto text-white">
        {children}
      </div>
    </div >
  )
}