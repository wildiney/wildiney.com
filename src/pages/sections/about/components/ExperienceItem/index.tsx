import { renderLines } from '@/libs/renderLines';

interface IExperienceItem {
  position: string
  description: string
  period: string
}

function ExperienceItem ({ position, description, period }: IExperienceItem) {
  return (
    <div className='flex flex-col md:flex-row gap-12 items-center border-b border-b-gray-400 py-6 justify-between'>
      <div className='w-full md:max-w-7/12'>
        <h4 className='text-2xl text-primary font-medium mb-2'>{position}</h4>
        <p className='text-gray-700'>{renderLines(description)}</p>
      </div>
      <div className='font-poppins font-bold text-5xl whitespace-nowrap text-gray-800/80'>{period}</div>
    </div>
  )
}

export default ExperienceItem