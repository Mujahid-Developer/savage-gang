import React, { useState } from "react";
import Eth_logo from "../../assets/eth_logo.svg";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text text-sm">
      {isReadMore ? text.slice(0, 30) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const NftCard = ({ user }) => {
  const { img, price, nft_name, details, url } = user;
  return (
    <>
      <div className="card bg-gradient-to-r from-violet-800 to-violet-900 text-white shadow-xl m-1 p-2 flex flex-col justify-between">
        <figure className="">
          <img className="w-full p-1" src={img} alt="Album" />
        </figure>
        <div className="p-1">
          <div className="flex justify-between">
            <h1 className="font-thin">Latest</h1>
            <img className="w-3.5" src={Eth_logo} alt="" />
          </div>
          <div className="flex justify-between items-center py-2">
            <h1 className="w-3/4 font-semibold md:text-lg text-sm">
              {nft_name}
            </h1>
            <h1 className="font-medium md:text-normal text-sm">{price} ETH</h1>
          </div>
          <ReadMore>{details}</ReadMore>
        </div>
        <a href={url}>
          <button className="btn w-full bg-gradient-to-r from-violet-600 to-violet-500 border-none text-white">
            Get Now
          </button>
        </a>
      </div>
    </>
  );
};

export default NftCard;
