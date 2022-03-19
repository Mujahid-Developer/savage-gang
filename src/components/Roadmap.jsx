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
      lg:px-8
      my-16
      min-h-96"
      >
        <h1
          className=" text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 text-center my-8"
          style={{ fontFamily: "Aldrich" }}
        >
          Our Roadmap
        </h1>
        <div className="flex justify-center mb-8">
          <div className="steps steps-vertical  lg:steps-horizontal">
            {roadmap.map((phase) => (
              <div className="step step-primary   md:text-center">
                <div className="card bg-violet-800 text-white p-3 m-2">
                  <h1 className="font-bold text-xl">{phase.title}</h1>
                  <p className="font-normal text-left md:text-center">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
