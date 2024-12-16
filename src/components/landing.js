import React from "react";

function Landing() {
  return (
    <section className="flex flex-col items-center justify-center h-screen px-8 text-center">
      <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
        Tervetuloa Portfoliooni
      </h1>

      <p className="max-w-xl mb-8 text-lg text-gray-300 sm:text-xl md:text-2xl">
        Tervehdys! Nimeni on Aleksi, innokas pelikehityksen opiskelija.
      </p>

      <a
        className="flex items-center justify-center w-auto h-16 px-8 py-3 text-lg font-semibold text-white transition duration-300 rounded-lg shadow-lg bg-gradient-to-t from-blue-900 to-blue-500 hover:from-blue-600 hover:to-blue-400 sm:text-xl"
        href="#Projects"
      >
        Tutustu Töihini
      </a>
    </section>
  );
}

export default Landing;
