import { FaUser, FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";

function TopNav() {
  return (
    <nav className="bg-[#061d44] py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://hawk-sports.com/wp-content/uploads/2025/06/Group-1000006311-2.png"
            alt="Logo"
            className="h-12"
          />
        </div>

        {/* Search Bar */}
        <div className="flex w-full max-w-2xl mx-6 rounded-full overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="Search for products"
            className="flex-1 px-4 py-2 bg-white text-black focus:outline-none"
          />
          <select className="px-4 py-2 border-l text-black bg-white text-sm focus:outline-none">
            <option>Select Category</option>
            <option>Gloves</option>
            <option>Belts</option>
            <option>Accessories</option>
          </select>
          <button className="bg-[#f7a900] cursor-pointer px-4 text-white">
            <FaSearch />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-white text-lg">
          <a href="#">
            <FaUser />
          </a>
          <a href="#">
            <FaHeart />
          </a>
          <div className="relative">
            <a href="#">
              <FaShoppingBag />
              <span className="absolute -top-2 -right-2 bg-[#f7a900] text-xs text-white rounded-full px-1">
                0
              </span>
            </a>
          </div>
          <span className="text-sm">$0.00</span>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
