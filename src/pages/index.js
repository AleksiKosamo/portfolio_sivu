import * as React from "react";
import Header from "../components/header";
import SkillsSection from "../components/skills";
import Landing from "../components/landing";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <main className="w-full min-h-screen font-sans text-white bg-gradient-to-t from-slate-950 via-slate-800 to-slate-950">
      <Header />
      <Landing />
      <SkillsSection />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Portfolio | Skalie</title>;
