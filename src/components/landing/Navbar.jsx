function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">


        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white text-xl">
            🩸
          </div>


          <h1 className="text-2xl font-bold text-gray-900">
            Hemo
            <span className="text-red-600">
              Bridge
            </span>
          </h1>

        </div>



        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-gray-600">


          <a 
          href="#"
          className="hover:text-red-600">
            Home
          </a>


          <a 
          href="#"
          className="hover:text-red-600">
            How It Works
          </a>


          <a 
          href="#"
          className="hover:text-red-600">
            Hospitals
          </a>


          <a 
          href="#"
          className="hover:text-red-600">
            About
          </a>


        </div>



        {/* Emergency Button */}
        <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700">

          Emergency Request

        </button>



      </div>

    </nav>
  )
}


export default Navbar