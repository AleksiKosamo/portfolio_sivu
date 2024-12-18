import React from "react";

function Contactform() {
  return (
    <form
      action="mailto:your-email@example.com"
      method="POST"
      enctype="text/plain"
      className="w-full max-w-3xl p-6 mx-auto space-y-6 shadow-2xl sm:p-8 bg-gradient-to-t to-gray-700 from-slate-800 rounded-xl"
    >
      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-lg font-semibold text-white"
          >
            Nimi
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 text-lg text-gray-900 transition duration-200 bg-gray-200 border-2 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Anna nimesi"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-semibold text-white"
          >
            Sähköposti
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 text-lg text-gray-900 transition duration-200 bg-gray-200 border-2 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Sähköpostiosoitteesi"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-lg font-semibold text-white"
          >
            Viesti
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            className="w-full px-4 py-3 text-lg text-gray-900 transition duration-200 bg-gray-200 border-2 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Kirjoita viestisi tänne"
            required
          ></textarea>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="w-full h-12 px-8 py-3 text-lg font-semibold text-white transition duration-300 rounded-lg shadow-lg sm:w-auto bg-gradient-to-t from-blue-900 to-blue-500 hover:from-blue-600 hover:to-blue-400 sm:text-xl"
        >
          Lähetä Viesti
        </button>
      </div>
    </form>
  );
}

export default Contactform;
