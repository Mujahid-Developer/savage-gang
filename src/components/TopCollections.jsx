import { useContext } from "react";
import UserContext from "../context/UserContext";
import NftCard from "./shared/NftCard";
import { Tab } from "@headlessui/react";

const TopCollections = () => {
  const { users } = useContext(UserContext);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 min-h-screen">
        <h1
          className=" text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 text-center"
          style={{ fontFamily: "Aldrich" }}
        >
          Top Collections
        </h1>
        <Tab.Group>
          <div className="flex justify-center items-center my-8 w-full ">
            <Tab.List className={"flex gap-5"}>
              <Tab>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "text-white btn btn-outline md:btn-md btn-md rounded-full md:px-10 border-violet-700 bg-gradient-to-r from-violet-500 to-violet-400"
                        : "text-white btn btn-outline md:btn-md btn-md rounded-full md:px-10 border-violet-700 hover:bg-gradient-to-r from-violet-500 to-violet-400 hover:border-violet-700 hover:text-white"
                    }
                  >
                    7 days
                  </button>
                )}
              </Tab>
              <Tab>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "text-white btn btn-outline md:btn-md btn-md rounded-full md:px-10 border-violet-700 bg-gradient-to-r from-violet-500 to-violet-400"
                        : "text-white btn btn-outline md:btn-md btn-md rounded-full md:px-10 border-violet-700 hover:bg-gradient-to-r from-violet-500 to-violet-400 hover:border-violet-700 hover:text-white"
                    }
                  >
                    15 days
                  </button>
                )}
              </Tab>
              <Tab>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "text-white btn btn-outline md:btn-md btn-md rounded-full md:px-10 border-violet-700 bg-gradient-to-r from-violet-500 to-violet-400"
                        : "text-white btn btn-outline md:btn-md btn-md rounded-full md:px-10 border-violet-700 hover:bg-gradient-to-r from-violet-500 to-violet-400 hover:border-violet-700 hover:text-white"
                    }
                  >
                    20 days
                  </button>
                )}
              </Tab>
              <Tab>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "text-white btn btn-outline md:btn-md btn-md rounded-full md:px-10 border-violet-700 bg-gradient-to-r from-violet-500 to-violet-400"
                        : "text-white btn btn-outline md:btn-md btn-md rounded-full md:px-10 border-violet-700 hover:bg-gradient-to-r from-violet-500 to-violet-400 hover:border-violet-700 hover:text-white"
                    }
                  >
                    30 days
                  </button>
                )}
              </Tab>
            </Tab.List>
          </div>
          <Tab.Panels>
            <Tab.Panel className="grid grid-flow-row md:grid-cols-4 grid-cols-2 gap-4">
              {users.slice(0, 8).map((user) => (
                <NftCard user={user} />
              ))}
            </Tab.Panel>
            <Tab.Panel className="grid grid-flow-row md:grid-cols-4 grid-cols-2 gap-4">
              {users.slice(8, 15).map((user) => (
                <NftCard user={user} />
              ))}
            </Tab.Panel>
            <Tab.Panel className="grid grid-flow-row md:grid-cols-4 grid-cols-2 gap-4">
              {users.slice(15, 20).map((user) => (
                <NftCard user={user} />
              ))}
            </Tab.Panel>
            <Tab.Panel className="grid grid-flow-row md:grid-cols-4 grid-cols-2 gap-4">
              {users.slice(20, 26).map((user) => (
                <NftCard user={user} />
              ))}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

export default TopCollections;
