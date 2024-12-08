import React from "react";
import Image from "next/image";
import { popular_post, recomendation_car } from "../../data/data";

const ProductDetail = ({ params }: { params: { product_detail: string } }) => {
  // Filter the cars based on the product_detail
  const carDetails = popular_post.concat(recomendation_car)
    .filter((car) => String(car.id) === params.product_detail);

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 px-6 md:px-16 py-12 bg-gray-50">

      {/* Left Section: Car Information */}
      <div className="flex flex-col space-y-6 w-full lg:w-1/2">
        {carDetails.map((car) => (
          <div key={car.id}>
            <div className="relative w-full mb-8">
              <div className="bg-[url('/images/banner-2.jpg')] bg-cover bg-center rounded-md w-full md:h-[60vh] mx-auto flex flex-col justify-between p-6 text-white">
                <div className="space-y-2">
                  <h1 className="text-xl md:text-3xl font-bold tracking-tight">{car.title.slice(0, 25)}</h1>
                  <h1 className="text-xl md:text-3xl font-bold tracking-tight">{car.title.slice(25, 50)}</h1>
                  <p className="text-sm md:text-base">{car.description}</p>
                </div>
                <div className="flex justify-center mt-4">
                  <Image
                    src={car.image}
                    alt="Car Image"
                    width={300}
                    height={150}
                    className="w-3/4 md:w-[50%] rounded-md shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section: Car Details */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/2 space-y-6">
        {carDetails.map((car) => (
          <div key={car.id}>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-800">{car.title}</h1>
              <button className="text-red-600 hover:bg-red-100 p-2 rounded-full transition-all duration-200">
                ♥
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">★★★★☆</span>
              <p className="text-sm text-gray-500">440+ Reviews</p>
            </div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-2">{car.description.slice(0, 100)}...</p>
            <div className="grid grid-cols-2 gap-4 text-gray-600 text-sm">
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
            <div className="flex items-center justify-between mt-4">
              <div>
                <span className="text-2xl font-bold text-gray-800">$80.00</span>
                <span className="text-gray-400 line-through text-sm ml-2">$100.00</span>
                <span className="text-blue-600 text-sm ml-1">/ day</span>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
