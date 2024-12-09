import * as React from "react";

const IndexPage = () => {
  return (
    <main className="w-screen h-screen text-white bg-black">
      <div className="w-screen px-8 text-white bg-white h-14">
        <div className="flex items-center justify-between float-right h-full text-black w-72">
          <p className="font-semibold select-none hover:text-gray-600">Home</p>
          <p className="font-semibold select-none hover:text-gray-600">
            Contact
          </p>
          <p className="font-semibold select-none hover:text-gray-600">
            Projects
          </p>
          <p className="ml-16 font-semibold select-none hover:text-gray-600">
            EN
          </p>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
