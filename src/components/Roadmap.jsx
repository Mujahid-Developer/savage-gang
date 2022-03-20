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
      min-h-screen"
      >
        <h1
          className=" text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 text-center my-8"
          style={{ fontFamily: "Aldrich" }}
        >
          Our Roadmap
        </h1>
        {roadmap.map(({ title, description, id }) => (
          <div className="card p-5 bg-gradient-to-l from-violet-700 via-violet-600 to-violet-700 text-white w-full min-h-52 mb-3">
            <div className="flex justify-start w-full gap-5">
              <div className=" btn btn-disabled border-none bg-white btn-circle">
                <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700">
                  {id}
                </h1>
              </div>
              <div>
                <h1 className="font-bold text-2xl mb-5">{title}</h1>
                <h1
                  className="font-thin"
                  dangerouslySetInnerHTML={{ __html: description }}
                ></h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Roadmap;
