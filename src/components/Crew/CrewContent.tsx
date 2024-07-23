"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import douglasImg from "@/assets/crew/image-douglas-hurley.png";
import markImg from "@/assets/crew/image-mark-shuttleworth.png";
import victorImg from "@/assets/crew/image-victor-glover.png";
import ansariImg from "@/assets/crew/image-anousheh-ansari.png";

type CrewContent = {
  office: string;
  name: string;
  description: string;
  imageSrc: StaticImageData;
};

const crewcontents: { [key: string]: CrewContent } = {
  douglas: {
    office: "COMMANDER",
    name: "DOUGLAS HURLEY",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    imageSrc: douglasImg,
  },
  mark: {
    office: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    imageSrc: markImg,
  },
  victor: {
    office: "PILOT",
    name: "VICTOR GLOVER",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    imageSrc: victorImg,
  },
  ansari: {
    office: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    imageSrc: ansariImg,
  },
};

export default function CrewContent() {
  const [currentCrewMember, setCurrentCrewMember] = useState<CrewContent>(
    crewcontents.douglas
  );

  const handleCrewContentChange = (CrewContent: string) => {
    setCurrentCrewMember(crewcontents[CrewContent]);
  };

  const handleBubbleMenu = () => {
    if (currentCrewMember.name === "DOUGLAS HURLEY") {
      return "sm:w-[10px] sm:h-[10px] lg:w-[15px] lg:h-[15px] bg-white rounded-full";
    } else if (currentCrewMember.name === "MARK SHUTTLEWORTH") {
      return "sm:w-[10px] sm:h-[10px] lg:w-[15px] lg:h-[15px] bg-white rounded-full";
    } else if (currentCrewMember.name === "VICTOR GLOVER") {
      return "sm:w-[10px] sm:h-[10px] lg:w-[15px] lg:h-[15px] bg-white rounded-full";
    } else if (currentCrewMember.name === "ANOUSHEH ANSARI") {
      return "sm:w-[10px] sm:h-[10px] lg:w-[15px] lg:h-[15px] bg-white rounded-full";
    }
  };

  const handleSizeCrewImage = () => {
    if (currentCrewMember.name === "DOUGLAS HURLEY") {
      return "sm:w-[177px] sm:h-[222px] md:w-[456px] md:h-[572px] lg:w-[368px] lg:h-[512px] 2xl:w-[568px] 2xl:h-[712px]";
    } else if (currentCrewMember.name === "MARK SHUTTLEWORTH") {
      return "sm:w-[153px] sm:h-[222px] md:w-[378px] md:h-[532px] lg:w-[353px] lg:h-[454px] 2xl:w-[453px] 2xl:h-[654px]";
    } else if (currentCrewMember.name === "VICTOR GLOVER") {
      return "sm:w-[180px] sm:h-[222px] md:w-[433px] md:h-[532px] lg:w-[454px] lg:h-[481px] 2xl:w-[554px] 2xl:h-[681px]";
    } else if (currentCrewMember.name === "ANOUSHEH ANSARI") {
      return "sm:w-[226px] sm:h-[223px] md:w-[539px] md:h-[532px] lg:w-[415px] lg:h-[407px] 2xl:w-[615px] 2xl:h-[607px]";
    }
  };

  return (
    <section className="min-h-screen flex flex-col overflow-hidden mt-10">
      <div className="flex-grow  ">
        <div className="lg:hidden font-Barlow_Condensed sm:flex sm:justify-center md:justify-start md:mx-[5%] tracking-widest text-white gap-4 sm:mt-28 sm:text-base md:text-xl md:mt-32">
          <span className="text-gray-500">02</span>{" "}
          <h1 className="">MEET YOUR CREW</h1>{" "}
        </div>
        {/* conteúdo de celular */}
        <div className="sm:mx-[5%] md:mx-[15%] sm:flex sm:flex-col md:flex-col-reverse sm:gap-6 lg:hidden md:hidden ">
          <div className="flex flex-col justify-center items-center sm:mt-8 md:mt-5 ">
            <Image
              src={currentCrewMember.imageSrc}
              alt={currentCrewMember.name}
              className={`${handleSizeCrewImage()}`}
            />
            <div className="sm:w-[95%] sm:bg-gray-600 sm:h-px md:hidden" />
          </div>

          <div className="flex justify-center items-center gap-5 sm:pt-2">
            <button
              className={`${
                currentCrewMember.name === "DOUGLAS HURLEY"
                  ? handleBubbleMenu()
                  : "w-[10px] h-[10px] bg-gray-600 rounded-full"
              }`}
              onClick={() => handleCrewContentChange("douglas")}
            ></button>

            <button
              className={`${
                currentCrewMember.name === "MARK SHUTTLEWORTH"
                  ? handleBubbleMenu()
                  : "w-[10px] h-[10px] bg-gray-600 rounded-full"
              }`}
              onClick={() => handleCrewContentChange("mark")}
            ></button>

            <button
              className={`${
                currentCrewMember.name === "VICTOR GLOVER"
                  ? handleBubbleMenu()
                  : "w-[10px] h-[10px] bg-gray-600 rounded-full"
              }`}
              onClick={() => handleCrewContentChange("victor")}
            ></button>

            <button
              className={`${
                currentCrewMember.name === "ANOUSHEH ANSARI"
                  ? handleBubbleMenu()
                  : "w-[10px] h-[10px] bg-gray-600 rounded-full"
              }`}
              onClick={() => handleCrewContentChange("ansari")}
            ></button>
          </div>
          <div>
            {/* mobile infos */}
            <div className="flex items-center flex-col text-center sm:gap-1 md:gap-5">
              <h1 className="sm:text-base md:text-2xl text-gray-500 font-Bellefair">
                {currentCrewMember.office}
              </h1>
              <h1 className="sm:text-2xl md:text-[40px] text-white font-Bellefair pb-2">
                {currentCrewMember.name}
              </h1>
              <h1 className="sm:text-[15px] md:text-base text-skyBlue font-Barlow">
                {currentCrewMember.description}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-[20%]  gap-6  sm:hidden md:block lg:hidden mt-10">
        <div className="flex flex-col gap-6">
          {/* mobile infos */}
          <div className="flex items-center flex-col text-center sm:gap-1 md:gap-5">
            <h1 className="sm:text-base md:text-2xl text-gray-500 font-Bellefair">
              {currentCrewMember.office}
            </h1>
            <h1 className="sm:text-2xl md:text-[40px] text-white font-Bellefair pb-2">
              {currentCrewMember.name}
            </h1>
            <h1 className="sm:text-[15px] md:text-base text-skyBlue font-Barlow">
              {currentCrewMember.description}
            </h1>
          </div>

          <div className="flex justify-center items-center gap-5 sm:pt-2 pb-10">
            <button
              className={`${
                currentCrewMember.name === "DOUGLAS HURLEY"
                  ? handleBubbleMenu()
                  : "w-[10px] h-[10px] bg-gray-600 rounded-full"
              }`}
              onClick={() => handleCrewContentChange("douglas")}
            ></button>

            <button
              className={`${
                currentCrewMember.name === "MARK SHUTTLEWORTH"
                  ? handleBubbleMenu()
                  : "w-[10px] h-[10px] bg-gray-600 rounded-full"
              }`}
              onClick={() => handleCrewContentChange("mark")}
            ></button>

            <button
              className={`${
                currentCrewMember.name === "VICTOR GLOVER"
                  ? handleBubbleMenu()
                  : "w-[10px] h-[10px] bg-gray-600 rounded-full"
              }`}
              onClick={() => handleCrewContentChange("victor")}
            ></button>

            <button
              className={`${
                currentCrewMember.name === "ANOUSHEH ANSARI"
                  ? handleBubbleMenu()
                  : "w-[10px] h-[10px] bg-gray-600 rounded-full"
              }`}
              onClick={() => handleCrewContentChange("ansari")}
            ></button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center sm:mt-8 md:mt-5 h-[532px]">
          <Image
            src={currentCrewMember.imageSrc}
            alt={currentCrewMember.name}
            className={`${handleSizeCrewImage()}`}
          />
        </div>
      </div>

      {/* conteúdo desktop, HELP...*/}
      <div className="flex-none lg:flex md:justify-center  flex-col md:hidden sm:hidden lg:mx-[2%] 2xl:mx-[10%]">
        <section className="flex">
          <div className="w-screen">
            <div className="flex flex-col">
              <div className="flex font-Barlow_Condensed lg:text-xl 2xl:text-[28px] tracking-widest text-white gap-4 lg:mb-20 2xl:mb-40">
                <span className="text-gray-500">02</span>{" "}
                <h1 className="">MEET YOUR CREW</h1>{" "}
              </div>

              <div className="flex justify-start flex-col sm:gap-1 md:gap-5 lg:h-56 2xl:h-52">
                <h1 className="lg:text-2xl 2xl:text-[32px] text-gray-500 font-Bellefair">
                  {currentCrewMember.office}
                </h1>
                <h1 className="lg:text-[40px] 2xl:text-[56px] text-white font-Bellefair pb-2">
                  {currentCrewMember.name}
                </h1>
                <h1 className="lg:text-base 2xl:text-[18px] text-skyBlue font-Barlow  2xl:w-[60%]">
                  {currentCrewMember.description}
                </h1>
              </div>

              <div className="flex gap-5 lg:mt-16 2xl:mt-52">
                <button
                  className={`${
                    currentCrewMember.name === "DOUGLAS HURLEY"
                      ? handleBubbleMenu()
                      : "w-[15px] h-[15px] bg-gray-600 rounded-full"
                  }`}
                  onClick={() => handleCrewContentChange("douglas")}
                ></button>

                <button
                  className={`${
                    currentCrewMember.name === "MARK SHUTTLEWORTH"
                      ? handleBubbleMenu()
                      : "w-[15px] h-[15px] bg-gray-600 rounded-full"
                  }`}
                  onClick={() => handleCrewContentChange("mark")}
                ></button>

                <button
                  className={`${
                    currentCrewMember.name === "VICTOR GLOVER"
                      ? handleBubbleMenu()
                      : "w-[15px] h-[15px] bg-gray-600 rounded-full"
                  }`}
                  onClick={() => handleCrewContentChange("victor")}
                ></button>

                <button
                  className={`${
                    currentCrewMember.name === "ANOUSHEH ANSARI"
                      ? handleBubbleMenu()
                      : "w-[15px] h-[15px] bg-gray-600 rounded-full"
                  }`}
                  onClick={() => handleCrewContentChange("ansari")}
                ></button>
              </div>
            </div>
          </div>

          <div className="w-screen">
            <div className="flex justify-end">
              <div className="lg:h-[500px] 2xl:h-[712px]">
                <Image
                  src={currentCrewMember.imageSrc}
                  alt={currentCrewMember.name}
                  className={`w-full h-full`}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
