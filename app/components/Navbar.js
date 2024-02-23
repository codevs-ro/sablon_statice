"use client";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="fixed w-full text-slate-800 top-0 bg-slate-300  navbar flex items-center justify-between  bg-base-100 px-8 py-4 md:py-4 md:px-12 lg:px-16 xl:px-24 2xl:px-28">
        <div
          className="md:hidden flex-none mr-6"
          onClick={() => setMenu(!menu)}
        >
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setMenu(!menu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">My Company</a>
        </div>
        <div className="flex-none bg-green-100 rounded-md px-4 py-2">
          <button className="btn btn-square btn-ghost">Contact Us</button>
        </div>
      </div>
      {menu && (
        <div className="h-screen w-full flex">
          <div className="w-1/2 bg-slate-300"></div>
          <div className="w-1/2 bg-slate-900/10"></div>
        </div>
      )}
    </>
  );
};

export default Navbar;
