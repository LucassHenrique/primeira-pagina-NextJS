"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import moonImg from "@/assets/destination/image-moon.png";
import marsImg from "@/assets/destination/image-mars.png";
import europaImg from "@/assets/destination/image-europa.png";
import titanImg from "@/assets/destination/image-titan.webp";
import Destination from "./Destination";

type Destination = {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  distance: string;
  travelTime: string;
};




const destinations: { [key: string]: Destination } = {
  
 

  moon: {
    title: "MOON",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    imageSrc: moonImg,
    distance: "384,400 KM",
    travelTime: "3 DAYS",
  },
  mars: {
    title: "MARS",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    imageSrc: marsImg,
    distance: "225 MIL. KM",
    travelTime: "7 MONTHS",
  },
  europa: {
    title: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    imageSrc: europaImg,
    distance: "670.9 MIL. KM",
    travelTime: "2 YEARS",
  },
  titan: {
    title: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    imageSrc: titanImg,
    distance: "1.4 BIL. KM",
    travelTime: "7 YEARS",
  },
};

const MainContent = () => {
  const [currentDestination, setCurrentDestination] = useState<Destination>(
    destinations.moon
  );

  const handleDestinationChange = (destination: string) => {
    setCurrentDestination(destinations[destination]);
  };

  const handleLineMenu = () => {
    if(currentDestination.title === "MOON") {
      return 'lg:w-[50px] sm:w-[35px] bg-white h-1 lg:mt-4 md:mt-2';
    } else if(currentDestination.title === "MARS") {
      return 'lg:w-[45px] sm:w-[33px] bg-white h-1 lg:mt-4 md:mt-2';
    } else if(currentDestination.title === "EUROPA") {
      return 'lg:w-[65px] sm:w-[50px] bg-white h-1 lg:mt-4 md:mt-2';
    } else if(currentDestination.title === "TITAN") {
      return 'lg:w-[45px] sm:w-[35px] bg-white h-1 lg:mt-4 md:mt-2';
    }
  }


  return (
    <section className=" sm:mt-24 lg:mt-28 xl:mt-44">
      <div className="sm:p-4  md:p-10 lg:p-12 2xl:p-20 flex sm:justify-center md:justify-start">
        <nav className="flex justify-between lg:w-full ">
          <div>
            <h1 className="text-white sm:text-base md:text-xl 2xl:text-[28px] font-Barlow_Condensed tracking-widest">
              <span className="text-gray-600 font-bold">01 </span>PICK YOUR DESTINATION
            </h1>
          </div>
        </nav>
      </div>
      <div className="flex justify-around sm:mx-[29px] lg:mx-10 xl:mx-24 2xl:mx-60 sm:flex-col lg:flex-row sm:items-center sm:gap-7">
        

        <div className="lg:w-[70%] xl:w-1/2 2xl:w-1/3">
        <Image
          src={currentDestination.imageSrc}
          alt={currentDestination.title}
          className="w-full max-w-xl mt-4 sm:w-[170px] sm:h-[170px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] 2xl:w-[445px] 2xl:h-[445px]"
        />
        </div>

        <div className="sm:text-center lg:text-start lg:w-[70%] xl:w-1/2 2xl:w-1/3 ml-auto">
          {/* mobile position */}
          <div className="flex gap-4 justify-center lg:hidden font-Barlow_Condensed tracking-widest ">
            <button
              className="text-skyBlue"
              onClick={() => handleDestinationChange("moon")}
            >
              MOON
              <div  className={`absolute ${currentDestination.title === "MOON" ? handleLineMenu() : ''}`}/>
            </button>
            
            <button
              className="text-skyBlue"
              onClick={() => handleDestinationChange("mars")}
            >
              MARS
              <div  className={`absolute ${currentDestination.title === "MARS" ? handleLineMenu() : ''}`}/>
            </button>
            <button
              className="text-skyBlue"
              onClick={() => handleDestinationChange("europa")}
            >
              EUROPA
              <div  className={`absolute ${currentDestination.title === "EUROPA" ? handleLineMenu() : ''}`}/>
            </button>
            <button
              className="text-skyBlue"
              onClick={() => handleDestinationChange("titan")}
            >
              TITAN
              <div  className={`absolute ${currentDestination.title === "TITAN" ? handleLineMenu() : ''}`}/>
            </button>
          </div>
          {/* desktop position */}
          <div className="flex space-x-4 sm:hidden lg:flex pb-10">
           <div>
           <button
              className="text-skyBlue"
              onClick={() => handleDestinationChange("moon")}
            >
              MOON
             
            </button>
            <div  className={`absolute ${currentDestination.title === "MOON" ? handleLineMenu() : ''}`}/>
           </div>
            <button
              className="text-skyBlue"
              onClick={() => handleDestinationChange("mars")}
            >
              MARS
              <div  className={`absolute ${currentDestination.title === "MARS" ? handleLineMenu() : ''}`}/>
            </button>
            <button
              className="text-skyBlue"
              onClick={() => handleDestinationChange("europa")}
            >
              EUROPA
              <div  className={`absolute ${currentDestination.title === "EUROPA" ? handleLineMenu() : ''}`}/>
            </button>
            <button
              className="text-skyBlue"
              onClick={() => handleDestinationChange("titan")}
            >
              TITAN
              <div  className={`absolute ${currentDestination.title === "TITAN" ? handleLineMenu() : ''}`}/>
            </button>
          </div>
          <h2 className="font-Bellefair text-white sm:text-[56px] md:text-[80px] 2xl:text-[100px] mt-6">
            {currentDestination.title}
          </h2>
          <p className="sm:text-sm md:text-base 2xl:text-lg text-skyBlue mt-3 h-[100px]">
            {currentDestination.description}
          </p>
          <div className="mt-5">
            <div className="w-full h-px bg-white sm:my-6  2xl:mt-20" />
            <div className="flex sm:flex-col md:flex-row sm:justify-center lg:justify-start sm:gap-5 md:gap-20">
              <div>
                <p className="sm:text-sm text-skyBlue font-Barlow_Condensed tracking-widest">
                  AVG. DISTANCE
                </p>
                <p className="text-white sm:text-[28px] font-Bellefair">
                  {currentDestination.distance}
                </p>
              </div>
              <div>
                <p className="sm:text-sm text-skyBlue font-Barlow_Condensed tracking-widest">
                  EST. TRAVEL TIME
                </p>
                <p className="text-white sm:text-[28px] font-Bellefair">
                  {currentDestination.travelTime}
                </p>
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
};

export default MainContent;
