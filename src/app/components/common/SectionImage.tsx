import Image from "next/image";

type SectionImageProps = {
  image: string;
  alt: string;
  icon?: string;
  line1?: string;
  line2?: string;
}

function SectionImage ({ image, alt, icon, line1, line2 }: SectionImageProps) {
  return (
    <div className="relative order-1 lg:order-2">
      <div className="absolute -inset-4 bg-linear-to-tr from-cyan-400/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border  border-gray-800 bg-surface-dark shadow-lg ">
        {/* Placeholder for Profile Image - Using a gradient or solid color if no image */}
        <div className="w-full h-full bg-gray-800 flex items-center justify-center overflow-hidden">
          <Image
            src={image}
            alt={alt}
            width={500}
            height={500}
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
            unoptimized // Allow external github image for demo
          />
        </div>

        {/* Location Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pt-64 bg-linear-to-t from-black/90 to-transparent">
          <div className="flex items-center gap-4">

            <div className="h-12 w-12 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <span className="material-symbols-outlined text-white">{icon}</span>
            </div>

            <div>
              <p className="text-white font-bold">{line1}</p>
              <p className="text-gray-300 text-sm">{line2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionImage