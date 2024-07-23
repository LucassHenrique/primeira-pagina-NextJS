import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";


type ImagesProps = {
  src: StaticImageData;
  alt: string;
  description: String;
  avg: string;
  est: string;
};

export default function ImageContent({
  src,
  alt,
  description,
  avg,
  est,
}: ImagesProps) {
  return (
    <div className="flex sm:flex-col lg:flex-row  sm:gap-8 lg:gap-14 lg:px-10 pt-24 w-screen">
      <div className="lg:absolute">
        <div className="flex sm:gap-2 md:gap-3 sm:justify-center md:justify-start md:px-10">
          <span className="text-gray-600 font-Barlow_Condensed sm:tracking-wide sm:text-base md:text-xl">
            01{" "}
          </span>
          <h1 className="text-white sm:text-center md:text-start font-Barlow_Condensed sm:text-base md:text-xl tracking-widest whitespace-nowrap">
            PICK YOUR DESTINATION
          </h1>
        </div>
      </div>
    
       <div className="w-full flex ">
       <Image className="sm:w-[170px] sm:h-[170px] md:w-[300px] md:h-[300px] m-auto" src={src} alt={alt} />
       </div>
   
      <div>
        <div className=" flex flex-col md:gap-2 sm:text-center lg:text-start sm:px-[30px] sm:pt-10">
          <h1 className="text-white sm:text-[56px] md:text-[80px] font-Bellefair">{alt}</h1>
          <p className="text-skyBlue sm:text-sm md:text-base font-Barlow">{description}</p>
        </div>
        <div className="sm:py-10 md:py-12 md:pt-20">
          <div className="w-full h-px bg-white/30 backdrop-blur-md"></div>
        </div>
        <div className="flex sm:flex-col md:flex-row md:justify-center lg:justify-start lg:pl-8 sm:gap-5  lg:gap-14 text-center">
          <div>
            <p className="text-skyBlue font-Barlow_Condensed sm:tracking-widest sm:text-sm">
              AVG. DISTANCE
            </p>
            <p className="text-white font-Bellefair  sm:text-[28px]">{avg}</p>
          </div>
          <div>
            <p className="text-skyBlue font-Barlow_Condensed sm:tracking-widest sm:text-sm">
              EST. TRAVEL TIME
            </p>
            <p className="text-white font-Bellefair sm:text-[28px]">{est}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
