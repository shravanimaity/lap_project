import React, { useState } from "react";

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMembersOpen, setIsMembersOpen] = useState(false);


  return (
    <header className="bg-gradient-to-r from-purple-200 to-green-200)">
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold">Boi-COMPUTATIONAL LAB</div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8 text-xl items-center">
            <a href="#" className="hover:text-cyan-600">Home</a>

            {/* Members dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMembersOpen(prev => !prev)}
                className="flex items-center hover:text-cyan-600 space-x-1"
              >
                <span>Members</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    isMembersOpen ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isMembersOpen && (
                <ul className="absolute top-full mt-2 bg-gradient-to-r from-purple-200 to-green-200 text-black  w-48" onMouseLeave={()=>setIsMembersOpen(!isMembersOpen)} >
                  <li onClick={()=>setIsMembersOpen(!isMembersOpen)}><a href="#" className="block px-4 py-2 hover:bg-gray-100">Current Members</a></li>
                  <li onClick={()=>setIsMembersOpen(!isMembersOpen)}><a href="#" className="block px-4 py-2 hover:bg-gray-100">Alumuni</a></li>
                  <li onClick={()=>setIsMembersOpen(!isMembersOpen)}><a href="#" className="block px-4 py-2 hover:bg-gray-100">Interns</a></li>
                </ul>
              )}
            </div>

            <a href="#" className="hover:text-cyan-600">Research</a>
            <a href="#" className="hover:text-cyan-600">Event</a>
            <a href="#" className="hover:text-cyan-600">Project</a>
            <a href="#" className="hover:text-cyan-600">Contact Us</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => { setIsMenuOpen(prev => !prev); setIsMembersOpen(false); }}
              className="text-gray-800 hover:text-cyan-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-1 text-lg">
          <a onClick={()=>setIsMenuOpen(!isMenuOpen)} href="#" className="block hover:text-cyan-600"  >Home</a>

          {/* Mobile Members dropdown */}
          <div>
            <button
              onClick={() => setIsMembersOpen(prev => !prev)}
              className="flex justify-between w-full py-2 hover:text-cyan-600"
            >
              <span>Members</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  isMembersOpen ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isMembersOpen && (
              <ul className="pl-4 space-y-1">
                <li onClick={()=>setIsMenuOpen(!isMenuOpen)} ><a href="#" className="block py-1 hover:text-cyan-600">Faculty</a></li>
                <li onClick={()=>setIsMenuOpen(!isMenuOpen)} ><a href="#" className="block py-1 hover:text-cyan-600">Postdocs</a></li>
                <li onClick={()=>setIsMenuOpen(!isMenuOpen)} ><a href="#" className="block py-1 hover:text-cyan-600">Students</a></li>
              </ul>
            )}
          </div>

          <a onClick={()=>setIsMenuOpen(!isMenuOpen)} href="#" className="block hover:text-cyan-600">Research</a>
          <a onClick={()=>setIsMenuOpen(!isMenuOpen)} href="#" className="block hover:text-cyan-600">Event</a>
          <a onClick={()=>setIsMenuOpen(!isMenuOpen)} href="#" className="block hover:text-cyan-600">Project</a>
          <a onClick={()=>setIsMenuOpen(!isMenuOpen)} href="#" className="block hover:text-cyan-600">Contact Us</a>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
