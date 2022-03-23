import React from "react";
import { Disclosure } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";
import Faq_Logo from "../assets/faq-logo.svg";

const Faq = () => {
  const FAQ_TEXT = [
    {
      title: "What is the total supply?",
      description:
        "Only 27 savages. The gang isn't big. But it's the most powerful. We can only make true friendship with less than 150 people, anyway.",
    },
    {
      title: "Which blockchain?",
      description: "Only on OpenSea for now.",
    },
    {
      title: "What's the mint price?",
      description: "Savage decided it to be 0.044 ETH.",
    },
    {
      title: "When minting?",
      description:
        "You can mint anytime, for the next 5 days, starting from today (23 March 2022)",
    },
    {
      title: "Why should I mint?",
      description:
        "Every savage homo has a story. Own the story that resonates with you.",
    },
    {
      title: "How do I mint?",
      description:
        "Click on GET NOW and you'll be taken to OpenSea, where you can easily mint. We recommend you mint when the gas price is lower, so that your money doesn't go waste.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-24">
      <h1
        className=" text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-violet-500 to-violet-700 text-center mb-20"
        style={{ fontFamily: "Aldrich" }}
      >
        Sincerely Asked Questions
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-white">
        <div className="md:w-3/4 w-full">
          {FAQ_TEXT.map((details) => (
            <div className="mb-4">
              <Disclosure>
                <Disclosure.Button className="w-full flex justify-between items-center p-4 bg-violet-900 border-2 rounded-lg border-violet-700 ">
                  <h1>{details.title}</h1>
                  <FaAngleDown />
                </Disclosure.Button>
                <Disclosure.Panel className="text-white bg-gray-900 p-4 rounded-lg">
                  <h1>{details.description}</h1>
                </Disclosure.Panel>
              </Disclosure>
            </div>
          ))}
        </div>
        <div>
          <img
            className="w-48  hidden md:block"
            src={Faq_Logo}
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
