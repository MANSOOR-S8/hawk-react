import { useState } from "react";
import NavbarData from "./NavbarData";
import { Link } from "react-router-dom";
import TopNav from "./Topnav";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const showNav = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div>
        <TopNav />
      </div>
      <nav className="w-full bg-white border-t-4 shadow-sm">
        <div className="flex justify-between items-center w-full flex-wrap px-6 py-3">
          <h1 className="text-xl font-bold cursor-pointer text-black"></h1>

          {/* Mobile Button */}
          <button
            className="md:hidden flex justify-end ring-1 text-black ring-gray-400 rounded cursor-pointer"
            onClick={showNav}
          >
            <i className="fas fa-bars text-black w-9 h-9 flex justify-center items-center hover:text-black"></i>
          </button>

          {/* Navbar Menu */}
          <ul
            className={`${
              toggle ? "flex" : "hidden"
            } flex-col justify-center items-center w-full md:flex md:flex-row md:w-auto md:space-x-10`}
          >
            {NavbarData.map((link, index) => (
              <li key={index} className="relative group">
                <Link
                  className="px-2 py-2 hover:text-blue-900 transition flex items-center"
                  to={link.href}
                  onClick={showNav}
                >
                  {link.title}
                  {link.submenu && <span className="ml-1">&#9662;</span>}
                </Link>

                {/* Dropdown */}
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

          {/* Language Input */}
          <input
            className={`${
              toggle ? "flex" : "hidden"
            } text-black w-42 hover:bg-gray-300 mx-auto md:mx-0 md:flex md:mt-0 items-center justify-center font-medium bg-gray-100 px-1 p-2 rounded-lg mt-4`}
            placeholder="English"
          />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
