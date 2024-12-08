import React from "react";
import Image from "next/image";

const ProductDetail = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 px-6 md:px-16 py-12 bg-gray-50">
      {/* Left Section: Car Information */}
      <div className="flex flex-col space-y-6">
        <div className="bg-blue-100 rounded-lg p-6 w-full max-w-lg">
          <h2 className="text-xl font-bold text-blue-800 mb-4">
            Sports car with the best design and acceleration
          </h2>
          <p className="text-sm text-blue-700">
            Safety and comfort while driving a futuristic and elegant sports car
          </p>
        </div>
        <div className="w-full max-w-lg">
          <Image
            src="/images/car1.jpg" // Replace with the correct car image
            alt="Car Image"
            width={800}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="flex space-x-4">
          <Image
            src="/images/interior1.jpg" // Replace with a relevant thumbnail
            alt="Interior"
            width={100}
            height={60}
            className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-600"
          />
          <Image
            src="/images/interior2.jpg" // Replace with a relevant thumbnail
            alt="Interior"
            width={100}
            height={60}
            className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-600"
          />
          <Image
            src="/images/interior3.jpg" // Replace with a relevant thumbnail
            alt="Interior"
            width={100}
            height={60}
            className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-600"
          />
        </div>
      </div>

      {/* Right Section: Car Details */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Nissan GT-R</h1>
          <button className="text-red-600 hover:bg-red-100 p-2 rounded-full">
            ♥
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500">★★★★☆</span>
          <p className="text-sm text-gray-500">440+ Reviewer</p>
        </div>
        <p className="text-gray-700 text-sm">
          NISMO has become the embodiment of Nissan outstanding performance,
          inspired by the most unforgiving proving ground, the "race track."
        </p>
        <div className="grid grid-cols-2 gap-4 text-gray-600 text-sm">
          <div>
            <span className="font-semibold">Type Car:</span> Sport
          </div>
          <div>
            <span className="font-semibold">Capacity:</span> 2 Person
          </div>
          <div>
            <span className="font-semibold">Steering:</span> Manual
          </div>
          <div>
            <span className="font-semibold">Gasoline:</span> 70L
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-800">$80.00</span>
            <span className="text-gray-400 line-through text-sm ml-2">
              $100.00
            </span>
            <span className="text-blue-600 text-sm ml-1">/ days</span>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
