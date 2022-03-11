import HeaderCover from "../assets/cover.png";
import AirdropDP from "../assets/airdrop.png";

const Header = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center my-10">
          <h1
            className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 font-bold"
            style={{ fontFamily: "Aldrich" }}
          >
            Discover, collect and
            <br />
            sell extraordinary <br /> NFTs
          </h1>
          <h1 className="text-white">
            on Bangladesh’s first & <br />
            biggest NFT platfrom
          </h1>
        </div>
        <div className="relative">
          <div>
            <div className="bg-gradient-to-r from-violet-900/80 via-violet-900/80 to-violet-900/80 backdrop-blur-xs absolute w-1/2 h-full flex flex-col justify-center items-center text-white">
              <div>
                <h1 className="text-normal mb-2">New collection droped</h1>
                <h1 className="font-bold text-3xl  z-10">Savage Polapains</h1>
                <div className="flex gap-4 items-center mb-12 mt-5">
                  <img src={AirdropDP} alt="" />
                  <h1>Mujahid Islam</h1>
                </div>
                <div className="flex gap-4">
                  <div>
                    <h1>Time left of 10% Discount</h1>
                    <h1 className="text-2xl" style={{ fontFamily: "Aldrich" }}>
                      20h 8m 52s
                    </h1>
                  </div>
                  <button className="btn px-6 bg-gradient-to-r from-violet-500 to-violet-400 border-0 text-white">
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
