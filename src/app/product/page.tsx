import React from "react";
import Image from "next/image";
import { popular_post,recomendation_car } from "../data/data";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
const Product = () => {
  return (
    <main className="p-6">
      <h1 className="text-lg text-slate-400 font-semibold mb-6">Popular Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {popular_post.map((car) => (
          <div key={car.id} className="bg-white shadow rounded-lg p-4">
            <Link href={`/product/${car.id}`}>
            <h2 className="text-lg font-bold flex items-center justify-between">
              {car.title}{" "}
              <span className="hover:bg-red-600 hover:text-white p-2 rounded-full cursor-pointer">
                <CiHeart className="text-xl" />
              </span>
            </h2>
            <span className="text-sm text-gray-500">{car.category}</span>
            <Image
              src={car.image}
              alt={car.title}
              width={500} 
              height={300} 
              layout="intrinsic" 
              className="w-full h-auto rounded-md mb-4"
            />

            <div className="flex justify-between items-center mb-2"></div>
            <div className="text-sm text-gray-500 mb-4">
              <p>{car.gasoline}</p>
              <p>{car.variant}</p>
              <p>{car.capacity}</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
              <span className="text-xl font-bold text-black">
                  {car.price}/
                </span><span className="text-slate-400">day</span>
                {car.discountedPrice && (
                  <span className="text-sm line-through text-gray-400 ml-2">
                    {car.discountedPrice}
                  </span>
                )}
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Rent Now
              </button>
            </div>
            </Link>
          </div>
        ))}
      </div>

      {/* recomends car */}

      <h1 className="text-lg text-slate-400 font-semibold mb-6 py-6">Recomendation Car</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recomendation_car.map((car) => (
        
          <div key={car.id} className="bg-white shadow rounded-lg p-4">
            <Link href={`/product/${car.id}`}>
            <h2 className="text-lg font-bold flex items-center justify-between">
              {car.title}{" "}
              <span className="hover:bg-red-600 hover:text-white p-2 rounded-full cursor-pointer">
                <CiHeart className="text-xl" />
              </span>
            </h2>
            <span className="text-sm text-gray-500">{car.category}</span>
            <Image
              src={car.image}
              alt={car.title}
              width={500} 
              height={300} 
              layout="intrinsic" 
              className="w-full h-auto rounded-md mb-4"
            />

            <div className="flex justify-between items-center mb-2"></div>
            <div className="text-sm text-gray-500 mb-4">
              <p>{car.gasoline}</p>
              <p>{car.variant}</p>
              <p>{car.capacity}</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xl font-bold text-black">
                  {car.price}/
                </span><span className="text-slate-400">day</span>
                {car.discountedPrice && (
                  <span className="text-sm line-through text-gray-400 ml-2">
                    {car.discountedPrice}
                  </span>
                )}
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Rent Now
              </button>
            </div>
            </Link>
          </div>

        ))}
      </div>
      <div className="flex justify-center my-16">
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
      Show more car
              </button>
      </div>
    </main>
  );
};

export default Product;
