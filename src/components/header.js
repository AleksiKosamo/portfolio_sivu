import React, { useState } from "react";

function Header({ activePage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="fixed top-0 left-0 z-10 w-full px-6 py-4 shadow-md bg-slate-900">
      <div className="flex items-center justify-between w-full text-white">
        <section className="flex justify-between w-full h-full md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </section>

        <section className="justify-between hidden w-full h-full md:flex">
          <div className="flex items-center">
            <a
              href="http://localhost:8000/"
              className={`text-xl font-semibold transition duration-300 ease-in-out ${
                activePage === "http://localhost:8000/"
                  ? "border-b-2 border-blue-400"
                  : "text-white"
              } hover:text-blue-400`}
            >
              Koti
            </a>
          </div>

          <div className="flex items-center ml-auto space-x-8">
            <a
              href="/projects"
              className={`text-lg font-semibold transition duration-300 ease-in-out ${
                activePage === "/projects"
                  ? "border-b-2 border-blue-400"
                  : "text-white"
              } hover:text-blue-400`}
            >
              Projektit
            </a>
            <a
              href="/contacts"
              className={`text-lg font-semibold transition duration-300 ease-in-out ${
                activePage === "#Contact"
                  ? "border-b-2 border-blue-400"
                  : "text-white"
              } hover:text-blue-400`}
            >
              Yhteystiedot
            </a>
            <a
              href="#EN"
              className={`text-lg font-semibold transition duration-300 ease-in-out ${
                activePage === "#EN"
                  ? "border-b-2 border-blue-400"
                  : "text-white"
              } hover:text-blue-400`}
            >
              EN
            </a>
          </div>
        </section>

        <a
          href="#EN"
          className={`text-lg font-semibold md:hidden transition duration-300 ease-in-out ${
            activePage === "#EN" ? "border-b-2 border-blue-400" : "text-white"
          } hover:text-blue-400`}
        >
          EN
        </a>
      </div>

      {isMobileMenuOpen && (
        <section className="w-full p-4 text-white md:hidden bg-slate-900">
          <div className="flex flex-col space-y-4">
            <a
              href="http://localhost:8000/"
              className={`text-xl font-semibold transition duration-300 ease-in-out ${
                activePage === "http://localhost:8000/"
                  ? "border-b-2 border-blue-400"
                  : "text-white"
              } hover:text-blue-400`}
            >
              Koti
            </a>
            <a
              href="/projects"
              className={`text-xl font-semibold transition duration-300 ease-in-out ${
                activePage === "/projects"
                  ? "border-b-2 border-blue-400"
                  : "text-white"
              } hover:text-blue-400`}
            >
              Projektit
            </a>
            <a
              href="/contacts"
              className={`text-xl font-semibold transition duration-300 ease-in-out ${
                activePage === "#Contact"
                  ? "border-b-2 border-blue-400"
                  : "text-white"
              } hover:text-blue-400`}
            >
              Yhteystiedot
            </a>
          </div>
        </section>
      )}
    </nav>
  );
}

export default Header;
