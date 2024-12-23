import React from "react";

function Card({ title, description, link }) {
  return (
    <section className="mt-56">
      <a href={link} className="block">
        <div className="p-6 transition duration-300 bg-gray-800 rounded-lg shadow-lg hover:bg-blue-700">
          <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
          <p className="mb-4 text-gray-400">{description}</p>
          <p className="inline-block text-lg text-blue-500">Katso projekti</p>
        </div>
      </a>
    </section>
  );
}

export default Card;
