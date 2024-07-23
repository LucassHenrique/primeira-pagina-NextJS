import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import vehiclePTImg from "@/assets/technology/image-launch-vehicle-portrait.jpg";
import spaceportPTImg from "@/assets/technology/image-spaceport-portrait.jpg";
import capsulePTImg from "@/assets/technology/image-space-capsule-portrait.jpg";

import vehicleLEImg from "@/assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportLEImg from "@/assets/technology/image-spaceport-landscape.jpg";
import capsuleLEImg from "@/assets/technology/image-space-capsule-landscape.jpg";

interface techType {
  imagesrc: StaticImageData;
  techname: string;
  description: string;
}

const TechInfosSE: { [key: string]: techType } = {
  vehicle: {
    imagesrc: vehicleLEImg,
    techname: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  spaceport: {
    imagesrc: spaceportLEImg,
    techname: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  capsule: {
    imagesrc: capsuleLEImg,
    techname: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
};

const TechInfosDP: { [key: string]: techType } = {
  vehicle: {
    imagesrc: vehiclePTImg,
    techname: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  spaceport: {
    imagesrc: spaceportPTImg,
    techname: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  capsule: {
    imagesrc: capsulePTImg,
    techname: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
};

export default function TechContent() {
  const [contentSE, setContentSE] = useState<techType>(TechInfosSE.vehicle);
  const [contentDP, setContentDP] = useState<techType>(TechInfosDP.vehicle);

  const handletechInfosSE = (techType: string) => {
    setContentSE(TechInfosSE[techType]);
  };

  const handletechInfosDP = (techType: string) => {
    setContentDP(TechInfosDP[techType]);
  };

  const handleBtnStyle = () => {
    if (contentSE.techname === "LAUNCH VEHICLE") {
      return "broder rounded-full bg-white font-Bellefair sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] sm:text-base md:text-2xl";
    } else if (contentSE.techname === "SPACEPORT") {
      return "broder rounded-full bg-white font-Bellefair sm:w-[40px] sm:h-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] sm:text-base md:text-2xl";
    } else if (contentSE.techname === "SPACE CAPSULE") {
      return "broder rounded-full bg-white font-Bellefair sm:w-[40px] sm:h-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] sm:text-base md:text-2xl";
    }
  };

  const handleBtnStyleDP = () => {
    if (contentDP.techname === "LAUNCH VEHICLE") {
      return "broder rounded-full bg-white font-Bellefair sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] sm:text-base md:text-2xl";
    } else if (contentDP.techname === "SPACEPORT") {
      return "broder rounded-full bg-white font-Bellefair sm:w-[40px] sm:h-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] sm:text-base md:text-2xl";
    } else if (contentDP.techname === "SPACE CAPSULE") {
      return "broder rounded-full bg-white font-Bellefair sm:w-[40px] sm:h-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] sm:text-base md:text-2xl";
    }
  };

  return (
    <section className="sm:mt-24 md:mt-36 lg:mt-44 2xl:mt-56">
      <div className="flex gap-3 tracking-widest text-white font-Barlow_Condensed sm:justify-center md:justify-start sm:text-base md:text-xl 2xl:text-[28px] sm:mx-0 md:mx-[5%] lg:mx-[5%]">
        <span className="text-gray-500">03</span> <h1>SPACE LAUNCH 101</h1>
      </div>
      {/* MOBILE */}
      <section className="sm:pt-5 md:pt-10 sm:block lg:hidden">
        <Image
          src={contentSE.imagesrc}
          alt={contentSE.techname}
          className="w-full h-full"
        />
        <div className="flex sm:gap-4 md:gap-7 justify-center sm:pb-7 sm:pt-7 md:pb-10 md:pt-10">
          <button
            onClick={() => handletechInfosSE("vehicle")}
            className={`${
              contentSE.techname === "LAUNCH VEHICLE"
                ? handleBtnStyle()
                : "border border-gray-500 rounded-full  font-Bellefair text-white sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] sm:text-base md:text-2xl"
            }`}
          >
            1
          </button>
          <button
            onClick={() => handletechInfosSE("spaceport")}
            className={`${
              contentSE.techname === "SPACEPORT"
                ? handleBtnStyle()
                : "border border-gray-500 rounded-full font-Bellefair text-white sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] sm:text-base md:text-2xl"
            }`}
          >
            2
          </button>
          <button
            onClick={() => handletechInfosSE("capsule")}
            className={`${
              contentSE.techname === "SPACE CAPSULE"
                ? handleBtnStyle()
                : "border border-gray-500 rounded-full font-Bellefair text-white sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] sm:text-base md:text-2xl"
            }`}
          >
            3
          </button>
        </div>

        <div className="flex flex-col items-center sm:mx-[12%] md:mx-[20%] sm:gap-2 md:gap-5">
          <h1 className="tracking-widest text-gray-400 font-Barlow_Condensed sm:text-sm md:text-base">
            THE TERMINOLOGY…
          </h1>
          <h2 className="font-Bellefair text-white sm:text-xl md:text-[40px] sm:mb-2">
            {contentSE.techname}
          </h2>
          <p className="font-Barlow text-skyBlue sm:text-[15px] md:text-base text-center">
            {contentSE.description}
          </p>
        </div>
      </section>
      {/* DESK */}
      <section className="justify-center items-center lg:pt-10 sm:hidden lg:flex">
        <div className="lg:w-[80%]">
          <div className="flex lg:gap-7 2xl:gap-16 lg:mx-[5%] 2xl:mx-[10%]">
            <div className="flex flex-col sm:gap-4 md:gap-7 justify-center">
              <button
                onClick={() => handletechInfosDP("vehicle")}
                className={`${
                  contentDP.techname === "LAUNCH VEHICLE"
                    ? handleBtnStyleDP()
                    : "border border-gray-500 rounded-full  font-Bellefair text-white sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] sm:text-base md:text-2xl"
                }`}
              >
                1
              </button>
              <button
                onClick={() => handletechInfosDP("spaceport")}
                className={`${
                  contentDP.techname === "SPACEPORT"
                    ? handleBtnStyleDP()
                    : "border border-gray-500 rounded-full font-Bellefair text-white sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] sm:text-base md:text-2xl"
                }`}
              >
                2
              </button>
              <button
                onClick={() => handletechInfosDP("capsule")}
                className={`${
                  contentDP.techname === "SPACE CAPSULE"
                    ? handleBtnStyleDP()
                    : "border border-gray-500 rounded-full font-Bellefair text-white sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] sm:text-base md:text-2xl"
                }`}
              >
                3
              </button>
            </div>

            <div className="flex flex-col lg:gap-2 2xl:gap-5">
              <h1 className="text-skyBlue font-Barlow_Condensed tracking-widest">THE TERMINOLOGY…</h1>
              <h2 className="text-white font-Bellefair lg:text-4xl 2xl:text-[56px] lg:pb-2">{contentDP.techname}</h2>
              <p className="text-skyBlue font-Barlow text-lg 2xl:mr-[55%] lg:mr-[20%]">{contentDP.description}</p>
            </div>
          </div>
        </div>

        <div className="">
          <Image
            src={contentDP.imagesrc}
            alt={contentDP.techname}
            className="lg:w-[315px] lg:h-[327px] 2xl:w-[515px] 2xl:h-[527px]"
          />
        </div>
      </section>
    </section>
  );
}
