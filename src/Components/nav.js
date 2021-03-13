import React from "react";
import { Link } from 'react-router-dom';
import { MenuItems } from '../Data/menuItems.js';

const NavBar = () => {


    return(
        <nav
      className="sticky top-0 shadow-lg bg-gradient-to-r from-green-400 to-red-400
       sm:pl-4 sm:pr-5 sm:py-2.5 z-10"
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Lobster&display=swap"
        rel="stylesheet"
      />
      <div className="mx-auto text-white sm:max-w-screen-lg sm:flex sm:justify-between">
        <div className="flex items-center justify-between py-2 pl-4 pr-2 sm:p-0">
          <div className="flex items-center">
            <h1>Saved Reddit Posts</h1>
          </div>
          <div className="sm:hidden">
            <button
              className="block px-4 transition-all duration-500 ease-in-out rounded cursor-pointer focus:outline-none hover:bg-purple-300 "
            >
            </button>
          </div>
        </div>
        <div
          className="transform transition duration-500 ease-in-out px-4 pt-2 pb-4 sm:flex sm:p-0"
        >
          {MenuItems.map((item, index) => {
            return (
              <Link
                key={index}
                style={{ fontFamily: "Fredoka One, cursive" }}
                className={`${
                  index === 0 ? "mt-0" : "mt-2"
                } block font-medium rounded px-2 py-1 transition-all duration-500 ease-in-out hover:bg-purple-300 sm:font-normal sm:mt-0 sm:ml-2 `}
                to={item.url}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
    );
};

export default NavBar;