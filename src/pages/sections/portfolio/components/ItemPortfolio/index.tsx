import Modal from "@/components/Modal"

function ItemPortfolio ({ imageThumb, largeThumb, company, project, link, linkname }: { imageThumb: string, largeThumb: string, company: string, project: string, link: string, linkname: string }) {
  return (
    <div className="flex flex-col w-full">
      <div className="aspect-video bg-gray-300 rounded-md overflow-hidden">
        <Modal thumbnailSrc={imageThumb} largeSrc={largeThumb} alt={project} />
      </div>
      <div className="flex flex-col lg:flex-row justify-between py-4 px-2 gap-4 lg:gap-8 items-center lg:items-start">
        <div className="">
          <p className="text-sm text-gray-500 text-center lg:text-left mb-2">{company}</p>
          <p className="text-lg text-gray-700 text-center lg:text-left font-medium">{project}</p>
        </div>
        <div className="lg:mt-8">
          <a className="border whitespace-nowrap px-4 py-2 border-primary rounded-full text-sm text-primary hover:bg-primary/10" href={link}>{linkname}</a>
        </div>
      </div>
    </div>
  )
}

export default ItemPortfolio