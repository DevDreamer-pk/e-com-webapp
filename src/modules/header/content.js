import React, { useState, useEffect  } from "react";

import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
  UserIcon,
  ShoppingCartIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

const Content = ({showCartIcon}) => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [cartIconVisible, setCartIconVisible] = useState(showCartIcon);
  let Links = [
    { name: "Home", link: "/" },
    { name: "Contact", link: "/" },
    { name: "About", link: "/" },
    { name: "Sign Up", link: "/signup" },
    { name: "Users", link: "/users" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    setCartIconVisible(showCartIcon);
  }, [showCartIcon]);

  return (
    <header className="fixed top-0 z-40  h-20 p-8 px-20 w-full flex justify-between items-center space-x-10 shadow-md bg-white">
      {/* Menu icon */}
      <div onClick={toggleMenu} className="md:hidden">
        {menuOpen ? (
          <XMarkIcon className=" w-8 h-8 cursor-pointer" />
        ) : (
          <Bars3BottomRightIcon className="w-8 h-8 cursor-pointer" />
        )}
      </div>

      <h1 className="font-bold text-2xl">GoShoppy</h1>

      {/* Link items */}
      <ul
        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-1 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          menuOpen ? "top-20" : "top-[-290px]"
        }`}
      >
        {Links.map((link, index) => (
          <li key={index} className="md:ml-8 md:my-0 my-7">
            <a
              href={link.link}
              className="text-gray-800 hover:text-blue-400 duration-500"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      {/* Search input */}

      <div class='max-w-md mx-auto flex justify-center items-center md:w-full'>
    <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-gray-700 overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-4 pl-4 border border-solid-gray-700"
        type="text"
        id="search"
        placeholder="   Search something.." /> 
    </div>
    
    <div>
        {/* Render cart icon only if selectedNavItem is "Home" */}
        {cartIconVisible && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex space-x-4 relative ">
              <div>
                <ShoppingCartIcon className="w-8 h-8 cursor-pointer" />
              </div>
              <div>
                <HeartIcon className="w-8 h-8 cursor-pointer" />
              </div>
            </div>
          </div>
        )}
        </div>
</div>

    </header>
  );
};

export default Content;
