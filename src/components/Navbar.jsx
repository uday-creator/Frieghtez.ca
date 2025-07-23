import Logo from "../assets/Vector.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-[80%] max-w-6xl mx-auto px-6 py-1 bg-white rounded-full shadow-md">
      {/* Logo */}
      {/* <nav class="flex items-center px-6 py-4 bg-white">
        <img src={Logo} alt="Logo" class="h-10 w-auto mr-4" />
      </nav> */}
      <div className="text-xl font-semibold">
        <span className="italic text-gray-800">Freight</span>
        <span className="font-extrabold text-orange-500">EZ</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-10 text-sm font-medium text-gray-800">
        <li className="relative">
          <a href="#" className="hover:text-orange-500">
            Home
          </a>
          <div className="absolute left-1/2 -bottom-1.5 h-1 w-4/5 -translate-x-1/2 rounded-full bg-orange-500"></div>
        </li>
        <li>
          <a href="#" className="hover:text-orange-500">
            Our services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-orange-500">
            Pricing
          </a>
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="px-6 py-3 bg-white text-slate-900 rounded-full shadow-sm font-semibold border border-blue-500 hover:border-blue-700 hover:bg-gray-100 transition">
          Login
        </button>

        {/* <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-900 to-black text-white text-sm shadow-lg hover:opacity-90">
          Schedule a Demo
        </button> */}

     <a
        href="mailto:hello@freightez.ca"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-900 to-black text-white text-sm shadow-lg hover:opacity-90 inline-block text-center"
      >
        Schedule a Demo
      </a>
      </div>
    </nav>
  );  
}
export default Navbar;
