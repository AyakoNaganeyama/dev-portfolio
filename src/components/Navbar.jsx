import React, { useState } from "react";
import { RxDropdownMenu } from "react-icons/rx";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" dark:bg-gray-900 fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <a href="#" className="flex items-center space-x-3">

          <span className="text-xl font-semibold text-gray-900 dark:text-white">Dev Portfolio</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <RxDropdownMenu className="w-8 h-8" />


        </button>

        {/* Navigation Links */}
        <div className={`w-full md:flex md:w-auto ${isOpen ? "block" : "hidden"}`}>
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
  {[
    { name: "Projects", href: "#project" },
    { name: "GitHub", href: "https://github.com/AyakoNaganeyama", target: "_blank", rel: "noopener noreferrer" }
  ].map((item, index) => (
    <li key={index}>
      <a
        href={item.href}
        target={item.target}
        rel={item.rel}
        className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        {item.name}
      </a>
    </li>
  ))}
</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
