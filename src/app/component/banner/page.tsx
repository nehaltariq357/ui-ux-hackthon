import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <main>
      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full h-auto gap-6 p-4 md:gap-10 md:p-10">
        {/* left grid */}
        <div className="bg-[url('/images/banner-1.jpg')] bg-cover bg-center rounded-md w-full h-96 md:h-[95%] mx-auto flex flex-col justify-between p-6 text-white">
          <div className="space-y-2">
            <h1 className="text-xl md:text-3xl font-bold">The Best Platform</h1>
            <h1 className="text-xl md:text-3xl font-bold">for Car Rental</h1>
            <p className="text-sm md:text-base">
              Ease of doing a car rental safely 
            </p>
            <p>reliably. Of course at a low price.</p>
          </div>
          <div>
            <button className="bg-blue-700 px-4 py-2 rounded-sm w-fit text-sm md:text-base my-4">
              Rental Car
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <Image
              src={`/images/banner-car-1.png`}
              alt="Car 1"
              width={300}
              height={150}
             className="w-3/4 md:w-[60%]"
            />
          </div>
        </div>

        {/* right grid */}
        <div className="bg-[url('/images/banner-2.jpg')] bg-cover bg-center rounded-md w-full h-96 md:h-[95%] mx-auto flex flex-col justify-between p-6 text-white">
          <div className="space-y-2">
            <h1 className="text-xl md:text-3xl font-bold">Easy way to rent a </h1>
            <h1 className="text-xl md:text-3xl font-bold">car at a low price</h1>
            <p className="text-sm md:text-base">
            Providing cheap car rental services 
            </p>
            <p>and safe and comfortable facilities.</p>
          </div>
          <div>
            <button className="bg-blue-400 px-4 py-2 rounded-sm w-fit text-sm md:text-base my-4">
              Rental Car
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <Image
              src={`/images/banner-car-2.png`}
              alt="Car 2"
              width={300}
              height={150}
              className="w-3/4 md:w-[50%]"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
