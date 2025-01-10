import React from "react";
import Image from "next/image";
import { popular_post, recomendation_car } from "../../data/data";
import SideMenu from "@/app/component/side-menu/page";


const ProductDetail = ({ params }: { params: { product_detail: string } }) => {
  const carDetails = popular_post.concat(recomendation_car).filter(
    (car) => String(car.id) === params.product_detail
  );

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Container */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 px-6 md:px-16 py-12">
        {/* Side Menu */}
        <aside className="hidden lg:block col-span-1">
          <SideMenu />
        </aside>

        {/* Car Details Section */}
        <section className="col-span-3 space-y-8">
          {/* Car Information */}
          {carDetails.map((car) => (
            <div
              key={car.id}
              className="bg-white shadow-lg rounded-lg grid lg:grid-cols-2 overflow-hidden"
            >
              {/* Left: Car Image and Highlights */}
              <div className="bg-blue-500 p-6 text-white">
                <h1 className="text-2xl lg:text-3xl font-bold">
                  {car.title}
                </h1>
                <p className="mt-4 text-sm lg:text-base ">{car.description}</p>
                <div className="mt-6 flex space-x-4 justify-center">
                  {/* Thumbnail Images */}
                  <Image
                    src={car.image}
                    alt="Car Thumbnail"
                    width={300}
                    height={300}
                    className="rounded-md"
                  />
                  
                </div>
              </div>

              {/* Right: Car Details */}
              <div className="p-6 space-y-6 text-black">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold">{car.title}</h1>
                  <button className="text-red-600 hover:bg-red-100 p-2 rounded-full transition-all duration-200">
                    ♥
                  </button>
                </div>
                <div className="flex items-center space-x-2 text-yellow-500">
                  ★★★★☆ <span className="text-black">440+ Reviews</span>
                  
                </div>
                <p>{car.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mt-4">
                  <div>
                    <span className="font-semibold">Type Car:</span> Sport
                  </div>
                  <div>
                    <span className="font-semibold">Capacity:</span> 2 People
                  </div>
                  <div>
                    <span className="font-semibold">Steering:</span> Manual
                  </div>
                  <div>
                    <span className="font-semibold">Gasoline:</span> 70L
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <div>
                    <span className="text-2xl font-bold text-gray-800">
                      $80.00
                    </span>
                    <span className="line-through text-sm text-gray-400 ml-2">
                      $100.00
                    </span>
                    <span className="text-blue-600 text-sm ml-1">/ day</span>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Reviews Section */}
          <section className="bg-white p-6 rounded-lg shadow-lg space-y-6 text-black">
            <h2 className="text-xl font-bold">Reviews</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Image
                  src="/images/Profile-icon.png"
                  alt="Reviewer"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">Alex Stanton</h3>
                  <p className="text-gray-500 text-sm">7 July 2022</p>
                  <p className="mt-2 text-gray-700 text-sm">
                    An awesome car with insane power...
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Image
                  src="/images/Profile-icon.png"
                  alt="Reviewer"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">Skylar Dias</h3>
                  <p className="text-gray-500 text-sm">5 July 2022</p>
                  <p className="mt-2 text-gray-700 text-sm">
                    The car’s handling is superb, and the comfort level is top-notch.
                  </p>
                </div>
              </div>
              <button className="text-blue-600 hover:underline">
                Show All Reviews
              </button>
            </div>
          </section>

          {/* Recommended Cars Section */}
          <section className="space-y-6 text-black">
            <h2 className="text-xl font-bold">Recommended Cars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recomendation_car.slice(0,6).map((car) => (
                <div
                  key={car.id}
                  className="bg-white shadow-lg p-4 rounded-lg text-center"
                >
                  <Image
                    src={car.image}
                    alt={car.title}
                    width={200}
                    height={100}
                    className="mx-auto"
                  />
                  <h3 className="text-lg font-semibold mt-4">{car.title}</h3>
                  <p className="text-sm text-gray-500">
                    ${car.price} / day
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-700 transition">
                    Rent Now
                  </button>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default ProductDetail;
