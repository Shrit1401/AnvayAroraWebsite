"use client";

import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [ham, setham] = useState(true);

  let buttonClicked = () => {
    setham(!ham);
    console.log(ham);
  };

  let navClicked = () => {
    setham(true);
  };

  return (
    <>
      <header
        className={
          ham
            ? `flex sm:hidden fixed rounded-[150px] items-center w-[90%] justify-around bg-opacity-20 backdrop-blur-3xl py-[13px] px-[13px] pt-[18px] pb-[18px] transition-all duration-300 ease-in-out  z-[98] mt-3 ml-4 mr-4 bg-white text-white`
            : `flex sm:hidden z-[99] fixed rounded-none items-center w-[100%]  transition-all duration-300 ease-in-out justify-around py-[13px] px-[13px] pt-[18px] pb-[18px] bg-[#351a4a]`
        }
      >
        <button onClick={buttonClicked}>
          <span className={ham ? `bg-white line` : `bg-white line cross-1`} />
          <span className={ham ? `bg-white line` : `bg-white line cross-2`} />
        </button>

        <div className="logo">
          <h1
            className={`beatrice text-2xl ${ham ? "text-white" : "text-white"}`}
          >
            Anvay
          </h1>
        </div>
      </header>
      <nav className="fixed  capitalize hidden sm:block pt-10 mb-10  right-[50%] translate-x-[50%] pointer-events-auto z-[98]	">
        <ul className="relative desktop-nav bg-opacity-60 backdrop-blur-3xl text-white  flex justify-between items-center  p-0 rounded-[90px]  bg-white">
          <li>
            <a href="#home" className="navBtn hover:rounded-r-none">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="navBtn hover:rounded-none">
              {" "}
              About
            </a>
          </li>
          <li className="text-2xl text-black border-x-2 pl-2 pr-2  border-black ">
            Anvay Arora
          </li>
          <li>
            <a href="#projects" className="navBtn hover:rounded-none">
              {" "}
              Projects
            </a>
          </li>
          <li>
            <a href="#timeline" className="navBtn hover:rounded-l-none">
              {" "}
              Timeline
            </a>
          </li>
        </ul>
      </nav>

      <div
        className={`fixed r-0 sm:hidden w-full h-full flex flex-col items-center justify-end z-[98] transition-all duration-300 ease-out ${
          ham
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        <nav className="relative w-full h-full flex flex-col items-stretch justify-between after:p-[64px] after:bg-[#351a4a]  after:w-full after:h-full after:absolute after:left-0 after:top-0 after:scale-y-[1] after:z-[-1] after:origin-bottom">
          <ul className="mt-[100px] mb-[28px] ml-[12px] mr-[12px]">
            <li>
              <a className="navLink" onClick={navClicked} href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="navLink" onClick={navClicked} href="#about">
                About
              </a>
            </li>
            <li>
              <a className="navLink" onClick={navClicked} href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="navLink" onClick={navClicked} href="#timeline">
                Timeline
              </a>
            </li>
          </ul>
          <ul className="flex items-stretch border border-t-white border-opacity-40">
            <li className="flex-grow">
              <a href="#" className="nav-social-link beatrice">
                Facebook
              </a>
            </li>
            <li className="flex-grow">
              <a href="#" className="nav-social-link beatrice">
                Twitter
              </a>
            </li>
            <li className="flex-grow">
              <a href="#" className="nav-social-link beatrice">
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
