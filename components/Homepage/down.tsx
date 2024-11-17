import Image from "next/image"
import bgimage from "../../images/downbg.png"
import Wreaper from "../Wreaper"

const Down = () => {
  return (
<div className="w-full relative h-[500px]">
  <div className="absolute inset-0">
    <Image
      src={bgimage}
      alt="background image"
      layout="fill"
      objectFit="cover"
      className="top-0 left-0"
    />
  </div>

  <div className="absolute inset-0 flex justify-center items-center px-4 py-6">
    <div className="text-white flex flex-col gap-3 max-w-lg text-center">
      <h1 className="font-lora font-bold text-[36px] leading-[46px] text-white">
        Richard Norton photorealistic rendering as real photos
      </h1>
      <p className="font-lora font-normal text-[12px] leading-[20px] text-[#E5E5E5]">
        Progressively incentivize cooperative systems through technically
        sound functionalities. The credibly productivate seamless data.
      </p>
      <p className="text-[#E5E5E5]">
        {new Date().toLocaleDateString()}
      </p>
    </div>
  </div>
</div>



  
  )
}
 
export default Down