import { useState } from "react";

function Image ({ img }: { img: string }) {
  const [size, setSize] = useState(true)

  return (
    <div className={`w-full h-[32rem] overflow-hidden mt-17 bg-center bg-gray-200`}>
      <img src={img}
        onClick={() => { setSize(!size) }}
        className={`block mx-auto object-cover h-full  ${size ? " h-full w-full object-cover" : "md:h-full md:object-center w-5xl"} transition-all`} />
    </div>
  )
}

export default Image