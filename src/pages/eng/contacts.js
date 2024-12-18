import React from "react";
import Header from "../../components/header";
import Contactform from "../../components/contactform";
import Footer from "../../components/footer";

function Contact() {
  return (
    <main className="flex flex-col w-full min-h-screen font-sans text-white bg-gradient-to-t from-slate-950 via-slate-800 to-slate-950">
      <Header />

      <section className="flex flex-col items-center justify-center flex-grow px-4 pt-16 text-center sm:px-8">
        <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Contact Us
        </h1>
        <p className="max-w-xl mb-8 text-lg text-gray-300 sm:text-xl md:text-2xl">
          If you have any questions or would like to discuss my projects, feel
          free to get in touch!
        </p>
        <Contactform />
        <p className="mt-8 text-lg text-gray-300">
          Or you can reach me directly via email:{" "}
          <a
            href="mailto:your-email@example.com"
            className="text-blue-400 hover:text-blue-300"
          >
            s3koal03@students.osao.fi
          </a>
        </p>
      </section>

      <Footer />
    </main>
  );
}

export default Contact;
