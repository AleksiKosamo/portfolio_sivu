import React from "react";

function Header({ activePage }) {
  return (
    <nav className="fixed top-0 left-0 z-10 w-full px-6 py-4 shadow-md bg-slate-900">
      <div className="flex items-center justify-between w-full text-white">
        <section
          className="flex w-full h-full bg-red-900 md:hidden"
          // Add mobile menu toggle logic here if necessary
        >
          <p>Mobile navbar</p>
          {/* Mobile dropdown content */}
        </section>

        <section className="flex w-full h-full">
          <div className="flex items-center">
            <a
              href="http://localhost:8000/"
              className={`text-xl font-semibold transition duration-300 ease-in-out ${
                activePage === "http://localhost:8000/"
                  ? " border-b-2 border-blue-400"
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
                  ? " border-b-2 border-blue-400"
                  : "text-white"
              } hover:text-blue-400`}
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
            >
              Yhteystiedot
            </a>
            <a
              href="#EN"
              className={`text-lg font-semibold transition duration-300 ease-in-out ${
                activePage === "#EN"
                  ? " border-b-2 border-blue-400"
                  : "text-white"
              } hover:text-blue-400`}
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
