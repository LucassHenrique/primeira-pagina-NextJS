"use client"
import React from "react"
import Image from "next/image";
import TechContent from "@/components/Technology/TechContent"
import BackgroundMobile from "@/assets/technology/background-technology-mobile.jpg";
import BackgroundTablet from "@/assets/technology/background-technology-tablet.jpg";
import BackgroundDesktop from "@/assets/technology/background-technology-desktop.jpg";



export default function Technology() {

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
          <TechContent/>
      </div>
    </div>
    </main>
    
  )
}