import Navbar from "./Components/Navbar";

function App() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-lightgray">
      <Navbar />

      <div id="main-image" className="p-20">
        <div className="text-center text-3xl font-bold p-3">
          <span className="text-orange">Sound</span>{" "}
          <span className="text-blue-100"> Vault</span>
        </div>
        <div className="text-center text-5xl font-bold mb-4">
          Harmonize your passion, sell your tune
        </div>
        <div className="text-center text-2xl w-1/2 mx-auto font-normal mb-8">
          Explore, Connect, and Sell Musical Instruments with confidence in our
          vibrant community!
        </div>
        <div id="email-signup" className="text-center mb-8">
          <form>
            <input
              type="text"
              className="pl-4 pr-4 pt-2 w-96 pb-2 text-lg bg-white rounded font-normal"
              placeholder="Enter email"
            />
            <button className="bg-blue-100 rounded ml-4 pl-4 pr-4 pt-2 pb-2 text-white hover:bg-blue-200 transition hover:scale-110">
              Get Notified!
            </button>
          </form>
        </div>
      </div>

      <div id="1st-image" className="flex justify-center text-center mb-8">
        <div className="relative">
          <img
            alt="soundvault-video"
            src="https://fakeimg.pl/1261x737?text=SoundVault-Video"
            className="transition-transform transform hover:scale-105 rounded-lg"
          />
        </div>
      </div>

      <div id="2nd-image" className="flex justify-center p-24 gap-64 mb-8">
        <div
          id="description"
          className="w-96 flex flex-col justify-center items-center"
        >
          <div className="text-3xl font-bold mb-5">Buy Quality Instruments</div>
          <div className="text-lg font-normal text-center">
            Value proposition :: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum
          </div>
        </div>

        <div id="image">
          <img
            alt="soundvault-1"
            src="https://fakeimg.pl/500x340?text=SoundVault-Video"
            className="transition-transform transform hover:scale-105"
            style={{
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      </div>

      <div id="3rd-image" className="flex justify-center p-24 gap-64 mb-8">
        <div id="image">
          <img
            alt="soundvault-1"
            src="https://fakeimg.pl/500x340?text=SoundVault-Video"
            className="transition-transform transform hover:scale-105"
            style={{
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
        <div
          id="description"
          className="w-96 flex flex-col justify-center items-center"
        >
          <div className="text-3xl font-bold mb-5">Sell Your Instruments</div>
          <div className="text-lg font-normal text-center">
            Value proposition :: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum
          </div>
        </div>
      </div>

      <div
        id="4th-image"
        className="flex flex-col justify-center pr-24 pl-24 pb-24 pt-12 items-center gap-10 mb-8"
      >
        <div
          id="description"
          className="w-96 flex flex-col justify-center items-center"
        >
          <div className="text-3xl font-bold mb-5">Community</div>
          <div className="text-lg font-normal text-center">
            Value proposition :: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum
          </div>
        </div>

        <div id="image">
          <img
            alt="soundvault-1"
            src="https://fakeimg.pl/500x340?text=SoundVault-Video"
            className="transition-transform transform hover:scale-105"
            style={{
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      </div>

      <div
        id="call-to-action"
        className="pb-28 flex flex-col items-center justify-center gap-10 mb-8"
      >
        <div className="text-5xl font-bold text-center">
          Be the first to be notified!
        </div>
        <button
          onClick={handleScrollTop}
          className="pr-12 pl-12 pt-2 pb-2 flex items-center justify-center text-lg bg-orange rounded-3xl"
        >
          Get Notified!
        </button>
      </div>

      <div id="footer" className="text-center pb-5">
        <div id="line" className="border-gray-300 border-t-2 mb-5"></div>
        <p className="text-sm">© 2024 Sound Vault</p>
      </div>
    </div>
  );
}

export default App;
