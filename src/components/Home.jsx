import React from "react";
import TopCollections from "./TopCollections";
import TopTokens from "./TopTokens";
import Header from "./Header";
import Faq from "./Faq";
import Roadmap from "./Roadmap";
const Home = () => {
  return (
    <>
      <Header />
      <TopTokens />
      <Roadmap />
      <TopCollections />
      <Faq />
    </>
  );
};

export default Home;
