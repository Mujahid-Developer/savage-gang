import { useContext } from "react";
import UserContext from "../context/UserContext";
import NftCard from "./shared/NftCard";
import { GiSailboat } from "react-icons/gi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Import Swiper styles

const TopTokens = () => {
  const { users } = useContext(UserContext);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <h1
          className=" text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 text-center"
          style={{ fontFamily: "Aldrich" }}
        >
          Top Tokens
        </h1>

        <div className="grid md:grid-cols-2 grid-cols-1 mt-10 gap-4 items-center">
          <div className=" flex flex-col gap-4 md:items-start items-center md:text-left text-center">
            <h1 className="text-4xl font-bold text-white">Savage Polapains</h1>
            <p className="text=3xl text-white">200+ Collections</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              ipsum, ut iusto aspernatur voluptatibus totam eaque nostrum quia
              dolore quidem hic ducimus molestiae? Pariatur, sint!
            </p>
            <button className="btn w-80 bg-gradient-to-r from-violet-500 to-violet-400 border-0 text-white">
              <GiSailboat className="border-none text-white text-3xl mr-2" />
              Open OpenSea
            </button>
          </div>
          <div className="">
            <Carousel responsive={responsive}>
              {users.slice(0, 10).map((user) => (
                <NftCard user={user} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopTokens;
