import React, { useState } from "react";
import { FaBars, FaCross } from "react-icons/fa";

const Navbar = () => {
  const links = ["Work", "About", "Contacts"];
  const [isOpen, setIsOpen] = useState(false);
  function navOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div
      data-aos-once="true"
      data-aos="fade-down"
      className=" px-6 py-6 sm:px-16 sm:py-4 flex justify-between items-center"
    >
      <div className="logo">
        <h1 className=" font-regular text-2xl sm:text-3xl">Aadil Shrestha</h1>
      </div>
      <div className=" hidden sm:flex  gap-5  ">
        {links.map((link) => {
          return (
            <a className="nav-links " href="">
              {link}
            </a>
          );
        })}
      </div>
      <div className="sm:hidden flex   ">
        <button onClick={navOpen}>{!isOpen && <FaBars />}</button>
        {isOpen && (
          <div className="px-6 py-10 absolute h-screen flex flex-col gap-20  w-full top-0 left-0 bg-red-500 bg-opacity-85">
            <button className=" self-end justify-start" onClick={navOpen}>
              <FaCross />
            </button>
            <div className=" flex self-center items-center flex-col gap-5 flex-1  ">
              {links.map((link) => {
                return (
                  <a className="nav-links " href="">
                    {link}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
