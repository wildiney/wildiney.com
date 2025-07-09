import ReactGA from 'react-ga4';

export function ButtonPortfolio ({ icon, site, link, ariaLabel }: { icon: React.ReactNode, site: string, link: string, ariaLabel?: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    ReactGA.gtag('event', 'click', {
      event_category: 'link',
      event_label: site,
      timestamp: new Date().toISOString(),
      position_x: e.clientX,
      position_y: e.clientY,
      platform: window.innerWidth < 768 ? "mobile" : "desktop",
      referrer: document.referrer
    });
    setTimeout(() => {
      window.open(link, '_blank');
    }, 100);
  }
  return (
    <div className="relative h-[80px] w-full max-w-xl min-w-80">
      <a className="group flex justify-center items-center w-full h-[70px] p-4 mb-3 relative bg-white/50 text-quaternary rounded-md shadow-md font-medium overflow-hidden hover:bg-white/70 hover:text-secondary hover:border-2 hover:border-secondary hover:shadow-md  hover:cursor-pointer transition-all duration-300" target="_blank" href={link} rel="noopener noreferrer" onClick={handleClick} aria-label={ariaLabel}>
        <span className="flex mt-[1px] mr-2 text-4xl">{icon}</span>
        <span className="flex mt-0 text-2xl ">{site}</span>
        <span className="w-11 h-11 bg-secondary rotate-45 absolute right-[-70px] top-[70%] transition-[right] duration-300 ease-in-out group-hover:right-[-25px]"></span>
      </a>
    </div>
  );
}
