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
      description: "Ethereum Blockchain (ERC721)",
    },
    {
      title: "What's the mint price?",
      description: "Savage decided it to be 0.0666 ETH.",
    },
    {
      title: "When minting?",
      description: "Presale: 20th March. Public sale: 25th March.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <h1
        className=" text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-violet-500 to-violet-700 text-center mb-8"
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
