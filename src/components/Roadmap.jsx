import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Roadmap = () => {
  const { roadmap } = useContext(UserContext);

  return (
    <>
      <div
        className="
      max-w-7xl
      mx-auto
      px-4
      sm:px-6
      lg:px-8"
      >
        <h1
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-violet-500 to-violet-700 text-center mt-16"
          style={{ fontFamily: "Aldrich" }}
        >
          Our Roadmap
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 mb-32 mt-16">
          {roadmap.map(({ title, description, id }) => (
            <>
              <div className=" relative group md:w-1/2 w-full">
                <div class="absolute -inset-1.5 bg-gradient-to-r from-violet-600 to-violet-500 card blur-sm opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="card p-5 bg-violet-900 text-center relative text-white min-h-52">
                  <div className="flex flex-col justify-center items-center w-full gap-5">
                    <div className=" btn btn-disabled border-none bg-white btn-circle">
                      <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700">
                        {id}
                      </h1>
                    </div>
                    <div>
                      <h1 className="font-bold text-xl mb-5">{title}</h1>
                      <h1
                        className="font-thin text-sm md:text-md text-justify"
                        dangerouslySetInnerHTML={{ __html: description }}
                      ></h1>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Roadmap;
