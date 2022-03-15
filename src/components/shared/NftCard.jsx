import React from "react";
import Eth_logo from "../../assets/eth_logo.svg";

const NftCard = ({ user }) => {
  const { img, price, nft_name } = user;
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
        </div>
        <button className="btn w-full bg-gradient-to-r from-violet-600 to-violet-500 border-none text-white">
          Get Now
        </button>
      </div>
    </>
  );
};

export default NftCard;
