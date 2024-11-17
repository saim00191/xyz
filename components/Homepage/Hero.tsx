"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import bgimage from "../../images/bgimage.png";
import bgimage1 from "../../images/bgimage1.png";
import bgimage2 from "../../images/bgimage2.png";
import bgimage3 from "../../images/bgimage3.png";
import Wreaper from "../Wreaper";
const Hero = () => {
  const images = [bgimage, bgimage1, bgimage2, bgimage3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className=" w-full relative h-screen">
      <div className="absolute inset-0">
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="top-0 left-0"
        />
      </div>

      <div className="absolute inset-0 w-full md:w-[50%]  flex justify-start items-center px-4 py-6">
        <Wreaper>
          <div className="text-white max-w-lg">
            <h1 className=" font-lora font-bold text-[36px] leading-[46px] text-white">
              Richard Norton photorealistic rendering as real photos
            </h1>
            <p className=" font-lora font-normal text-[12px] leading-[20px] text-[#E5E5E5]">
              Progressively incentivize cooperative systems through technically
              sound functionalities. The credibly productivate seamless data.
            </p>
          </div>
        </Wreaper>
      </div>
    </div>
  );
};

export default Hero;
