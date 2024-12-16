import React, { useState } from "react";

function Skills() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const skills = [
    {
      title: "Minusta",
      description:
        "Olen 17-vuotias peli puolen tieto-ja viestintätekniikan opiskelija. Pidän videopeleistä ja kirjonen lukemisesta. ",
    },
    { title: "ok", description: "Here is some information about ok." },
    { title: "Sigma", description: "Here is some information about Sigma." },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-16 bg-gradient-to-t from-slate-800 to-slate-900">
      <h2 className="mb-8 text-2xl font-bold text-white sm:text-3xl">Infoa</h2>

      <div className="w-full max-w-4xl mx-auto space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800 rounded-full shadow-md">
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full px-6 py-4 text-lg font-semibold text-left text-white transition duration-300 ease-in-out rounded-lg bg-gradient-to-t from-slate-800 to-gray-700 hover:bg-gray-700"
            >
              {skill.title}
            </button>

            {openDropdown === index && (
              <div className="p-4 rounded-b-lg bg-slate-700">
                <p className="text-white">{skill.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
