function Footer() {
  return (
    <footer className="bg-[#092143] text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* 1. Free Shipping */}
          <div className="flex items-start space-x-4">
            <img
              src="https://hawk-sports.com/wp-content/uploads/2021/09/retail-free-shipping.png"
              alt="Free Shipping"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h4 className="text-lg font-semibold text-white">
                Free Shipping
              </h4>
              <p className="text-sm text-gray-300">
                In Germany on orders of $30+
              </p>
            </div>
          </div>

          {/* 2. 24/7 Support */}
          <div className="flex items-start space-x-4">
            <img
              src="https://hawk-sports.com/wp-content/uploads/2021/09/svgviewer-output.png"
              alt="24/7 Support"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h4 className="text-lg font-semibold text-white">24/7 Support</h4>
              <p className="text-sm text-gray-300">Help anytime, anywhere.</p>
            </div>
          </div>

          {/* 3. Online Payment */}
          <div className="flex items-start space-x-4">
            <img
              src="https://hawk-sports.com/wp-content/uploads/2021/09/svgviewer-output-3.png"
              alt="Online Payment"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h4 className="text-lg font-semibold text-white">
                Online Payment
              </h4>
              <p className="text-sm text-gray-300">Safe and easy checkout.</p>
            </div>
          </div>

          {/* 4. Fast Delivery */}
          <div className="flex items-start space-x-4">
            <img
              src="https://hawk-sports.com/wp-content/uploads/2021/09/svgviewer-output-2.png"
              alt="Fast Delivery"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h4 className="text-lg font-semibold text-white">
                Fast Delivery
              </h4>
              <p className="text-sm text-gray-300">Quick to your doorstep.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-500">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Hawk</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor a.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <div className="text-sm space-y-2">
              <p>123 Street, Cityville, State 54321</p>
              <p>
                Email:{" "}
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  info@yourcompany.com
                </a>
              </p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>

        {/* payment sec */}
        <div className="space-y-4 mt-7">
          <h3 className="text-xl  text-white">Payment System:</h3>
          <div className="text-sm space-y-2">
            <img
              src="https://hawk-sports.com/wp-content/uploads/2021/09/payments.png"
              alt=""
            />
          </div>
        </div>

        {/* Separator and Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
