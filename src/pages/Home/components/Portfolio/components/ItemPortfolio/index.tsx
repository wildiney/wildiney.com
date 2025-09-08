import ReactGA from 'react-ga4';

function ItemPortfolio ({ imageThumb, company, project, link, linkname }: { imageThumb: string, company: string, project: string, link: string, linkname: string }) {
  return (
    <div className="flex flex-col w-full">
      <a href={link}
        onClick={() => {
          ReactGA.event({
            category: 'Navigation',
            action: `Click portfolio project ${project}`,
            label: project
          });
        }}
        className="aspect-video bg-gray-300 rounded-md overflow-hidden">
        <img src={imageThumb} alt={project} className="w-full" />
      </a>
      <div className="flex flex-col lg:flex-row justify-between py-4 px-2 gap-4 lg:gap-8 items-center lg:items-start">
        <a href={link}
          className=""
          onClick={
            () => {
              ReactGA.event({
                category: 'Navigation',
                action: `Click portfolio project ${project}`,
                label: project
              });
            }}
        >
          <p className="text-sm text-gray-600 text-center lg:text-left mb-2">{company}</p>
          <p className="text-lg text-gray-700 text-center lg:text-left font-medium">{project}</p>
        </a>
        <div className="lg:mt-8">
          <a
            href={link}
            onClick={() => {
              ReactGA.event({
                category: 'Navigation',
                action: `Click portfolio project ${project}`,
                label: project
              });
            }}
            className="border whitespace-nowrap px-4 py-2 border-primary rounded-full text-sm text-primary hover:bg-primary/10"
          >{linkname}</a>
        </div>
      </div>
    </div >
  )
}

export default ItemPortfolio