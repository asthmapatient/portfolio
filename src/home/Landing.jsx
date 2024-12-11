import React from "react";
import image from "../assests/img/landing.png";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";
const Landing = () => {
  return (
    <div className="h-dvh md:h-screen pt-24  md:pt-10    self-center   grid grid-cols-1 md:grid-cols-2 ">
      <div className="info justify-self-center  self-center ">
        <h1 className="title text-5xl md:text-8xl" data-aos="fade-right">
          Hi, I am{" "}
        </h1>
        <h1 className="title  text-5xl md:text-8xl" data-aos="fade-right">
          {" "}
          Aadil Shrestha
        </h1>
        <p className="text-l" data-aos="fade-down">
          A Nepal based Web developer passionate about building accessible and
          user friendly websites.
        </p>
        <div className="mt-8 links">
          <motion.button
            whileHover={{ scale: 1.3 }}
            data-aos="zoom-in"
            data-aos-anchor-placement="top-bottom"
            className={` bg-orange text-black flex gap-6 items-center p-2 md:p-3 md:px-7 rounded-2xl  hover:text-white hover:bg-grey `}
          >
            Contact Me{" "}
            <motion.span className="h-2 w-2 bg-black rounded-full"></motion.span>
          </motion.button>
        </div>
      </div>
      <div className="mt-4 md:m-0 pfp grid">
        <img
          src={image}
          data-aos="flip-right"
          className="justify-self-center self-start  md:self-center  w-3/4"
          alt=""
        />
      </div>
    </div>
  );
};

export default Landing;
