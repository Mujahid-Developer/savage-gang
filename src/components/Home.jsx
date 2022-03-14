import React from "react";
import TopCollections from "./TopCollections";
import TopTokens from "./TopTokens";
import Header from "./Header";
const Home = () => {
  return (
    <>
      <Header />
      <TopTokens />
      <TopCollections />
    </>
  );
};

export default Home;
