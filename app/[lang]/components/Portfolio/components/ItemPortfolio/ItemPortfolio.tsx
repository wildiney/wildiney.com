// import ReactGA from 'react-ga4'
// import { Link } from 'react-router-dom'

import Image from "next/image"
import Link from "next/link"

function ItemPortfolio ({
  imageThumb,
  company,
  project,
  link,
  linkname,
}: {
  imageThumb: string
  company: string
  project: string
  link: string
  linkname: string
}) {
  return (
    <div className='flex flex-col w-full'>
      <Link
        href={link}
        className='aspect-video bg-gray-300 rounded-md overflow-hidden'
      >
        <Image src={imageThumb} alt={project} className='w-full' width={512} height={288} />
      </Link>
      <div className='flex flex-col lg:flex-row justify-between py-4 px-2 gap-4 lg:gap-8 items-center lg:items-start'>
        <Link
          href={link}
          className=''
        >
          <p className='text-sm text-gray-600 text-center lg:text-left mb-2'>
            {company}
          </p>
          <p className='text-lg text-gray-700 text-center lg:text-left font-medium'>
            {project}
          </p>
        </Link>
        <div className='lg:mt-8'>
          <Link
            href={link}
            className='border whitespace-nowrap px-4 py-2 border-primary rounded-full text-sm text-primary hover:bg-primary/10'
          >
            {linkname}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ItemPortfolio
