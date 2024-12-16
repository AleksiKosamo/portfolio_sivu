import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("#Home");

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <nav className="fixed top-0 left-0 z-10 w-full px-6 py-4 shadow-md bg-slate-900">
      <div className="flex items-center justify-between w-full text-white">
        <section
          className="flex w-full h-full bg-red-900 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <p>Mobile navbar</p>

          {isMenuOpen && <p>tähän rakentuu dropdownmenukikkeli</p>}
        </section>

        <section className="flex w-full h-full">
          <div className="flex items-center">
            <a
              href="#Home"
              className={`text-xl font-semibold transition duration-300 ease-in-out ${
                activePage === "#Home"
                  ? " border-b-2 border-blue-400"
                  : "text-white"
              } hover:text-blue-400`}
              onClick={() => handlePageChange("#Home")}
            >
              Koti
            </a>
          </div>

          <div className="flex items-center ml-auto space-x-8">
            <a
              href="#Projects"
              className={`text-lg font-semibold transition duration-300 ease-in-out ${
                activePage === "#Projects"
                  ? " border-b-2 border-blue-400"
                  : "text-white"
              } hover:text-blue-400`}
              onClick={() => handlePageChange("#Projects")}
            >
              Projektit
            </a>
            <a
              href="#Contact"
              className={`text-lg font-semibold transition duration-300 ease-in-out ${
                activePage === "#Contact"
                  ? " border-b-2 border-blue-400"
                  : "text-white"
              } hover:text-blue-400`}
              onClick={() => handlePageChange("#Contact")}
            >
              Yhteystiedot
            </a>
            <a
              href="#EN"
              className={`text-lg font-semibold transition duration-300 ease-in-out hover:text-blue-400`}
              onClick={() => handlePageChange("#EN")}
            >
              EN
            </a>
          </div>
        </section>
      </div>
    </nav>
  );
}

export default Header;
