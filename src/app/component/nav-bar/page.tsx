import React from "react";
import Image from "next/image";
const NavBar = () => {
  return (
    <main>
      <div>
        {/* logo */}
        {/* grid */}
        <ul className="grid grid-cols-2 h-20 items-center mx-10">
          {/* left-right-grids */}
          <div className="flex justify-between">
            {" "}
            <li className="text-blue-600 text-3xl font-semibold">MORENT</li>
            {/* input li */}
            <ul className="flex border-2 w-fit rounded-full px-10 py-2 gap-4">
              <li>
                <Image
                  src={`/images/search-icon.png`}
                  alt="search-icon"
                  width={20}
                  height={20}
                />
              </li>
              <li>
                {" "}
                <input
                  type="text"
                  placeholder="Search something here"
                  className="outline-none"
                />
              </li>
              <li>
                <Image
                  src={`/images/filter-icon.png`}
                  alt="search-icon"
                  width={20}
                  height={20}
                />
              </li>
            </ul>
          </div>
          {/* right-grid */}
          <div className="flex justify-end">
            {/* right-side-icons */}

            <ul className="flex gap-5">
              <li>
                <Image
                  src={`/images/like-icon.png`}
                  alt="search-icon"
                  width={35}
                  height={20}
                />
              </li>

              <li>
                <Image
                  src={`/images/Notification-icon.png`}
                  alt="search-icon"
                  width={35}
                  height={20}
                />
              </li>

              <li>
                <Image
                  src={`/images/setting-icon.png`}
                  alt="search-icon"
                  width={35}
                  height={20}
                />
              </li>

              <li>
                <Image
                  src={`/images/Profile-icon.png`}
                  alt="search-icon"
                  width={35}
                  height={20}
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
