import React from "react";

function Card({ title, description, link }) {
  return (
    <section className="mt-56">
      <div className="p-6 transition duration-300 bg-gray-800 rounded-lg shadow-lg hover:bg-blue-700">
        <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
        <p className="mb-4 text-gray-400">{description}</p>
        <a
          href={link}
          className="inline-block text-lg text-blue-400 hover:text-blue-200"
        >
          Katso projekti
        </a>
      </div>
    </section>
  );
}

export default Card;
