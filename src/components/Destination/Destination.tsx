"use client"
import React from "react"
import Image from "next/image";
import DestinationContent from "@/components/Destination/DestinationContent";
import BackgroundMobile from "@/assets/destination/background-destination-mobile.jpg";
import BackgroundTablet from "@/assets/destination/background-destination-tablet.jpg";
import BackgroundDesktop from "@/assets/destination/background-destination-desktop.jpg";



export default function Destination() {

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
          <DestinationContent/>
      </div>
    </div>
    </main>
    
  )
}