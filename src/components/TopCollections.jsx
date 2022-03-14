import { useContext } from "react";
import UserContext from "../context/UserContext";
import NftCard from "./shared/NftCard";

const TopCollections = () => {
  const { users } = useContext(UserContext);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <h1
          className=" text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 text-center"
          style={{ fontFamily: "Aldrich" }}
        >
          Top Collections
        </h1>
        <div className="flex justify-center items-center my-8 gap-5 w-full ">
          <button className="text-white btn btn-outline md:btn-md btn-sm rounded-full md:px-10 border-violet-700 hover:bg-gradient-to-r from-violet-500 to-violet-400 hover:border-violet-700 hover:text-white">
            7 days
          </button>
          <button className="text-white btn btn-outline md:btn-md btn-sm rounded-full md:px-10 border-violet-700 hover:bg-gradient-to-r from-violet-500 to-violet-400 hover:border-violet-700 hover:text-white">
            7 days
          </button>
          <button className="text-white btn btn-outline md:btn-md btn-sm rounded-full md:px-10 border-violet-700 bg-gradient-to-r from-violet-500 to-violet-400 hover:border-violet-700 hover:text-white">
            7 days
          </button>
          <button className="text-white btn btn-outline md:btn-md btn-sm rounded-full md:px-10 border-violet-700 hover:bg-gradient-to-r from-violet-500 to-violet-400 hover:border-violet-700 hover:text-white">
            7 days
          </button>
        </div>
        <div className="grid grid-flow-row md:grid-cols-4 grid-cols-2 gap-4">
          {users.map((user) => (
            <NftCard user={user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TopCollections;
