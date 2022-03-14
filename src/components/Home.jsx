import React from "react";
import TopCollections from "./TopCollections";
// import TopTokens from "./TopTokens";
import Header from "./Header";
import Faq from "./Faq";
const Home = () => {
  return (
    <>
      <Header />
      {/* <TopTokens /> */}
      <TopCollections />
      <Faq />
    </>
  );
};

export default Home;
