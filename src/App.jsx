import cartImg from './assets/img/cart.webp';

function App() {
  return (
    <div id="wrap">
      <div className="grid min-h-screen grid-rows-layout bg-purple bg-gradient-to-br from-[#000] via-[#45248d] via-60% to-[#200871]">
        <header className="top-0 row-start-1 row-end-2 min-h-[80px] w-full bg-black">
          <nav
            id="nav"
            className="fixed top-0 z-50 flex min-h-[80px] w-full items-center bg-black px-4"
          >
            <div className="flex items-center">
              <div className="mr-4">
                <a className="block">
                  <img src="./src/assets/img/logo-m.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="ml-auto">
              <div className="flex items-center">
                <div className="mx-2 flex self-center">
                  <form>
                    <div className="relative flex text-white">
                      <label for="search"></label>
                      <input className="hidden"></input>
                      <button>
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="mx-2 flex items-center">
                  <img className="w-6 h-7" src={cartImg} alt="cart"></img>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default App;
