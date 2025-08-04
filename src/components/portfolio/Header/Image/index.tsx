import { useState } from "react";

function Image ({ img }: { img: string }) {
  const [size, setSize] = useState(true)

  return (
    <div className={`w-full h-72 sm:h-96 md:h-[24rem] lg:h-[30rem] overflow-hidden mt-16 lg:mt-17 bg-center bg-gray-200`}>
      <img src={img}
        onClick={() => { setSize(!size) }}
        className={`block mx-auto object-cover h-full  ${size ? " h-full w-full object-cover" : "md:h-full md:object-center w-[62rem]"} transition-all lg:hover:opacity-50`} />
    </div>
  )
}

export default Image