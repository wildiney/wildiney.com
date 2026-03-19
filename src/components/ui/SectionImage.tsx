import Image from 'next/image'
import { clsx } from 'clsx'

interface SectionImageProps {
  src: string
  alt: string
  caption?: string
  className?: string
  priority?: boolean
}

export function SectionImage({ src, alt, caption, className, priority }: SectionImageProps) {
  return (
    <figure className={clsx('my-8', className)}>
      <div className="relative w-full overflow-hidden bg-rule">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto object-cover"
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-muted text-center font-sans">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
