import { useState } from 'react';
import cartImg from './assets/img/cart.webp';
import SideMenu from './components/SideMenu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function menuClickHandler() {
    setMenuOpen(!menuOpen);
  }

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
                      <label htmlFor="search" />
                      <input className="hidden" />
                      <button type="button">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="mx-2 flex items-center">
                  <img className="h-7 w-6" src={cartImg} alt="cart" />
                </div>
              </div>
            </div>
            <div className="z-50 self-stretch 2xl:order-first">
              <div className="flex h-full">
                <button
                  className="ml-2 p-2"
                  onClick={menuClickHandler}
                  type="button"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="text-white"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
                      fill="currentColor"
                    />
                    <path
                      d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
                      fill="currentColor"
                    />
                    <path
                      d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
          <SideMenu menuOpen={menuOpen} />
        </header>
        <main className="row-start-2 row-end-3 overflow-x-hidden">
          <div id="content">
            <div
              id="storefront"
              className="cols-2 relative grid grid-cols-2 border-b-4 border-gold"
            >
              <button
                className="absolute row-start-1 col-start-1 justify-self-start self-center"
                type="button"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  color="white"
                  height="44"
                  width="44"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
                </svg>
              </button>
              <button className="absolute right-[1px] top-[50%] col-start-2 row-start-1 translate-y-[-50%]" type="button">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  color="white"
                  height="44"
                  width="44"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                </svg>
              </button>
              <p className="h-96 col-start-1 col-end-3 bg-black text-white text-center">video</p>
            </div>
          </div>
        </main>
        <footer row-start-3 row-end-4>
          <div className="font-montserrat flex flex-col items-center justify-center px-4 py-6 text-center text-xs text-white">
            <p className="mb-4">
              © 2023 Robot Cache US, Inc. All rights reserved. Robot Cache is a
              trademark of Robot Cache Inc. All other trademarks cited or
              appearing herein are the property of their respective owners.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:divide-x">
              <a href="#" className="mb-2 text-gold sm:mb-0 sm:px-4">
                Privacy Policy
              </a>
              <a href="#" className="mb-2 text-gold sm:mb-0 sm:px-4">
                Legal
              </a>
              <a href="#" className="mb-2 text-gold sm:mb-0 sm:px-4">
                Subscriber Agreement
              </a>
              <a href="#" className="mb-2 text-gold sm:mb-0 sm:px-4">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
