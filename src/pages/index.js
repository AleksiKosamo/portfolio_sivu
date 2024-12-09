import * as React from "react";

const IndexPage = () => {
  return (
    <main className="w-full min-h-screen font-sans text-white bg-gray-950">
      <nav className="fixed top-0 left-0 z-10 w-full px-8 py-4 bg-black">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="#Home">
              <p className="text-lg font-semibold select-none hover:text-gray-400">
                Home
              </p>
            </a>

            <a href="#Projects">
              <p className="text-lg font-semibold select-none hover:text-gray-400">
                Projects
              </p>
            </a>

            <a href="#Contact">
              <p className="text-lg font-semibold select-none hover:text-gray-400">
                Contact
              </p>
            </a>
          </div>
          <p className="ml-16 text-lg font-semibold select-none hover:text-gray-400">
            EN
          </p>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center h-screen px-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-6xl">
          Welcome to My Portfolio
        </h1>
        <p className="max-w-xl mb-8 text-lg text-gray-300 sm:text-xl">
          My name is Aleksi, an inspiring game development student.
        </p>
        <a
          className="px-8 py-3 font-semibold text-white rounded-lg bg-gradient-to-t from-blue-900 to-blue-500 "
          href="#Projects"
        >
          Explore My Work
        </a>
      </section>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Portfolio</title>;
