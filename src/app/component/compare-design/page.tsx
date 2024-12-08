import React from 'react';
import { IoSwapVertical } from "react-icons/io5";
const CompareDesign = () => {
  return (
    <main>
    {/* Main grid layout */}
    <div className="grid grid-cols-1 md:grid-cols-[45%_10%_45%] items-center mx-auto max-w-screen-xl px-4 py-10">
      {/* Left grid - Pick Up */}
      <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg w-full p-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <input
            type="radio"
            id="pickup"
            name="selection"
            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
            checked
            readOnly
          />
          <label htmlFor="pickup" className="ml-3 text-lg text-gray-800 font-semibold">
            Pick - Up
          </label>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Location Dropdown */}
          <div>
            <label htmlFor="location" className="block text-sm text-gray-600 mb-2 font-semibold">
              Locations
            </label>
            <select
              id="location"
              className="w-full rounded-lg p-3 text-gray-700  "
              >
              <option>Select your city</option>
            </select>
          </div>

          {/* Date Dropdown */}
          <div>
            <label htmlFor="date" className="block text-sm font-semibold text-gray-600 mb-2">
              Date
            </label>
            <select
              id="date"
              className="w-full rounded-lg p-3 text-gray-700  "
            >
              <option>Select your date</option>
            </select>
          </div>

          {/* Time Dropdown */}
          <div>
            <label htmlFor="time" className="block text-sm font-semibold text-gray-600 mb-2">
              Time
            </label>
            <select
              id="time"
              className="w-full rounded-lg p-3 text-gray-700  "
            >
              <option className='outline-none border-none focus:ring-0'>Select your time</option>
            </select>
          </div>
        </div>
      </div>

      {/* Middle grid - Swap icon */}
      <div className="flex justify-center items-center mx-auto bg-blue-500 text-white w-12 h-12 rounded-md shadow-lg">
        <IoSwapVertical className="text-2xl" />
      </div>

      {/* Right grid - Drop Off */}
      <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg w-full p-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <input
            type="radio"
            id="dropoff"
            name="selection"
            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
            checked
            readOnly
          />
          <label htmlFor="dropoff" className="ml-3 text-lg font-semibold text-gray-800">
            Drop - Off
          </label>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Location Dropdown */}
          <div>
            <label htmlFor="location" className="block text-sm font-semibold text-gray-600 mb-2">
              Locations
            </label>
            <select
              id="location"
              className="w-full rounded-lg p-3 text-gray-700  "
              >
              <option>Select your city</option>
            </select>
          </div>

          {/* Date Dropdown */}
          <div>
            <label htmlFor="date" className="block text-sm font-semibold text-gray-600 mb-2">
              Date
            </label>
            <select
              id="date"
              className="w-full rounded-lg p-3 text-gray-700  "
            >
              <option>Select your date</option>
            </select>
          </div>

          {/* Time Dropdown */}
          <div>
            <label htmlFor="time" className="block text-sm font-semibold text-gray-600 mb-2">
              Time
            </label>
            <select
              id="time"
              className="w-full rounded-lg p-3 text-gray-700  "
              >
              <option>Select your time</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
};

export default CompareDesign;
