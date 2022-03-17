import HeaderCover from "../assets/cover.png";

const Header = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-96">
        <div className="flex justify-between items-center my-10">
          <h1
            className="text-xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 font-bold"
            style={{ fontFamily: "Aldrich" }}
          >
            Discover, collect and
            <br />
            sell extraordinary <br /> NFTs
          </h1>
          <h1 className="text-white text-xs">
            on Bangladesh’s first & <br />
            biggest NFT platfrom
          </h1>
        </div>
        <div className="relative min-h-96">
          <div>
            <div className="bg-gradient-to-r from-violet-900/80 via-violet-900/80 to-violet-900/80 backdrop-blur-xs absolute w-2/4 h-full flex flex-col justify-center items-end text-white rounded-r-xl">
              <div className=" w-full md:px-8 px-3 flex flex-col justify-center gap-1 md:gap-6 h-full">
                <h1 className="text-thin md:text-lg text-xs">
                  New collection droped
                </h1>
                <h1 className="font-bold md:text-3xl text-sm">
                  Savage Homosapiens
                </h1>
                <h1 className="text-xs md:text-lg">
                  Welcome to the home of Savage Gang on OpenSea. Discover the
                  best items in this collection.
                </h1>
                <h1 className="text-xs md:text-lg md:block hidden">
                  Time left of 10% Discount
                </h1>
                <div className="flex gap-1 md:gap-4 justify-between items-center">
                  <h1
                    className="md:text-2xl text-sm"
                    style={{ fontFamily: "Aldrich" }}
                  >
                    20h 8m 52s
                  </h1>
                  <button className="md:btn md:btn-lg btn-sm py-2 px-4 rounded-lg md:px-6 bg-gradient-to-r from-violet-500 to-violet-400 border-none md:text-white text-xs">
                    OpenSea
                  </button>
                </div>
              </div>
            </div>
            <img src={HeaderCover} alt="cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
