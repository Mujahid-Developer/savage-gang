import { Dialog, Transition } from "@headlessui/react";
import React, { useState, Fragment } from "react";
import Eth_logo from "../../assets/eth_logo.svg";

// const ReadMore = ({ children }) => {
//   const text = children;
//   const [isReadMore, setIsReadMore] = useState(true);
//   const toggleReadMore = () => {
//     setIsReadMore(!isReadMore);
//   };
//   return (
//     <p className="text text-sm">
//       {isReadMore ? text.slice(0, 300) : text}
//       <span onClick={toggleReadMore} className="read-or-hide">
//         {isReadMore ? "...read more" : " show less"}
//       </span>
//     </p>
//   );
// };

const NftCard = ({ user }) => {
  const { img, price, nft_name, details, url } = user;
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  function openModal() {
    setShowModal(true);
  }

  return (
    <>
      <div className="card  bg-gradient-to-r from-violet-700/80 via-violet-600/80 to-violet-700/80 backdrop-blur-xs text-white shadow-xl m-1 p-2 flex flex-col justify-between cursor-pointer">
        <div>
          <figure>
            <img className="w-full p-1" src={img} alt="Album" />
          </figure>
          <div className="p-1 mt-2">
            <div className="flex justify-between items-center">
              <button
                className="btn btn-xs font-bold bg-white rounded-full text-violet-900 hover:text-white hover:bg-violet-700 border-none px-2"
                onClick={openModal}
              >
                Story
              </button>
              <img className="w-3" src={Eth_logo} alt="" />
            </div>
            <div className="flex justify-between py-2">
              <h1 className="w-3/5 font-semibold text-sm">{nft_name}</h1>
              <h1 className="font-medium md:text-sm text-xs">{price} ETH</h1>
            </div>
          </div>
        </div>
        <a href={url}>
          <button className="btn w-full bg-gradient-to-r from-violet-600 to-violet-500 border-none text-white">
            Get Now
          </button>
        </a>
      </div>

      <>
        <Transition appear show={showModal} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gradient-to-r from-violet-900/80 via-violet-900/80 to-violet-900/80 backdrop-blur-lg shadow-md rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white"
                  >
                    Story
                  </Dialog.Title>
                  <div className="mt-2">
                    <p
                      className="text-sm text-white"
                      dangerouslySetInnerHTML={{ __html: details }}
                    ></p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-violet-900 bg-white border border-transparent rounded-md hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeModal}
                    >
                      thanks!
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </>
    </>
  );
};

export default NftCard;
