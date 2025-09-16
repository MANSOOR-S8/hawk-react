import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarData from "./NavbarData";
import {
  FaUser,
  FaHeart,
  FaShoppingBag,
  FaSearch,
  FaBars,
} from "react-icons/fa";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const showNav = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {/*  Top Navigation */}
      <nav className="bg-[#061d44] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/*  Mobile Toggle */}
          <button
            className="md:hidden flex p-2 rounded text-white  mr-2"
            onClick={showNav}
          >
            <FaBars className="text-white w-5 h-5" />{" "}
            <span className=" pl-2 "> MENU</span>
          </button>

          {/* Logo Center */}
          <div className="flex-1 flex justify-center md:justify-start">
            <img
              src="https://hawk-sports.com/wp-content/uploads/2025/06/Group-1000006311-2.png"
              alt="Logo"
              className="h-12"
            />

            {/* Top Search bar - desktop only */}
            <div className="hidden md:block w-full px-4 md:px-0 mt-4">
              <div className="flex w-full rounded-full overflow-hidden shadow-sm max-w-full md:max-w-2xl md:mx-auto">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="flex-1 px-3 py-2 bg-white text-black text-sm focus:outline-none min-w-20"
                />
                <select className="px-2 py-2 bg-white text-black text-sm border-l shrink-0">
                  <option>Select Category</option>
                  <option>Gloves</option>
                  <option>Belts</option>
                  <option>Accessories</option>
                </select>
                <button className="bg-[#f7a900] px-4 py-2 text-white text-sm shrink-0">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>

          {/*  Cart Icon (always visible) */}
          <div className="relative text-white text-lg">
            <a href="#">
              <FaShoppingBag />
              <span className="absolute -top-2 -right-2 bg-[#f7a900] text-xs text-white rounded-full px-1">
                0
              </span>
            </a>
          </div>

          {/* Desktop Icons (hidden in mobile) */}
          <div className="hidden md:flex items-center space-x-6 text-white text-lg ml-6">
            <a href="#">
              <FaUser />
            </a>
            <a href="#">
              <FaHeart />
            </a>
            <span className="text-sm">$0.00</span>
          </div>
        </div>
      </nav>

      {/* Bottom Search bar - mobile only */}
      <div className="block md:hidden w-full px-4 mt-4 pb-3">
        <div className="flex w-full rounded-full overflow-hidden shadow-sm max-w-full md:max-w-2xl md:mx-auto">
          <input
            type="text"
            placeholder="Search for products"
            className="flex-1 px-3 py-2 bg-white text-black text-sm focus:outline-none min-w-20"
          />
          <select className="px-2 py-2 bg-white hidden md-flex text-black text-sm border-l shrink-0">
            <option>Select Category</option>
            <option>Gloves</option>
            <option>Belts</option>
            <option>Accessories</option>
          </select>
          <button className="bg-[#f7a900] px-4 py-2 text-white text-sm shrink-0">
            <FaSearch />
          </button>
        </div>
      </div>

      {/*  Desktop Navbar  */}
      <nav className="w-full bg-white border-t-4 shadow-sm mt-0 md:mt-0">
        <div className="flex justify-between items-center w-full flex-wrap px-6 py-3">
          <ul className="hidden md:flex md:flex-row md:justify-center md:w-full md:space-x-10">
            {NavbarData.map((link, index) => (
              <li key={index} className="relative group">
                <Link
                  className="px-2 py-2 hover:text-blue-900 transition flex items-center"
                  to={link.href}
                >
                  {link.title}
                  {link.submenu && <span className="ml-1">&#9662;</span>}
                </Link>

                {link.submenu && (
                  <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-0 rounded w-40 z-50">
                    {link.submenu.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subLink.href}
                          className="block px-6 py-2 hover:bg-gray-100 text-sm text-gray-700"
                        >
                          {subLink.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/*  Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          toggle ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {/* Close Button */}
          <button
            className="self-end text-2xl text-gray-700 hover:text-black"
            onClick={showNav}
          >
            &times;
          </button>

          {/*  Menu Links */}
          <ul className="space-y-2">
            {NavbarData.map((link, index) => (
              <li key={index} className="relative group">
                <Link
                  className="block px-2 py-2 hover:text-blue-900 transition"
                  to={link.href}
                  onClick={showNav}
                >
                  {link.title}
                  {link.submenu && <span className="ml-1">&#9662;</span>}
                </Link>

                {link.submenu && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {link.submenu.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subLink.href}
                          className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={showNav}
                        >
                          {subLink.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Icons */}
          <div className="flex items-center space-x-6 text-gray-800 text-lg mt-4">
            <FaUser />
            <FaHeart />
            <span className="text-sm">$0.00</span>
          </div>

          {/* Language Input */}
          <input
            className="text-black w-full hover:bg-gray-300 font-medium bg-gray-100 px-3 py-2 rounded-lg"
            placeholder="English"
          />
        </div>
      </div>
    </>
  );
}

export default Nav;
