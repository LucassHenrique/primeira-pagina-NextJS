"use client";

import Image from "next/image";
import Link from "next/link";
import MenuItens from "@/components/MenuItens";
import Logo from "@/assets/shared/logo.svg";
import IconHamburger from "@/assets/shared/icon-hamburger.svg";
import IconClose from "@/assets/shared/icon-close.svg";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function HeaderMenus() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const headerStyle = () => {
    if (pathname === "/") {
      return "absolute bg-white h-1 md:w-9 md:mt-[60px] lg:w-[65px] md:w-[35px]";
    } else if (pathname === "/destination") {
      return "absolute bg-white h-1 md:w-9 md:mt-[60px] lg:w-[110px] md:w-[85px]";
    } else if (pathname === "/crew") {
      return "absolute bg-white h-1 md:w-9 md:mt-[60px] lg:w-[65px] md:w-[35px]";
    } else if (pathname === "/technology") {
      return "absolute bg-white h-1 md:w-9 md:mt-[60px] lg:w-[115px] md:w-[85px]";
    }
    return "";
  };

  return (
    <header className="absolute inset-x-0 top-0 z-10 overflow-x-hidden">
      <div className="sm:flex sm:justify-between items-center sm:m-6 md:m-0">
        <Image
          className="sm:w-10 sm:h-10 md:w-12 md:h-12 md:m-6 lg:m-14"
          src={Logo}
          alt="Logo"
        />
        <div className="sm:hidden md:hidden w-full lg:flex xl:flex justify-end">
          <div className="w-full h-px bg-white/30 backdrop-blur-md" />
        </div>
        <nav className="flex justify-between">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer md:hidden z-50"
          >
            <Image
              src={isOpen ? IconClose : IconHamburger}
              alt="burger icon"
            />
          </button>
          {isOpen && (
            <div
              onClick={() => setIsOpen(false)}
              className="fixed h-full top-0 right-0 w-64 z-40 md:hidden bg-transparent/20 backdrop-blur-md"
            >
              <section className="flex p-6 sm:pt-28">
                {/* menu mobile */}
                <div className="flex gap-6 flex-col cursor-pointer">
                  <Link href={"/"}>
                    <MenuItens>
                      <span className="font-bold">00 </span>
                      HOME
                    </MenuItens>
                  </Link>
                  <Link href={"/destination"}>
                    <MenuItens>
                      <span className="font-bold">01 </span>
                      DESTINATION
                    </MenuItens>
                  </Link>
                  <Link href={"/crew"}>
                    <MenuItens>
                      <span className="font-bold">04 </span>
                      CREW
                    </MenuItens>
                  </Link>
                  <Link href={"/technology"}>
                    <MenuItens>
                      <span className="font-bold">03 </span>
                      TECHNOLOGY
                    </MenuItens>
                  </Link>
                </div>
              </section>
            </div>
          )}
          <div className="sm:hidden md:flex md:gap-5 2xl:gap-10 md:p-10 md:px-14 lg:px-0 lx:py-8 bg-white bg-opacity-[4%] lg:backdrop-blur-md items-center font-Barlow_Condensed lg:w-screen lg:max-w-xl xl:max-w-2xl 2xl:max-w-5xl lg:mx-auto 2xl:space-x-10">
            <div className="sm:hidden md:hidden lg:flex h-px w-[40px] bg-white/30 backdrop-blur-md" />
            {/* menu desk */}
            <div className="flex gap-3 ">
              <span className="md:hidden lg:block font-bold text-white ">
                00{" "}
              </span>
              <Link href={"/"}>
                <MenuItens>HOME</MenuItens>
              </Link>
              <div
                className={`absolute ${pathname === "/" ? headerStyle() : ""}`}
              ></div>
            </div>
            <div className="flex gap-3 ">
              <span className="md:hidden lg:block font-bold text-white">
                01{" "}
              </span>
              <Link href={"/destination"}>
                <MenuItens>DESTINATION</MenuItens>
              </Link>
              <div
                className={`absolute ${
                  pathname === "/destination" ? headerStyle() : ""
                }`}
              ></div>
            </div>
            <div className="flex gap-3 ">
              <span className="md:hidden lg:block font-bold text-white">
                04{" "}
              </span>
              <Link href={"/crew"}>
                <MenuItens>CREW</MenuItens>
              </Link>
              <div
                className={`absolute ${
                  pathname === "/crew" ? headerStyle() : ""
                }`}
              ></div>
            </div>
            <div className="flex gap-3 ">
              <span className="md:hidden lg:block font-bold text-white">
                03{" "}
              </span>
              <Link href={"/technology"}>
                <MenuItens>TECHNOLOGY</MenuItens>
              </Link>
              <div
                className={`absolute ${
                  pathname === "/technology" ? headerStyle() : ""
                }`}
              ></div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
