import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { GiSailboat } from "react-icons/gi";
import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-violet-800 to-violet-900 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex md:flex-row flex-col md:justify-between items-center text-white gap-4 p-4">
            <div className="md:w-1/2">
              <img src={Logo} alt="" />
              <p className="text-sm font-thin">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                unde consequatur laudantium ipsa architecto ipsam! Enim
                consectetur quasi non delectus dolorum quod atque quo blanditiis
                facere. Sit tempora sequi dicta?
              </p>
            </div>
            <div>
              <ul className="flex gap-4 md:flex-col md:gap-0">
                <li>Store</li>
                <li>About</li>
                <li>Collection</li>
                <li>Roadmap</li>
              </ul>
            </div>
            <div className="flex flex-col md:items-end gap-3">
              <button className="btn bg-gradient-to-r from-violet-600 to-violet-500 border-none text-white">
                View Drops
              </button>
              <button className="btn bg-gradient-to-r from-violet-600 to-violet-500 border-none text-white">
                Contact Us
              </button>
              <div className="flex justify-between gap-3 ">
                <FaFacebookF className="btn btn-circle bg-gradient-to-r from-violet-600 to-violet-500 border-none text-white p-3" />
                <FaInstagram className="btn btn-circle bg-gradient-to-r from-violet-600 to-violet-500 border-none text-white p-3" />
                <FaTwitter className="btn btn-circle bg-gradient-to-r from-violet-600 to-violet-500 border-none text-white p-3" />
                <GiSailboat className="btn btn-circle bg-gradient-to-r from-violet-600 to-violet-500 border-none text-white p-3" />
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-thin text-xs text-white pb-2">
            <h1>
              {new Date().getFullYear()} Savage Gang! NFT. All Right Researved
            </h1>
            <h1>Let’s make a new future</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
