"use client";
import React, { useState } from "react";
import Slider, { SliderProps } from "@mui/material/Slider";
import Product from "@/app/product/page";
import CompareDesign from "../compare-design/page";
import { FaBars, FaTimes } from "react-icons/fa"; 

const CarRent = () => {
  const [value, setValue] = useState<number[]>([0, 100]); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const handleChange: SliderProps["onChange"] = (_, newValue) => {
    setValue(newValue as number[]); 
  };

  return (
    <main className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 p-4">
      {/* Hamburger Button */}
      <button
        className={`fixed top-4 left-4 z-50 md:hidden p-2 bg-blue-600 text-white rounded shadow focus:outline-none flex items-center transition-transform ${
          isSidebarOpen ? "translate-x-[16rem]" : "translate-x-0"
        }`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        <span className="ml-2">{isSidebarOpen ? "Close Menu" : "Open Menu"}</span>
      </button>

      {/* Sidebar */}
      <div
        className={`p-4 w-64 bg-white border rounded shadow-md space-y-10 transition-transform transform md:transform-none ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:relative top-0 left-0 h-full md:h-auto z-40`}
      >
        {/* Type Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Type</h2>
          <div className="space-y-3">
            {[
              { label: "Sport", count: 10 },
              { label: "SUV", count: 12 },
              { label: "MPV", count: 16 },
              { label: "Sedan", count: 20 },
              { label: "Coupe", count: 14 },
              { label: "Hatchback", count: 14 },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <input
                  id={`type-${item.label}`}
                  type="checkbox"
                  className="w-4 h-4 accent-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor={`type-${item.label}`}
                  className="ml-2 text-sm font-medium text-gray-800"
                >
                  {item.label} ({item.count})
                </label>
              </div>
            ))}
          </div>
        </section>

        {/* Capacity Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Capacity</h2>
          <div className="space-y-3">
            {[
              { label: "2 Person", count: 10 },
              { label: "4 Person", count: 14 },
              { label: "6 Person", count: 12 },
              { label: "8 or More", count: 16 },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <input
                  id={`capacity-${item.label}`}
                  type="checkbox"
                  className="w-4 h-4 accent-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor={`capacity-${item.label}`}
                  className="ml-2 text-sm font-medium text-gray-800"
                >
                  {item.label} ({item.count})
                </label>
              </div>
            ))}
          </div>
        </section>

        {/* Price Range Section */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Price</h2>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={0}
            max={100}
            sx={{ color: "#2563eb" }}
          />
          <div className="flex justify-between mt-2 text-sm text-gray-700">
            <span>Min: ${value[0]}</span>
            <span>Max: ${value[1]}</span>
          </div>
        </section>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Product List */}
      <div className="flex-1">
        <CompareDesign />
        <Product />
      </div>
    </main>
  );
};

export default CarRent;
