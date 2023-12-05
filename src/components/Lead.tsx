import React from "react";

const Lead = () => {
  // sm md lg xl 2xl 

  return (
    <div className="w-fit m-auto mt-32 md:w-32 lg:w-48 text-center text-white">
      <span className="text-2xl capitalize font-serif italic">
        welcome to my
      </span>
      <h2 className="text-6xl  text-bold font-sans font-extrabold mt-4">
        Books Library
      </h2>
      <div className="search mt-20">
        <input type="text" className="w-[40vw] p-2 px-3 rounded rounded-3xl bg-transparent border" />
      </div>
    </div>
  );
};

export default Lead;
