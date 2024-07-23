"use client"
import React from "react"
import Image from "next/image";
import CrewContent from "@/components/Crew/CrewContent"
import BackgroundMobile from "@/assets/crew/background-crew-mobile.jpg";
import BackgroundTablet from "@/assets/crew/background-crew-tablet.jpg";
import BackgroundDesktop from "@/assets/crew/background-crew-desktop.jpg";



export default function Crew() {

  return (
    <main>
      <div className="relative min-h-screen ">
      <div className="sm:block md:hidden lg:hidden xl:hidden">
        <Image src={BackgroundMobile} layout="fill" objectFit="cover" alt="Background Image" />
      </div>
      <div className="hidden sm:hidden md:block lg:hidden xl:hidden">
        <Image src={BackgroundTablet} layout="fill" objectFit="cover" alt="Background Image" />
      </div>
      <div className="hidden sm:hidden md:hidden lg:block xl:hidden">
        <Image src={BackgroundDesktop} layout="fill" objectFit="cover" alt="Background Image" />
      </div>
      <div className="hidden sm:hidden md:hidden lg:hidden xl:block">
        <Image src={BackgroundDesktop} layout="fill" objectFit="cover" alt="Background Image" />
      </div>
      <div className="relative inset-0 flex items-center justify-center bg-cover bg-center">    
          <CrewContent/>
      </div>
    </div>
    </main>
    
  )
}