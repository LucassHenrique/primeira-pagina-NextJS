export default function HomePageContent() {
  return (
    <section className="flex sm:flex-col lg:flex-row sm:gap-14 overflow-hidden lg:m-32 lg:pt-36 2xl:pt-80 lg:items-end">
      <div className="w-screen">
        <div className="flex flex-col sm:justify-center sm:items-center sm:text-center lg:justify-start lg:items-start lg:text-start sm:px-5 md:px-[90px] lg:p-0 md:gap-2 xl:gap-1 text-white sm:pt-32 md:m-20 lg:m-0">
          <p className="sm:text-base md:text-xl 2xl:text-lg font-Barlow_Condensed text-skyBlue text-opacity-70 tracking-widest">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <p className="sm:text-[80px] md:text-[150px] font-Bellefair">SPACE</p>
          <p className="font-Barlow sm:text-[15px] md:text-base xl:text-[18px] text-skyBlue text-opacity-70">
            Let’s face it; if you want to go to space, you might as well{" "}
            <br className="sm:hidden lg:hidden xl:block" />
            genuinely go to outer space and not hover kind of on the{" "}
            <br className="sm:hidden lg:hidden xl:block" />
            edge of it. Well sit back, and relax because we’ll give you a{" "}
            <br className="sm:hidden lg:hidden xl:block" />
            truly out of this world experience!
          </p>
        </div>
      </div>
      <div className="w-screen">
        <div className="flex sm:justify-center lg:justify-end items-center text-center">
          <div className="flex justify-center items-center text-center sm:h-[150px] sm:w-[150px] md:h-[242px] md:w-[242px] lg:h-[200px] lg:w-[200px] 2xl:h-[274px] 2xl:w-[274px] rounded-full bg-white font-Bellefair sm:tracking-[1.25px] md:tracking-[2px] sm:text-xl md:text-2xl 2xl:text-3xl">
            EXPLORE
          </div>
        </div>
      </div>
    </section>
  );
}

