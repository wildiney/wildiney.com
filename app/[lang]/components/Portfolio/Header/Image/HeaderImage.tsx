'use client'
import Image from "next/image";
import { useState } from "react";

function HeaderImage ({ src, alt }: { src: string, alt: string }) {
  const [size, setSize] = useState(true)

  return (
    <button className={`w-full h-72 sm:h-96 md:h-96 lg:h-120 overflow-hidden mt-16 lg:mt-17 bg-center bg-gray-200`} onClick={() => { setSize(!size) }}>
      <Image width={1920} height={1080} src={src} alt={alt} className={`block mx-auto object-cover h-full  ${size ? " h-full w-full object-cover" : "md:h-full md:object-center w-248"} transition-all lg:hover:opacity-50`} />
    </button>
  )
}

export default HeaderImage