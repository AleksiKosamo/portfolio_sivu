import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-t from-slate-950 via-slate-800 to-slate-950">
      <section className="flex flex-col items-center justify-center max-w-4xl px-4 py-16 mx-auto text-center sm:px-8">
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
          Oops! Page Not Found
        </h1>
        <p className="mb-6 text-lg text-gray-300 sm:text-xl">
          Sorry 😔, we couldn’t find the page you were looking for.
          <br />
          It seems like the page might have been moved or deleted.
          <br />
          Please check the URL or go back to the homepage.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 mt-8 text-lg font-semibold text-gray-800 transition-colors duration-300 bg-yellow-500 rounded-lg hover:bg-yellow-400"
        >
          Go back home
        </Link>
      </section>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not Found</title>;
