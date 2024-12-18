import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Card from "../../components/card";

function Projects() {
  return (
    <main className="w-full min-h-screen font-sans text-white bg-gradient-to-t from-slate-950 via-slate-800 to-slate-950">
      <Header active="/projects" />

      <section className="py-16">
        <div className="container px-8 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Projects
          </h2>
          <p className="max-w-xl mx-auto mb-12 text-lg text-gray-300 sm:text-xl md:text-2xl">
            My Projects
          </p>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            <Card
              title="Project 1"
              description="Description for Project 1"
              link="#"
              image=""
            />
            <Card
              title="Project 2"
              description="Description for Project 2"
              link="#"
              image=""
            />
            <Card
              title="Project 3"
              description="Description for Project 3"
              link="#"
              image=""
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Projects;
