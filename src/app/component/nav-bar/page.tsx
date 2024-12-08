import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <main className="bg-white shadow-sm">
      <div className="px-5 lg:px-10 py-4">
        {/* Logo and Grid */}
        <ul className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Section */}
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10">
            <li className="text-blue-600 text-2xl lg:text-3xl font-semibold">
              MORENT
            </li>
            {/* Search Bar */}
            <ul className="flex items-center border-2 w-full lg:w-auto rounded-full px-4 py-2 gap-4">
              <li>
                <Image
                  src={`/images/search-icon.png`}
                  alt="search-icon"
                  width={20}
                  height={20}
                />
              </li>
              <li className="flex-grow">
                <input
                  type="text"
                  placeholder="Search something here"
                  className="outline-none w-full lg:w-auto"
                />
              </li>
              <li>
                <Image
                  src={`/images/filter-icon.png`}
                  alt="filter-icon"
                  width={20}
                  height={20}
                />
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
            {/* Icons */}
            <ul className="flex gap-5">
              <li>
                <Image
                  src={`/images/like-icon.png`}
                  alt="like-icon"
                  width={35}
                  height={35}
                />
              </li>
              <li>
                <Image
                  src={`/images/Notification-icon.png`}
                  alt="notification-icon"
                  width={35}
                  height={35}
                />
              </li>
              <li>
                <Image
                  src={`/images/setting-icon.png`}
                  alt="setting-icon"
                  width={35}
                  height={35}
                />
              </li>
              <li>
                <Image
                  src={`/images/Profile-icon.png`}
                  alt="profile-icon"
                  width={35}
                  height={35}
                />
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </main>
  );
};

export default NavBar;
