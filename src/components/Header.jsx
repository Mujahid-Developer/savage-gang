import HeaderCover from "../assets/cover.png";
import AirdropDP from "../assets/airdrop.png";

const Header = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="relative">
          <div>
            <div className="bg-gradient-to-r from-violet-900/80 via-violet-900/80 to-violet-900/80 backdrop-blur-xs absolute md:px-0 px-3 w-1/2 h-full flex flex-col justify-center items-center text-white">
              <div>
                <h1 className="text-thin mb:text-lg text-sm mb-2">
                  New collection droped
                </h1>
                <h1 className="font-bold md:text-3xl  z-10">
                  Savage Polapains
                </h1>
                <div className="flex gap-4 items-center my-3 md:mb-12 md:mt-5">
                  <img className="w-10" src={AirdropDP} alt="" />
                  <h1 className="text-sm">Mujahid Islam</h1>
                </div>
                <div className="flex gap-2 md:gap-4 items-center">
                  <div>
                    <h1 className="text-xs">Time left of 10% Discount</h1>
                    <h1
                      className="md:text-2xl"
                      style={{ fontFamily: "Aldrich" }}
                    >
                      20h 8m 52s
                    </h1>
                  </div>
                  <button className="md:btn py-2 px-3 rounded-lg md:px-6 bg-gradient-to-r from-violet-500 to-violet-400 border-0 md:text-white text-xs">
                    View Drops
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
