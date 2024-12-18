import * as React from "react";
import Header from "../components/header";
import Dropdown from "../components/dropdown";
import Landing from "../components/landing";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <main className="w-full min-h-screen font-sans text-white bg-slate-800">
      <Header active="http://localhost:8000/" />
      <Landing />
      <Dropdown />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Portfolio | Skalie</title>;
