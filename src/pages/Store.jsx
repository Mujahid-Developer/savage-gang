import UserContext from "../context/UserContext";
import { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NftCard from "../components/shared/NftCard";

const Store = () => {
  const { users } = useContext(UserContext);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="my-8">
          <h1
            className=" my-10 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 text-center"
            style={{ fontFamily: "Aldrich" }}
          >
            Welcome to store
          </h1>
          <div className="grid grid-flow-row md:grid-cols-4 grid-cols-2 gap-4 ">
            {users.map((user) => (
              <NftCard user={user} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Store;
