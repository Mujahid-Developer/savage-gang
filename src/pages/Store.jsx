import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopCollections from "../components/TopCollections";

const Store = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <TopCollections />
      </div>
      <Footer />
    </>
  );
};

export default Store;
