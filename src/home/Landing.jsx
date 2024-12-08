import React from "react";
import image from "../assests/img/landing.png";
import { FaArrowRight } from "react-icons/fa";
const Landing = () => {
  return (
    <div className="h-dvh md:h-screen pt-24 md:pt-14    self-center   grid grid-cols-1 md:grid-cols-2 ">
      <div className="info justify-self-center  self-center ">
        <h1 className="title text-5xl md:text-8xl" data-aos="fade-right">
          Hi, I am{" "}
        </h1>
        <h1 className="title  text-5xl md:text-8xl" data-aos="fade-right">
          {" "}
          Aadil Shrestha
        </h1>
        <p className="text-l" data-aos="fade-down">
          A Nepal based front-end developer passionate about building
          accessible and user friendly websites.
        </p>
        <div className="mt-8 links">
          <button
            data-aos="zoom-in"
            data-aos-anchor-placement="top-bottom"
            className={` bg-orange text-black flex gap-5 items-center p-2 md:p-3 rounded-2xl after:content-[''] hover:text-white hover:bg-grey after:bg-black after:w-2 after:h-2 after:block after:rounded-full hover:after:bg-white`}
          >
            Contact Me
          </button>
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
