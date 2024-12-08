import React from "react";

const Footer = () => {
  return (
    <div>
    <footer className="p-6 bg-gray-100 text-gray-800">
      <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Getting started</h2>
          <div className="flex flex-col space-y-2 text-sm text-gray-600">
          <h1 className="text-blue-600 text-2xl">MORENT</h1>
          <p>Our vision is to provide convenience and help increase your sales business.</p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Core Concepts</h2>
          <div className="flex flex-col space-y-2 text-sm text-gray-600">
            <a href="#">Utility-First</a>
            <a href="#">Responsive Design</a>
            <a href="#">Hover, Focus, &amp; Other States</a>
            <a href="#">Dark Mode</a>
            <a href="#">Adding Base Styles</a>
            <a href="#">Extracting Components</a>
            <a href="#">Adding New Utilities</a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">About</h2>
          <div className="flex flex-col space-y-2 text-sm text-gray-600">
            <a href="#">Configuration</a>
            <a href="#">Theme Configuration</a>
            <a href="#">Breakpoints</a>
            <a href="#">Customizing Colors</a>
            <a href="#">Customizing Spacing</a>
            <a href="#">Configuring Variants</a>
            <a href="#">Plugins</a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Community</h2>
          <div className="flex flex-col space-y-2 text-sm text-gray-600">
            <a href="#">GitHub</a>
            <a href="#">Discord</a>
            <a href="#">Twitter</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 pt-12 text-sm">
        <span className="text-gray-600">© Copyright 1986. All Rights Reserved.</span>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
